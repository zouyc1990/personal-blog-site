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

1. Kubernetes 的本质是什么？
2. etcd 为什么重要？
3. Pod Pending 常见原因有哪些？
4. CrashLoopBackOff 怎么定位？
5. Service 和 Ingress 分别解决什么问题？
6. HPA 的核心依据是什么？
7. Deployment 滚动更新怎么保证可用？
8. kubelet 负责什么？
9. CNI 和 CSI 分别是什么？
10. 你怎么设计一个生产可用的 K8s 应用模板？

