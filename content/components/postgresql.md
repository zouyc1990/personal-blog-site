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

PostgreSQL 的核心是事务一致性、SQL 能力和可恢复性。它既是数据库，也是查询引擎和恢复系统。

## 架构

1. Parser/Planner 生成执行计划。
2. Executor 运行计划。
3. Storage 管理页和索引。
4. MVCC 处理并发。
5. WAL 保障崩溃恢复。

## 常用命令

```bash
psql -h localhost -U postgres
psql -c "select now();"
psql -c "\l"
psql -c "\dt"
psql -c "explain analyze select * from t where id = 1;"
```

## 源码重点

- `optimizer`：计划选择
- `executor`：执行路径
- `storage`：页与缓冲
- `wal`：日志恢复

## 典型落地方案

- 关键业务用主从复制和备份恢复。
- 慢查询靠索引、分区和执行计划优化。
- 对长事务和锁等待进行监控治理。

## 10 道面试题

### 1. PostgreSQL 为什么适合核心业务？

因为它的事务能力、SQL 表达力和恢复能力都很强，适合需要一致性和复杂查询的系统。

### 2. MVCC 解决什么问题？

它让读写并发更友好，读事务可以看到一致快照，减少锁冲突。

### 3. B+Tree 索引有什么优势？

它能保持有序、支持范围查询，并且树高较低，查找效率高。

### 4. WAL 的作用是什么？

WAL 先记录日志再落盘数据页，保证崩溃后可以按顺序重放恢复。

### 5. EXPLAIN 里重点看什么？

重点看扫描方式、索引命中、行数估计、join 顺序和排序/聚合开销。

### 6. 长事务为什么危险？

长事务会拖住版本清理，增加锁等待，也会让回收和复制压力变大。

### 7. 主从复制如何工作？

主库写 WAL，从库按日志顺序重放，保持数据同步。

### 8. VACUUM 为什么重要？

它负责清理旧版本和回收空间，避免表膨胀和性能下降。

### 9. 事务隔离级别有什么差异？

隔离级别越高，一致性越强，但并发冲突和性能代价也通常越高。

### 10. 如何定位慢 SQL？

先看执行计划和索引，再看返回行数、排序、join、统计信息和应用参数。
