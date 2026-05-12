---
title: "K8s：从对象模型拆到生产排障"
category: "K8s"
date: "2026-05-12"
readTime: "11 min"
excerpt: "快速掌握 Kubernetes 要从声明式对象、控制器循环和服务发现入手，再进入调度、存储、网络、安全和可观测性。"
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

## 快速实验清单

- 写 Deployment、Service、Ingress、ConfigMap、Secret 的最小 YAML
- 故意写错镜像 tag，观察 `kubectl describe pod` 的事件
- 设置 readinessProbe，再验证未就绪 Pod 不接流量
- 设置 requests 和 limits，观察调度与 OOMKilled
- 用 Helm 安装一个组件，再查看渲染后的 YAML

## 官方文档入口

- Kubernetes Concepts: https://kubernetes.io/docs/concepts/
- Kubernetes Tasks: https://kubernetes.io/docs/tasks/
- Helm Docs: https://helm.sh/docs/
- etcd Docs: https://etcd.io/docs/

