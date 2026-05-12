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

MySQL 的本质是 SQL 层加存储引擎的事务数据库。应用看到的是 SQL、表和索引；真正决定一致性、锁、页、日志和崩溃恢复的是 InnoDB。

一句话理解：MySQL 用 B+Tree 组织数据，用 undo/redo 保证事务和恢复，用 binlog 支撑复制和审计。

## 底层架构

MySQL 链路分成六层：

1. 连接层：连接、认证、权限、线程或连接池
2. SQL 层：解析、预处理、优化器、执行器
3. 存储引擎层：InnoDB 负责行、页、索引、锁和事务
4. 缓冲层：buffer pool 缓存数据页和索引页
5. 日志层：undo、redo、binlog 协同保证事务和复制
6. 复制层：主从、GTID、relay log、半同步或组复制

### 架构图

```text
client
  |
connection / parser / optimizer / executor
  |
handler API
  |
InnoDB: buffer pool + B+Tree + locks
  |
undo log / redo log / data pages
  |
binlog -> replica relay log
```

图里最重要的边界是 SQL 层和 InnoDB 层：慢 SQL 可能来自优化器选择，也可能来自存储层页读取和锁等待。

## 典型场景

适合 MySQL 的场景：

- 高频 OLTP 交易系统
- 电商、订单、账户、配置等成熟业务系统
- 需要丰富生态、工具和运维经验的团队
- 读写分离、分库分表、云数据库托管

需要谨慎的场景：

- 极复杂分析查询和多维报表
- 超大单表且没有归档和分区方案
- 多主强一致跨地域写入

## 底层原理

MySQL/InnoDB 的核心原理：

- B+Tree：所有数据按页组织，聚簇索引叶子节点保存整行数据
- MVCC：通过 undo log 构造历史版本，减少读写冲突
- 两阶段提交：redo log 和 binlog 协调，保证崩溃恢复和复制一致
- 锁：行锁、间隙锁、next-key lock 解决并发和幻读问题
- Buffer Pool：缓存热页，降低磁盘 I/O

涉及的数学直觉：

- B+Tree 用高扇出降低树高，千万级数据也只需少量页访问
- 索引选择性越高，过滤效率越好
- 成本优化器通过行数估计和 I/O/CPU 成本选择执行计划
- 事务隔离是在一致性和并发吞吐之间做取舍

## 常用命令

### 1. 连接和对象

```bash
mysql -uroot -p
show databases;
use app;
show tables;
show create table orders\G
```

这些命令用于确认库表结构。`show create table` 能看到索引、字符集、存储引擎和表选项。

### 2. SQL 执行计划

```bash
explain select * from orders where user_id = 1001 order by created_at desc limit 20;
explain analyze select * from orders where user_id = 1001;
show warnings;
```

`explain` 重点看 type、key、rows、filtered、Extra。`explain analyze` 能看到真实执行耗时，适合验证优化器估计是否偏差过大。

### 3. 运行状态和锁

```bash
show processlist;
show engine innodb status\G
select * from information_schema.innodb_trx\G
```

`processlist` 看活跃 SQL，`innodb status` 看死锁、锁等待、buffer pool 和 I/O，`innodb_trx` 看长事务。

### 4. 复制和日志

```bash
show master status;
show replica status\G
show variables like 'log_bin';
show variables like 'transaction_isolation';
```

复制排障重点看延迟、IO/SQL 线程状态、GTID 和错误信息。隔离级别会影响锁和一致性表现。

## 源码重点

建议按 SQL 到 InnoDB 的路径读：

- `sql/`：解析、执行器、连接和语句生命周期
- `sql/opt*`：优化器和执行计划选择
- `storage/innobase/row`：行记录读写
- `storage/innobase/btr`：B+Tree 索引操作
- `storage/innobase/trx`：事务、undo 和隔离
- `storage/innobase/buf`：buffer pool
- `storage/innobase/log`：redo log 和恢复

源码阅读路线：从一条 `select ... where id = ?` 追到优化器选索引，再追 handler API 到 InnoDB 的 B+Tree 查找。

## 典型落地方案

OLTP 业务落地原则：

- 表必须有清晰主键，避免无主键大表
- 高频查询用覆盖索引或合理联合索引
- 事务短小，避免长事务拖住 undo 和锁
- 写入链路避免大事务和批量无界更新
- 慢查询、锁等待、复制延迟要有监控
- 读写分离必须感知复制延迟，不能把强一致读打到从库
- 大表提前做归档、分区或分库分表设计

### 联合索引模板

```sql
create index idx_orders_user_created
on orders(user_id, created_at);

explain select id, status, created_at
from orders
where user_id = 1001
order by created_at desc
limit 20;
```

这个索引服务的是“按用户查最近订单”，不是随便把字段拼在一起。索引设计必须从查询模式倒推。

## 10 道面试题

### 1. MySQL 和 PostgreSQL 的差异是什么？

MySQL 生态成熟、OLTP 使用广泛、工具链丰富；PostgreSQL 在复杂 SQL、扩展能力、类型系统和一致性能力上通常更强。

### 2. InnoDB 为什么重要？

InnoDB 承担事务、锁、MVCC、B+Tree、buffer pool 和崩溃恢复，是 MySQL 生产能力的核心。

### 3. redo log 和 binlog 有什么不同？

redo log 是 InnoDB 物理日志，用于崩溃恢复；binlog 是 Server 层逻辑日志，用于复制、审计和时间点恢复。

### 4. 什么是 gap lock？

gap lock 锁住索引记录之间的间隙，用于可重复读下防止幻读，但也可能扩大锁范围导致并发下降。

### 5. 事务隔离级别有哪些？

读未提交、读已提交、可重复读、串行化。隔离越强，并发成本通常越高，MySQL 默认常见是可重复读。

### 6. 如何设计联合索引？

从查询条件、排序、分组和选择性倒推。高频等值过滤字段通常靠前，范围字段之后的索引利用会受限制。

### 7. explain 重点看什么？

看访问类型、使用索引、扫描行数、是否回表、是否 filesort、是否临时表，以及优化器估算和真实执行是否一致。

### 8. 为什么会出现死锁？

多个事务以不同顺序持有锁并等待对方释放，形成循环等待。解决方式是统一加锁顺序、缩短事务和增加合适索引。

### 9. 复制延迟怎么处理？

减少大事务，优化从库资源，拆分热点写入，开启并行复制，并让业务在强一致读时回主库或等待位点。

### 10. 如何做高可用切换？

需要主从复制、故障检测、选主、应用连接切换、数据一致性校验和回切方案，不能只依赖手工改连接串。
