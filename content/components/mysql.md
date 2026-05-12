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

1. MySQL 和 PostgreSQL 的差异是什么？
2. InnoDB 为什么重要？
3. redo log 和 binlog 有什么不同？
4. 什么是 gap lock？
5. 事务隔离级别有哪些？
6. 如何设计联合索引？
7. explain 重点看什么？
8. 为什么会出现死锁？
9. 复制延迟怎么处理？
10. 如何做高可用切换？

