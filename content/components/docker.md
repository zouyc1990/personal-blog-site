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

Docker 不是虚拟机，也不是单纯的打包工具。它的本质是一个围绕镜像、容器和 registry 的标准化交付系统。

它解决四个现实问题：

- 环境漂移：开发、测试、生产使用同一份镜像
- 依赖封装：把运行所需的库、二进制和启动方式打包起来
- 交付复用：镜像可以缓存、复制、签名、扫描和回滚
- 平台接管：容器可以交给 K8s 或其他调度系统统一管理

## 底层架构

Docker 的链路可以拆成五层：

1. 构建层：Dockerfile、BuildKit、build context、layer cache
2. 镜像层：layer、manifest、digest、registry
3. 运行时层：containerd、runc、OCI spec
4. 隔离层：namespace、cgroup、capabilities、seccomp
5. 文件系统层：overlayfs、copy-on-write、volume、bind mount

### 架构图

```text
Dockerfile
   |
BuildKit / cache
   |
image layer -> manifest -> registry
   |
containerd
   |
runc (OCI runtime)
   |
Linux namespace + cgroup + overlayfs
```

这条链路的关键点是：Docker 本身不直接“变成”容器，它把构建与运行的抽象标准化，然后交给 runtime 和内核去落地。

## 典型场景

适合 Docker 的场景：

- Web/API 服务交付
- CI 构建和测试环境
- 本地开发依赖编排
- 批处理任务和一次性作业
- 平台化制品发布

不适合把 Docker 当答案的场景：

- 需要大量有状态数据且没有明确持久化方案
- 需要深度硬件访问或特殊内核能力
- 还没解决应用本身的可观测和恢复问题

## 底层原理

Docker 的核心是三件事：

- 内容寻址：镜像 layer 用 digest 标识，保证内容唯一和可校验
- 分层复用：重复 layer 不再重复存储和传输
- 写时复制：运行时只有发生修改才写入可写层

这背后的数学直觉很简单：

- 哈希把内容映射成固定长度指纹，便于比较和缓存
- 有向无环图表示 layer 依赖，避免重复计算
- 写时复制把“全量复制”变成“按需复制”，显著降低启动成本

## 常用命令

### 1. 构建镜像

```bash
docker build -t app:1.0 .
```

作用是根据 Dockerfile 和上下文生成镜像。这里最重要的是 build context，不是当前目录里所有文件都会自动进镜像，真正决定内容的是 Dockerfile 里的 `COPY` 和 `.dockerignore`。

### 2. 启动容器

```bash
docker run --rm -p 8080:8080 app:1.0
```

作用是把镜像实例化为容器。`-p` 做端口映射，`--rm` 让测试容器退出后自动清理。生产里通常还会加环境变量、volume 和健康检查。

### 3. 查看容器状态

```bash
docker ps -a
docker logs -f <container>
docker exec -it <container> sh
docker inspect <container>
docker stats
docker images
```

这些命令分别对应：

- `ps -a`：看容器是否在跑
- `logs`：看程序输出和报错
- `exec`：进入容器内部检查环境
- `inspect`：看配置、挂载、网络、入口命令
- `stats`：看 CPU、内存、IO
- `images`：看镜像占用和标签

### 4. 镜像分发

```bash
docker pull nginx:1.27
docker tag app:1.0 registry.example.com/app:1.0
```

`pull` 拉取依赖镜像，`tag` 标记制品版本。生产环境更推荐使用 digest 发布，避免 tag 漂移导致“今天拉到的不是昨天那版”。

## 源码重点

Docker 最值得先读的三条路径是：

- `moby/builder`：Dockerfile 如何转成镜像层
- `containerd`：镜像拉取、快照、容器创建
- `runc`：namespace、cgroup、挂载、进程启动

### 读源码顺序

1. 先看 `moby/builder`，理解构建与 layer 的形成。
2. 再看 `containerd`，理解镜像、快照和容器生命周期。
3. 最后看 `runc` 的 `libcontainer`，理解 OCI runtime 如何进入内核层。

## 典型落地方案

- 所有服务用多阶段 Dockerfile
- 运行镜像只保留必要二进制和配置
- 统一使用不可变 tag 或 digest 发布
- 搭配镜像扫描、签名和非 root 用户
- 容器里只做单一职责，日志输出到 stdout，数据挂到 volume，配置从环境变量或挂载文件注入

### 一个最小生产模板

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

这个模板的关键不是 Node 或 NGINX，而是构建和运行彻底分离，最终镜像只保留运行时需要的东西。

## 10 道面试题

### 1. Docker 和虚拟机的核心差异是什么？

虚拟机把整个 guest OS 一起虚拟化，Docker 共享宿主机内核，只隔离进程视图和资源边界。前者更重，后者启动更快、镜像更轻。

### 2. 镜像分层为什么能加速构建？

每一层都按内容 hash 缓存，未变化的层可以直接复用。只要 Dockerfile 的前置步骤不变，后续构建就能跳过大量重复工作。

### 3. 什么是 copy-on-write？

只读层被多个容器共享，只有写入发生时才复制到可写层。这样既节省空间，又减少启动成本。

### 4. namespace 和 cgroup 分别隔离什么？

namespace 负责“看见什么”，比如进程、网络、挂载点；cgroup 负责“能用多少”，比如 CPU、内存和 IO。

### 5. 容器里为什么最好不要用 root？

root 会放大逃逸和误操作风险，也会让挂载卷权限更复杂。生产容器应该默认使用最小权限用户。

### 6. ENTRYPOINT 和 CMD 的区别是什么？

ENTRYPOINT 定义容器主程序，CMD 更像默认参数。前者稳定执行器，后者方便运行时覆盖。

### 7. 为什么容器默认写入会落到容器层？

因为底层通常是 overlayfs，基础镜像层是只读的，运行时修改只能写到上层可写层。

### 8. `docker inspect` 重点看什么？

看镜像、网络、挂载、环境变量、入口命令和健康检查。排障时这几个字段最能解释“为什么没起来”。

### 9. 你如何设计一个可回滚的镜像发布流程？

使用不可变 tag 或 digest 发布，流水线先做扫描和预发验证，再灰度上线。出问题时直接回滚到上一个已验证镜像。

### 10. Docker 镜像过大时你怎么排查？

先看基础镜像和依赖包，再看构建缓存、调试工具和 `.dockerignore`。通常多阶段构建是最有效的减肥方式。
