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

NGINX 的核心是事件驱动和非阻塞 IO。它通过少量 worker 处理大量连接。

## 架构

1. Master 进程管理配置和 worker。
2. Worker 用事件循环处理连接。
3. HTTP upstream 做反向代理。
4. Stream 模块处理 TCP/UDP。
5. 多种负载均衡策略决定后端选择。

## 常用命令

```bash
nginx -t
nginx -s reload
nginx -s stop
nginx -V
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
```

## 源码重点

- `src/event`：事件循环
- `src/http`：HTTP 请求处理
- `src/http/ngx_http_upstream*`：上游代理
- `src/http/ngx_http_upstream_round_robin.c`：轮询负载均衡

## 典型落地方案

- 用 NGINX 做入口代理和 TLS 终止。
- 用 upstream 配后端应用池。
- 配置超时、缓存和限流，防止流量风暴。

## 10 道面试题

### 1. NGINX 为什么高性能？

它采用事件驱动和非阻塞 IO，一个 worker 可以处理很多连接，避免了大量线程开销。

### 2. Master/Worker 模型是什么？

Master 负责配置和进程管理，Worker 负责处理请求。这样可以做到平滑重载和高并发处理。

### 3. 反向代理和负载均衡有什么区别？

反向代理负责替客户端转发请求，负载均衡是把请求分配给多个后端实例。

### 4. 为什么 NGINX 适合做入口层？

因为它擅长连接管理、TLS 终止、路由和限流，特别适合作为高流量边界层。

### 5. rewrite 和 location 如何匹配？

location 先按前缀、正则等规则匹配，rewrite 会影响 URI 路由和后续处理。

### 6. upstream 负载均衡算法有哪些？

轮询、加权轮询、最少连接等。选择依据是后端性能和流量特征。

### 7. `nginx -t` 检查什么？

它检查配置语法和引用文件是否正确，避免重载后直接把线上打挂。

### 8. NGINX 如何做限流？

通常通过漏桶/令牌桶思想限制请求速率，配合共享内存区记录状态。

### 9. 如何定位 502/504？

502 多看上游应用异常和连接错误，504 多看上游超时和后端处理时长。

### 10. NGINX 和网关的关系是什么？

NGINX 可以承担网关的部分能力，但现代网关通常还包括鉴权、路由、策略和插件体系。
