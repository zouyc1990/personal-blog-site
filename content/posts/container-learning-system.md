---
title: "容器：从镜像构建拆到运行时隔离"
category: "容器"
date: "2026-05-12"
readTime: "9 min"
excerpt: "快速掌握容器要先理解镜像、进程、网络、存储和安全边界，再用 Dockerfile、Compose 和 Registry 串起交付链路。"
quote: "顶层看交付标准化，底层看进程、文件系统和网络命名空间。"
topThinking: "先把容器当成应用交付单元，建立构建、发布、回滚和安全扫描的标准链路。"
deepDive: "拆到 Dockerfile、镜像分层、cgroups、namespaces、bridge 网络、volume、registry 和运行时权限。"
colors: "#0f7b78,#d7ece7,#de6449"
---

## 顶层思维：容器解决的是交付一致性

容器不是轻量虚拟机，核心价值是把应用、依赖、启动命令和运行约束封装成一个可以重复交付的单元。

先建立这条主线：

- 开发环境和生产环境使用同一份镜像
- Dockerfile 固化构建步骤，避免人工配置漂移
- Registry 管理版本，发布和回滚都基于不可变镜像标签
- Compose 用来理解多服务编排，Kubernetes 用来承接生产调度
- 安全扫描、最小权限和非 root 运行要进入默认流程

## 底层拆解：容器本质是被隔离的进程

容器启动后，本质上还是宿主机上的进程，只是被 Linux 内核能力限制在特定边界内。

你需要能说清楚这些机制：

- namespaces 隔离进程、网络、挂载点、主机名和用户视图
- cgroups 限制 CPU、内存、IO 等资源使用
- union filesystem 让镜像分层复用，并把运行时写入放在容器层
- bridge 网络让容器获得虚拟网卡，再通过 NAT 访问外部网络
- volume 把数据生命周期从容器生命周期里拆出来

## 快速实验清单

1. 写一个多阶段 Dockerfile，把构建环境和运行环境分开
2. 用 `docker inspect` 查看镜像、网络、挂载和环境变量
3. 用 `docker stats` 观察 CPU 和内存限制
4. 用 Compose 启动 Web、Redis、PostgreSQL 三个服务
5. 推送镜像到 Registry，再用固定 tag 回滚

## 官方文档入口

- Docker Docs: https://docs.docker.com/
- Dockerfile Reference: https://docs.docker.com/reference/dockerfile/
- Docker Compose: https://docs.docker.com/compose/
- Docker Engine Security: https://docs.docker.com/engine/security/

