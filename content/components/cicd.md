---
title: "CI/CD"
domain: "Delivery"
summary: "持续集成与持续交付体系，负责代码验证、构建、测试、发布和回滚。"
essence: "CI/CD 本质是把软件交付变成可重复、可验证、可回滚的流水线。"
scenarios: "适合多人协作、频繁发布、基础设施代码化和标准化交付。"
sourceFocus: "pipeline orchestration、artifact store、build cache、deploy hooks。"
colors: "#0f7b78,#f1dfb8,#326ce5"
---

## 本质

CI/CD 的本质不是“自动跑脚本”，而是把每一次代码变更变成可验证、可追溯、可发布、可回滚的交付事件。

一句话理解：CI 证明代码在合并前是健康的，CD 证明制品在发布中是可控的。流水线的产物不是日志，而是证据链。

## 底层架构

CI/CD 平台链路分成七层：

1. 触发层：push、pull request、tag、定时任务和手动审批
2. 编排层：stage、job、依赖、并行、条件和失败策略
3. 执行层：runner、agent、容器环境和密钥注入
4. 验证层：lint、unit test、integration test、security scan
5. 制品层：artifact、container image、SBOM、签名和版本
6. 发布层：dev、staging、prod、canary、blue-green、rollback
7. 审计层：日志、审批、变更记录、通知和指标回写

### 架构图

```text
git push / pull request
        |
pipeline orchestrator
        |
runner: lint -> test -> scan -> build
        |
artifact registry / image registry
        |
deploy controller
        |
dev -> staging -> canary -> prod
        |
rollback + audit + notification
```

关键点：流水线不要直接变成“人肉 SSH 的替身”，它应该只发布不可变制品并留下完整证据。

## 典型场景

适合 CI/CD 的场景：

- 多人协作、频繁合并和频繁发布
- 容器镜像、Helm Chart、Terraform 等标准制品交付
- 需要审批、灰度、回滚和审计的生产发布
- 需要安全扫描、依赖检查和合规证据的团队

不适合粗暴自动化的场景：

- 没有测试、没有回滚、没有环境隔离就直接自动上生产
- 制品可变、tag 漂移、环境手工改动频繁
- 密钥散落在脚本和日志里

## 底层原理

CI/CD 的核心工程原则：

- 不可变制品：同一 commit 构建一次，所有环境复用同一制品
- 快速失败：lint 和单测先跑，越早失败成本越低
- 缓存：依赖缓存和构建缓存提升速度，但必须可失效
- 门禁：测试、扫描、审批和策略共同决定能否进入下一阶段
- 回滚：发布动作必须可逆，且上一稳定版本可快速恢复
- 最小权限：runner、部署 token、云权限按环境隔离

算法和数学直觉：

- 流水线是有向无环图，job 依赖决定并行度和关键路径
- 缓存命中率影响整体交付耗时
- 灰度发布是风险按流量比例逐步放大的实验
- SLO 门禁用错误率、延迟和可用性指标决定是否继续放量

## 常用命令

### 1. Git 变更和版本

```bash
git status
git log --oneline -5
git tag app-v1.0.0
git rev-parse --short HEAD
```

流水线必须把 commit SHA 写入镜像 tag、制品元数据和发布记录，否则线上问题无法快速追溯到代码。

### 2. 构建和扫描

```bash
docker build -t registry.example.com/app:${GIT_SHA} .
docker push registry.example.com/app:${GIT_SHA}
trivy image registry.example.com/app:${GIT_SHA}
```

镜像 tag 建议绑定 commit SHA 或版本号，扫描结果作为发布门禁。不要用可漂移的 `latest` 做生产发布依据。

### 3. K8s 发布和回滚

```bash
kubectl set image deploy/app app=registry.example.com/app:${GIT_SHA} -n prod
kubectl rollout status deploy/app -n prod
kubectl rollout undo deploy/app -n prod
```

发布后必须等待 rollout 结果并做冒烟检查。失败时回滚到上一 ReplicaSet 或上一稳定镜像。

### 4. GitHub Actions 排查

```bash
gh run list --limit 5
gh run view <run-id> --log-failed
gh run watch <run-id> --exit-status
```

这些命令用于看流水线是否真的跑完、失败在哪个 job，以及部署是否成功结束。

## 源码重点

CI/CD 没有唯一源码，重点看平台的通用模块：

- pipeline parser：如何解析 YAML、变量、矩阵和条件
- scheduler：如何根据 DAG 调度 job
- runner/agent：如何拉取任务、注入密钥、执行命令和上传日志
- artifact store：如何保存制品、校验 digest 和生命周期管理
- cache：如何计算 key、恢复缓存和失效缓存
- deploy hooks：如何灰度、检查健康、回滚和通知
- policy engine：如何执行审批、权限和安全门禁

阅读实现时建议先追一条 job：触发事件进入编排器，分配给 runner，拉代码，执行步骤，上传日志和制品，最后回写状态。

## 典型落地方案

一个生产 CI/CD 方案：

- Pull Request：lint、单测、依赖扫描和构建验证
- Merge main：构建唯一镜像，生成 SBOM，签名并推送镜像仓库
- Dev：自动部署并跑集成测试
- Staging：使用生产等价配置，跑冒烟和回归
- Prod：人工审批后灰度发布，观察 SLO 指标
- Rollback：指标异常自动停止放量，保留一键回滚
- Audit：发布结果写入变更记录、通知和复盘系统

### GitHub Actions + K8s 模板

```yaml
name: deploy
on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm test
      - run: docker build -t registry.example.com/app:${{ github.sha }} .
      - run: docker push registry.example.com/app:${{ github.sha }}

  deploy:
    needs: build
    environment: production
    runs-on: ubuntu-latest
    steps:
      - run: kubectl set image deploy/app app=registry.example.com/app:${{ github.sha }} -n prod
      - run: kubectl rollout status deploy/app -n prod
```

## 10 道面试题

### 1. CI 和 CD 的区别是什么？

CI 关注合并前后的持续验证，CD 关注制品从构建到环境发布的持续交付或部署。CI 证明代码健康，CD 控制发布风险。

### 2. 为什么流水线要分阶段？

不同阶段成本和风险不同。先跑便宜快速的检查，后跑昂贵慢速的集成、扫描和发布，可以更早失败。

### 3. 如何设计制品库？

制品库要支持不可变版本、digest 校验、权限、生命周期、签名、扫描结果和从版本到 commit 的追溯。

### 4. 为什么要做静态检查和安全扫描？

它们能在早期发现代码质量、依赖漏洞、密钥泄露和镜像风险，避免问题进入运行环境。

### 5. 灰度发布怎么做？

先让少量实例或少量流量使用新版本，观察错误率、延迟和业务指标，稳定后逐步放量。

### 6. 回滚如何保证快速？

使用不可变制品，保留上一稳定版本，部署系统支持一键回滚，并且配置和数据库变更要向前兼容。

### 7. 如何控制流水线权限？

按环境拆分凭证，runner 最小权限，敏感操作需要审批，密钥由平台托管，日志禁止打印敏感值。

### 8. 失败后怎样保留证据？

保留日志、测试报告、镜像 digest、commit SHA、环境变量摘要、审批记录、部署事件和告警指标。

### 9. 如何避免“流水线能过但线上失败”？

增加生产等价预发、冒烟测试、配置校验、数据库迁移演练、容量测试和灰度 SLO 门禁。

### 10. CI/CD 如何和 K8s 结合？

CI/CD 负责验证、构建、扫描和提交发布意图；K8s 负责滚动更新、健康检查、扩缩容和回滚执行。
