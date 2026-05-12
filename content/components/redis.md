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

Redis 的核心是“快”：用内存和高效数据结构把访问延迟降到极低，同时用复制和持久化保证一定程度的可靠性。

## 架构

1. 单线程事件循环处理网络和命令。
2. 内存字典和多种对象编码存放数据。
3. AOF/RDB 负责持久化。
4. 主从复制和哨兵/集群负责可用性。

## 常用命令

```bash
redis-cli ping
redis-cli set k v
redis-cli get k
redis-cli ttl k
redis-cli info memory
redis-cli slowlog get
redis-cli monitor
redis-cli scan 0
redis-cli eval "return redis.call('get', KEYS[1])" 1 k
```

## 源码重点

- `server.c`：主事件循环与命令执行入口
- `dict.c`：哈希表与渐进式 rehash
- `expire.c`：过期管理
- `evict.c`：淘汰策略
- `t_*.c`：各类数据结构

## 典型落地方案

- 做缓存旁路，数据库是事实源，Redis 是加速层。
- 对热点 key 做拆分、预热和限流。
- 对锁、计数、排行榜要严格定义幂等和过期策略。

## 10 道面试题

### 1. Redis 为什么快？

它把高频操作放在内存里，并且使用高效数据结构和事件循环处理网络 I/O，减少了磁盘和线程切换开销。

### 2. Redis 单线程为什么还能高性能？

Redis 的单线程主要负责执行命令，网络 I/O 用多路复用。避免了锁竞争和上下文切换，吞吐反而很高。

### 3. LRU 和 LFU 的区别是什么？

LRU 看最近是否访问，LFU 看访问频率。前者适合短期热点，后者更适合稳定热点。

### 4. 缓存穿透、击穿、雪崩分别是什么？

穿透是查不存在的数据，击穿是热点 key 失效，雪崩是大量 key 同时过期。它们分别对应空值、互斥和过期时间分散策略。

### 5. Redis 过期键是怎么处理的？

Redis 同时做惰性删除和主动过期扫描。这样既不会立即阻塞，也能逐步回收过期数据。

### 6. AOF 和 RDB 有什么差异？

AOF 记录每次写命令，恢复更细；RDB 是快照，恢复更快、文件更紧凑。前者偏可靠，后者偏效率。

### 7. 分布式锁如何避免误删？

锁要带唯一 token，释放时校验持有者身份，通常配合 Lua 脚本原子执行。否则会误删别人的锁。

### 8. 什么是渐进式 rehash？

哈希表扩容不一次性搬完，而是在后续命令执行中分批迁移。这样能避免长时间阻塞。

### 9. Redis 适合做消息队列吗？

可以做轻量队列，但不适合复杂可靠消息系统。它缺少 Kafka/RabbitMQ 那种成熟的持久化、确认和重试语义。

### 10. 集群模式下 key 为什么要哈希槽？

哈希槽把 key 分布到不同节点，便于扩展和迁移。它解决的是水平扩展和重分片问题。
