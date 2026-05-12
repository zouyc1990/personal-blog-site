---
title: "容器：从镜像构建拆到运行时隔离"
category: "容器"
date: "2026-05-12"
readTime: "14 min"
excerpt: "快速掌握容器要把镜像构建、运行时隔离、网络、存储、安全和发布回滚串成一条真实交付链路。"
quote: "顶层看交付标准化，底层看进程、文件系统和网络命名空间。"
topThinking: "先把容器当成应用交付单元，建立构建、发布、回滚和安全扫描的标准链路。"
deepDive: "拆到 Dockerfile、镜像分层、cgroups、namespaces、bridge 网络、volume、registry 和运行时权限。"
colors: "#0f7b78,#d7ece7,#de6449"
---

## 顶层思维：容器解决的是交付一致性

容器不是轻量虚拟机，核心价值是把应用、依赖、启动命令和运行约束封装成一个可以重复交付的单元。

先建立这条生产链路：

- 开发环境和生产环境使用同一份镜像
- Dockerfile 固化构建步骤，避免人工配置漂移
- Registry 管理版本，发布和回滚都基于不可变镜像 digest
- Compose 用来理解本地多服务依赖，Kubernetes 用来承接生产调度
- SBOM、镜像扫描、非 root 运行和只读文件系统进入默认流程
- 日志写 stdout，配置从环境变量或挂载文件进入容器

## 底层拆解：容器本质是被隔离的进程

容器启动后，本质上还是宿主机上的进程，只是被 Linux 内核能力限制在特定边界内。

你需要能说清楚这些机制：

- namespaces 隔离进程、网络、挂载点、主机名和用户视图
- cgroups 限制 CPU、内存、IO 等资源使用
- union filesystem 让镜像分层复用，并把运行时写入放在容器层
- bridge 网络让容器获得虚拟网卡，再通过 NAT 访问外部网络
- volume 把数据生命周期从容器生命周期里拆出来
- capabilities、seccomp、AppArmor/SELinux 决定容器能调用哪些内核能力

## 能力地图

- 构建：会写多阶段 Dockerfile，理解 build context、layer cache、`.dockerignore`
- 运行：会解释 entrypoint、cmd、env、healthcheck、restart policy
- 网络：会排查容器 DNS、端口映射、bridge 网络和容器间访问
- 存储：会区分 bind mount、named volume、临时文件和镜像层写入
- 安全：会配置非 root 用户、最小权限、镜像扫描和 secret 注入
- 发布：会用不可变 tag/digest、回滚策略和 registry 权限控制

## 快速实验清单

1. 写一个多阶段 Dockerfile，把构建环境和运行环境分开
2. 用 `docker inspect` 查看镜像、网络、挂载和环境变量
3. 用 `docker stats` 观察 CPU 和内存限制
4. 用 Compose 启动 Web、Redis、PostgreSQL 三个服务
5. 推送镜像到 Registry，再用固定 tag 回滚

## 排障检查点

- 启动失败：先看镜像是否存在、入口命令是否可执行、环境变量是否缺失
- 端口不通：确认应用监听地址是 `0.0.0.0`，再看端口映射和防火墙
- 容器频繁退出：查看 exit code、应用日志、healthcheck 和 OOM 事件
- 磁盘异常：确认写入位置是不是容器层，生产数据必须放到 volume
- 镜像过大：检查基础镜像、构建缓存、包管理器缓存和调试工具残留

## 一个更像生产的 Dockerfile

```dockerfile
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html
USER nginx
EXPOSE 8080
HEALTHCHECK CMD wget -qO- http://127.0.0.1:8080/ || exit 1
```

这段配置的重点不是 Node 或 NGINX，而是把构建工具链和运行镜像拆开，减少攻击面，让最终镜像只保留运行所需内容。

## 官方文档入口

- Docker Docs: https://docs.docker.com/
- Dockerfile Reference: https://docs.docker.com/reference/dockerfile/
- Docker Compose: https://docs.docker.com/compose/
- Docker Engine Security: https://docs.docker.com/engine/security/
