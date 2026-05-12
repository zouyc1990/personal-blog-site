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

Kafka 的本质不是普通消息队列，而是一个分布式追加日志系统。消息写入 partition 后形成有序日志，消费者用 offset 记录自己读到哪里。

它解决的是高吞吐、可回放、可扩展和多消费者独立消费的问题。Kafka 不追求“每条消息立刻点对点处理”，而是把事件变成可持久化、可订阅、可追溯的数据流。

## 底层架构

Kafka 的核心链路分成六层：

1. Producer：按 topic 和 partition key 批量写入
2. Broker：保存日志段、索引和副本
3. Partition：消息顺序和并行度的基本单位
4. Replica：leader 处理读写，follower 同步日志
5. Consumer Group：把 partition 分配给组内消费者
6. Controller/Coordinator：管理元数据、leader、消费组和 rebalancing

### 架构图

```text
producer
  |
topic -> partition-0/1/2
  |
leader broker -> follower replicas
  |
log segment + offset index
  |
consumer group
  |
consumer A / consumer B
```

图里的重点是 partition：它同时决定吞吐、顺序、存储切分和消费并行度。

## 典型场景

适合 Kafka 的场景：

- 日志采集、埋点、指标和数据管道
- 订单、支付、库存等业务事件流
- 多下游订阅同一份事件
- 需要消息回放和追溯的审计链路
- 高吞吐异步解耦

不适合 Kafka 的场景：

- 小规模、低吞吐、强路由语义的任务分发
- 需要复杂优先级、延迟、逐条确认的业务队列
- 不能接受最终一致和重复消费的流程

## 底层原理

Kafka 高吞吐的核心原理：

- 顺序追加：磁盘顺序写远快于随机写
- 批处理：producer、broker、consumer 都尽量批量读写
- 零拷贝：文件数据可以减少用户态和内核态拷贝
- 分区并行：topic 拆成多个 partition，横向扩展读写
- offset 解耦：broker 保存日志，消费者自己管理进度

涉及的算法和数学直觉：

- 哈希分区：同一 key 映射到固定 partition，保证 key 内顺序
- ISR 副本集合：用同步进度约束可用副本，降低丢数据风险
- Rebalance 分配：把 partition 尽量均匀分给消费者，同时减少迁移
- 日志清理：按时间、大小或 key compact 控制存储增长

## 常用命令

### 1. Topic 管理

```bash
kafka-topics.sh --bootstrap-server localhost:9092 --list
kafka-topics.sh --create --topic events --partitions 6 --replication-factor 3 --bootstrap-server localhost:9092
kafka-topics.sh --describe --topic events --bootstrap-server localhost:9092
```

`partitions` 决定最大消费并行度，`replication-factor` 决定副本数。生产环境通常至少 3 副本，分区数要结合吞吐、顺序和未来扩容设计。

### 2. 生产和消费测试

```bash
kafka-console-producer.sh --bootstrap-server localhost:9092 --topic events
kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic events --from-beginning
```

控制台命令适合验证连通性和基本路由，不适合压测。真正压测要看批大小、压缩、acks、linger 和消费处理耗时。

### 3. 消费组排查

```bash
kafka-consumer-groups.sh --bootstrap-server localhost:9092 --list
kafka-consumer-groups.sh --bootstrap-server localhost:9092 --describe --group demo
kafka-consumer-groups.sh --bootstrap-server localhost:9092 --reset-offsets --group demo --topic events --to-earliest --execute
```

`describe` 重点看 lag、current-offset、log-end-offset 和 consumer 分配。重置 offset 是高风险操作，必须确认是否允许消息重放。

### 4. Broker 健康

```bash
kafka-broker-api-versions.sh --bootstrap-server localhost:9092
kafka-log-dirs.sh --bootstrap-server localhost:9092 --describe
```

这些命令用于检查 broker 版本兼容、日志目录和分区分布，排查磁盘倾斜和副本异常。

## 源码重点

建议按写入、复制、消费三条线读：

- `kafka/log`：Log、LogSegment、索引、清理和 compact
- `kafka/server`：KafkaApis、ReplicaManager、请求处理
- `kafka/cluster`：broker、partition、replica 元数据
- `kafka/controller`：leader 选举和分区状态管理
- `kafka/coordinator/group`：消费组加入、心跳和 rebalance
- `clients/producer`、`clients/consumer`：客户端批处理、元数据和 offset

源码阅读路线：先追 producer send 到 broker append，再追 follower fetch，最后追 consumer poll 和 offset commit。

## 典型落地方案

事件流平台落地时要先定义数据契约：

- topic 按业务事件命名，不按临时需求乱建
- schema 版本化，字段只能兼容演进
- partition key 同时考虑顺序和负载分散
- producer 开启幂等，关键链路设置 `acks=all`
- consumer 保证幂等处理，失败可重试、可回放
- 监控 lag、ISR、磁盘、请求延迟和 rebalance 次数
- 重要 topic 配置保留时间、压缩策略和容量预算

### 事件链路模板

```text
service writes business event
  |
producer with schema + key
  |
kafka topic partitions
  |
consumer group A -> search index
consumer group B -> warehouse
consumer group C -> notification
```

## 10 道面试题

### 1. Kafka 为什么吞吐高？

因为它使用顺序追加日志、批处理、零拷贝和分区并行，减少随机 I/O 和逐条处理成本。

### 2. Partition 的作用是什么？

Partition 是顺序、并行和存储切分单位。一个分区内有序，多分区并行，分区 key 决定顺序边界。

### 3. Consumer Group 如何分配任务？

同一消费组内，一个 partition 同一时刻只能分配给一个消费者。协调器通过 rebalance 把分区分给组成员。

### 4. offset 是什么？

offset 是分区日志中的位置，也是消费者消费进度。提交 offset 后，消费者重启可以从提交位置继续。

### 5. Kafka 如何保证顺序？

只能保证单 partition 内顺序。要保证同一业务实体有序，就必须让同一 key 进入同一 partition，并控制消费端顺序处理。

### 6. ISR 是什么？

ISR 是与 leader 同步进度足够接近的副本集合。`acks=all` 时，写入需要 ISR 里的副本确认，提高可靠性。

### 7. 生产者幂等性解决什么问题？

它用 producer id 和序列号避免重试导致的重复追加，让网络抖动下的重试更安全。

### 8. Kafka 适合做延迟队列吗？

不是原生强项。可以用延迟 topic、时间轮服务或定时扫描实现，但复杂延迟语义更适合专门队列。

### 9. 什么时候会 rebalance？

消费者加入或退出、心跳超时、分区变化、订阅变化都会触发。频繁 rebalance 会导致消费暂停和延迟上升。

### 10. 如何设计一个可靠事件 topic？

定义稳定 schema，选择合理 partition key，开启幂等生产，消费端幂等，监控 lag 和 ISR，并规划保留时间、容量和回放策略。
