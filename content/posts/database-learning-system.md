---
title: "数据库：从数据模型拆到慢查询治理"
category: "数据库"
date: "2026-05-12"
readTime: "11 min"
excerpt: "快速掌握数据库要从建模、索引、事务和执行计划入手，再进入复制、备份恢复、容量和高可用。"
quote: "顶层看数据生命周期，底层看执行计划、锁和日志。"
topThinking: "先判断数据的读写模式、一致性要求、增长速度和恢复目标。"
deepDive: "拆到索引结构、MVCC、事务隔离、锁等待、WAL/binlog、复制延迟、备份恢复和慢查询计划。"
colors: "#5b7f45,#fffaf0,#d8a321"
---

## 顶层思维：数据库首先是数据生命周期设计

数据库学习不要从背参数开始，要先回答数据如何进入、如何变化、如何被查询、如何归档和如何恢复。

建模时先问：

- 这张表的主查询路径是什么
- 数据增长速度和保留周期是什么
- 写入是否需要强一致，读取是否可以接受延迟
- 业务能接受的 RPO 和 RTO 是多少
- 删除、归档、审计和脱敏策略在哪里执行

## 底层拆解：慢查询往往不是 SQL 一件事

一个慢查询可能来自多个层次：

- 没有命中合适索引，导致全表扫描
- 选择性太差，优化器即使命中索引也要回表大量数据
- 事务太长，持有锁或制造大量版本垃圾
- 排序、聚合、join 中间结果过大
- 连接池耗尽，看起来像数据库慢
- 复制延迟导致读写分离读到旧数据

## 快速实验清单

1. 对同一条 SQL 分别加单列索引、联合索引，比较执行计划
2. 在两个事务里制造锁等待，观察阻塞链路
3. 开启慢查询日志，按耗时、扫描行数和调用频次排序
4. 做一次全量备份和恢复演练，记录真实恢复时间
5. 模拟主从复制延迟，验证业务是否依赖读后写一致性

## 官方文档入口

- PostgreSQL Docs: https://www.postgresql.org/docs/current/
- PostgreSQL Tutorial: https://www.postgresql.org/docs/current/tutorial.html
- MySQL 8.4 Reference Manual: https://dev.mysql.com/doc/refman/8.4/en/
- MongoDB Manual: https://www.mongodb.com/docs/manual/

