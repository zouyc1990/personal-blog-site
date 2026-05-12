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

RabbitMQ 更像消息路由层。消息先进入 exchange，再根据绑定规则进入 queue，由消费者确认。

## 架构

1. Producer 发送消息到 exchange。
2. Exchange 按类型路由。
3. Queue 保存待消费消息。
4. Consumer ack/nack 消息。
5. Dead Letter 处理失败消息。

## 常用命令

```bash
rabbitmqctl status
rabbitmqctl list_queues
rabbitmqctl list_exchanges
rabbitmqctl list_bindings
rabbitmq-plugins enable rabbitmq_management
```

## 源码重点

- `rabbit_channel`：通道与协议流转
- `rabbit_queue`：队列存储与投递
- `rabbit_exchange`：交换机路由
- ack/nack/requeue：确认语义

## 典型落地方案

- 用 direct/topic/fanout 分离不同消息类型。
- 对失败消息统一进死信队列。
- 消费侧保持幂等，避免重复投递造成副作用。

## 10 道面试题

### 1. RabbitMQ 和 Kafka 有什么差异？

RabbitMQ 更强调路由和确认，Kafka 更强调吞吐和日志流。前者适合复杂投递语义，后者适合大规模事件流。

### 2. exchange 的几种类型分别是什么？

direct 按精确 key 路由，topic 按模式匹配，fanout 广播，headers 按头部匹配。

### 3. ack 为什么重要？

ack 决定消息是否可以从队列中移除。没有 ack，消息会被重新投递，可靠性和重复消费语义都依赖它。

### 4. 什么是死信队列？

当消息被拒绝、过期或达到最大重试条件时，进入死信队列做后续处理。

### 5. prefetch 是什么？

它限制消费者一次未确认消息的数量，用来防止某个消费者拿太多消息却处理不过来。

### 6. 如何保证消费者幂等？

记录业务唯一 ID、控制重复写入、使用去重表或幂等键，保证消息重复投递也不会产生副作用。

### 7. 延迟消息怎么实现？

可以用 TTL + 死信队列，或者使用专门插件和延迟交换机。

### 8. 为什么会出现重复消费？

因为消息投递通常追求至少一次语义，消费者在 ack 前宕机、超时或重试都可能导致重复。

### 9. requeue 会带来什么问题？

它可能导致消息反复回到队头，形成“毒消息”循环，拖慢整个队列。

### 10. 什么场景更适合 RabbitMQ？

业务事件路由复杂、投递确认重要、失败重试和死信处理清晰的场景更适合。
