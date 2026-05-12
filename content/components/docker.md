---
title: "Docker"
domain: "Container"
summary: "容器交付的标准工具，负责镜像构建、分发和运行时入口。"
essence: "Docker 本质上是把应用依赖、文件系统和启动方式封装成可复现的交付单元。"
scenarios: "适合 Web/API、批处理、CI 构建环境、本地依赖编排和平台化交付。"
sourceFocus: "moby 的 image、container、builder 路径，runc 的 OCI 启动链。"
colors: "#0f7b78,#d7ece7,#de6449"
---

## 本质

Docker 的本质不是“虚拟机”，而是一个围绕镜像、容器和 registry 的交付系统。它解决的是可复制性和环境漂移问题。

## 架构

1. Dockerfile 生成镜像层。
2. BuildKit 负责构建和缓存。
3. Registry 存储 manifest 和 layer。
4. containerd/runc 拉起 OCI 容器。
5. Linux namespaces/cgroups 提供隔离。

## 底层原理

Docker 的核心是“内容寻址 + 分层复用 + 运行时隔离”。

- 内容寻址：镜像 layer 用 digest 标识，避免重复传输。
- 分层复用：共同基础层只存一份。
- 写时复制：运行时只对修改发生复制。
- OCI 标准：把镜像和运行时接口统一起来。

## 常用命令

```bash
docker build -t app:1.0 .
docker run --rm -p 8080:8080 app:1.0
docker ps -a
docker logs -f <container>
docker exec -it <container> sh
docker inspect <container>
docker stats
docker images
docker pull nginx:1.27
docker tag app:1.0 registry.example.com/app:1.0
```

## 源码重点

- `moby/daemon`：容器生命周期管理
- `moby/builder`：构建流程
- `containerd`：容器运行与镜像管理
- `runc`：OCI runtime 启动容器进程

## 典型落地方案

- 所有服务用多阶段 Dockerfile。
- 运行镜像只保留必要二进制和配置。
- 使用不可变 tag 或 digest 发布。
- 搭配扫描、签名和非 root 用户运行。

## 10 道面试题

1. Docker 和虚拟机的核心差异是什么？
2. 镜像分层为什么能加速构建？
3. 什么是 copy-on-write？
4. namespace 和 cgroup 分别隔离什么？
5. 容器里为什么最好不要用 root？
6. ENTRYPOINT 和 CMD 的区别是什么？
7. 为什么容器默认写入会落到容器层？
8. `docker inspect` 重点看什么？
9. 你如何设计一个可回滚的镜像发布流程？
10. Docker 镜像过大时你怎么排查？
