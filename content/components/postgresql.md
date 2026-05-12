---
title: "PostgreSQL"
domain: "Database"
summary: "强一致关系数据库，适合事务、复杂查询和可靠数据存储。"
essence: "PostgreSQL 本质是带优化器、MVCC 和 WAL 的事务型数据管理系统。"
scenarios: "适合核心交易、复杂 SQL、报表分析和需要可靠恢复的业务。"
sourceFocus: "src/backend/optimizer、executor、storage、access、wal。"
colors: "#5b7f45,#fffaf0,#d8a321"
---

## 本质

PostgreSQL 的本质是一个强调正确性、可扩展性和 SQL 表达力的事务数据库。它用 MVCC 管并发，用 WAL 管恢复，用优化器和执行器把声明式 SQL 变成物理执行计划。

一句话理解：PostgreSQL 是数据库内核、查询引擎和扩展平台的组合。

## 底层架构

PostgreSQL 链路分成六层：

1. 连接层：backend process 处理客户端会话
2. SQL 层：parser、rewriter、planner/optimizer、executor
3. 存储层：heap page、tuple、visibility、buffer manager
4. 索引层：B-Tree、GIN、GiST、BRIN 等访问方法
5. 事务层：MVCC、snapshot、lock、vacuum
6. 恢复层：WAL、checkpoint、archive、replication

### 架构图

```text
client
  |
backend process
  |
parser -> planner -> executor
  |
heap / index access methods
  |
buffer manager
  |
WAL -> checkpoint -> replication
```

关键点：PostgreSQL 的每个连接通常对应一个 backend 进程，查询在 executor 中按照计划节点拉取数据。

## 典型场景

适合 PostgreSQL 的场景：

- 核心交易、账户、权限、配置和元数据
- 复杂查询、窗口函数、CTE 和报表分析
- JSONB、全文检索、GIS、向量等扩展能力
- 对一致性、恢复和数据正确性要求高的系统

需要谨慎的场景：

- 极高写入吞吐但缺少分区和归档策略
- 大量短连接且没有连接池
- 长事务频繁存在、vacuum 被长期拖住

## 底层原理

PostgreSQL 的核心原理：

- MVCC：每行版本带事务可见性信息，读写通过 snapshot 判断可见
- WAL：先写日志再写数据页，崩溃后通过重放恢复
- Cost Based Optimizer：基于统计信息估算扫描、连接、排序和聚合成本
- Buffer Manager：缓存数据页，减少磁盘读取
- VACUUM：清理不可见旧版本，防止表膨胀

算法和数学直觉：

- B-Tree 适合等值和范围查询，GIN 适合倒排索引，BRIN 适合大表按物理顺序过滤
- 查询优化是搜索问题，优化器在候选执行计划里选择估算成本最低的方案
- 统计信息的直方图和相关性会影响行数估算，估错会导致错误 join 顺序
- MVCC 用版本链和可见性判断换取读写并发

## 常用命令

### 1. 连接和对象

```bash
psql -h localhost -U postgres
\l
\c app
\dt
\d+ orders
```

这些元命令用于查看数据库、表和结构。`\d+` 能看到列、索引、存储和统计信息摘要。

### 2. 执行计划

```bash
explain analyze select * from orders where id = 1;
explain (analyze, buffers) select * from orders where user_id = 1001;
```

`analyze` 执行真实 SQL 并返回耗时；`buffers` 看共享缓冲命中和读盘情况。慢 SQL 排查离不开这两个视角。

### 3. 活动和锁

```bash
select pid, state, wait_event_type, wait_event, query from pg_stat_activity;
select * from pg_locks where not granted;
select * from pg_stat_user_tables;
```

`pg_stat_activity` 看当前会话和等待事件，`pg_locks` 看锁等待，`pg_stat_user_tables` 看扫描、更新和 vacuum 状态。

### 4. 维护和复制

```bash
vacuum analyze orders;
select * from pg_stat_replication;
select pg_current_wal_lsn();
```

`vacuum analyze` 清理旧版本并更新统计信息；复制排障看 WAL 位点、延迟和从库回放状态。

## 源码重点

建议按一条查询的生命周期读：

- `src/backend/parser`：SQL 解析成语法树
- `src/backend/optimizer`：路径生成、成本估算、计划选择
- `src/backend/executor`：执行计划节点
- `src/backend/access/heap`：heap 表访问
- `src/backend/access/nbtree`：B-Tree 索引
- `src/backend/storage/buffer`：缓冲区管理
- `src/backend/access/transam`：事务、WAL 和提交

源码阅读路线：从 `exec_simple_query` 追到 parse、plan、execute，再看一个 index scan 如何访问 heap tuple 并判断可见性。

## 典型落地方案

生产 PostgreSQL 方案要关注：

- 所有服务通过连接池访问，避免连接风暴
- 表按业务访问模式设计索引和分区
- 慢查询定期看 `pg_stat_statements`
- 长事务、锁等待、表膨胀和 autovacuum 必须监控
- WAL 归档、基础备份和恢复演练要定期验证
- 主从复制用于读扩展和容灾，但强一致读要谨慎
- 重要变更先在预发执行 `explain analyze`

### 查询优化模板

```sql
create index idx_orders_user_created
on orders(user_id, created_at desc);

explain (analyze, buffers)
select id, status, created_at
from orders
where user_id = 1001
order by created_at desc
limit 20;
```

优化目标不是“建更多索引”，而是让高频查询少扫页、少排序、少回表，并保持写入成本可控。

## 10 道面试题

### 1. PostgreSQL 为什么适合核心业务？

因为它有强事务能力、丰富 SQL、可靠 WAL 恢复和成熟扩展生态，能支撑一致性要求高且查询复杂的业务。

### 2. MVCC 解决什么问题？

MVCC 让读事务看到一致快照，减少读写互相阻塞，同时用行版本和可见性规则处理并发。

### 3. B-Tree 索引有什么优势？

B-Tree 保持有序，树高低，适合等值、范围、排序和前缀匹配，是最通用的索引结构。

### 4. WAL 的作用是什么？

WAL 先记录变更日志，再异步写数据页。崩溃后数据库可以重放 WAL，恢复到一致状态。

### 5. EXPLAIN 里重点看什么？

重点看扫描方式、行数估计、实际行数、join 顺序、排序聚合、buffer 命中和最耗时节点。

### 6. 长事务为什么危险？

长事务持有旧 snapshot，会阻止旧版本清理，导致表膨胀、vacuum 压力、锁等待和复制延迟。

### 7. 主从复制如何工作？

主库生成 WAL，从库接收并按顺序重放 WAL。物理复制保证从库数据页与主库变化保持一致。

### 8. VACUUM 为什么重要？

它清理不可见旧版本，更新可见性信息，配合 analyze 更新统计信息，防止膨胀和执行计划恶化。

### 9. 事务隔离级别有什么差异？

读已提交每条语句一个快照，可重复读整个事务一个快照，串行化提供更强一致性但冲突和重试成本更高。

### 10. 如何定位慢 SQL？

从 `pg_stat_statements` 找高耗时 SQL，用 `explain analyze buffers` 看计划、行数估计、索引、排序、join 和读盘情况。
