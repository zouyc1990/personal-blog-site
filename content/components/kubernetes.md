---
title: "Kubernetes"
domain: "Platform"
summary: "容器编排控制面，负责声明式调度、服务发现、存储和弹性治理。"
essence: "Kubernetes 本质是一个持续把现实状态拉回期望状态的分布式控制系统。"
scenarios: "适合微服务集群、多团队平台化、自动扩缩容、灰度发布和统一治理。"
sourceFocus: "pkg/scheduler、pkg/controller、pkg/kubelet、staging/src/k8s.io/api 关键路径。"
colors: "#326ce5,#e8eee0,#0f7b78"
---

## 本质

Kubernetes 不是容器启动器，而是一个期望状态系统。你写的是目标，控制器负责执行差异修正。

## 架构

1. API Server 接收请求。
2. etcd 保存对象状态。
3. Scheduler 负责调度决策。
4. Controller 负责副本和生命周期。
5. Kubelet 在节点上执行启动。
6. CNI/CSI 负责网络和存储。

## 常用命令

```bash
kubectl get pod -A
kubectl describe pod <name>
kubectl logs -f <pod>
kubectl apply -f deploy.yaml
kubectl delete pod <name>
kubectl rollout status deploy/<name>
kubectl rollout undo deploy/<name>
kubectl get events --sort-by=.lastTimestamp
kubectl top pod
kubectl exec -it <pod> -- sh
```

## 源码重点

- `pkg/scheduler`：过滤和打分
- `pkg/controller`：副本控制与回收
- `pkg/kubelet`：节点执行器
- `staging/src/k8s.io/api`：对象模型

## 典型落地方案

- 用 Deployment/Service/Ingress 构成标准应用模板。
- 用 requests/limits、HPA、PDB 建立资源和稳定性边界。
- 用 namespace、RBAC、NetworkPolicy 做租户隔离。

## 10 道面试题

### 1. Kubernetes 的本质是什么？

它是一个声明式分布式控制系统。你定义期望状态，控制器持续把现实拉回这个状态。

### 2. etcd 为什么重要？

etcd 是集群事实来源，保存了所有对象状态。没有它，控制面就失去一致性基础。

### 3. Pod Pending 常见原因有哪些？

资源不足、污点和容忍度不匹配、亲和性约束、PVC 未绑定、调度策略不满足，都可能让 Pod 卡在 Pending。

### 4. CrashLoopBackOff 怎么定位？

先看 `describe` 里的事件，再看容器日志、启动命令、配置文件和探针设置。大多数问题都在启动前几秒暴露。

### 5. Service 和 Ingress 分别解决什么问题？

Service 负责集群内稳定服务发现和负载均衡，Ingress 负责集群外 HTTP/HTTPS 入口路由。

### 6. HPA 的核心依据是什么？

通常是 CPU、内存或自定义指标和目标值之间的比例关系。它本质上是一个反馈控制器。

### 7. Deployment 滚动更新怎么保证可用？

靠新旧 ReplicaSet 并存、readiness gate、maxSurge 和 maxUnavailable 共同控制。只有新 Pod 就绪后才逐步切流。

### 8. kubelet 负责什么？

它在节点侧执行调谐：拉镜像、挂卷、启容器、做探针、回报状态。

### 9. CNI 和 CSI 分别是什么？

CNI 负责容器网络接入，CSI 负责存储挂载。它们把网络和存储能力外接给 K8s。

### 10. 你怎么设计一个生产可用的 K8s 应用模板？

至少包含 requests/limits、readiness/liveness probe、ConfigMap/Secret、RBAC、Ingress、HPA、监控和日志采集。
