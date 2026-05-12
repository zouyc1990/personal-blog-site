---
title: "NGINX"
domain: "Middleware"
summary: "高性能 Web 代理和流量入口，负责反向代理、TLS、静态资源和限流。"
essence: "NGINX 本质是事件驱动的高并发连接处理器。"
scenarios: "适合反向代理、静态资源、负载均衡、TLS 终止和网关入口。"
sourceFocus: "src/event、http、stream、upstream、balancer 相关路径。"
colors: "#d8a321,#f1dfb8,#0f7b78"
---

## 本质

NGINX 的本质是一个事件驱动的连接处理器。它通过少量 worker、非阻塞 I/O 和模块化请求处理链路，承担反向代理、静态资源、TLS、负载均衡和限流。

一句话理解：NGINX 不擅长复杂业务逻辑，它擅长把大量连接稳定、低成本地接住、路由出去并保护后端。

## 底层架构

NGINX 的链路分成五层：

1. 进程层：master 管理 worker、配置加载和平滑重启
2. 事件层：worker 使用 epoll/kqueue 等事件机制处理连接
3. HTTP 层：请求解析、phase handler、location 匹配、rewrite 和 access
4. Upstream 层：反向代理、连接池、负载均衡、超时和重试
5. 模块层：gzip、cache、limit、stream、ssl 等能力按模块接入

### 架构图

```text
client
  |
master process
  |
worker event loop
  |
http phases -> location -> upstream
  |
backend servers
  |
access log / error log / metrics
```

图里的关键点是 worker 事件循环：一个 worker 不为每个连接创建线程，而是用事件通知驱动读写。

## 典型场景

适合 NGINX 的场景：

- 网站入口和反向代理
- 静态资源和下载分发
- TLS 终止和证书管理
- HTTP/TCP 负载均衡
- 限流、限连接、缓存和基础安全边界

不适合让 NGINX 单独承担的场景：

- 复杂鉴权、动态策略和服务治理
- 深度 API 管理、插件化网关和多租户控制面
- 需要业务状态和事务语义的逻辑

## 底层原理

NGINX 高性能的核心原理：

- 事件驱动：epoll/kqueue 让 worker 在连接可读写时再处理
- 非阻塞 I/O：慢连接不会长期占住线程
- 多进程模型：worker 之间隔离，master 可平滑 reload
- 零拷贝优化：静态文件发送可以减少数据拷贝
- 共享内存区：限流、缓存元数据等跨 worker 共享状态

负载均衡里的算法：

- round-robin：轮询，简单稳定
- weighted round-robin：按权重分配流量
- least_conn：选择当前连接数少的后端
- ip_hash/hash：把同一 key 尽量打到同一后端

限流的数学直觉通常是漏桶或令牌桶：把突发流量整形成稳定速率，保护后端队列不被瞬间打爆。

## 常用命令

### 1. 配置检查和重载

```bash
nginx -t
nginx -s reload
nginx -s stop
nginx -V
```

`nginx -t` 必须在 reload 前执行；`reload` 会让 master 加载新配置并优雅替换 worker；`-V` 查看编译模块和 OpenSSL 等依赖。

### 2. 日志排查

```bash
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
grep " 502 " /var/log/nginx/access.log
grep "upstream timed out" /var/log/nginx/error.log
```

access log 看请求、状态码、耗时和 upstream；error log 看连接失败、超时、权限和配置问题。

### 3. 配置定位

```bash
nginx -T
curl -I https://example.com
curl -v https://example.com/api/health
```

`nginx -T` 会输出完整配置，适合排查 include 后实际生效内容。`curl -v` 看 TLS、响应头和连接过程。

### 4. 连接和端口

```bash
ss -lntp | grep nginx
ss -ant | awk '{print $1}' | sort | uniq -c
```

用于确认监听端口、连接状态和是否出现大量 TIME-WAIT、CLOSE-WAIT。

## 源码重点

建议按请求生命周期读：

- `src/core`：内存池、配置解析、基础数据结构
- `src/event`：事件模型、连接和定时器
- `src/http/ngx_http_request.c`：HTTP 请求创建和处理
- `src/http/ngx_http_core_module.c`：location 和 phase handler
- `src/http/ngx_http_upstream.c`：反向代理和上游交互
- `src/http/ngx_http_upstream_round_robin.c`：轮询负载均衡

源码阅读路线：从 worker accept 连接开始，追请求解析、phase 执行、location 命中、upstream 转发和日志写入。

## 典型落地方案

生产入口层配置要包含：

- TLS 终止和安全协议版本限制
- upstream 后端池和健康检查策略
- proxy timeout、buffer、body size 等边界
- access log 带 request time 和 upstream time
- 限流和限连接保护核心接口
- 静态资源缓存和压缩
- reload 前配置检查，变更可回滚

### 反向代理模板

```nginx
upstream app_backend {
    least_conn;
    server 10.0.0.11:8080 max_fails=3 fail_timeout=10s;
    server 10.0.0.12:8080 max_fails=3 fail_timeout=10s;
}

server {
    listen 443 ssl http2;
    server_name example.com;

    location /api/ {
        proxy_pass http://app_backend;
        proxy_connect_timeout 3s;
        proxy_read_timeout 30s;
        proxy_set_header Host $host;
        proxy_set_header X-Request-Id $request_id;
    }
}
```

## 10 道面试题

### 1. NGINX 为什么高性能？

因为它使用事件驱动、非阻塞 I/O 和多 worker 模型，用少量进程处理大量连接，避免一连接一线程的高开销。

### 2. Master/Worker 模型是什么？

Master 负责读取配置、管理 worker、平滑重载和信号处理；worker 负责实际处理连接和请求。

### 3. 反向代理和负载均衡有什么区别？

反向代理是替客户端访问后端服务，负载均衡是在多个后端之间选择一个目标。负载均衡通常是反向代理的一部分。

### 4. 为什么 NGINX 适合入口层？

它擅长连接管理、TLS、路由、静态资源、限流和基础安全控制，可以把后端从连接洪峰里保护出来。

### 5. location 匹配大致怎么理解？

先处理精确匹配和最长前缀，再根据规则处理正则匹配。排查路由问题时要看最终命中的 location，而不是只看配置顺序。

### 6. upstream 负载均衡算法有哪些？

常见有轮询、加权轮询、最少连接、ip_hash 和通用 hash。选择取决于后端能力、连接时长和会话粘性需求。

### 7. `nginx -t` 检查什么？

它检查配置语法、include 文件、证书路径和模块配置是否可加载，避免错误配置 reload 到线上。

### 8. NGINX 如何做限流？

通过共享内存记录 key 的请求状态，按漏桶或令牌桶思想控制请求速率，超限后延迟或拒绝。

### 9. 如何定位 502/504？

502 多看上游连接失败、进程崩溃、协议错误；504 多看上游响应慢、超时配置和后端处理耗时。

### 10. NGINX 和 API 网关有什么关系？

NGINX 可以作为网关的数据面，但完整 API 网关通常还需要控制面、认证、鉴权、插件、灰度、限额和审计。
