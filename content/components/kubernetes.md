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

Kubernetes 不是“启动容器的工具”，而是一个声明式控制系统。用户提交期望状态，控制面保存对象，控制器持续观察现实状态，再通过调谐循环把现实拉回期望。

它的本质可以压缩成一句话：API 对象是意图，controller 是反馈回路，kubelet 是节点执行器，etcd 是事实来源。

## 底层架构

Kubernetes 的链路分成六层：

1. API 层：API Server 统一接收请求、鉴权、准入、校验和持久化
2. 状态层：etcd 保存所有对象状态和版本
3. 调度层：Scheduler 根据资源、亲和性、污点、拓扑和插件打分选择节点
4. 控制层：Controller Manager 管理 Deployment、ReplicaSet、Node、Job 等对象
5. 节点层：kubelet 拉镜像、挂卷、创建 Pod、执行探针、上报状态
6. 插件层：CNI 管网络，CSI 管存储，CRI 对接 containerd

### 架构图

```text
kubectl / controller / ci
          |
      API Server
          |
        etcd
          |
Scheduler + Controller Manager
          |
       kubelet
          |
 containerd -> runc -> Linux kernel
          |
     CNI / CSI / probes
```

这张图要抓住一个关键点：K8s 的控制面不直接管理业务进程，它通过对象状态、watch 事件和节点代理完成间接控制。

## 典型场景

适合 Kubernetes 的场景：

- 多服务、多团队、多环境统一交付
- 需要滚动发布、灰度、回滚和自动扩缩容
- 需要统一服务发现、配置、密钥、网络策略和资源配额
- 需要把 Docker 镜像纳入平台化调度

不适合一上来就用 Kubernetes 的场景：

- 服务数量很少，团队还没有容器化基础
- 应用没有健康检查、日志和配置分离
- 有状态系统没有备份、恢复、容量和故障演练方案

## 底层原理

Kubernetes 的核心算法不是某一个神秘算法，而是一组控制论思想：

- 声明式 API：对象的 spec 是期望，status 是现实
- 调谐循环：controller 不断计算 spec 和 status 的差异
- 乐观并发：对象 resourceVersion 避免并发更新互相覆盖
- 调度优化：过滤节点后对候选节点打分，选择综合分最高的节点
- 反馈控制：HPA 用指标和目标值比例计算副本数，类似负反馈系统

调度里的数学直觉：

- 过滤阶段是约束满足问题：不满足硬约束的节点直接剔除
- 打分阶段是多目标加权：资源、亲和性、拓扑分散等分数加权求和
- 扩缩容是比例控制：当前副本数乘以当前指标与目标指标的比值

## 常用命令

### 1. 查看对象和事件

```bash
kubectl get pod -A
kubectl get deploy,svc,ingress -n <namespace>
kubectl get events -A --sort-by=.lastTimestamp
```

`get` 用来快速确认对象是否存在、状态是否异常。事件按时间排序后，通常能看到调度失败、镜像拉取失败、探针失败和挂卷失败的第一现场。

### 2. 排查单个 Pod

```bash
kubectl describe pod <pod> -n <namespace>
kubectl logs -f <pod> -n <namespace>
kubectl logs <pod> -c <container> --previous -n <namespace>
kubectl exec -it <pod> -n <namespace> -- sh
```

`describe` 看事件、镜像、环境变量、挂载、探针和调度结果；`logs --previous` 专门看上一次崩溃容器的日志；`exec` 用于确认容器内文件、DNS 和网络连通性。

### 3. 发布和回滚

```bash
kubectl apply -f deploy.yaml
kubectl rollout status deploy/<name> -n <namespace>
kubectl rollout history deploy/<name> -n <namespace>
kubectl rollout undo deploy/<name> -n <namespace>
```

这组命令对应标准发布闭环：提交期望状态，等待滚动完成，保留发布历史，异常时回滚到上一版 ReplicaSet。

### 4. 资源和容量

```bash
kubectl top node
kubectl top pod -A
kubectl describe node <node>
kubectl get hpa -A
```

`top` 看实时资源，`describe node` 看节点容量、污点、压力和已分配资源，`get hpa` 看扩缩容是否被指标驱动。

## 源码重点

建议按对象流转顺序读源码：

- `staging/src/k8s.io/api`：先理解 Pod、Deployment、Service 等 API 对象字段
- `pkg/apiserver`：请求如何鉴权、准入、校验并写入 etcd
- `pkg/scheduler`：调度框架如何执行 filter、score、bind
- `pkg/controller`：Deployment/ReplicaSet 等控制器如何做调谐
- `pkg/kubelet`：节点如何 syncPod、调用 CRI、执行 probe 和回报状态

源码阅读时不要从所有包开始扫，先追一个 Pod 的生命周期：创建 Deployment，生成 ReplicaSet，生成 Pod，调度绑定节点，kubelet 拉起容器，readiness 变 true，Service 开始转发。

## 典型落地方案

一个生产应用模板至少包含：

- Deployment：声明副本数、镜像、资源、探针和滚动策略
- Service：提供稳定虚拟 IP 和服务发现
- Ingress/Gateway：暴露 HTTP 入口、TLS 和路由规则
- ConfigMap/Secret：把配置和密钥从镜像里拆出来
- HPA/PDB：控制扩缩容和维护时的最小可用
- RBAC/NetworkPolicy：限制权限和网络访问范围
- Observability：日志、指标、trace 和告警规则

### 最小生产模板

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: app
spec:
  replicas: 3
  strategy:
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  selector:
    matchLabels:
      app: app
  template:
    metadata:
      labels:
        app: app
    spec:
      containers:
        - name: app
          image: registry.example.com/app:1.0.0
          ports:
            - containerPort: 8080
          resources:
            requests:
              cpu: 200m
              memory: 256Mi
            limits:
              cpu: 1
              memory: 512Mi
          readinessProbe:
            httpGet:
              path: /healthz
              port: 8080
          livenessProbe:
            httpGet:
              path: /livez
              port: 8080
```

## 10 道面试题

### 1. Kubernetes 的本质是什么？

它是声明式分布式控制系统。用户声明 spec，控制器持续观察 status，通过调谐循环把现实状态拉回期望状态。

### 2. etcd 为什么重要？

etcd 是集群事实来源，保存对象状态、版本和 watch 事件。控制面所有决策都依赖它，一旦丢失就会失去一致性基础。

### 3. Pod Pending 常见原因有哪些？

资源不足、节点污点不容忍、亲和性不满足、PVC 未绑定、镜像拉取前置条件失败、调度插件过滤掉所有节点。

### 4. CrashLoopBackOff 怎么定位？

先看 `describe` 事件，再看 `logs --previous`。重点检查启动命令、配置、环境变量、依赖服务、权限和 liveness probe 是否过早杀进程。

### 5. Service 和 Ingress 分别解决什么？

Service 解决集群内稳定访问和负载均衡；Ingress 解决集群外 HTTP/HTTPS 入口、域名、TLS 和路径路由。

### 6. HPA 的核心算法是什么？

典型公式是目标副本数等于当前副本数乘以当前指标与目标指标的比值。它是一个基于观测指标的反馈控制器。

### 7. Deployment 滚动更新如何保证可用？

通过新旧 ReplicaSet 并存、readiness probe、maxSurge 和 maxUnavailable 控制替换节奏，只有新 Pod 就绪后才继续下一个批次。

### 8. kubelet 负责什么？

kubelet 是节点代理，负责拉镜像、挂载卷、调用 CRI 创建容器、执行探针、采集状态并回报 API Server。

### 9. CNI、CSI、CRI 分别是什么？

CNI 接入网络，CSI 接入存储，CRI 接入容器运行时。它们把底层基础设施能力标准化给 Kubernetes 使用。

### 10. 如何设计一个生产可用的 K8s 应用模板？

必须包含资源 requests/limits、readiness/liveness、滚动策略、Service/Ingress、ConfigMap/Secret、HPA/PDB、RBAC、日志指标和可回滚镜像版本。
