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

### 1. Kafka 为什么吞吐高？

因为它用顺序追加日志代替随机写，并且把读写和消费状态解耦，顺序 I/O 和批处理都更高效。

### 2. Partition 的作用是什么？

Partition 决定并行度和顺序边界。一个分区内有序，多分区并行，吞吐和顺序之间靠分区 key 取舍。

### 3. Consumer Group 的分配机制是什么？

同一组内，一个分区同一时刻只会分配给一个消费者。组内通过协调器和 rebalancing 做任务划分。

### 4. offset 是什么？

offset 是消费者在分区日志里的读到哪一条的进度标记，类似游标。

### 5. Kafka 如何保证顺序？

通过把同一业务 key 写到同一个分区，并控制消费端单分区顺序处理。

### 6. ISR 是什么？

ISR 是同步副本集合。只有落在 ISR 中的副本才被认为是健康候选，保证了副本可靠性。

### 7. 生产者幂等性解决什么问题？

解决重试导致的重复写入问题，让生产者重试更安全。

### 8. Kafka 适合做延迟队列吗？

不是原生强项。可以通过时间轮或延迟主题等方式实现，但语义不如专门延迟队列顺手。

### 9. 什么时候会发生 rebalancing？

消费者加入/退出、分区变化、消费组成员失联时都可能触发。

### 10. 如何设计一个事件主题？

按业务事件命名，定义清晰 schema，选择合适 partition key，保证幂等消费和版本兼容。
