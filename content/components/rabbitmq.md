---
title: "RabbitMQ"
domain: "Middleware"
summary: "面向路由和确认的消息中间件，适合可靠投递和复杂分发。"
essence: "RabbitMQ 本质是面向交换机、队列和确认语义的消息路由器。"
scenarios: "适合任务分发、业务事件、延迟处理、死信重试和复杂路由。"
sourceFocus: "rabbit_channel、rabbit_queue、rabbit_exchange、ack/requeue/dead-letter 路径。"
colors: "#7f4d64,#f1dfb8,#0f7b78"
---

## 本质

RabbitMQ 的本质是一个带路由规则和确认语义的消息投递系统。Producer 不直接把消息塞给 Consumer，而是把消息发到 Exchange，Exchange 根据 binding 把消息路由到 Queue，Consumer 再通过 ack/nack 表达处理结果。

它最擅长的不是极限吞吐，而是业务消息的可靠投递、复杂路由、失败重试和死信处理。

## 底层架构

RabbitMQ 的链路可以拆成六层：

1. 连接层：TCP 连接、AMQP 协议、channel 多路复用
2. 路由层：exchange 根据 direct、topic、fanout、headers 匹配 binding
3. 队列层：queue 保存消息并管理消费者
4. 确认层：ack、nack、reject、requeue 控制消息生命周期
5. 可靠性层：持久化、publisher confirm、镜像队列或 quorum queue
6. 异常层：TTL、死信交换机、重试队列、告警和限流

### 架构图

```text
producer
  |
AMQP channel
  |
exchange -- binding key --> queue
  |
consumer
  |
ack / nack / requeue
  |
dead letter exchange
```

这张图的重点是：RabbitMQ 的“智能”在 broker 侧，消息路由、确认和重试都由 broker 参与管理。

## 典型场景

适合 RabbitMQ 的场景：

- 业务任务分发和异步处理
- 订单、通知、邮件、审核等需要确认的消息
- topic/direct/fanout 等复杂路由
- 延迟处理、失败重试和死信兜底

不适合的场景：

- 超大规模日志流和埋点流
- 需要长时间保留、反复回放的大数据管道
- 消费顺序和吞吐都要求极高的事件流平台

## 底层原理

RabbitMQ 的核心算法和语义：

- 路由匹配：direct 精确匹配，topic 使用通配符模式匹配，fanout 广播
- 确认状态机：消息在 ready、unacked、acked、dead-letter 等状态之间流转
- prefetch 背压：限制消费者未确认消息数，避免慢消费者被压垮
- 至少一次投递：ack 前异常会重新投递，所以消费端必须幂等
- 死信转移：拒绝、过期或超过重试条件后进入 DLX

数学直觉主要在排队模型：当生产速率长期大于消费速率，队列长度会持续增长，最终表现为内存、磁盘、延迟和重试风暴。RabbitMQ 调优不是只调参数，而是让到达率、服务率和失败率重新平衡。

## 常用命令

### 1. 节点状态

```bash
rabbitmqctl status
rabbitmq-diagnostics check_running
rabbitmq-diagnostics check_local_alarms
```

这些命令用于确认节点是否运行、是否触发内存或磁盘告警。RabbitMQ 一旦触发 alarm，可能会阻塞生产者。

### 2. 查看队列和路由

```bash
rabbitmqctl list_queues name messages messages_ready messages_unacknowledged consumers
rabbitmqctl list_exchanges name type durable
rabbitmqctl list_bindings source_name destination_name routing_key
```

队列排障重点看 ready、unacked 和 consumers。ready 高说明积压，unacked 高说明消费者拿了消息但处理慢或没 ack。

### 3. 插件和管理台

```bash
rabbitmq-plugins enable rabbitmq_management
rabbitmqctl add_user admin strong-password
rabbitmqctl set_user_tags admin administrator
```

管理台适合看拓扑、积压和连接，但生产必须控制账号权限和公网暴露。

### 4. 策略和高可用

```bash
rabbitmqctl set_policy ha-all "^critical\\." '{"ha-mode":"all"}'
rabbitmqctl list_policies
```

现代版本更推荐 quorum queue 承担强可靠队列。老式镜像队列要谨慎使用，避免集群抖动时放大同步成本。

## 源码重点

RabbitMQ 使用 Erlang，建议按 AMQP 生命周期读：

- `rabbit_channel`：channel 如何处理 basic.publish、basic.consume、ack
- `rabbit_exchange`：exchange 声明、绑定和路由分发
- `rabbit_queue`：队列进出、消费者管理和投递
- `rabbit_amqqueue_process`：队列进程状态机
- `rabbit_dead_letter`：死信转发路径
- quorum 相关模块：Raft 思想下的复制队列

源码阅读路线：从 basic.publish 进入 channel，追 exchange route 到 queue，再追 basic.deliver 和 basic.ack。

## 典型落地方案

可靠业务消息方案：

- Producer 使用 publisher confirm，确认 broker 收到消息
- Exchange、Queue、Message 都使用持久化配置
- Consumer 手动 ack，业务处理成功后再确认
- 设置 prefetch，防止单消费者拿太多未确认消息
- 失败消息进入重试队列，多次失败后进入死信队列
- 消费端用业务唯一键保证幂等
- 监控 ready、unacked、deliver rate、ack rate、redeliver rate

### 重试和死信模板

```text
business exchange
  |
business queue
  |
consumer fails
  |
retry queue with ttl
  |
dead letter back to business exchange
  |
too many retries -> final dead queue
```

## 10 道面试题

### 1. RabbitMQ 和 Kafka 有什么差异？

RabbitMQ 强调路由、确认、重试和投递语义；Kafka 强调高吞吐、日志存储和消息回放。前者像业务消息路由器，后者像事件日志平台。

### 2. exchange 的几种类型是什么？

direct 按 routing key 精确匹配，topic 按通配符匹配，fanout 广播到所有绑定队列，headers 根据消息头匹配。

### 3. ack 为什么重要？

ack 是消费者告诉 broker 消息已成功处理的信号。没有 ack，消息不会被安全移除，异常时会重新投递。

### 4. 什么是死信队列？

消息被拒绝、过期、队列满或超过重试策略后，会被转发到死信交换机绑定的队列，用于后续补偿或人工处理。

### 5. prefetch 是什么？

prefetch 限制单个消费者未确认消息数量，是消费者侧背压机制。它防止慢消费者一次拿太多消息。

### 6. 如何保证消费者幂等？

使用业务唯一 ID、去重表、唯一索引或状态机判断，确保同一消息重复投递也不会重复扣款、发货或发通知。

### 7. 延迟消息怎么实现？

常见方案是 TTL 加死信交换机，或使用延迟消息插件。核心是让消息先停留一段时间，再路由到业务队列。

### 8. 为什么会重复消费？

至少一次投递语义下，消费者处理成功但 ack 前宕机，或网络导致 ack 丢失，broker 会重新投递。

### 9. requeue 有什么风险？

毒消息会反复回到队列并被再次消费，形成重试风暴。应限制重试次数，最终进入死信队列。

### 10. RabbitMQ 线上积压怎么处理？

先看 ready、unacked 和消费速率，再扩消费者、降低处理耗时、限制重试风暴、隔离毒消息，并检查是否触发磁盘或内存 alarm。
