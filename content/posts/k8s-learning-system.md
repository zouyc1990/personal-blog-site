---
title: "K8s：从对象模型拆到生产排障"
category: "K8s"
date: "2026-05-12"
readTime: "22 min"
excerpt: "快速掌握 Kubernetes 要理解它的本质、控制面架构、适用场景，以及调度、共识、弹性伸缩背后的算法和数学原理。"
quote: "顶层看期望状态，底层看控制器如何把现实拉回声明。"
topThinking: "先理解 Kubernetes 是声明式控制系统，不是简单的容器启动器。"
deepDive: "拆到 Pod、Deployment、Service、Ingress、ConfigMap、Secret、PVC、RBAC、调度、探针、HPA 和事件。"
colors: "#326ce5,#e8eee0,#0f7b78"
---

## 顶层思维：K8s 是期望状态系统

Kubernetes 的核心不是 `kubectl apply`，而是你声明期望状态，控制器持续观察现实状态并尝试修正偏差。

先抓住四条主线：

- Workload：Pod、Deployment、StatefulSet、DaemonSet 管应用生命周期
- Traffic：Service、Ingress、Gateway API 管服务发现和入口流量
- Config：ConfigMap、Secret、ServiceAccount 管配置、密钥和身份
- Platform：Node、Scheduler、CNI、CSI、HPA、RBAC 管资源、安全和扩缩容

## 本质：K8s 是分布式系统的期望状态控制器

Kubernetes 的本质不是“管理容器”，而是一个声明式分布式控制系统。

你提交的是期望状态：需要几个副本、开放什么端口、需要多少资源、如何探活、如何挂载存储。控制面不断观察现实状态，并通过控制器把现实拉向期望。

这个思想来自控制论：系统有目标值，有观测值，有误差，有调节动作。Kubernetes 里的 controller loop 就是在不断执行：

1. 观察当前状态
2. 比较期望状态
3. 计算差异
4. 发起修正动作
5. 继续观察

## 底层架构：控制面、节点面和扩展接口

Kubernetes 可以拆成三层：

- 控制面：API Server、etcd、Scheduler、Controller Manager、Admission
- 节点面：Kubelet、container runtime、kube-proxy、CNI、CSI
- 扩展面：CRD、Operator、Webhook、Helm、Gateway/Ingress Controller

一次创建 Pod 的完整路径：

1. API Server 校验请求，经过认证、鉴权、准入控制
2. 对象写入 etcd，成为集群事实来源
3. Scheduler 监听到未绑定节点的 Pod，执行过滤和打分
4. Kubelet 监听到分配给自己的 Pod，调用 runtime 启动容器
5. CNI 配网络，CSI 挂存储，探针决定是否接入流量
6. Controller 持续检查副本数、滚动发布和故障恢复

## 典型场景：什么时候该用 K8s

适合 Kubernetes 的场景：

- 微服务数量多，需要统一发布、伸缩、回滚和服务发现
- 多团队共享基础设施，需要资源配额、命名空间和权限治理
- 需要自动恢复、弹性伸缩、灰度发布和可观测标准化
- 希望把平台能力沉淀成 Operator、CRD 或内部 PaaS

不适合直接上 Kubernetes 的场景：

- 服务数量很少，发布频率低，团队没有平台运维能力
- 业务复杂度低，但引入 K8s 后运维复杂度明显高于收益
- 关键依赖没有监控、日志、备份和容量治理，先上 K8s 只会放大混乱

## 算法与数学原理

- Raft 共识：etcd 用 Raft 保证多节点日志一致。核心是 leader、term、quorum，多数派确认后日志才算提交。
- 调度过滤与打分：Scheduler 先过滤不可用节点，再给可用节点打分。它不是寻找全局最优，而是在约束下快速找到足够好的节点。
- Bin packing：资源调度类似装箱问题，要把不同 CPU/内存需求的 Pod 放到有限节点上。这个问题通常没有低成本全局最优解，所以系统使用启发式策略。
- 指数退避：失败重试不是固定频率，而是逐步拉长等待时间，避免故障时把压力继续打到依赖上。
- HPA 控制公式：副本数近似按 `当前副本数 * 当前指标 / 目标指标` 调整。它背后是反馈控制，但会受到指标延迟和冷启动影响。

## 底层拆解：一次发布如何落到集群

一次 Deployment 更新，大致会经过这条链路：

1. API Server 接收声明并写入 etcd
2. Deployment Controller 创建新的 ReplicaSet
3. ReplicaSet Controller 创建 Pod
4. Scheduler 为 Pod 选择 Node
5. Kubelet 拉镜像、挂载卷、启动容器
6. Readiness Probe 通过后，Endpoint 才接入流量
7. Service 或 Ingress 把请求转发到可用 Pod

这条链路就是排障地图。Pod 不启动看事件和镜像，不能调度看资源和污点，不能访问看 Service、Endpoint、NetworkPolicy 和 DNS。

## 能力地图

- 对象模型：Pod、ReplicaSet、Deployment、StatefulSet、DaemonSet
- 流量入口：Service、EndpointSlice、Ingress、Gateway API、CoreDNS
- 配置身份：ConfigMap、Secret、ServiceAccount、RBAC
- 调度资源：requests、limits、taints、tolerations、affinity、priority
- 存储状态：PV、PVC、StorageClass、StatefulSet、有状态服务滚动策略
- 弹性稳定：readiness、liveness、startup probe、HPA、PDB、滚动发布
- 排障证据：events、logs、describe、metrics、container status、node condition

## 快速实验清单

- 写 Deployment、Service、Ingress、ConfigMap、Secret 的最小 YAML
- 故意写错镜像 tag，观察 `kubectl describe pod` 的事件
- 设置 readinessProbe，再验证未就绪 Pod 不接流量
- 设置 requests 和 limits，观察调度与 OOMKilled
- 用 Helm 安装一个组件，再查看渲染后的 YAML

## 排障检查点

- Pod Pending：看资源不足、nodeSelector、affinity、taints、PVC 绑定
- ImagePullBackOff：看镜像名、tag、仓库权限、imagePullSecret 和网络
- CrashLoopBackOff：看启动命令、配置文件、依赖连接、探针是否过早
- Service 不通：看 selector 是否匹配、Endpoint 是否生成、端口名和 targetPort
- Ingress 不通：看 IngressClass、Controller 日志、TLS secret 和后端 Service
- 扩容无效：看 HPA 指标源、requests 是否设置、PDB 是否限制驱逐

## 最小上线配置

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api
spec:
  replicas: 3
  selector:
    matchLabels:
      app: api
  template:
    metadata:
      labels:
        app: api
    spec:
      containers:
        - name: api
          image: example/api@sha256:...
          ports:
            - containerPort: 8080
          resources:
            requests:
              cpu: 300m
              memory: 512Mi
            limits:
              memory: 1Gi
          readinessProbe:
            httpGet:
              path: /ready
              port: 8080
          livenessProbe:
            httpGet:
              path: /live
              port: 8080
```

最小上线配置必须回答四个问题：谁来接流量，何时接流量，需要多少资源，失败后如何恢复。

## 官方文档入口

- Kubernetes Concepts: https://kubernetes.io/docs/concepts/
- Kubernetes Tasks: https://kubernetes.io/docs/tasks/
- Helm Docs: https://helm.sh/docs/
- etcd Docs: https://etcd.io/docs/
