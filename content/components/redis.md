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

1. Redis 为什么快？
2. Redis 单线程为什么还能高性能？
3. LRU 和 LFU 的区别是什么？
4. 缓存穿透、击穿、雪崩分别是什么？
5. Redis 过期键是怎么处理的？
6. AOF 和 RDB 有什么差异？
7. 分布式锁如何避免误删？
8. 什么是渐进式 rehash？
9. Redis 适合做消息队列吗？
10. 集群模式下 key 为什么要哈希槽？

