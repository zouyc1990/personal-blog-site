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

1. RabbitMQ 和 Kafka 有什么差异？
2. exchange 的几种类型分别是什么？
3. ack 为什么重要？
4. 什么是死信队列？
5. prefetch 是什么？
6. 如何保证消费者幂等？
7. 延迟消息怎么实现？
8. 为什么会出现重复消费？
9. requeue 会带来什么问题？
10. 什么场景更适合 RabbitMQ？

