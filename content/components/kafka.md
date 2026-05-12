---
title: "Kafka"
domain: "Middleware"
summary: "高吞吐事件流平台，负责日志、消息、数据管道和异步解耦。"
essence: "Kafka 本质是可扩展的追加日志系统，用分区和消费组管理吞吐与顺序。"
scenarios: "适合事件驱动架构、日志采集、埋点、异步流程和大规模数据传输。"
sourceFocus: "core/src/main/scala/kafka/log、replica、controller、group 等路径。"
colors: "#0f7b78,#d7ece7,#d8a321"
---

## 本质

Kafka 不是传统队列，而是分区追加日志。它把消息顺序写入磁盘，用 offset 表达消费进度。

## 架构

1. Producer 写入分区。
2. Broker 负责存储和复制。
3. Partition 定义有序日志。
4. Consumer Group 做分摊消费。
5. Controller 负责元数据和副本协调。

## 常用命令

```bash
kafka-topics.sh --bootstrap-server localhost:9092 --list
kafka-topics.sh --create --topic events --partitions 6 --replication-factor 3 --bootstrap-server localhost:9092
kafka-console-producer.sh --bootstrap-server localhost:9092 --topic events
kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic events --from-beginning
kafka-consumer-groups.sh --bootstrap-server localhost:9092 --describe --group demo
```

## 源码重点

- `kafka/log`：日志段、索引、清理
- `kafka/replica`：副本同步
- `kafka/group`：消费组协调
- `kafka/controller`：元数据和 leader 变更

## 典型落地方案

- 事件命名统一，字段版本化。
- 生产端保证幂等，消费端保证可重试。
- 分区 key 设计要兼顾顺序和负载分布。

## 10 道面试题

1. Kafka 为什么吞吐高？
2. Partition 的作用是什么？
3. Consumer Group 的分配机制是什么？
4. offset 是什么？
5. Kafka 如何保证顺序？
6. ISR 是什么？
7. 生产者幂等性解决什么问题？
8. Kafka 适合做延迟队列吗？
9. 什么时候会发生 rebalancing？
10. 如何设计一个事件主题？

