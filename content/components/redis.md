---
title: "Redis"
domain: "Middleware"
summary: "内存数据结构数据库，常用作缓存、计数器、锁和轻量消息能力。"
essence: "Redis 本质是把高频数据放到内存，并用多种数据结构和过期策略管理访问压力。"
scenarios: "适合热点缓存、排行榜、分布式锁、会话、限流和轻量队列。"
sourceFocus: "server.c、dict.c、t_string.c、expire.c、evict.c、networking.c。"
colors: "#de6449,#f1dfb8,#7f4d64"
---

## 本质

Redis 的本质不是“更快的数据库”，而是一个以内存、事件循环和紧凑数据结构为核心的高频访问层。它把数据库无法承受或没必要承受的读写压力前移到内存，并用过期、淘汰、复制和持久化控制风险。

一句话理解：Redis 牺牲一部分存储容量和复杂查询能力，换取极低延迟、高 QPS 和丰富的原子数据结构。

## 底层架构

Redis 的核心链路分成五层：

1. 网络层：I/O 多路复用接收连接和命令
2. 命令层：解析 RESP 协议，查找命令表并执行
3. 数据层：dict、sds、skiplist、quicklist、listpack 等结构保存对象
4. 生命周期层：过期删除、内存淘汰、慢日志、监控
5. 可靠性层：RDB、AOF、复制、哨兵或 Cluster

### 架构图

```text
client
  |
RESP protocol
  |
event loop + command table
  |
dict -> redis object -> encoding
  |
expire / eviction / persistence
  |
replication / sentinel / cluster
```

要抓住这个图的关键：Redis 的快来自“内存访问 + 少锁模型 + 精心选择的数据结构”，而不是简单因为它单线程。

## 典型场景

适合 Redis 的场景：

- 热点缓存和缓存旁路
- 分布式锁、限流、计数器
- 排行榜、时间窗口统计、会话存储
- 轻量队列、Stream、延迟不高的事件缓冲

需要谨慎的场景：

- 强一致事务事实源
- 大对象和无边界 key 设计
- 没有过期、淘汰和降级策略的核心链路缓存

## 底层原理

Redis 的核心算法和数学直觉：

- 哈希表：平均 O(1) 查找，渐进式 rehash 避免一次性搬迁阻塞
- 跳表：用多层随机索引近似平衡树，支持有序集合范围查询
- LRU/LFU：用近似统计估计最近访问或访问频率，降低全量维护成本
- 过期采样：主动过期不是扫描全库，而是抽样检查，平衡 CPU 和内存回收
- 单线程命令执行：避免共享状态锁竞争，让每条命令天然具备原子性

Redis 的工程取舍是：把复杂性放进数据结构和事件循环，而不是放进线程锁。

## 常用命令

### 1. 基础读写和过期

```bash
redis-cli ping
redis-cli set user:1 '{"name":"yc"}' ex 3600
redis-cli get user:1
redis-cli ttl user:1
redis-cli del user:1
```

`ex` 设置秒级过期，`ttl` 看剩余生命周期。缓存 key 必须有明确过期策略，否则会把内存变成不可控成本。

### 2. 运行状态和内存

```bash
redis-cli info memory
redis-cli info stats
redis-cli dbsize
redis-cli slowlog get 10
redis-cli latency latest
```

`info memory` 看 used_memory、碎片率和淘汰情况；`slowlog` 看慢命令；`latency` 看是否有 fork、AOF、网络或大 key 引发的抖动。

### 3. Key 排查

```bash
redis-cli scan 0 match "user:*" count 100
redis-cli type user:1
redis-cli object encoding user:1
redis-cli memory usage user:1
```

生产不要用 `keys *` 扫全库。`scan` 是增量游标，适合低风险扫描；`object encoding` 可以看底层编码，帮助判断内存膨胀原因。

### 4. 原子脚本

```bash
redis-cli eval "if redis.call('get', KEYS[1]) == ARGV[1] then return redis.call('del', KEYS[1]) else return 0 end" 1 lock:order 123
```

Lua 脚本在 Redis 内原子执行，常用于释放锁、计数限流和多 key 条件更新。

## 源码重点

建议按命令执行路径读源码：

- `server.c`：初始化、事件循环、命令调度
- `networking.c`：连接、读写缓冲和协议解析
- `dict.c`：哈希表、rehash 和 key 空间
- `object.c`：对象类型、编码和引用计数
- `expire.c`：过期字典、惰性删除、主动过期
- `evict.c`：内存淘汰策略
- `t_string.c`、`t_zset.c`、`t_stream.c`：具体数据类型实现

源码阅读路线：从 `SET` 命令进入命令表，追到对象创建、dict 写入、过期设置、AOF 追加和复制传播。

## 典型落地方案

Redis 作为缓存层时，数据库仍然是事实源：

- 读流程：先读 Redis，未命中再读数据库，然后回填缓存
- 写流程：先写数据库，再删除或更新缓存
- 热点 key：预热、拆分、限流和本地缓存兜底
- 大 key：限制 value 大小，拆分结构，监控 `memory usage`
- 高可用：主从复制加哨兵，或用 Cluster 做分片
- 故障策略：缓存不可用时要有降级，不能让全部请求打爆数据库

### 缓存旁路模板

```text
request
  |
get cache
  |
hit -> return
  |
miss -> query database
  |
set cache with ttl
  |
return
```

## 10 道面试题

### 1. Redis 为什么快？

主要因为数据在内存里，命令执行路径短，核心数据结构高效，并且单线程命令执行避免了大量锁竞争。

### 2. Redis 单线程为什么还能高性能？

单线程主要指命令执行线程。网络 I/O 使用多路复用，命令通常很短，避免线程切换和锁竞争后吞吐反而更稳定。

### 3. LRU 和 LFU 的区别是什么？

LRU 关注最近是否访问，LFU 关注访问频率。短期热点适合 LRU，长期稳定热点更适合 LFU。

### 4. 缓存穿透、击穿、雪崩分别是什么？

穿透是查询不存在的数据，击穿是热点 key 失效后大量请求打到数据库，雪崩是大批 key 同时失效。对应方案是空值缓存、互斥重建和过期时间随机化。

### 5. Redis 过期键如何处理？

同时使用惰性删除和主动过期。访问 key 时发现过期会删除，后台也会抽样扫描过期字典，避免全量扫描阻塞。

### 6. AOF 和 RDB 有什么差异？

AOF 记录写命令，恢复更细但文件可能更大；RDB 是快照，恢复快但可能丢失快照后的写入。

### 7. 分布式锁如何避免误删？

加锁时写唯一 token，释放时用 Lua 校验 token 再删除。否则锁过期后可能误删其他客户端新获得的锁。

### 8. 什么是渐进式 rehash？

扩容时不一次性迁移整个哈希表，而是在后续命令中分批搬迁桶，避免单次请求卡住。

### 9. Redis Cluster 为什么使用哈希槽？

哈希槽把 key 空间拆成固定数量区间，便于节点分片、迁移和扩容。它把路由问题从节点数量变化中解耦出来。

### 10. Redis 线上变慢怎么排查？

先看慢日志、延迟事件、CPU、内存碎片、大 key、连接数、持久化 fork、AOF fsync 和网络延迟，再结合命令分布确认是否有危险命令。
