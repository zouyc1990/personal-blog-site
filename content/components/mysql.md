---
title: "MySQL"
domain: "Database"
summary: "经典关系数据库，适合在线事务、读写分离和成熟生态。"
essence: "MySQL 本质是围绕 InnoDB 存储引擎构建的事务数据库。"
scenarios: "适合高并发 OLTP、成熟业务系统和对生态兼容性要求高的场景。"
sourceFocus: "sql、opt、storage/innobase、trx、row、buf、btr。"
colors: "#d8a321,#f1dfb8,#7f4d64"
---

## 本质

MySQL 的核心是事务、索引和存储引擎。业务看到的是 SQL，真正承担并发和持久化的是 InnoDB。

## 架构

1. SQL 层解析和优化。
2. InnoDB 负责事务、锁和页。
3. undo/redo 处理回滚和恢复。
4. binlog 负责复制。

## 常用命令

```bash
mysql -uroot -p
show databases;
show tables;
explain select * from t where id = 1;
show processlist;
show engine innodb status\G
```

## 源码重点

- `sql`：SQL 层
- `storage/innobase`：InnoDB
- `btr`：B+Tree
- `trx`：事务
- `row`：行记录

## 典型落地方案

- 对 OLTP 用合适的索引和事务边界。
- 对读多场景做读写分离。
- 对大表做归档、分区和慢查询治理。

## 10 道面试题

### 1. MySQL 和 PostgreSQL 的差异是什么？

MySQL 更偏成熟生态和 OLTP 场景，PostgreSQL 在复杂 SQL、扩展能力和一致性治理上通常更强。

### 2. InnoDB 为什么重要？

因为它承担了事务、锁、页、崩溃恢复等核心能力，真正决定 MySQL 的工程特性。

### 3. redo log 和 binlog 有什么不同？

redo log 面向崩溃恢复，binlog 面向复制和逻辑变更记录。

### 4. 什么是 gap lock？

它是范围锁的一种，用于防止幻读，但也可能扩大锁冲突。

### 5. 事务隔离级别有哪些？

读未提交、读已提交、可重复读、串行化。隔离越强，并发成本通常越高。

### 6. 如何设计联合索引？

通常让最常用的过滤条件、排序条件和高选择性字段靠前，同时结合实际 SQL 进行验证。

### 7. explain 重点看什么？

看是否走索引、扫描行数、回表、排序、连接方式和过滤效果。

### 8. 为什么会出现死锁？

多个事务以不同顺序持有资源，互相等待对方释放锁，就会形成循环等待。

### 9. 复制延迟怎么处理？

降低大事务、优化写入峰值、提高从库 IO 能力，并且对读写分离保持延迟感知。

### 10. 如何做高可用切换？

要有主从复制、故障检测、切换脚本、应用连接重定向和回切策略。
