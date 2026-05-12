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

CI/CD 是把交付流程标准化。它的价值不是自动化本身，而是可验证、可审计、可回滚。

## 架构

1. 代码提交触发流水线。
2. 单元测试和静态检查先跑。
3. 构建镜像和制品。
4. 部署到测试/预发/生产。
5. 回滚与审批机制兜底。

## 底层原理

CI/CD 的底层是“把每一次变更都变成可验证证据”。流水线不是单纯串命令，而是一个带状态机、缓存、门禁和回滚分支的控制系统。

关键原则：

- 一次构建产出一个唯一制品，制品必须可追溯
- 先验证，再构建，再部署，再放量
- 失败保留日志、制品和环境上下文
- 生产发布必须能快速回滚
- 权限、签名、审批和审计要贯穿全链路

## 常用命令

```bash
git status
git commit -m "..."
docker build -t app:ci .
kubectl rollout status deploy/app
kubectl rollout undo deploy/app
```

## 源码重点

- pipeline orchestration：阶段、条件、并行、缓存
- artifact store：制品存储与版本
- deploy hooks：灰度、回滚、审批
- policy：权限、签名、门禁

## 典型落地方案

- 代码提交后自动跑测试和扫描。
- 构建产物只从流水线发出，不手工上传。
- 生产发布分阶段灰度并可一键回滚。
- 和 K8s 结合时，流水线只做制品和发布，不做人肉 SSH 上机。
- 镜像 tag 与 commit SHA 绑定，便于回滚和审计。
- 重要环境通过审批门禁和变更窗口控制发布节奏。
- 流水线要接入制品库、镜像仓库、扫描器、部署控制器和通知系统。
- 发布结果要回写到工单、变更记录和审计日志。
- 高风险环境引入手动批准或双人确认。

## 落地方案示意

```text
git push
  |
lint / test / scan
  |
build artifact / image
  |
deploy to dev -> staging -> prod
  |
smoke test / canary
  |
rollback if needed
```

## 10 道面试题

1. CI 和 CD 的区别是什么？
2. 为什么流水线要分阶段？
3. 如何设计制品库？
4. 为什么要做静态检查和安全扫描？
5. 灰度发布怎么做？
6. 回滚如何保证快速？
7. 如何控制流水线权限？
8. 失败后怎样保留证据？
9. 如何避免“流水线能过但线上失败”？
10. CI/CD 如何和 K8s 结合？
