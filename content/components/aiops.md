---
title: "AIOps"
domain: "AI"
summary: "把机器学习、事件关联和自动化运维结合起来的运营体系。"
essence: "AIOps 本质是用数据、模型和自动化把告警噪声变成可执行行动。"
scenarios: "适合告警归并、异常检测、根因分析、容量预测和自动化修复。"
sourceFocus: "特征提取、异常检测、事件图谱、告警聚类、闭环自动化。"
colors: "#326ce5,#d7ece7,#7f4d64"
---

## 本质

AIOps 不是“给运维系统接一个大模型”，而是把日志、指标、trace、事件、拓扑和工单变成可计算的数据，再用模型和规则降低噪声、定位根因、预测风险，并通过自动化形成闭环。

一句话理解：AIOps 的本质是把运维经验从人脑里的临时判断，沉淀成数据特征、模型评分、规则护栏和可审计动作。

## 底层架构

AIOps 的工程链路分成七层：

1. 数据接入：metrics、logs、traces、events、CMDB、工单和发布记录
2. 特征层：窗口聚合、日志模板、标签归一化、拓扑补全
3. 模型层：异常检测、聚类、分类、相似事件检索和预测
4. 规则层：SLO、维护窗口、抑制、依赖拓扑和风险等级
5. RCA 层：按时间、拓扑、变更和传播路径排序根因
6. 执行层：告警路由、Runbook、自动扩容、重启、降级和回滚
7. 反馈层：人工确认、误报标注、处置结果和模型再训练

### 架构图

```text
metrics / logs / traces / events / changes
          |
feature pipeline
          |
anomaly detection + clustering + RCA
          |
rule engine + SLO guardrail
          |
alert routing / runbook / automation
          |
human feedback + audit + retraining
```

图里的重点是闭环：没有反馈和审计的 AIOps 只是看板，不是运营系统。

## 典型场景

适合 AIOps 的场景：

- 告警降噪、相似事件归并和风暴抑制
- 指标异常检测和容量预测
- 基于拓扑的根因排序
- 发布变更与故障关联
- 低风险动作自动化，例如扩容、重启无状态实例、清理临时文件
- 大模型辅助告警摘要、Runbook 检索和故障复盘

不适合直接自动化的场景：

- 没有观测数据和标签规范的系统
- 高风险不可逆动作，例如删数据、切主、批量重启核心有状态集群
- 无审批、无回滚、无审计的自动修复

## 底层原理

AIOps 的核心是数据建模和控制闭环：

- 时间窗口：把瞬时点变成均值、方差、斜率、峰值、P95/P99 等特征
- 异常检测：用统计阈值、EWMA、z-score、Isolation Forest 等发现偏离
- 聚类降噪：用标签、文本相似度、时间邻近和拓扑关系合并告警
- 根因排序：按故障传播方向、依赖拓扑、变更时间和历史相似事件打分
- 预测：用趋势、周期性和容量水位预测未来风险
- 护栏：模型给概率，规则给边界，审批和回滚控制动作风险

数学直觉：

- z-score 衡量当前值距离均值多少个标准差
- EWMA 给近期数据更高权重，适合平滑短期噪声
- 聚类把高维特征里的相似告警压缩成少数事件簇
- 图排序用节点依赖和时间顺序判断“更可能是源头还是结果”

## 常用命令

### 1. K8s 事件和资源

```bash
kubectl get events -A --sort-by=.lastTimestamp
kubectl top pod -A
kubectl describe pod <pod> -n <namespace>
```

这些命令用于抽取异常现场：事件时间线、资源压力、探针失败和调度异常，是 AIOps 特征的一部分。

### 2. Prometheus 规则检查

```bash
promtool check rules alerts.yml
promtool test rules test.yml
```

告警规则必须可测试。AIOps 的前提不是把规则扔掉，而是让规则质量更高、噪声更低。

### 3. 日志模式分析

```bash
grep -R "ERROR" logs/
awk '{print $1,$2,$3}' app.log | sort | uniq -c | sort -nr | head
```

这些命令适合做最小化日志聚类：先看错误模式频次，再决定是否需要更复杂的模板抽取或向量检索。

### 4. 模型训练和评估

```bash
python train.py --config config.yaml
python evaluate.py --dataset incidents.jsonl --metric precision,recall
```

模型不能只看 demo 效果。告警降噪要关注 precision、recall、误报、漏报和平均处置时间变化。

## 源码重点

AIOps 没有单一源码仓库，重点应该拆成模块看：

- 特征提取：窗口聚合、日志模板、标签规范、拓扑补全
- 异常检测：z-score、EWMA、Prophet、Isolation Forest、季节性分解
- 告警聚类：文本相似度、标签相似度、时间窗口和图邻近
- 根因分析：事件图、依赖图、变更图和传播路径
- 自动化执行：Runbook 引擎、审批、dry-run、回滚和审计
- 大模型层：RAG 知识库、告警摘要、命令建议和复盘生成

阅读和实现顺序：先实现规则质量和聚类降噪，再接 RCA，最后才扩大自动化动作范围。

## 典型落地方案

第一阶段：治理数据和告警。

- 统一服务名、环境、集群、namespace、owner 等标签
- 清理无 owner、无动作建议、无 SLO 关系的告警
- 建立告警指纹，把重复告警合并
- 接入发布记录，故障发生时优先关联最近变更

第二阶段：建立模型和规则闭环。

- 用窗口特征做异常检测
- 用标签、文本、拓扑和时间聚类事件
- RCA 只做排序和证据展示，不直接下结论
- 对每次处置结果做反馈标注

第三阶段：自动化低风险动作。

- 只自动处理可逆、低风险、高频问题
- 所有动作支持 dry-run、审批、回滚和审计
- 高风险动作只给建议，不自动执行

### K8s + Prometheus + LLM 落地模板

```text
Prometheus alerts
  |
Alertmanager webhook
  |
event normalizer + fingerprint
  |
topology correlation + change correlation
  |
LLM summary + runbook retrieval
  |
human approval
  |
kubectl scale / rollout restart / rollback
```

## 10 道面试题

### 1. AIOps 和传统监控有什么区别？

传统监控偏发现问题，AIOps 在发现后继续做降噪、关联、根因排序、预测和自动化处置。

### 2. 告警降噪怎么做？

先统一标签和指纹，再用时间窗口、相似文本、拓扑关系和抑制规则合并重复告警，最后用反馈数据持续调优。

### 3. 异常检测有哪些常见方法？

常见有静态阈值、动态阈值、z-score、EWMA、季节性分解、Isolation Forest 和基于预测残差的方法。

### 4. 为什么需要特征窗口？

单点指标噪声很大，窗口能把数据变成均值、方差、斜率、P95 等稳定特征，便于比较和建模。

### 5. 怎么做根因分析？

结合时间先后、服务拓扑、变更记录、依赖方向和历史相似事件，对候选根因排序并展示证据。

### 6. 规则和模型怎么结合？

模型负责概率和排序，规则负责确定性边界、安全护栏和审批条件。高风险动作不能只依赖模型输出。

### 7. 预测性扩容怎么设计？

用历史负载、周期性、业务日历和容量水位预测未来资源需求，提前扩容，并设置回收和上限保护。

### 8. 如何避免自动化误伤？

只自动执行低风险可逆动作，加入 dry-run、审批、回滚、限频和审计。核心有状态组件默认只建议不执行。

### 9. AIOps 的数据源有哪些？

日志、指标、trace、事件、发布记录、CMDB、工单、告警确认记录和历史故障复盘。

### 10. 大模型在 AIOps 里适合做什么？

适合告警摘要、日志归纳、Runbook 检索、命令解释和复盘生成；不适合无护栏直接执行高风险操作。
