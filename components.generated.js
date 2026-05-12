window.BLOG_COMPONENTS = [
  {
    "id": "aiops",
    "title": "AIOps",
    "domain": "AI",
    "summary": "把机器学习、事件关联和自动化运维结合起来的运营体系。",
    "essence": "AIOps 本质是用数据、模型和自动化把告警噪声变成可执行行动。",
    "scenarios": "适合告警归并、异常检测、根因分析、容量预测和自动化修复。",
    "sourceFocus": "特征提取、异常检测、事件图谱、告警聚类、闭环自动化。",
    "colors": [
      "#326ce5",
      "#d7ece7",
      "#7f4d64"
    ],
    "body": [
      "本质",
      "AIOps",
      "不是“给运维系统接一个大模型”，而是把日志、指标、trace、事件、拓扑和工单变成可计算的数据，再用模型和规则降低噪声、定位根因、预测风险，并通过自动化形成闭环。",
      "一句话理解：AIOps",
      "的本质是把运维经验从人脑里的临时判断，沉淀成数据特征、模型评分、规则护栏和可审计动作。",
      "底层架构",
      "AIOps",
      "的工程链路分成七层：",
      "数据接入：metrics、logs、traces、events、CMDB、工单和发布记录",
      "特征层：窗口聚合、日志模板、标签归一化、拓扑补全",
      "模型层：异常检测、聚类、分类、相似事件检索和预测",
      "规则层：SLO、维护窗口、抑制、依赖拓扑和风险等级",
      "RCA",
      "层：按时间、拓扑、变更和传播路径排序根因",
      "执行层：告警路由、Runbook、自动扩容、重启、降级和回滚",
      "反馈层：人工确认、误报标注、处置结果和模型再训练",
      "架构图",
      "metrics",
      "/",
      "logs",
      "/",
      "traces",
      "/",
      "events",
      "/",
      "changes",
      "|",
      "feature",
      "pipeline",
      "|",
      "anomaly",
      "detection",
      "+",
      "clustering",
      "+",
      "RCA",
      "|",
      "rule",
      "engine",
      "+",
      "SLO",
      "guardrail",
      "|",
      "alert",
      "routing",
      "/",
      "runbook",
      "/",
      "automation",
      "|",
      "human",
      "feedback",
      "+",
      "audit",
      "+",
      "retraining",
      "图里的重点是闭环：没有反馈和审计的",
      "AIOps",
      "只是看板，不是运营系统。",
      "典型场景",
      "适合",
      "AIOps",
      "的场景：",
      "告警降噪、相似事件归并和风暴抑制",
      "指标异常检测和容量预测",
      "基于拓扑的根因排序",
      "发布变更与故障关联",
      "低风险动作自动化，例如扩容、重启无状态实例、清理临时文件",
      "大模型辅助告警摘要、Runbook",
      "检索和故障复盘",
      "不适合直接自动化的场景：",
      "没有观测数据和标签规范的系统",
      "高风险不可逆动作，例如删数据、切主、批量重启核心有状态集群",
      "无审批、无回滚、无审计的自动修复",
      "底层原理",
      "AIOps",
      "的核心是数据建模和控制闭环：",
      "时间窗口：把瞬时点变成均值、方差、斜率、峰值、P95/P99",
      "等特征",
      "异常检测：用统计阈值、EWMA、z-score、Isolation",
      "Forest",
      "等发现偏离",
      "聚类降噪：用标签、文本相似度、时间邻近和拓扑关系合并告警",
      "根因排序：按故障传播方向、依赖拓扑、变更时间和历史相似事件打分",
      "预测：用趋势、周期性和容量水位预测未来风险",
      "护栏：模型给概率，规则给边界，审批和回滚控制动作风险",
      "数学直觉：",
      "z-score",
      "衡量当前值距离均值多少个标准差",
      "EWMA",
      "给近期数据更高权重，适合平滑短期噪声",
      "聚类把高维特征里的相似告警压缩成少数事件簇",
      "图排序用节点依赖和时间顺序判断“更可能是源头还是结果”",
      "常用命令",
      "1.",
      "K8s",
      "事件和资源",
      "kubectl",
      "get",
      "events",
      "-A",
      "--sort-by=.lastTimestamp",
      "kubectl",
      "top",
      "pod",
      "-A",
      "kubectl",
      "describe",
      "pod",
      "<pod>",
      "-n",
      "<namespace>",
      "这些命令用于抽取异常现场：事件时间线、资源压力、探针失败和调度异常，是",
      "AIOps",
      "特征的一部分。",
      "2.",
      "Prometheus",
      "规则检查",
      "promtool",
      "check",
      "rules",
      "alerts.yml",
      "promtool",
      "test",
      "rules",
      "test.yml",
      "告警规则必须可测试。AIOps",
      "的前提不是把规则扔掉，而是让规则质量更高、噪声更低。",
      "3.",
      "日志模式分析",
      "grep",
      "-R",
      "\"ERROR\"",
      "logs/",
      "awk",
      "'{print",
      "$1,$2,$3}'",
      "app.log",
      "|",
      "sort",
      "|",
      "uniq",
      "-c",
      "|",
      "sort",
      "-nr",
      "|",
      "head",
      "这些命令适合做最小化日志聚类：先看错误模式频次，再决定是否需要更复杂的模板抽取或向量检索。",
      "4.",
      "模型训练和评估",
      "python",
      "train.py",
      "--config",
      "config.yaml",
      "python",
      "evaluate.py",
      "--dataset",
      "incidents.jsonl",
      "--metric",
      "precision,recall",
      "模型不能只看",
      "demo",
      "效果。告警降噪要关注",
      "precision、recall、误报、漏报和平均处置时间变化。",
      "源码重点",
      "AIOps",
      "没有单一源码仓库，重点应该拆成模块看：",
      "特征提取：窗口聚合、日志模板、标签规范、拓扑补全",
      "异常检测：z-score、EWMA、Prophet、Isolation",
      "Forest、季节性分解",
      "告警聚类：文本相似度、标签相似度、时间窗口和图邻近",
      "根因分析：事件图、依赖图、变更图和传播路径",
      "自动化执行：Runbook",
      "引擎、审批、dry-run、回滚和审计",
      "大模型层：RAG",
      "知识库、告警摘要、命令建议和复盘生成",
      "阅读和实现顺序：先实现规则质量和聚类降噪，再接",
      "RCA，最后才扩大自动化动作范围。",
      "典型落地方案",
      "第一阶段：治理数据和告警。",
      "统一服务名、环境、集群、namespace、owner",
      "等标签",
      "清理无",
      "owner、无动作建议、无",
      "SLO",
      "关系的告警",
      "建立告警指纹，把重复告警合并",
      "接入发布记录，故障发生时优先关联最近变更",
      "第二阶段：建立模型和规则闭环。",
      "用窗口特征做异常检测",
      "用标签、文本、拓扑和时间聚类事件",
      "RCA",
      "只做排序和证据展示，不直接下结论",
      "对每次处置结果做反馈标注",
      "第三阶段：自动化低风险动作。",
      "只自动处理可逆、低风险、高频问题",
      "所有动作支持",
      "dry-run、审批、回滚和审计",
      "高风险动作只给建议，不自动执行",
      "K8s",
      "+",
      "Prometheus",
      "+",
      "LLM",
      "落地模板",
      "Prometheus",
      "alerts",
      "|",
      "Alertmanager",
      "webhook",
      "|",
      "event",
      "normalizer",
      "+",
      "fingerprint",
      "|",
      "topology",
      "correlation",
      "+",
      "change",
      "correlation",
      "|",
      "LLM",
      "summary",
      "+",
      "runbook",
      "retrieval",
      "|",
      "human",
      "approval",
      "|",
      "kubectl",
      "scale",
      "/",
      "rollout",
      "restart",
      "/",
      "rollback",
      "10",
      "道面试题",
      "1.",
      "AIOps",
      "和传统监控有什么区别？",
      "传统监控偏发现问题，AIOps",
      "在发现后继续做降噪、关联、根因排序、预测和自动化处置。",
      "2.",
      "告警降噪怎么做？",
      "先统一标签和指纹，再用时间窗口、相似文本、拓扑关系和抑制规则合并重复告警，最后用反馈数据持续调优。",
      "3.",
      "异常检测有哪些常见方法？",
      "常见有静态阈值、动态阈值、z-score、EWMA、季节性分解、Isolation",
      "Forest",
      "和基于预测残差的方法。",
      "4.",
      "为什么需要特征窗口？",
      "单点指标噪声很大，窗口能把数据变成均值、方差、斜率、P95",
      "等稳定特征，便于比较和建模。",
      "5.",
      "怎么做根因分析？",
      "结合时间先后、服务拓扑、变更记录、依赖方向和历史相似事件，对候选根因排序并展示证据。",
      "6.",
      "规则和模型怎么结合？",
      "模型负责概率和排序，规则负责确定性边界、安全护栏和审批条件。高风险动作不能只依赖模型输出。",
      "7.",
      "预测性扩容怎么设计？",
      "用历史负载、周期性、业务日历和容量水位预测未来资源需求，提前扩容，并设置回收和上限保护。",
      "8.",
      "如何避免自动化误伤？",
      "只自动执行低风险可逆动作，加入",
      "dry-run、审批、回滚、限频和审计。核心有状态组件默认只建议不执行。",
      "9.",
      "AIOps",
      "的数据源有哪些？",
      "日志、指标、trace、事件、发布记录、CMDB、工单、告警确认记录和历史故障复盘。",
      "10.",
      "大模型在",
      "AIOps",
      "里适合做什么？",
      "适合告警摘要、日志归纳、Runbook",
      "检索、命令解释和复盘生成；不适合无护栏直接执行高风险操作。"
    ],
    "bodyBlocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "本质"
      },
      {
        "type": "paragraph",
        "text": "AIOps 不是“给运维系统接一个大模型”，而是把日志、指标、trace、事件、拓扑和工单变成可计算的数据，再用模型和规则降低噪声、定位根因、预测风险，并通过自动化形成闭环。"
      },
      {
        "type": "paragraph",
        "text": "一句话理解：AIOps 的本质是把运维经验从人脑里的临时判断，沉淀成数据特征、模型评分、规则护栏和可审计动作。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层架构"
      },
      {
        "type": "paragraph",
        "text": "AIOps 的工程链路分成七层："
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "数据接入：metrics、logs、traces、events、CMDB、工单和发布记录",
          "特征层：窗口聚合、日志模板、标签归一化、拓扑补全",
          "模型层：异常检测、聚类、分类、相似事件检索和预测",
          "规则层：SLO、维护窗口、抑制、依赖拓扑和风险等级",
          "RCA 层：按时间、拓扑、变更和传播路径排序根因",
          "执行层：告警路由、Runbook、自动扩容、重启、降级和回滚",
          "反馈层：人工确认、误报标注、处置结果和模型再训练"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "架构图"
      },
      {
        "type": "code",
        "language": "text",
        "text": "metrics / logs / traces / events / changes\n          |\nfeature pipeline\n          |\nanomaly detection + clustering + RCA\n          |\nrule engine + SLO guardrail\n          |\nalert routing / runbook / automation\n          |\nhuman feedback + audit + retraining"
      },
      {
        "type": "paragraph",
        "text": "图里的重点是闭环：没有反馈和审计的 AIOps 只是看板，不是运营系统。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "典型场景"
      },
      {
        "type": "paragraph",
        "text": "适合 AIOps 的场景："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "告警降噪、相似事件归并和风暴抑制",
          "指标异常检测和容量预测",
          "基于拓扑的根因排序",
          "发布变更与故障关联",
          "低风险动作自动化，例如扩容、重启无状态实例、清理临时文件",
          "大模型辅助告警摘要、Runbook 检索和故障复盘"
        ]
      },
      {
        "type": "paragraph",
        "text": "不适合直接自动化的场景："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "没有观测数据和标签规范的系统",
          "高风险不可逆动作，例如删数据、切主、批量重启核心有状态集群",
          "无审批、无回滚、无审计的自动修复"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层原理"
      },
      {
        "type": "paragraph",
        "text": "AIOps 的核心是数据建模和控制闭环："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "时间窗口：把瞬时点变成均值、方差、斜率、峰值、P95/P99 等特征",
          "异常检测：用统计阈值、EWMA、z-score、Isolation Forest 等发现偏离",
          "聚类降噪：用标签、文本相似度、时间邻近和拓扑关系合并告警",
          "根因排序：按故障传播方向、依赖拓扑、变更时间和历史相似事件打分",
          "预测：用趋势、周期性和容量水位预测未来风险",
          "护栏：模型给概率，规则给边界，审批和回滚控制动作风险"
        ]
      },
      {
        "type": "paragraph",
        "text": "数学直觉："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "z-score 衡量当前值距离均值多少个标准差",
          "EWMA 给近期数据更高权重，适合平滑短期噪声",
          "聚类把高维特征里的相似告警压缩成少数事件簇",
          "图排序用节点依赖和时间顺序判断“更可能是源头还是结果”"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "常用命令"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "1. K8s 事件和资源"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "kubectl get events -A --sort-by=.lastTimestamp\nkubectl top pod -A\nkubectl describe pod <pod> -n <namespace>"
      },
      {
        "type": "paragraph",
        "text": "这些命令用于抽取异常现场：事件时间线、资源压力、探针失败和调度异常，是 AIOps 特征的一部分。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. Prometheus 规则检查"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "promtool check rules alerts.yml\npromtool test rules test.yml"
      },
      {
        "type": "paragraph",
        "text": "告警规则必须可测试。AIOps 的前提不是把规则扔掉，而是让规则质量更高、噪声更低。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3. 日志模式分析"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "grep -R \"ERROR\" logs/\nawk '{print $1,$2,$3}' app.log | sort | uniq -c | sort -nr | head"
      },
      {
        "type": "paragraph",
        "text": "这些命令适合做最小化日志聚类：先看错误模式频次，再决定是否需要更复杂的模板抽取或向量检索。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4. 模型训练和评估"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "python train.py --config config.yaml\npython evaluate.py --dataset incidents.jsonl --metric precision,recall"
      },
      {
        "type": "paragraph",
        "text": "模型不能只看 demo 效果。告警降噪要关注 precision、recall、误报、漏报和平均处置时间变化。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "源码重点"
      },
      {
        "type": "paragraph",
        "text": "AIOps 没有单一源码仓库，重点应该拆成模块看："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "特征提取：窗口聚合、日志模板、标签规范、拓扑补全",
          "异常检测：z-score、EWMA、Prophet、Isolation Forest、季节性分解",
          "告警聚类：文本相似度、标签相似度、时间窗口和图邻近",
          "根因分析：事件图、依赖图、变更图和传播路径",
          "自动化执行：Runbook 引擎、审批、dry-run、回滚和审计",
          "大模型层：RAG 知识库、告警摘要、命令建议和复盘生成"
        ]
      },
      {
        "type": "paragraph",
        "text": "阅读和实现顺序：先实现规则质量和聚类降噪，再接 RCA，最后才扩大自动化动作范围。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "典型落地方案"
      },
      {
        "type": "paragraph",
        "text": "第一阶段：治理数据和告警。"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "统一服务名、环境、集群、namespace、owner 等标签",
          "清理无 owner、无动作建议、无 SLO 关系的告警",
          "建立告警指纹，把重复告警合并",
          "接入发布记录，故障发生时优先关联最近变更"
        ]
      },
      {
        "type": "paragraph",
        "text": "第二阶段：建立模型和规则闭环。"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "用窗口特征做异常检测",
          "用标签、文本、拓扑和时间聚类事件",
          "RCA 只做排序和证据展示，不直接下结论",
          "对每次处置结果做反馈标注"
        ]
      },
      {
        "type": "paragraph",
        "text": "第三阶段：自动化低风险动作。"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "只自动处理可逆、低风险、高频问题",
          "所有动作支持 dry-run、审批、回滚和审计",
          "高风险动作只给建议，不自动执行"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "K8s + Prometheus + LLM 落地模板"
      },
      {
        "type": "code",
        "language": "text",
        "text": "Prometheus alerts\n  |\nAlertmanager webhook\n  |\nevent normalizer + fingerprint\n  |\ntopology correlation + change correlation\n  |\nLLM summary + runbook retrieval\n  |\nhuman approval\n  |\nkubectl scale / rollout restart / rollback"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10 道面试题"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "1. AIOps 和传统监控有什么区别？"
      },
      {
        "type": "paragraph",
        "text": "传统监控偏发现问题，AIOps 在发现后继续做降噪、关联、根因排序、预测和自动化处置。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. 告警降噪怎么做？"
      },
      {
        "type": "paragraph",
        "text": "先统一标签和指纹，再用时间窗口、相似文本、拓扑关系和抑制规则合并重复告警，最后用反馈数据持续调优。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3. 异常检测有哪些常见方法？"
      },
      {
        "type": "paragraph",
        "text": "常见有静态阈值、动态阈值、z-score、EWMA、季节性分解、Isolation Forest 和基于预测残差的方法。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4. 为什么需要特征窗口？"
      },
      {
        "type": "paragraph",
        "text": "单点指标噪声很大，窗口能把数据变成均值、方差、斜率、P95 等稳定特征，便于比较和建模。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "5. 怎么做根因分析？"
      },
      {
        "type": "paragraph",
        "text": "结合时间先后、服务拓扑、变更记录、依赖方向和历史相似事件，对候选根因排序并展示证据。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "6. 规则和模型怎么结合？"
      },
      {
        "type": "paragraph",
        "text": "模型负责概率和排序，规则负责确定性边界、安全护栏和审批条件。高风险动作不能只依赖模型输出。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "7. 预测性扩容怎么设计？"
      },
      {
        "type": "paragraph",
        "text": "用历史负载、周期性、业务日历和容量水位预测未来资源需求，提前扩容，并设置回收和上限保护。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8. 如何避免自动化误伤？"
      },
      {
        "type": "paragraph",
        "text": "只自动执行低风险可逆动作，加入 dry-run、审批、回滚、限频和审计。核心有状态组件默认只建议不执行。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9. AIOps 的数据源有哪些？"
      },
      {
        "type": "paragraph",
        "text": "日志、指标、trace、事件、发布记录、CMDB、工单、告警确认记录和历史故障复盘。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "10. 大模型在 AIOps 里适合做什么？"
      },
      {
        "type": "paragraph",
        "text": "适合告警摘要、日志归纳、Runbook 检索、命令解释和复盘生成；不适合无护栏直接执行高风险操作。"
      }
    ],
    "rawMarkdown": "## 本质\n\nAIOps 不是“给运维系统接一个大模型”，而是把日志、指标、trace、事件、拓扑和工单变成可计算的数据，再用模型和规则降低噪声、定位根因、预测风险，并通过自动化形成闭环。\n\n一句话理解：AIOps 的本质是把运维经验从人脑里的临时判断，沉淀成数据特征、模型评分、规则护栏和可审计动作。\n\n## 底层架构\n\nAIOps 的工程链路分成七层：\n\n1. 数据接入：metrics、logs、traces、events、CMDB、工单和发布记录\n2. 特征层：窗口聚合、日志模板、标签归一化、拓扑补全\n3. 模型层：异常检测、聚类、分类、相似事件检索和预测\n4. 规则层：SLO、维护窗口、抑制、依赖拓扑和风险等级\n5. RCA 层：按时间、拓扑、变更和传播路径排序根因\n6. 执行层：告警路由、Runbook、自动扩容、重启、降级和回滚\n7. 反馈层：人工确认、误报标注、处置结果和模型再训练\n\n### 架构图\n\n```text\nmetrics / logs / traces / events / changes\n          |\nfeature pipeline\n          |\nanomaly detection + clustering + RCA\n          |\nrule engine + SLO guardrail\n          |\nalert routing / runbook / automation\n          |\nhuman feedback + audit + retraining\n```\n\n图里的重点是闭环：没有反馈和审计的 AIOps 只是看板，不是运营系统。\n\n## 典型场景\n\n适合 AIOps 的场景：\n\n- 告警降噪、相似事件归并和风暴抑制\n- 指标异常检测和容量预测\n- 基于拓扑的根因排序\n- 发布变更与故障关联\n- 低风险动作自动化，例如扩容、重启无状态实例、清理临时文件\n- 大模型辅助告警摘要、Runbook 检索和故障复盘\n\n不适合直接自动化的场景：\n\n- 没有观测数据和标签规范的系统\n- 高风险不可逆动作，例如删数据、切主、批量重启核心有状态集群\n- 无审批、无回滚、无审计的自动修复\n\n## 底层原理\n\nAIOps 的核心是数据建模和控制闭环：\n\n- 时间窗口：把瞬时点变成均值、方差、斜率、峰值、P95/P99 等特征\n- 异常检测：用统计阈值、EWMA、z-score、Isolation Forest 等发现偏离\n- 聚类降噪：用标签、文本相似度、时间邻近和拓扑关系合并告警\n- 根因排序：按故障传播方向、依赖拓扑、变更时间和历史相似事件打分\n- 预测：用趋势、周期性和容量水位预测未来风险\n- 护栏：模型给概率，规则给边界，审批和回滚控制动作风险\n\n数学直觉：\n\n- z-score 衡量当前值距离均值多少个标准差\n- EWMA 给近期数据更高权重，适合平滑短期噪声\n- 聚类把高维特征里的相似告警压缩成少数事件簇\n- 图排序用节点依赖和时间顺序判断“更可能是源头还是结果”\n\n## 常用命令\n\n### 1. K8s 事件和资源\n\n```bash\nkubectl get events -A --sort-by=.lastTimestamp\nkubectl top pod -A\nkubectl describe pod <pod> -n <namespace>\n```\n\n这些命令用于抽取异常现场：事件时间线、资源压力、探针失败和调度异常，是 AIOps 特征的一部分。\n\n### 2. Prometheus 规则检查\n\n```bash\npromtool check rules alerts.yml\npromtool test rules test.yml\n```\n\n告警规则必须可测试。AIOps 的前提不是把规则扔掉，而是让规则质量更高、噪声更低。\n\n### 3. 日志模式分析\n\n```bash\ngrep -R \"ERROR\" logs/\nawk '{print $1,$2,$3}' app.log | sort | uniq -c | sort -nr | head\n```\n\n这些命令适合做最小化日志聚类：先看错误模式频次，再决定是否需要更复杂的模板抽取或向量检索。\n\n### 4. 模型训练和评估\n\n```bash\npython train.py --config config.yaml\npython evaluate.py --dataset incidents.jsonl --metric precision,recall\n```\n\n模型不能只看 demo 效果。告警降噪要关注 precision、recall、误报、漏报和平均处置时间变化。\n\n## 源码重点\n\nAIOps 没有单一源码仓库，重点应该拆成模块看：\n\n- 特征提取：窗口聚合、日志模板、标签规范、拓扑补全\n- 异常检测：z-score、EWMA、Prophet、Isolation Forest、季节性分解\n- 告警聚类：文本相似度、标签相似度、时间窗口和图邻近\n- 根因分析：事件图、依赖图、变更图和传播路径\n- 自动化执行：Runbook 引擎、审批、dry-run、回滚和审计\n- 大模型层：RAG 知识库、告警摘要、命令建议和复盘生成\n\n阅读和实现顺序：先实现规则质量和聚类降噪，再接 RCA，最后才扩大自动化动作范围。\n\n## 典型落地方案\n\n第一阶段：治理数据和告警。\n\n- 统一服务名、环境、集群、namespace、owner 等标签\n- 清理无 owner、无动作建议、无 SLO 关系的告警\n- 建立告警指纹，把重复告警合并\n- 接入发布记录，故障发生时优先关联最近变更\n\n第二阶段：建立模型和规则闭环。\n\n- 用窗口特征做异常检测\n- 用标签、文本、拓扑和时间聚类事件\n- RCA 只做排序和证据展示，不直接下结论\n- 对每次处置结果做反馈标注\n\n第三阶段：自动化低风险动作。\n\n- 只自动处理可逆、低风险、高频问题\n- 所有动作支持 dry-run、审批、回滚和审计\n- 高风险动作只给建议，不自动执行\n\n### K8s + Prometheus + LLM 落地模板\n\n```text\nPrometheus alerts\n  |\nAlertmanager webhook\n  |\nevent normalizer + fingerprint\n  |\ntopology correlation + change correlation\n  |\nLLM summary + runbook retrieval\n  |\nhuman approval\n  |\nkubectl scale / rollout restart / rollback\n```\n\n## 10 道面试题\n\n### 1. AIOps 和传统监控有什么区别？\n\n传统监控偏发现问题，AIOps 在发现后继续做降噪、关联、根因排序、预测和自动化处置。\n\n### 2. 告警降噪怎么做？\n\n先统一标签和指纹，再用时间窗口、相似文本、拓扑关系和抑制规则合并重复告警，最后用反馈数据持续调优。\n\n### 3. 异常检测有哪些常见方法？\n\n常见有静态阈值、动态阈值、z-score、EWMA、季节性分解、Isolation Forest 和基于预测残差的方法。\n\n### 4. 为什么需要特征窗口？\n\n单点指标噪声很大，窗口能把数据变成均值、方差、斜率、P95 等稳定特征，便于比较和建模。\n\n### 5. 怎么做根因分析？\n\n结合时间先后、服务拓扑、变更记录、依赖方向和历史相似事件，对候选根因排序并展示证据。\n\n### 6. 规则和模型怎么结合？\n\n模型负责概率和排序，规则负责确定性边界、安全护栏和审批条件。高风险动作不能只依赖模型输出。\n\n### 7. 预测性扩容怎么设计？\n\n用历史负载、周期性、业务日历和容量水位预测未来资源需求，提前扩容，并设置回收和上限保护。\n\n### 8. 如何避免自动化误伤？\n\n只自动执行低风险可逆动作，加入 dry-run、审批、回滚、限频和审计。核心有状态组件默认只建议不执行。\n\n### 9. AIOps 的数据源有哪些？\n\n日志、指标、trace、事件、发布记录、CMDB、工单、告警确认记录和历史故障复盘。\n\n### 10. 大模型在 AIOps 里适合做什么？\n\n适合告警摘要、日志归纳、Runbook 检索、命令解释和复盘生成；不适合无护栏直接执行高风险操作。"
  },
  {
    "id": "cicd",
    "title": "CI/CD",
    "domain": "Delivery",
    "summary": "持续集成与持续交付体系，负责代码验证、构建、测试、发布和回滚。",
    "essence": "CI/CD 本质是把软件交付变成可重复、可验证、可回滚的流水线。",
    "scenarios": "适合多人协作、频繁发布、基础设施代码化和标准化交付。",
    "sourceFocus": "pipeline orchestration、artifact store、build cache、deploy hooks。",
    "colors": [
      "#0f7b78",
      "#f1dfb8",
      "#326ce5"
    ],
    "body": [
      "本质",
      "CI/CD",
      "的本质不是“自动跑脚本”，而是把每一次代码变更变成可验证、可追溯、可发布、可回滚的交付事件。",
      "一句话理解：CI",
      "证明代码在合并前是健康的，CD",
      "证明制品在发布中是可控的。流水线的产物不是日志，而是证据链。",
      "底层架构",
      "CI/CD",
      "平台链路分成七层：",
      "触发层：push、pull",
      "request、tag、定时任务和手动审批",
      "编排层：stage、job、依赖、并行、条件和失败策略",
      "执行层：runner、agent、容器环境和密钥注入",
      "验证层：lint、unit",
      "test、integration",
      "test、security",
      "scan",
      "制品层：artifact、container",
      "image、SBOM、签名和版本",
      "发布层：dev、staging、prod、canary、blue-green、rollback",
      "审计层：日志、审批、变更记录、通知和指标回写",
      "架构图",
      "git",
      "push",
      "/",
      "pull",
      "request",
      "|",
      "pipeline",
      "orchestrator",
      "|",
      "runner:",
      "lint",
      "->",
      "test",
      "->",
      "scan",
      "->",
      "build",
      "|",
      "artifact",
      "registry",
      "/",
      "image",
      "registry",
      "|",
      "deploy",
      "controller",
      "|",
      "dev",
      "->",
      "staging",
      "->",
      "canary",
      "->",
      "prod",
      "|",
      "rollback",
      "+",
      "audit",
      "+",
      "notification",
      "关键点：流水线不要直接变成“人肉",
      "SSH",
      "的替身”，它应该只发布不可变制品并留下完整证据。",
      "典型场景",
      "适合",
      "CI/CD",
      "的场景：",
      "多人协作、频繁合并和频繁发布",
      "容器镜像、Helm",
      "Chart、Terraform",
      "等标准制品交付",
      "需要审批、灰度、回滚和审计的生产发布",
      "需要安全扫描、依赖检查和合规证据的团队",
      "不适合粗暴自动化的场景：",
      "没有测试、没有回滚、没有环境隔离就直接自动上生产",
      "制品可变、tag",
      "漂移、环境手工改动频繁",
      "密钥散落在脚本和日志里",
      "底层原理",
      "CI/CD",
      "的核心工程原则：",
      "不可变制品：同一",
      "commit",
      "构建一次，所有环境复用同一制品",
      "快速失败：lint",
      "和单测先跑，越早失败成本越低",
      "缓存：依赖缓存和构建缓存提升速度，但必须可失效",
      "门禁：测试、扫描、审批和策略共同决定能否进入下一阶段",
      "回滚：发布动作必须可逆，且上一稳定版本可快速恢复",
      "最小权限：runner、部署",
      "token、云权限按环境隔离",
      "算法和数学直觉：",
      "流水线是有向无环图，job",
      "依赖决定并行度和关键路径",
      "缓存命中率影响整体交付耗时",
      "灰度发布是风险按流量比例逐步放大的实验",
      "SLO",
      "门禁用错误率、延迟和可用性指标决定是否继续放量",
      "常用命令",
      "1.",
      "Git",
      "变更和版本",
      "git",
      "status",
      "git",
      "log",
      "--oneline",
      "-5",
      "git",
      "tag",
      "app-v1.0.0",
      "git",
      "rev-parse",
      "--short",
      "HEAD",
      "流水线必须把",
      "commit",
      "SHA",
      "写入镜像",
      "tag、制品元数据和发布记录，否则线上问题无法快速追溯到代码。",
      "2.",
      "构建和扫描",
      "docker",
      "build",
      "-t",
      "registry.example.com/app:${GIT_SHA}",
      ".",
      "docker",
      "push",
      "registry.example.com/app:${GIT_SHA}",
      "trivy",
      "image",
      "registry.example.com/app:${GIT_SHA}",
      "镜像",
      "tag",
      "建议绑定",
      "commit",
      "SHA",
      "或版本号，扫描结果作为发布门禁。不要用可漂移的",
      "`latest`",
      "做生产发布依据。",
      "3.",
      "K8s",
      "发布和回滚",
      "kubectl",
      "set",
      "image",
      "deploy/app",
      "app=registry.example.com/app:${GIT_SHA}",
      "-n",
      "prod",
      "kubectl",
      "rollout",
      "status",
      "deploy/app",
      "-n",
      "prod",
      "kubectl",
      "rollout",
      "undo",
      "deploy/app",
      "-n",
      "prod",
      "发布后必须等待",
      "rollout",
      "结果并做冒烟检查。失败时回滚到上一",
      "ReplicaSet",
      "或上一稳定镜像。",
      "4.",
      "GitHub",
      "Actions",
      "排查",
      "gh",
      "run",
      "list",
      "--limit",
      "5",
      "gh",
      "run",
      "view",
      "<run-id>",
      "--log-failed",
      "gh",
      "run",
      "watch",
      "<run-id>",
      "--exit-status",
      "这些命令用于看流水线是否真的跑完、失败在哪个",
      "job，以及部署是否成功结束。",
      "源码重点",
      "CI/CD",
      "没有唯一源码，重点看平台的通用模块：",
      "pipeline",
      "parser：如何解析",
      "YAML、变量、矩阵和条件",
      "scheduler：如何根据",
      "DAG",
      "调度",
      "job",
      "runner/agent：如何拉取任务、注入密钥、执行命令和上传日志",
      "artifact",
      "store：如何保存制品、校验",
      "digest",
      "和生命周期管理",
      "cache：如何计算",
      "key、恢复缓存和失效缓存",
      "deploy",
      "hooks：如何灰度、检查健康、回滚和通知",
      "policy",
      "engine：如何执行审批、权限和安全门禁",
      "阅读实现时建议先追一条",
      "job：触发事件进入编排器，分配给",
      "runner，拉代码，执行步骤，上传日志和制品，最后回写状态。",
      "典型落地方案",
      "一个生产",
      "CI/CD",
      "方案：",
      "Pull",
      "Request：lint、单测、依赖扫描和构建验证",
      "Merge",
      "main：构建唯一镜像，生成",
      "SBOM，签名并推送镜像仓库",
      "Dev：自动部署并跑集成测试",
      "Staging：使用生产等价配置，跑冒烟和回归",
      "Prod：人工审批后灰度发布，观察",
      "SLO",
      "指标",
      "Rollback：指标异常自动停止放量，保留一键回滚",
      "Audit：发布结果写入变更记录、通知和复盘系统",
      "GitHub",
      "Actions",
      "+",
      "K8s",
      "模板",
      "name:",
      "deploy",
      "on:",
      "push:",
      "branches:",
      "[main]",
      "jobs:",
      "build:",
      "runs-on:",
      "ubuntu-latest",
      "steps:",
      "-",
      "uses:",
      "actions/checkout@v4",
      "-",
      "run:",
      "npm",
      "ci",
      "-",
      "run:",
      "npm",
      "test",
      "-",
      "run:",
      "docker",
      "build",
      "-t",
      "registry.example.com/app:${{",
      "github.sha",
      "}}",
      ".",
      "-",
      "run:",
      "docker",
      "push",
      "registry.example.com/app:${{",
      "github.sha",
      "}}",
      "deploy:",
      "needs:",
      "build",
      "environment:",
      "production",
      "runs-on:",
      "ubuntu-latest",
      "steps:",
      "-",
      "run:",
      "kubectl",
      "set",
      "image",
      "deploy/app",
      "app=registry.example.com/app:${{",
      "github.sha",
      "}}",
      "-n",
      "prod",
      "-",
      "run:",
      "kubectl",
      "rollout",
      "status",
      "deploy/app",
      "-n",
      "prod",
      "10",
      "道面试题",
      "1.",
      "CI",
      "和",
      "CD",
      "的区别是什么？",
      "CI",
      "关注合并前后的持续验证，CD",
      "关注制品从构建到环境发布的持续交付或部署。CI",
      "证明代码健康，CD",
      "控制发布风险。",
      "2.",
      "为什么流水线要分阶段？",
      "不同阶段成本和风险不同。先跑便宜快速的检查，后跑昂贵慢速的集成、扫描和发布，可以更早失败。",
      "3.",
      "如何设计制品库？",
      "制品库要支持不可变版本、digest",
      "校验、权限、生命周期、签名、扫描结果和从版本到",
      "commit",
      "的追溯。",
      "4.",
      "为什么要做静态检查和安全扫描？",
      "它们能在早期发现代码质量、依赖漏洞、密钥泄露和镜像风险，避免问题进入运行环境。",
      "5.",
      "灰度发布怎么做？",
      "先让少量实例或少量流量使用新版本，观察错误率、延迟和业务指标，稳定后逐步放量。",
      "6.",
      "回滚如何保证快速？",
      "使用不可变制品，保留上一稳定版本，部署系统支持一键回滚，并且配置和数据库变更要向前兼容。",
      "7.",
      "如何控制流水线权限？",
      "按环境拆分凭证，runner",
      "最小权限，敏感操作需要审批，密钥由平台托管，日志禁止打印敏感值。",
      "8.",
      "失败后怎样保留证据？",
      "保留日志、测试报告、镜像",
      "digest、commit",
      "SHA、环境变量摘要、审批记录、部署事件和告警指标。",
      "9.",
      "如何避免“流水线能过但线上失败”？",
      "增加生产等价预发、冒烟测试、配置校验、数据库迁移演练、容量测试和灰度",
      "SLO",
      "门禁。",
      "10.",
      "CI/CD",
      "如何和",
      "K8s",
      "结合？",
      "CI/CD",
      "负责验证、构建、扫描和提交发布意图；K8s",
      "负责滚动更新、健康检查、扩缩容和回滚执行。"
    ],
    "bodyBlocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "本质"
      },
      {
        "type": "paragraph",
        "text": "CI/CD 的本质不是“自动跑脚本”，而是把每一次代码变更变成可验证、可追溯、可发布、可回滚的交付事件。"
      },
      {
        "type": "paragraph",
        "text": "一句话理解：CI 证明代码在合并前是健康的，CD 证明制品在发布中是可控的。流水线的产物不是日志，而是证据链。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层架构"
      },
      {
        "type": "paragraph",
        "text": "CI/CD 平台链路分成七层："
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "触发层：push、pull request、tag、定时任务和手动审批",
          "编排层：stage、job、依赖、并行、条件和失败策略",
          "执行层：runner、agent、容器环境和密钥注入",
          "验证层：lint、unit test、integration test、security scan",
          "制品层：artifact、container image、SBOM、签名和版本",
          "发布层：dev、staging、prod、canary、blue-green、rollback",
          "审计层：日志、审批、变更记录、通知和指标回写"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "架构图"
      },
      {
        "type": "code",
        "language": "text",
        "text": "git push / pull request\n        |\npipeline orchestrator\n        |\nrunner: lint -> test -> scan -> build\n        |\nartifact registry / image registry\n        |\ndeploy controller\n        |\ndev -> staging -> canary -> prod\n        |\nrollback + audit + notification"
      },
      {
        "type": "paragraph",
        "text": "关键点：流水线不要直接变成“人肉 SSH 的替身”，它应该只发布不可变制品并留下完整证据。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "典型场景"
      },
      {
        "type": "paragraph",
        "text": "适合 CI/CD 的场景："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "多人协作、频繁合并和频繁发布",
          "容器镜像、Helm Chart、Terraform 等标准制品交付",
          "需要审批、灰度、回滚和审计的生产发布",
          "需要安全扫描、依赖检查和合规证据的团队"
        ]
      },
      {
        "type": "paragraph",
        "text": "不适合粗暴自动化的场景："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "没有测试、没有回滚、没有环境隔离就直接自动上生产",
          "制品可变、tag 漂移、环境手工改动频繁",
          "密钥散落在脚本和日志里"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层原理"
      },
      {
        "type": "paragraph",
        "text": "CI/CD 的核心工程原则："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "不可变制品：同一 commit 构建一次，所有环境复用同一制品",
          "快速失败：lint 和单测先跑，越早失败成本越低",
          "缓存：依赖缓存和构建缓存提升速度，但必须可失效",
          "门禁：测试、扫描、审批和策略共同决定能否进入下一阶段",
          "回滚：发布动作必须可逆，且上一稳定版本可快速恢复",
          "最小权限：runner、部署 token、云权限按环境隔离"
        ]
      },
      {
        "type": "paragraph",
        "text": "算法和数学直觉："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "流水线是有向无环图，job 依赖决定并行度和关键路径",
          "缓存命中率影响整体交付耗时",
          "灰度发布是风险按流量比例逐步放大的实验",
          "SLO 门禁用错误率、延迟和可用性指标决定是否继续放量"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "常用命令"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "1. Git 变更和版本"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "git status\ngit log --oneline -5\ngit tag app-v1.0.0\ngit rev-parse --short HEAD"
      },
      {
        "type": "paragraph",
        "text": "流水线必须把 commit SHA 写入镜像 tag、制品元数据和发布记录，否则线上问题无法快速追溯到代码。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. 构建和扫描"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "docker build -t registry.example.com/app:${GIT_SHA} .\ndocker push registry.example.com/app:${GIT_SHA}\ntrivy image registry.example.com/app:${GIT_SHA}"
      },
      {
        "type": "paragraph",
        "text": "镜像 tag 建议绑定 commit SHA 或版本号，扫描结果作为发布门禁。不要用可漂移的 `latest` 做生产发布依据。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3. K8s 发布和回滚"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "kubectl set image deploy/app app=registry.example.com/app:${GIT_SHA} -n prod\nkubectl rollout status deploy/app -n prod\nkubectl rollout undo deploy/app -n prod"
      },
      {
        "type": "paragraph",
        "text": "发布后必须等待 rollout 结果并做冒烟检查。失败时回滚到上一 ReplicaSet 或上一稳定镜像。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4. GitHub Actions 排查"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "gh run list --limit 5\ngh run view <run-id> --log-failed\ngh run watch <run-id> --exit-status"
      },
      {
        "type": "paragraph",
        "text": "这些命令用于看流水线是否真的跑完、失败在哪个 job，以及部署是否成功结束。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "源码重点"
      },
      {
        "type": "paragraph",
        "text": "CI/CD 没有唯一源码，重点看平台的通用模块："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "pipeline parser：如何解析 YAML、变量、矩阵和条件",
          "scheduler：如何根据 DAG 调度 job",
          "runner/agent：如何拉取任务、注入密钥、执行命令和上传日志",
          "artifact store：如何保存制品、校验 digest 和生命周期管理",
          "cache：如何计算 key、恢复缓存和失效缓存",
          "deploy hooks：如何灰度、检查健康、回滚和通知",
          "policy engine：如何执行审批、权限和安全门禁"
        ]
      },
      {
        "type": "paragraph",
        "text": "阅读实现时建议先追一条 job：触发事件进入编排器，分配给 runner，拉代码，执行步骤，上传日志和制品，最后回写状态。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "典型落地方案"
      },
      {
        "type": "paragraph",
        "text": "一个生产 CI/CD 方案："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Pull Request：lint、单测、依赖扫描和构建验证",
          "Merge main：构建唯一镜像，生成 SBOM，签名并推送镜像仓库",
          "Dev：自动部署并跑集成测试",
          "Staging：使用生产等价配置，跑冒烟和回归",
          "Prod：人工审批后灰度发布，观察 SLO 指标",
          "Rollback：指标异常自动停止放量，保留一键回滚",
          "Audit：发布结果写入变更记录、通知和复盘系统"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "GitHub Actions + K8s 模板"
      },
      {
        "type": "code",
        "language": "yaml",
        "text": "name: deploy\non:\n  push:\n    branches: [main]\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm ci\n      - run: npm test\n      - run: docker build -t registry.example.com/app:${{ github.sha }} .\n      - run: docker push registry.example.com/app:${{ github.sha }}\n\n  deploy:\n    needs: build\n    environment: production\n    runs-on: ubuntu-latest\n    steps:\n      - run: kubectl set image deploy/app app=registry.example.com/app:${{ github.sha }} -n prod\n      - run: kubectl rollout status deploy/app -n prod"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10 道面试题"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "1. CI 和 CD 的区别是什么？"
      },
      {
        "type": "paragraph",
        "text": "CI 关注合并前后的持续验证，CD 关注制品从构建到环境发布的持续交付或部署。CI 证明代码健康，CD 控制发布风险。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. 为什么流水线要分阶段？"
      },
      {
        "type": "paragraph",
        "text": "不同阶段成本和风险不同。先跑便宜快速的检查，后跑昂贵慢速的集成、扫描和发布，可以更早失败。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3. 如何设计制品库？"
      },
      {
        "type": "paragraph",
        "text": "制品库要支持不可变版本、digest 校验、权限、生命周期、签名、扫描结果和从版本到 commit 的追溯。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4. 为什么要做静态检查和安全扫描？"
      },
      {
        "type": "paragraph",
        "text": "它们能在早期发现代码质量、依赖漏洞、密钥泄露和镜像风险，避免问题进入运行环境。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "5. 灰度发布怎么做？"
      },
      {
        "type": "paragraph",
        "text": "先让少量实例或少量流量使用新版本，观察错误率、延迟和业务指标，稳定后逐步放量。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "6. 回滚如何保证快速？"
      },
      {
        "type": "paragraph",
        "text": "使用不可变制品，保留上一稳定版本，部署系统支持一键回滚，并且配置和数据库变更要向前兼容。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "7. 如何控制流水线权限？"
      },
      {
        "type": "paragraph",
        "text": "按环境拆分凭证，runner 最小权限，敏感操作需要审批，密钥由平台托管，日志禁止打印敏感值。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8. 失败后怎样保留证据？"
      },
      {
        "type": "paragraph",
        "text": "保留日志、测试报告、镜像 digest、commit SHA、环境变量摘要、审批记录、部署事件和告警指标。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9. 如何避免“流水线能过但线上失败”？"
      },
      {
        "type": "paragraph",
        "text": "增加生产等价预发、冒烟测试、配置校验、数据库迁移演练、容量测试和灰度 SLO 门禁。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "10. CI/CD 如何和 K8s 结合？"
      },
      {
        "type": "paragraph",
        "text": "CI/CD 负责验证、构建、扫描和提交发布意图；K8s 负责滚动更新、健康检查、扩缩容和回滚执行。"
      }
    ],
    "rawMarkdown": "## 本质\n\nCI/CD 的本质不是“自动跑脚本”，而是把每一次代码变更变成可验证、可追溯、可发布、可回滚的交付事件。\n\n一句话理解：CI 证明代码在合并前是健康的，CD 证明制品在发布中是可控的。流水线的产物不是日志，而是证据链。\n\n## 底层架构\n\nCI/CD 平台链路分成七层：\n\n1. 触发层：push、pull request、tag、定时任务和手动审批\n2. 编排层：stage、job、依赖、并行、条件和失败策略\n3. 执行层：runner、agent、容器环境和密钥注入\n4. 验证层：lint、unit test、integration test、security scan\n5. 制品层：artifact、container image、SBOM、签名和版本\n6. 发布层：dev、staging、prod、canary、blue-green、rollback\n7. 审计层：日志、审批、变更记录、通知和指标回写\n\n### 架构图\n\n```text\ngit push / pull request\n        |\npipeline orchestrator\n        |\nrunner: lint -> test -> scan -> build\n        |\nartifact registry / image registry\n        |\ndeploy controller\n        |\ndev -> staging -> canary -> prod\n        |\nrollback + audit + notification\n```\n\n关键点：流水线不要直接变成“人肉 SSH 的替身”，它应该只发布不可变制品并留下完整证据。\n\n## 典型场景\n\n适合 CI/CD 的场景：\n\n- 多人协作、频繁合并和频繁发布\n- 容器镜像、Helm Chart、Terraform 等标准制品交付\n- 需要审批、灰度、回滚和审计的生产发布\n- 需要安全扫描、依赖检查和合规证据的团队\n\n不适合粗暴自动化的场景：\n\n- 没有测试、没有回滚、没有环境隔离就直接自动上生产\n- 制品可变、tag 漂移、环境手工改动频繁\n- 密钥散落在脚本和日志里\n\n## 底层原理\n\nCI/CD 的核心工程原则：\n\n- 不可变制品：同一 commit 构建一次，所有环境复用同一制品\n- 快速失败：lint 和单测先跑，越早失败成本越低\n- 缓存：依赖缓存和构建缓存提升速度，但必须可失效\n- 门禁：测试、扫描、审批和策略共同决定能否进入下一阶段\n- 回滚：发布动作必须可逆，且上一稳定版本可快速恢复\n- 最小权限：runner、部署 token、云权限按环境隔离\n\n算法和数学直觉：\n\n- 流水线是有向无环图，job 依赖决定并行度和关键路径\n- 缓存命中率影响整体交付耗时\n- 灰度发布是风险按流量比例逐步放大的实验\n- SLO 门禁用错误率、延迟和可用性指标决定是否继续放量\n\n## 常用命令\n\n### 1. Git 变更和版本\n\n```bash\ngit status\ngit log --oneline -5\ngit tag app-v1.0.0\ngit rev-parse --short HEAD\n```\n\n流水线必须把 commit SHA 写入镜像 tag、制品元数据和发布记录，否则线上问题无法快速追溯到代码。\n\n### 2. 构建和扫描\n\n```bash\ndocker build -t registry.example.com/app:${GIT_SHA} .\ndocker push registry.example.com/app:${GIT_SHA}\ntrivy image registry.example.com/app:${GIT_SHA}\n```\n\n镜像 tag 建议绑定 commit SHA 或版本号，扫描结果作为发布门禁。不要用可漂移的 `latest` 做生产发布依据。\n\n### 3. K8s 发布和回滚\n\n```bash\nkubectl set image deploy/app app=registry.example.com/app:${GIT_SHA} -n prod\nkubectl rollout status deploy/app -n prod\nkubectl rollout undo deploy/app -n prod\n```\n\n发布后必须等待 rollout 结果并做冒烟检查。失败时回滚到上一 ReplicaSet 或上一稳定镜像。\n\n### 4. GitHub Actions 排查\n\n```bash\ngh run list --limit 5\ngh run view <run-id> --log-failed\ngh run watch <run-id> --exit-status\n```\n\n这些命令用于看流水线是否真的跑完、失败在哪个 job，以及部署是否成功结束。\n\n## 源码重点\n\nCI/CD 没有唯一源码，重点看平台的通用模块：\n\n- pipeline parser：如何解析 YAML、变量、矩阵和条件\n- scheduler：如何根据 DAG 调度 job\n- runner/agent：如何拉取任务、注入密钥、执行命令和上传日志\n- artifact store：如何保存制品、校验 digest 和生命周期管理\n- cache：如何计算 key、恢复缓存和失效缓存\n- deploy hooks：如何灰度、检查健康、回滚和通知\n- policy engine：如何执行审批、权限和安全门禁\n\n阅读实现时建议先追一条 job：触发事件进入编排器，分配给 runner，拉代码，执行步骤，上传日志和制品，最后回写状态。\n\n## 典型落地方案\n\n一个生产 CI/CD 方案：\n\n- Pull Request：lint、单测、依赖扫描和构建验证\n- Merge main：构建唯一镜像，生成 SBOM，签名并推送镜像仓库\n- Dev：自动部署并跑集成测试\n- Staging：使用生产等价配置，跑冒烟和回归\n- Prod：人工审批后灰度发布，观察 SLO 指标\n- Rollback：指标异常自动停止放量，保留一键回滚\n- Audit：发布结果写入变更记录、通知和复盘系统\n\n### GitHub Actions + K8s 模板\n\n```yaml\nname: deploy\non:\n  push:\n    branches: [main]\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm ci\n      - run: npm test\n      - run: docker build -t registry.example.com/app:${{ github.sha }} .\n      - run: docker push registry.example.com/app:${{ github.sha }}\n\n  deploy:\n    needs: build\n    environment: production\n    runs-on: ubuntu-latest\n    steps:\n      - run: kubectl set image deploy/app app=registry.example.com/app:${{ github.sha }} -n prod\n      - run: kubectl rollout status deploy/app -n prod\n```\n\n## 10 道面试题\n\n### 1. CI 和 CD 的区别是什么？\n\nCI 关注合并前后的持续验证，CD 关注制品从构建到环境发布的持续交付或部署。CI 证明代码健康，CD 控制发布风险。\n\n### 2. 为什么流水线要分阶段？\n\n不同阶段成本和风险不同。先跑便宜快速的检查，后跑昂贵慢速的集成、扫描和发布，可以更早失败。\n\n### 3. 如何设计制品库？\n\n制品库要支持不可变版本、digest 校验、权限、生命周期、签名、扫描结果和从版本到 commit 的追溯。\n\n### 4. 为什么要做静态检查和安全扫描？\n\n它们能在早期发现代码质量、依赖漏洞、密钥泄露和镜像风险，避免问题进入运行环境。\n\n### 5. 灰度发布怎么做？\n\n先让少量实例或少量流量使用新版本，观察错误率、延迟和业务指标，稳定后逐步放量。\n\n### 6. 回滚如何保证快速？\n\n使用不可变制品，保留上一稳定版本，部署系统支持一键回滚，并且配置和数据库变更要向前兼容。\n\n### 7. 如何控制流水线权限？\n\n按环境拆分凭证，runner 最小权限，敏感操作需要审批，密钥由平台托管，日志禁止打印敏感值。\n\n### 8. 失败后怎样保留证据？\n\n保留日志、测试报告、镜像 digest、commit SHA、环境变量摘要、审批记录、部署事件和告警指标。\n\n### 9. 如何避免“流水线能过但线上失败”？\n\n增加生产等价预发、冒烟测试、配置校验、数据库迁移演练、容量测试和灰度 SLO 门禁。\n\n### 10. CI/CD 如何和 K8s 结合？\n\nCI/CD 负责验证、构建、扫描和提交发布意图；K8s 负责滚动更新、健康检查、扩缩容和回滚执行。"
  },
  {
    "id": "docker",
    "title": "Docker",
    "domain": "Container",
    "summary": "容器交付的标准工具，负责镜像构建、分发和运行时入口。",
    "essence": "Docker 本质上是把应用依赖、文件系统和启动方式封装成可复现的交付单元。",
    "scenarios": "适合 Web/API、批处理、CI 构建环境、本地依赖编排和平台化交付。",
    "sourceFocus": "moby 的 image、container、builder 路径，runc 的 OCI 启动链。",
    "colors": [
      "#0f7b78",
      "#d7ece7",
      "#de6449"
    ],
    "body": [
      "本质",
      "Docker",
      "不是虚拟机，也不是单纯的打包工具。它的本质是一个围绕镜像、容器和",
      "registry",
      "的标准化交付系统。",
      "它解决四个现实问题：",
      "环境漂移：开发、测试、生产使用同一份镜像",
      "依赖封装：把运行所需的库、二进制和启动方式打包起来",
      "交付复用：镜像可以缓存、复制、签名、扫描和回滚",
      "平台接管：容器可以交给",
      "K8s",
      "或其他调度系统统一管理",
      "底层架构",
      "Docker",
      "的链路可以拆成五层：",
      "构建层：Dockerfile、BuildKit、build",
      "context、layer",
      "cache",
      "镜像层：layer、manifest、digest、registry",
      "运行时层：containerd、runc、OCI",
      "spec",
      "隔离层：namespace、cgroup、capabilities、seccomp",
      "文件系统层：overlayfs、copy-on-write、volume、bind",
      "mount",
      "架构图",
      "Dockerfile",
      "|",
      "BuildKit",
      "/",
      "cache",
      "|",
      "image",
      "layer",
      "->",
      "manifest",
      "->",
      "registry",
      "|",
      "containerd",
      "|",
      "runc",
      "(OCI",
      "runtime)",
      "|",
      "Linux",
      "namespace",
      "+",
      "cgroup",
      "+",
      "overlayfs",
      "这条链路的关键点是：Docker",
      "本身不直接“变成”容器，它把构建与运行的抽象标准化，然后交给",
      "runtime",
      "和内核去落地。",
      "典型场景",
      "适合",
      "Docker",
      "的场景：",
      "Web/API",
      "服务交付",
      "CI",
      "构建和测试环境",
      "本地开发依赖编排",
      "批处理任务和一次性作业",
      "平台化制品发布",
      "不适合把",
      "Docker",
      "当答案的场景：",
      "需要大量有状态数据且没有明确持久化方案",
      "需要深度硬件访问或特殊内核能力",
      "还没解决应用本身的可观测和恢复问题",
      "底层原理",
      "Docker",
      "的核心是三件事：",
      "内容寻址：镜像",
      "layer",
      "用",
      "digest",
      "标识，保证内容唯一和可校验",
      "分层复用：重复",
      "layer",
      "不再重复存储和传输",
      "写时复制：运行时只有发生修改才写入可写层",
      "这背后的数学直觉很简单：",
      "哈希把内容映射成固定长度指纹，便于比较和缓存",
      "有向无环图表示",
      "layer",
      "依赖，避免重复计算",
      "写时复制把“全量复制”变成“按需复制”，显著降低启动成本",
      "常用命令",
      "1.",
      "构建镜像",
      "docker",
      "build",
      "-t",
      "app:1.0",
      ".",
      "作用是根据",
      "Dockerfile",
      "和上下文生成镜像。这里最重要的是",
      "build",
      "context，不是当前目录里所有文件都会自动进镜像，真正决定内容的是",
      "Dockerfile",
      "里的",
      "`COPY`",
      "和",
      "`.dockerignore`。",
      "2.",
      "启动容器",
      "docker",
      "run",
      "--rm",
      "-p",
      "8080:8080",
      "app:1.0",
      "作用是把镜像实例化为容器。`-p`",
      "做端口映射，`--rm`",
      "让测试容器退出后自动清理。生产里通常还会加环境变量、volume",
      "和健康检查。",
      "3.",
      "查看容器状态",
      "docker",
      "ps",
      "-a",
      "docker",
      "logs",
      "-f",
      "<container>",
      "docker",
      "exec",
      "-it",
      "<container>",
      "sh",
      "docker",
      "inspect",
      "<container>",
      "docker",
      "stats",
      "docker",
      "images",
      "这些命令分别对应：",
      "`ps",
      "-a`：看容器是否在跑",
      "`logs`：看程序输出和报错",
      "`exec`：进入容器内部检查环境",
      "`inspect`：看配置、挂载、网络、入口命令",
      "`stats`：看",
      "CPU、内存、IO",
      "`images`：看镜像占用和标签",
      "4.",
      "镜像分发",
      "docker",
      "pull",
      "nginx:1.27",
      "docker",
      "tag",
      "app:1.0",
      "registry.example.com/app:1.0",
      "`pull`",
      "拉取依赖镜像，`tag`",
      "标记制品版本。生产环境更推荐使用",
      "digest",
      "发布，避免",
      "tag",
      "漂移导致“今天拉到的不是昨天那版”。",
      "源码重点",
      "Docker",
      "最值得先读的三条路径是：",
      "`moby/builder`：Dockerfile",
      "如何转成镜像层",
      "`containerd`：镜像拉取、快照、容器创建",
      "`runc`：namespace、cgroup、挂载、进程启动",
      "读源码顺序",
      "先看",
      "`moby/builder`，理解构建与",
      "layer",
      "的形成。",
      "再看",
      "`containerd`，理解镜像、快照和容器生命周期。",
      "最后看",
      "`runc`",
      "的",
      "`libcontainer`，理解",
      "OCI",
      "runtime",
      "如何进入内核层。",
      "典型落地方案",
      "所有服务用多阶段",
      "Dockerfile",
      "运行镜像只保留必要二进制和配置",
      "统一使用不可变",
      "tag",
      "或",
      "digest",
      "发布",
      "搭配镜像扫描、签名和非",
      "root",
      "用户",
      "容器里只做单一职责，日志输出到",
      "stdout，数据挂到",
      "volume，配置从环境变量或挂载文件注入",
      "一个最小生产模板",
      "FROM",
      "node:22-alpine",
      "AS",
      "build",
      "WORKDIR",
      "/app",
      "COPY",
      "package*.json",
      "./",
      "RUN",
      "npm",
      "ci",
      "COPY",
      ".",
      ".",
      "RUN",
      "npm",
      "run",
      "build",
      "FROM",
      "nginx:1.27-alpine",
      "COPY",
      "--from=build",
      "/app/dist",
      "/usr/share/nginx/html",
      "USER",
      "nginx",
      "EXPOSE",
      "8080",
      "HEALTHCHECK",
      "CMD",
      "wget",
      "-qO-",
      "http://127.0.0.1:8080/",
      "||",
      "exit",
      "1",
      "这个模板的关键不是",
      "Node",
      "或",
      "NGINX，而是构建和运行彻底分离，最终镜像只保留运行时需要的东西。",
      "10",
      "道面试题",
      "1.",
      "Docker",
      "和虚拟机的核心差异是什么？",
      "虚拟机把整个",
      "guest",
      "OS",
      "一起虚拟化，Docker",
      "共享宿主机内核，只隔离进程视图和资源边界。前者更重，后者启动更快、镜像更轻。",
      "2.",
      "镜像分层为什么能加速构建？",
      "每一层都按内容",
      "hash",
      "缓存，未变化的层可以直接复用。只要",
      "Dockerfile",
      "的前置步骤不变，后续构建就能跳过大量重复工作。",
      "3.",
      "什么是",
      "copy-on-write？",
      "只读层被多个容器共享，只有写入发生时才复制到可写层。这样既节省空间，又减少启动成本。",
      "4.",
      "namespace",
      "和",
      "cgroup",
      "分别隔离什么？",
      "namespace",
      "负责“看见什么”，比如进程、网络、挂载点；cgroup",
      "负责“能用多少”，比如",
      "CPU、内存和",
      "IO。",
      "5.",
      "容器里为什么最好不要用",
      "root？",
      "root",
      "会放大逃逸和误操作风险，也会让挂载卷权限更复杂。生产容器应该默认使用最小权限用户。",
      "6.",
      "ENTRYPOINT",
      "和",
      "CMD",
      "的区别是什么？",
      "ENTRYPOINT",
      "定义容器主程序，CMD",
      "更像默认参数。前者稳定执行器，后者方便运行时覆盖。",
      "7.",
      "为什么容器默认写入会落到容器层？",
      "因为底层通常是",
      "overlayfs，基础镜像层是只读的，运行时修改只能写到上层可写层。",
      "8.",
      "`docker",
      "inspect`",
      "重点看什么？",
      "看镜像、网络、挂载、环境变量、入口命令和健康检查。排障时这几个字段最能解释“为什么没起来”。",
      "9.",
      "你如何设计一个可回滚的镜像发布流程？",
      "使用不可变",
      "tag",
      "或",
      "digest",
      "发布，流水线先做扫描和预发验证，再灰度上线。出问题时直接回滚到上一个已验证镜像。",
      "10.",
      "Docker",
      "镜像过大时你怎么排查？",
      "先看基础镜像和依赖包，再看构建缓存、调试工具和",
      "`.dockerignore`。通常多阶段构建是最有效的减肥方式。"
    ],
    "bodyBlocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "本质"
      },
      {
        "type": "paragraph",
        "text": "Docker 不是虚拟机，也不是单纯的打包工具。它的本质是一个围绕镜像、容器和 registry 的标准化交付系统。"
      },
      {
        "type": "paragraph",
        "text": "它解决四个现实问题："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "环境漂移：开发、测试、生产使用同一份镜像",
          "依赖封装：把运行所需的库、二进制和启动方式打包起来",
          "交付复用：镜像可以缓存、复制、签名、扫描和回滚",
          "平台接管：容器可以交给 K8s 或其他调度系统统一管理"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层架构"
      },
      {
        "type": "paragraph",
        "text": "Docker 的链路可以拆成五层："
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "构建层：Dockerfile、BuildKit、build context、layer cache",
          "镜像层：layer、manifest、digest、registry",
          "运行时层：containerd、runc、OCI spec",
          "隔离层：namespace、cgroup、capabilities、seccomp",
          "文件系统层：overlayfs、copy-on-write、volume、bind mount"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "架构图"
      },
      {
        "type": "code",
        "language": "text",
        "text": "Dockerfile\n   |\nBuildKit / cache\n   |\nimage layer -> manifest -> registry\n   |\ncontainerd\n   |\nrunc (OCI runtime)\n   |\nLinux namespace + cgroup + overlayfs"
      },
      {
        "type": "paragraph",
        "text": "这条链路的关键点是：Docker 本身不直接“变成”容器，它把构建与运行的抽象标准化，然后交给 runtime 和内核去落地。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "典型场景"
      },
      {
        "type": "paragraph",
        "text": "适合 Docker 的场景："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Web/API 服务交付",
          "CI 构建和测试环境",
          "本地开发依赖编排",
          "批处理任务和一次性作业",
          "平台化制品发布"
        ]
      },
      {
        "type": "paragraph",
        "text": "不适合把 Docker 当答案的场景："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "需要大量有状态数据且没有明确持久化方案",
          "需要深度硬件访问或特殊内核能力",
          "还没解决应用本身的可观测和恢复问题"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层原理"
      },
      {
        "type": "paragraph",
        "text": "Docker 的核心是三件事："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "内容寻址：镜像 layer 用 digest 标识，保证内容唯一和可校验",
          "分层复用：重复 layer 不再重复存储和传输",
          "写时复制：运行时只有发生修改才写入可写层"
        ]
      },
      {
        "type": "paragraph",
        "text": "这背后的数学直觉很简单："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "哈希把内容映射成固定长度指纹，便于比较和缓存",
          "有向无环图表示 layer 依赖，避免重复计算",
          "写时复制把“全量复制”变成“按需复制”，显著降低启动成本"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "常用命令"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "1. 构建镜像"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "docker build -t app:1.0 ."
      },
      {
        "type": "paragraph",
        "text": "作用是根据 Dockerfile 和上下文生成镜像。这里最重要的是 build context，不是当前目录里所有文件都会自动进镜像，真正决定内容的是 Dockerfile 里的 `COPY` 和 `.dockerignore`。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. 启动容器"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "docker run --rm -p 8080:8080 app:1.0"
      },
      {
        "type": "paragraph",
        "text": "作用是把镜像实例化为容器。`-p` 做端口映射，`--rm` 让测试容器退出后自动清理。生产里通常还会加环境变量、volume 和健康检查。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3. 查看容器状态"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "docker ps -a\ndocker logs -f <container>\ndocker exec -it <container> sh\ndocker inspect <container>\ndocker stats\ndocker images"
      },
      {
        "type": "paragraph",
        "text": "这些命令分别对应："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "`ps -a`：看容器是否在跑",
          "`logs`：看程序输出和报错",
          "`exec`：进入容器内部检查环境",
          "`inspect`：看配置、挂载、网络、入口命令",
          "`stats`：看 CPU、内存、IO",
          "`images`：看镜像占用和标签"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4. 镜像分发"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "docker pull nginx:1.27\ndocker tag app:1.0 registry.example.com/app:1.0"
      },
      {
        "type": "paragraph",
        "text": "`pull` 拉取依赖镜像，`tag` 标记制品版本。生产环境更推荐使用 digest 发布，避免 tag 漂移导致“今天拉到的不是昨天那版”。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "源码重点"
      },
      {
        "type": "paragraph",
        "text": "Docker 最值得先读的三条路径是："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "`moby/builder`：Dockerfile 如何转成镜像层",
          "`containerd`：镜像拉取、快照、容器创建",
          "`runc`：namespace、cgroup、挂载、进程启动"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "读源码顺序"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "先看 `moby/builder`，理解构建与 layer 的形成。",
          "再看 `containerd`，理解镜像、快照和容器生命周期。",
          "最后看 `runc` 的 `libcontainer`，理解 OCI runtime 如何进入内核层。"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "典型落地方案"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "所有服务用多阶段 Dockerfile",
          "运行镜像只保留必要二进制和配置",
          "统一使用不可变 tag 或 digest 发布",
          "搭配镜像扫描、签名和非 root 用户",
          "容器里只做单一职责，日志输出到 stdout，数据挂到 volume，配置从环境变量或挂载文件注入"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "一个最小生产模板"
      },
      {
        "type": "code",
        "language": "dockerfile",
        "text": "FROM node:22-alpine AS build\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nRUN npm run build\n\nFROM nginx:1.27-alpine\nCOPY --from=build /app/dist /usr/share/nginx/html\nUSER nginx\nEXPOSE 8080\nHEALTHCHECK CMD wget -qO- http://127.0.0.1:8080/ || exit 1"
      },
      {
        "type": "paragraph",
        "text": "这个模板的关键不是 Node 或 NGINX，而是构建和运行彻底分离，最终镜像只保留运行时需要的东西。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10 道面试题"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "1. Docker 和虚拟机的核心差异是什么？"
      },
      {
        "type": "paragraph",
        "text": "虚拟机把整个 guest OS 一起虚拟化，Docker 共享宿主机内核，只隔离进程视图和资源边界。前者更重，后者启动更快、镜像更轻。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. 镜像分层为什么能加速构建？"
      },
      {
        "type": "paragraph",
        "text": "每一层都按内容 hash 缓存，未变化的层可以直接复用。只要 Dockerfile 的前置步骤不变，后续构建就能跳过大量重复工作。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3. 什么是 copy-on-write？"
      },
      {
        "type": "paragraph",
        "text": "只读层被多个容器共享，只有写入发生时才复制到可写层。这样既节省空间，又减少启动成本。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4. namespace 和 cgroup 分别隔离什么？"
      },
      {
        "type": "paragraph",
        "text": "namespace 负责“看见什么”，比如进程、网络、挂载点；cgroup 负责“能用多少”，比如 CPU、内存和 IO。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "5. 容器里为什么最好不要用 root？"
      },
      {
        "type": "paragraph",
        "text": "root 会放大逃逸和误操作风险，也会让挂载卷权限更复杂。生产容器应该默认使用最小权限用户。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "6. ENTRYPOINT 和 CMD 的区别是什么？"
      },
      {
        "type": "paragraph",
        "text": "ENTRYPOINT 定义容器主程序，CMD 更像默认参数。前者稳定执行器，后者方便运行时覆盖。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "7. 为什么容器默认写入会落到容器层？"
      },
      {
        "type": "paragraph",
        "text": "因为底层通常是 overlayfs，基础镜像层是只读的，运行时修改只能写到上层可写层。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8. `docker inspect` 重点看什么？"
      },
      {
        "type": "paragraph",
        "text": "看镜像、网络、挂载、环境变量、入口命令和健康检查。排障时这几个字段最能解释“为什么没起来”。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9. 你如何设计一个可回滚的镜像发布流程？"
      },
      {
        "type": "paragraph",
        "text": "使用不可变 tag 或 digest 发布，流水线先做扫描和预发验证，再灰度上线。出问题时直接回滚到上一个已验证镜像。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "10. Docker 镜像过大时你怎么排查？"
      },
      {
        "type": "paragraph",
        "text": "先看基础镜像和依赖包，再看构建缓存、调试工具和 `.dockerignore`。通常多阶段构建是最有效的减肥方式。"
      }
    ],
    "rawMarkdown": "## 本质\n\nDocker 不是虚拟机，也不是单纯的打包工具。它的本质是一个围绕镜像、容器和 registry 的标准化交付系统。\n\n它解决四个现实问题：\n\n- 环境漂移：开发、测试、生产使用同一份镜像\n- 依赖封装：把运行所需的库、二进制和启动方式打包起来\n- 交付复用：镜像可以缓存、复制、签名、扫描和回滚\n- 平台接管：容器可以交给 K8s 或其他调度系统统一管理\n\n## 底层架构\n\nDocker 的链路可以拆成五层：\n\n1. 构建层：Dockerfile、BuildKit、build context、layer cache\n2. 镜像层：layer、manifest、digest、registry\n3. 运行时层：containerd、runc、OCI spec\n4. 隔离层：namespace、cgroup、capabilities、seccomp\n5. 文件系统层：overlayfs、copy-on-write、volume、bind mount\n\n### 架构图\n\n```text\nDockerfile\n   |\nBuildKit / cache\n   |\nimage layer -> manifest -> registry\n   |\ncontainerd\n   |\nrunc (OCI runtime)\n   |\nLinux namespace + cgroup + overlayfs\n```\n\n这条链路的关键点是：Docker 本身不直接“变成”容器，它把构建与运行的抽象标准化，然后交给 runtime 和内核去落地。\n\n## 典型场景\n\n适合 Docker 的场景：\n\n- Web/API 服务交付\n- CI 构建和测试环境\n- 本地开发依赖编排\n- 批处理任务和一次性作业\n- 平台化制品发布\n\n不适合把 Docker 当答案的场景：\n\n- 需要大量有状态数据且没有明确持久化方案\n- 需要深度硬件访问或特殊内核能力\n- 还没解决应用本身的可观测和恢复问题\n\n## 底层原理\n\nDocker 的核心是三件事：\n\n- 内容寻址：镜像 layer 用 digest 标识，保证内容唯一和可校验\n- 分层复用：重复 layer 不再重复存储和传输\n- 写时复制：运行时只有发生修改才写入可写层\n\n这背后的数学直觉很简单：\n\n- 哈希把内容映射成固定长度指纹，便于比较和缓存\n- 有向无环图表示 layer 依赖，避免重复计算\n- 写时复制把“全量复制”变成“按需复制”，显著降低启动成本\n\n## 常用命令\n\n### 1. 构建镜像\n\n```bash\ndocker build -t app:1.0 .\n```\n\n作用是根据 Dockerfile 和上下文生成镜像。这里最重要的是 build context，不是当前目录里所有文件都会自动进镜像，真正决定内容的是 Dockerfile 里的 `COPY` 和 `.dockerignore`。\n\n### 2. 启动容器\n\n```bash\ndocker run --rm -p 8080:8080 app:1.0\n```\n\n作用是把镜像实例化为容器。`-p` 做端口映射，`--rm` 让测试容器退出后自动清理。生产里通常还会加环境变量、volume 和健康检查。\n\n### 3. 查看容器状态\n\n```bash\ndocker ps -a\ndocker logs -f <container>\ndocker exec -it <container> sh\ndocker inspect <container>\ndocker stats\ndocker images\n```\n\n这些命令分别对应：\n\n- `ps -a`：看容器是否在跑\n- `logs`：看程序输出和报错\n- `exec`：进入容器内部检查环境\n- `inspect`：看配置、挂载、网络、入口命令\n- `stats`：看 CPU、内存、IO\n- `images`：看镜像占用和标签\n\n### 4. 镜像分发\n\n```bash\ndocker pull nginx:1.27\ndocker tag app:1.0 registry.example.com/app:1.0\n```\n\n`pull` 拉取依赖镜像，`tag` 标记制品版本。生产环境更推荐使用 digest 发布，避免 tag 漂移导致“今天拉到的不是昨天那版”。\n\n## 源码重点\n\nDocker 最值得先读的三条路径是：\n\n- `moby/builder`：Dockerfile 如何转成镜像层\n- `containerd`：镜像拉取、快照、容器创建\n- `runc`：namespace、cgroup、挂载、进程启动\n\n### 读源码顺序\n\n1. 先看 `moby/builder`，理解构建与 layer 的形成。\n2. 再看 `containerd`，理解镜像、快照和容器生命周期。\n3. 最后看 `runc` 的 `libcontainer`，理解 OCI runtime 如何进入内核层。\n\n## 典型落地方案\n\n- 所有服务用多阶段 Dockerfile\n- 运行镜像只保留必要二进制和配置\n- 统一使用不可变 tag 或 digest 发布\n- 搭配镜像扫描、签名和非 root 用户\n- 容器里只做单一职责，日志输出到 stdout，数据挂到 volume，配置从环境变量或挂载文件注入\n\n### 一个最小生产模板\n\n```dockerfile\nFROM node:22-alpine AS build\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nRUN npm run build\n\nFROM nginx:1.27-alpine\nCOPY --from=build /app/dist /usr/share/nginx/html\nUSER nginx\nEXPOSE 8080\nHEALTHCHECK CMD wget -qO- http://127.0.0.1:8080/ || exit 1\n```\n\n这个模板的关键不是 Node 或 NGINX，而是构建和运行彻底分离，最终镜像只保留运行时需要的东西。\n\n## 10 道面试题\n\n### 1. Docker 和虚拟机的核心差异是什么？\n\n虚拟机把整个 guest OS 一起虚拟化，Docker 共享宿主机内核，只隔离进程视图和资源边界。前者更重，后者启动更快、镜像更轻。\n\n### 2. 镜像分层为什么能加速构建？\n\n每一层都按内容 hash 缓存，未变化的层可以直接复用。只要 Dockerfile 的前置步骤不变，后续构建就能跳过大量重复工作。\n\n### 3. 什么是 copy-on-write？\n\n只读层被多个容器共享，只有写入发生时才复制到可写层。这样既节省空间，又减少启动成本。\n\n### 4. namespace 和 cgroup 分别隔离什么？\n\nnamespace 负责“看见什么”，比如进程、网络、挂载点；cgroup 负责“能用多少”，比如 CPU、内存和 IO。\n\n### 5. 容器里为什么最好不要用 root？\n\nroot 会放大逃逸和误操作风险，也会让挂载卷权限更复杂。生产容器应该默认使用最小权限用户。\n\n### 6. ENTRYPOINT 和 CMD 的区别是什么？\n\nENTRYPOINT 定义容器主程序，CMD 更像默认参数。前者稳定执行器，后者方便运行时覆盖。\n\n### 7. 为什么容器默认写入会落到容器层？\n\n因为底层通常是 overlayfs，基础镜像层是只读的，运行时修改只能写到上层可写层。\n\n### 8. `docker inspect` 重点看什么？\n\n看镜像、网络、挂载、环境变量、入口命令和健康检查。排障时这几个字段最能解释“为什么没起来”。\n\n### 9. 你如何设计一个可回滚的镜像发布流程？\n\n使用不可变 tag 或 digest 发布，流水线先做扫描和预发验证，再灰度上线。出问题时直接回滚到上一个已验证镜像。\n\n### 10. Docker 镜像过大时你怎么排查？\n\n先看基础镜像和依赖包，再看构建缓存、调试工具和 `.dockerignore`。通常多阶段构建是最有效的减肥方式。"
  },
  {
    "id": "kafka",
    "title": "Kafka",
    "domain": "Middleware",
    "summary": "高吞吐事件流平台，负责日志、消息、数据管道和异步解耦。",
    "essence": "Kafka 本质是可扩展的追加日志系统，用分区和消费组管理吞吐与顺序。",
    "scenarios": "适合事件驱动架构、日志采集、埋点、异步流程和大规模数据传输。",
    "sourceFocus": "core/src/main/scala/kafka/log、replica、controller、group 等路径。",
    "colors": [
      "#0f7b78",
      "#d7ece7",
      "#d8a321"
    ],
    "body": [
      "本质",
      "Kafka",
      "的本质不是普通消息队列，而是一个分布式追加日志系统。消息写入",
      "partition",
      "后形成有序日志，消费者用",
      "offset",
      "记录自己读到哪里。",
      "它解决的是高吞吐、可回放、可扩展和多消费者独立消费的问题。Kafka",
      "不追求“每条消息立刻点对点处理”，而是把事件变成可持久化、可订阅、可追溯的数据流。",
      "底层架构",
      "Kafka",
      "的核心链路分成六层：",
      "Producer：按",
      "topic",
      "和",
      "partition",
      "key",
      "批量写入",
      "Broker：保存日志段、索引和副本",
      "Partition：消息顺序和并行度的基本单位",
      "Replica：leader",
      "处理读写，follower",
      "同步日志",
      "Consumer",
      "Group：把",
      "partition",
      "分配给组内消费者",
      "Controller/Coordinator：管理元数据、leader、消费组和",
      "rebalancing",
      "架构图",
      "producer",
      "|",
      "topic",
      "->",
      "partition-0/1/2",
      "|",
      "leader",
      "broker",
      "->",
      "follower",
      "replicas",
      "|",
      "log",
      "segment",
      "+",
      "offset",
      "index",
      "|",
      "consumer",
      "group",
      "|",
      "consumer",
      "A",
      "/",
      "consumer",
      "B",
      "图里的重点是",
      "partition：它同时决定吞吐、顺序、存储切分和消费并行度。",
      "典型场景",
      "适合",
      "Kafka",
      "的场景：",
      "日志采集、埋点、指标和数据管道",
      "订单、支付、库存等业务事件流",
      "多下游订阅同一份事件",
      "需要消息回放和追溯的审计链路",
      "高吞吐异步解耦",
      "不适合",
      "Kafka",
      "的场景：",
      "小规模、低吞吐、强路由语义的任务分发",
      "需要复杂优先级、延迟、逐条确认的业务队列",
      "不能接受最终一致和重复消费的流程",
      "底层原理",
      "Kafka",
      "高吞吐的核心原理：",
      "顺序追加：磁盘顺序写远快于随机写",
      "批处理：producer、broker、consumer",
      "都尽量批量读写",
      "零拷贝：文件数据可以减少用户态和内核态拷贝",
      "分区并行：topic",
      "拆成多个",
      "partition，横向扩展读写",
      "offset",
      "解耦：broker",
      "保存日志，消费者自己管理进度",
      "涉及的算法和数学直觉：",
      "哈希分区：同一",
      "key",
      "映射到固定",
      "partition，保证",
      "key",
      "内顺序",
      "ISR",
      "副本集合：用同步进度约束可用副本，降低丢数据风险",
      "Rebalance",
      "分配：把",
      "partition",
      "尽量均匀分给消费者，同时减少迁移",
      "日志清理：按时间、大小或",
      "key",
      "compact",
      "控制存储增长",
      "常用命令",
      "1.",
      "Topic",
      "管理",
      "kafka-topics.sh",
      "--bootstrap-server",
      "localhost:9092",
      "--list",
      "kafka-topics.sh",
      "--create",
      "--topic",
      "events",
      "--partitions",
      "6",
      "--replication-factor",
      "3",
      "--bootstrap-server",
      "localhost:9092",
      "kafka-topics.sh",
      "--describe",
      "--topic",
      "events",
      "--bootstrap-server",
      "localhost:9092",
      "`partitions`",
      "决定最大消费并行度，`replication-factor`",
      "决定副本数。生产环境通常至少",
      "3",
      "副本，分区数要结合吞吐、顺序和未来扩容设计。",
      "2.",
      "生产和消费测试",
      "kafka-console-producer.sh",
      "--bootstrap-server",
      "localhost:9092",
      "--topic",
      "events",
      "kafka-console-consumer.sh",
      "--bootstrap-server",
      "localhost:9092",
      "--topic",
      "events",
      "--from-beginning",
      "控制台命令适合验证连通性和基本路由，不适合压测。真正压测要看批大小、压缩、acks、linger",
      "和消费处理耗时。",
      "3.",
      "消费组排查",
      "kafka-consumer-groups.sh",
      "--bootstrap-server",
      "localhost:9092",
      "--list",
      "kafka-consumer-groups.sh",
      "--bootstrap-server",
      "localhost:9092",
      "--describe",
      "--group",
      "demo",
      "kafka-consumer-groups.sh",
      "--bootstrap-server",
      "localhost:9092",
      "--reset-offsets",
      "--group",
      "demo",
      "--topic",
      "events",
      "--to-earliest",
      "--execute",
      "`describe`",
      "重点看",
      "lag、current-offset、log-end-offset",
      "和",
      "consumer",
      "分配。重置",
      "offset",
      "是高风险操作，必须确认是否允许消息重放。",
      "4.",
      "Broker",
      "健康",
      "kafka-broker-api-versions.sh",
      "--bootstrap-server",
      "localhost:9092",
      "kafka-log-dirs.sh",
      "--bootstrap-server",
      "localhost:9092",
      "--describe",
      "这些命令用于检查",
      "broker",
      "版本兼容、日志目录和分区分布，排查磁盘倾斜和副本异常。",
      "源码重点",
      "建议按写入、复制、消费三条线读：",
      "`kafka/log`：Log、LogSegment、索引、清理和",
      "compact",
      "`kafka/server`：KafkaApis、ReplicaManager、请求处理",
      "`kafka/cluster`：broker、partition、replica",
      "元数据",
      "`kafka/controller`：leader",
      "选举和分区状态管理",
      "`kafka/coordinator/group`：消费组加入、心跳和",
      "rebalance",
      "`clients/producer`、`clients/consumer`：客户端批处理、元数据和",
      "offset",
      "源码阅读路线：先追",
      "producer",
      "send",
      "到",
      "broker",
      "append，再追",
      "follower",
      "fetch，最后追",
      "consumer",
      "poll",
      "和",
      "offset",
      "commit。",
      "典型落地方案",
      "事件流平台落地时要先定义数据契约：",
      "topic",
      "按业务事件命名，不按临时需求乱建",
      "schema",
      "版本化，字段只能兼容演进",
      "partition",
      "key",
      "同时考虑顺序和负载分散",
      "producer",
      "开启幂等，关键链路设置",
      "`acks=all`",
      "consumer",
      "保证幂等处理，失败可重试、可回放",
      "监控",
      "lag、ISR、磁盘、请求延迟和",
      "rebalance",
      "次数",
      "重要",
      "topic",
      "配置保留时间、压缩策略和容量预算",
      "事件链路模板",
      "service",
      "writes",
      "business",
      "event",
      "|",
      "producer",
      "with",
      "schema",
      "+",
      "key",
      "|",
      "kafka",
      "topic",
      "partitions",
      "|",
      "consumer",
      "group",
      "A",
      "->",
      "search",
      "index",
      "consumer",
      "group",
      "B",
      "->",
      "warehouse",
      "consumer",
      "group",
      "C",
      "->",
      "notification",
      "10",
      "道面试题",
      "1.",
      "Kafka",
      "为什么吞吐高？",
      "因为它使用顺序追加日志、批处理、零拷贝和分区并行，减少随机",
      "I/O",
      "和逐条处理成本。",
      "2.",
      "Partition",
      "的作用是什么？",
      "Partition",
      "是顺序、并行和存储切分单位。一个分区内有序，多分区并行，分区",
      "key",
      "决定顺序边界。",
      "3.",
      "Consumer",
      "Group",
      "如何分配任务？",
      "同一消费组内，一个",
      "partition",
      "同一时刻只能分配给一个消费者。协调器通过",
      "rebalance",
      "把分区分给组成员。",
      "4.",
      "offset",
      "是什么？",
      "offset",
      "是分区日志中的位置，也是消费者消费进度。提交",
      "offset",
      "后，消费者重启可以从提交位置继续。",
      "5.",
      "Kafka",
      "如何保证顺序？",
      "只能保证单",
      "partition",
      "内顺序。要保证同一业务实体有序，就必须让同一",
      "key",
      "进入同一",
      "partition，并控制消费端顺序处理。",
      "6.",
      "ISR",
      "是什么？",
      "ISR",
      "是与",
      "leader",
      "同步进度足够接近的副本集合。`acks=all`",
      "时，写入需要",
      "ISR",
      "里的副本确认，提高可靠性。",
      "7.",
      "生产者幂等性解决什么问题？",
      "它用",
      "producer",
      "id",
      "和序列号避免重试导致的重复追加，让网络抖动下的重试更安全。",
      "8.",
      "Kafka",
      "适合做延迟队列吗？",
      "不是原生强项。可以用延迟",
      "topic、时间轮服务或定时扫描实现，但复杂延迟语义更适合专门队列。",
      "9.",
      "什么时候会",
      "rebalance？",
      "消费者加入或退出、心跳超时、分区变化、订阅变化都会触发。频繁",
      "rebalance",
      "会导致消费暂停和延迟上升。",
      "10.",
      "如何设计一个可靠事件",
      "topic？",
      "定义稳定",
      "schema，选择合理",
      "partition",
      "key，开启幂等生产，消费端幂等，监控",
      "lag",
      "和",
      "ISR，并规划保留时间、容量和回放策略。"
    ],
    "bodyBlocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "本质"
      },
      {
        "type": "paragraph",
        "text": "Kafka 的本质不是普通消息队列，而是一个分布式追加日志系统。消息写入 partition 后形成有序日志，消费者用 offset 记录自己读到哪里。"
      },
      {
        "type": "paragraph",
        "text": "它解决的是高吞吐、可回放、可扩展和多消费者独立消费的问题。Kafka 不追求“每条消息立刻点对点处理”，而是把事件变成可持久化、可订阅、可追溯的数据流。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层架构"
      },
      {
        "type": "paragraph",
        "text": "Kafka 的核心链路分成六层："
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "Producer：按 topic 和 partition key 批量写入",
          "Broker：保存日志段、索引和副本",
          "Partition：消息顺序和并行度的基本单位",
          "Replica：leader 处理读写，follower 同步日志",
          "Consumer Group：把 partition 分配给组内消费者",
          "Controller/Coordinator：管理元数据、leader、消费组和 rebalancing"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "架构图"
      },
      {
        "type": "code",
        "language": "text",
        "text": "producer\n  |\ntopic -> partition-0/1/2\n  |\nleader broker -> follower replicas\n  |\nlog segment + offset index\n  |\nconsumer group\n  |\nconsumer A / consumer B"
      },
      {
        "type": "paragraph",
        "text": "图里的重点是 partition：它同时决定吞吐、顺序、存储切分和消费并行度。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "典型场景"
      },
      {
        "type": "paragraph",
        "text": "适合 Kafka 的场景："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "日志采集、埋点、指标和数据管道",
          "订单、支付、库存等业务事件流",
          "多下游订阅同一份事件",
          "需要消息回放和追溯的审计链路",
          "高吞吐异步解耦"
        ]
      },
      {
        "type": "paragraph",
        "text": "不适合 Kafka 的场景："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "小规模、低吞吐、强路由语义的任务分发",
          "需要复杂优先级、延迟、逐条确认的业务队列",
          "不能接受最终一致和重复消费的流程"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层原理"
      },
      {
        "type": "paragraph",
        "text": "Kafka 高吞吐的核心原理："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "顺序追加：磁盘顺序写远快于随机写",
          "批处理：producer、broker、consumer 都尽量批量读写",
          "零拷贝：文件数据可以减少用户态和内核态拷贝",
          "分区并行：topic 拆成多个 partition，横向扩展读写",
          "offset 解耦：broker 保存日志，消费者自己管理进度"
        ]
      },
      {
        "type": "paragraph",
        "text": "涉及的算法和数学直觉："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "哈希分区：同一 key 映射到固定 partition，保证 key 内顺序",
          "ISR 副本集合：用同步进度约束可用副本，降低丢数据风险",
          "Rebalance 分配：把 partition 尽量均匀分给消费者，同时减少迁移",
          "日志清理：按时间、大小或 key compact 控制存储增长"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "常用命令"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "1. Topic 管理"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "kafka-topics.sh --bootstrap-server localhost:9092 --list\nkafka-topics.sh --create --topic events --partitions 6 --replication-factor 3 --bootstrap-server localhost:9092\nkafka-topics.sh --describe --topic events --bootstrap-server localhost:9092"
      },
      {
        "type": "paragraph",
        "text": "`partitions` 决定最大消费并行度，`replication-factor` 决定副本数。生产环境通常至少 3 副本，分区数要结合吞吐、顺序和未来扩容设计。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. 生产和消费测试"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "kafka-console-producer.sh --bootstrap-server localhost:9092 --topic events\nkafka-console-consumer.sh --bootstrap-server localhost:9092 --topic events --from-beginning"
      },
      {
        "type": "paragraph",
        "text": "控制台命令适合验证连通性和基本路由，不适合压测。真正压测要看批大小、压缩、acks、linger 和消费处理耗时。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3. 消费组排查"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "kafka-consumer-groups.sh --bootstrap-server localhost:9092 --list\nkafka-consumer-groups.sh --bootstrap-server localhost:9092 --describe --group demo\nkafka-consumer-groups.sh --bootstrap-server localhost:9092 --reset-offsets --group demo --topic events --to-earliest --execute"
      },
      {
        "type": "paragraph",
        "text": "`describe` 重点看 lag、current-offset、log-end-offset 和 consumer 分配。重置 offset 是高风险操作，必须确认是否允许消息重放。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4. Broker 健康"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "kafka-broker-api-versions.sh --bootstrap-server localhost:9092\nkafka-log-dirs.sh --bootstrap-server localhost:9092 --describe"
      },
      {
        "type": "paragraph",
        "text": "这些命令用于检查 broker 版本兼容、日志目录和分区分布，排查磁盘倾斜和副本异常。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "源码重点"
      },
      {
        "type": "paragraph",
        "text": "建议按写入、复制、消费三条线读："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "`kafka/log`：Log、LogSegment、索引、清理和 compact",
          "`kafka/server`：KafkaApis、ReplicaManager、请求处理",
          "`kafka/cluster`：broker、partition、replica 元数据",
          "`kafka/controller`：leader 选举和分区状态管理",
          "`kafka/coordinator/group`：消费组加入、心跳和 rebalance",
          "`clients/producer`、`clients/consumer`：客户端批处理、元数据和 offset"
        ]
      },
      {
        "type": "paragraph",
        "text": "源码阅读路线：先追 producer send 到 broker append，再追 follower fetch，最后追 consumer poll 和 offset commit。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "典型落地方案"
      },
      {
        "type": "paragraph",
        "text": "事件流平台落地时要先定义数据契约："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "topic 按业务事件命名，不按临时需求乱建",
          "schema 版本化，字段只能兼容演进",
          "partition key 同时考虑顺序和负载分散",
          "producer 开启幂等，关键链路设置 `acks=all`",
          "consumer 保证幂等处理，失败可重试、可回放",
          "监控 lag、ISR、磁盘、请求延迟和 rebalance 次数",
          "重要 topic 配置保留时间、压缩策略和容量预算"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "事件链路模板"
      },
      {
        "type": "code",
        "language": "text",
        "text": "service writes business event\n  |\nproducer with schema + key\n  |\nkafka topic partitions\n  |\nconsumer group A -> search index\nconsumer group B -> warehouse\nconsumer group C -> notification"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10 道面试题"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "1. Kafka 为什么吞吐高？"
      },
      {
        "type": "paragraph",
        "text": "因为它使用顺序追加日志、批处理、零拷贝和分区并行，减少随机 I/O 和逐条处理成本。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. Partition 的作用是什么？"
      },
      {
        "type": "paragraph",
        "text": "Partition 是顺序、并行和存储切分单位。一个分区内有序，多分区并行，分区 key 决定顺序边界。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3. Consumer Group 如何分配任务？"
      },
      {
        "type": "paragraph",
        "text": "同一消费组内，一个 partition 同一时刻只能分配给一个消费者。协调器通过 rebalance 把分区分给组成员。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4. offset 是什么？"
      },
      {
        "type": "paragraph",
        "text": "offset 是分区日志中的位置，也是消费者消费进度。提交 offset 后，消费者重启可以从提交位置继续。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "5. Kafka 如何保证顺序？"
      },
      {
        "type": "paragraph",
        "text": "只能保证单 partition 内顺序。要保证同一业务实体有序，就必须让同一 key 进入同一 partition，并控制消费端顺序处理。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "6. ISR 是什么？"
      },
      {
        "type": "paragraph",
        "text": "ISR 是与 leader 同步进度足够接近的副本集合。`acks=all` 时，写入需要 ISR 里的副本确认，提高可靠性。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "7. 生产者幂等性解决什么问题？"
      },
      {
        "type": "paragraph",
        "text": "它用 producer id 和序列号避免重试导致的重复追加，让网络抖动下的重试更安全。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8. Kafka 适合做延迟队列吗？"
      },
      {
        "type": "paragraph",
        "text": "不是原生强项。可以用延迟 topic、时间轮服务或定时扫描实现，但复杂延迟语义更适合专门队列。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9. 什么时候会 rebalance？"
      },
      {
        "type": "paragraph",
        "text": "消费者加入或退出、心跳超时、分区变化、订阅变化都会触发。频繁 rebalance 会导致消费暂停和延迟上升。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "10. 如何设计一个可靠事件 topic？"
      },
      {
        "type": "paragraph",
        "text": "定义稳定 schema，选择合理 partition key，开启幂等生产，消费端幂等，监控 lag 和 ISR，并规划保留时间、容量和回放策略。"
      }
    ],
    "rawMarkdown": "## 本质\n\nKafka 的本质不是普通消息队列，而是一个分布式追加日志系统。消息写入 partition 后形成有序日志，消费者用 offset 记录自己读到哪里。\n\n它解决的是高吞吐、可回放、可扩展和多消费者独立消费的问题。Kafka 不追求“每条消息立刻点对点处理”，而是把事件变成可持久化、可订阅、可追溯的数据流。\n\n## 底层架构\n\nKafka 的核心链路分成六层：\n\n1. Producer：按 topic 和 partition key 批量写入\n2. Broker：保存日志段、索引和副本\n3. Partition：消息顺序和并行度的基本单位\n4. Replica：leader 处理读写，follower 同步日志\n5. Consumer Group：把 partition 分配给组内消费者\n6. Controller/Coordinator：管理元数据、leader、消费组和 rebalancing\n\n### 架构图\n\n```text\nproducer\n  |\ntopic -> partition-0/1/2\n  |\nleader broker -> follower replicas\n  |\nlog segment + offset index\n  |\nconsumer group\n  |\nconsumer A / consumer B\n```\n\n图里的重点是 partition：它同时决定吞吐、顺序、存储切分和消费并行度。\n\n## 典型场景\n\n适合 Kafka 的场景：\n\n- 日志采集、埋点、指标和数据管道\n- 订单、支付、库存等业务事件流\n- 多下游订阅同一份事件\n- 需要消息回放和追溯的审计链路\n- 高吞吐异步解耦\n\n不适合 Kafka 的场景：\n\n- 小规模、低吞吐、强路由语义的任务分发\n- 需要复杂优先级、延迟、逐条确认的业务队列\n- 不能接受最终一致和重复消费的流程\n\n## 底层原理\n\nKafka 高吞吐的核心原理：\n\n- 顺序追加：磁盘顺序写远快于随机写\n- 批处理：producer、broker、consumer 都尽量批量读写\n- 零拷贝：文件数据可以减少用户态和内核态拷贝\n- 分区并行：topic 拆成多个 partition，横向扩展读写\n- offset 解耦：broker 保存日志，消费者自己管理进度\n\n涉及的算法和数学直觉：\n\n- 哈希分区：同一 key 映射到固定 partition，保证 key 内顺序\n- ISR 副本集合：用同步进度约束可用副本，降低丢数据风险\n- Rebalance 分配：把 partition 尽量均匀分给消费者，同时减少迁移\n- 日志清理：按时间、大小或 key compact 控制存储增长\n\n## 常用命令\n\n### 1. Topic 管理\n\n```bash\nkafka-topics.sh --bootstrap-server localhost:9092 --list\nkafka-topics.sh --create --topic events --partitions 6 --replication-factor 3 --bootstrap-server localhost:9092\nkafka-topics.sh --describe --topic events --bootstrap-server localhost:9092\n```\n\n`partitions` 决定最大消费并行度，`replication-factor` 决定副本数。生产环境通常至少 3 副本，分区数要结合吞吐、顺序和未来扩容设计。\n\n### 2. 生产和消费测试\n\n```bash\nkafka-console-producer.sh --bootstrap-server localhost:9092 --topic events\nkafka-console-consumer.sh --bootstrap-server localhost:9092 --topic events --from-beginning\n```\n\n控制台命令适合验证连通性和基本路由，不适合压测。真正压测要看批大小、压缩、acks、linger 和消费处理耗时。\n\n### 3. 消费组排查\n\n```bash\nkafka-consumer-groups.sh --bootstrap-server localhost:9092 --list\nkafka-consumer-groups.sh --bootstrap-server localhost:9092 --describe --group demo\nkafka-consumer-groups.sh --bootstrap-server localhost:9092 --reset-offsets --group demo --topic events --to-earliest --execute\n```\n\n`describe` 重点看 lag、current-offset、log-end-offset 和 consumer 分配。重置 offset 是高风险操作，必须确认是否允许消息重放。\n\n### 4. Broker 健康\n\n```bash\nkafka-broker-api-versions.sh --bootstrap-server localhost:9092\nkafka-log-dirs.sh --bootstrap-server localhost:9092 --describe\n```\n\n这些命令用于检查 broker 版本兼容、日志目录和分区分布，排查磁盘倾斜和副本异常。\n\n## 源码重点\n\n建议按写入、复制、消费三条线读：\n\n- `kafka/log`：Log、LogSegment、索引、清理和 compact\n- `kafka/server`：KafkaApis、ReplicaManager、请求处理\n- `kafka/cluster`：broker、partition、replica 元数据\n- `kafka/controller`：leader 选举和分区状态管理\n- `kafka/coordinator/group`：消费组加入、心跳和 rebalance\n- `clients/producer`、`clients/consumer`：客户端批处理、元数据和 offset\n\n源码阅读路线：先追 producer send 到 broker append，再追 follower fetch，最后追 consumer poll 和 offset commit。\n\n## 典型落地方案\n\n事件流平台落地时要先定义数据契约：\n\n- topic 按业务事件命名，不按临时需求乱建\n- schema 版本化，字段只能兼容演进\n- partition key 同时考虑顺序和负载分散\n- producer 开启幂等，关键链路设置 `acks=all`\n- consumer 保证幂等处理，失败可重试、可回放\n- 监控 lag、ISR、磁盘、请求延迟和 rebalance 次数\n- 重要 topic 配置保留时间、压缩策略和容量预算\n\n### 事件链路模板\n\n```text\nservice writes business event\n  |\nproducer with schema + key\n  |\nkafka topic partitions\n  |\nconsumer group A -> search index\nconsumer group B -> warehouse\nconsumer group C -> notification\n```\n\n## 10 道面试题\n\n### 1. Kafka 为什么吞吐高？\n\n因为它使用顺序追加日志、批处理、零拷贝和分区并行，减少随机 I/O 和逐条处理成本。\n\n### 2. Partition 的作用是什么？\n\nPartition 是顺序、并行和存储切分单位。一个分区内有序，多分区并行，分区 key 决定顺序边界。\n\n### 3. Consumer Group 如何分配任务？\n\n同一消费组内，一个 partition 同一时刻只能分配给一个消费者。协调器通过 rebalance 把分区分给组成员。\n\n### 4. offset 是什么？\n\noffset 是分区日志中的位置，也是消费者消费进度。提交 offset 后，消费者重启可以从提交位置继续。\n\n### 5. Kafka 如何保证顺序？\n\n只能保证单 partition 内顺序。要保证同一业务实体有序，就必须让同一 key 进入同一 partition，并控制消费端顺序处理。\n\n### 6. ISR 是什么？\n\nISR 是与 leader 同步进度足够接近的副本集合。`acks=all` 时，写入需要 ISR 里的副本确认，提高可靠性。\n\n### 7. 生产者幂等性解决什么问题？\n\n它用 producer id 和序列号避免重试导致的重复追加，让网络抖动下的重试更安全。\n\n### 8. Kafka 适合做延迟队列吗？\n\n不是原生强项。可以用延迟 topic、时间轮服务或定时扫描实现，但复杂延迟语义更适合专门队列。\n\n### 9. 什么时候会 rebalance？\n\n消费者加入或退出、心跳超时、分区变化、订阅变化都会触发。频繁 rebalance 会导致消费暂停和延迟上升。\n\n### 10. 如何设计一个可靠事件 topic？\n\n定义稳定 schema，选择合理 partition key，开启幂等生产，消费端幂等，监控 lag 和 ISR，并规划保留时间、容量和回放策略。"
  },
  {
    "id": "knowledge-requirements",
    "title": "组件知识库需求说明",
    "domain": "Library",
    "summary": "定义组件知识页的内容结构、深度标准和展示规则。",
    "essence": "每个组件页都要能让读者理解本质、架构、场景、原理、源码和落地方式。",
    "scenarios": "适合长期知识库建设、面试复习、生产排障和方案设计。",
    "sourceFocus": "统一模板、统一导航、统一输出结构。",
    "colors": [
      "#0f7b78",
      "#d7ece7",
      "#326ce5"
    ],
    "body": [
      "目标",
      "组件知识库不是资料聚合页，而是可阅读、可检索、可复用的专题系统。每个组件都应该回答同一组核心问题。",
      "每页必须包含",
      "本质",
      "底层架构",
      "典型场景",
      "常用命令",
      "源码重点",
      "关键算法和数学直觉",
      "典型落地方案",
      "常见故障和排障路径",
      "10",
      "道面试题和答案",
      "相关官方文档入口",
      "展示标准",
      "页面风格要清爽、克制、长文可读。",
      "首屏要先给结论和定位，再往下展开。",
      "源码部分要告诉读者从哪里读、先读什么、为什么。",
      "命令部分要解释作用，不只列命令。",
      "面试题必须附简短答案。",
      "内容颗粒度",
      "本质：一句话定义",
      "+",
      "3",
      "到",
      "5",
      "个工程结论。",
      "架构：分层图",
      "+",
      "关键组件职责。",
      "场景：适合什么、不适合什么。",
      "原理：写出核心算法、数据结构、调度模型或控制机制。",
      "落地：给出可执行的上线模板。",
      "页面风格",
      "信息密度高，但不要挤成备忘录。",
      "使用明显的标题层级。",
      "用卡片承载元信息，用正文承载解释。",
      "避免纯列表堆砌。"
    ],
    "bodyBlocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "目标"
      },
      {
        "type": "paragraph",
        "text": "组件知识库不是资料聚合页，而是可阅读、可检索、可复用的专题系统。每个组件都应该回答同一组核心问题。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "每页必须包含"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "本质",
          "底层架构",
          "典型场景",
          "常用命令",
          "源码重点",
          "关键算法和数学直觉",
          "典型落地方案",
          "常见故障和排障路径",
          "10 道面试题和答案",
          "相关官方文档入口"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "展示标准"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "页面风格要清爽、克制、长文可读。",
          "首屏要先给结论和定位，再往下展开。",
          "源码部分要告诉读者从哪里读、先读什么、为什么。",
          "命令部分要解释作用，不只列命令。",
          "面试题必须附简短答案。"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "内容颗粒度"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "本质：一句话定义 + 3 到 5 个工程结论。",
          "架构：分层图 + 关键组件职责。",
          "场景：适合什么、不适合什么。",
          "原理：写出核心算法、数据结构、调度模型或控制机制。",
          "落地：给出可执行的上线模板。"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "页面风格"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "信息密度高，但不要挤成备忘录。",
          "使用明显的标题层级。",
          "用卡片承载元信息，用正文承载解释。",
          "避免纯列表堆砌。"
        ]
      }
    ],
    "rawMarkdown": "## 目标\n\n组件知识库不是资料聚合页，而是可阅读、可检索、可复用的专题系统。每个组件都应该回答同一组核心问题。\n\n## 每页必须包含\n\n1. 本质\n2. 底层架构\n3. 典型场景\n4. 常用命令\n5. 源码重点\n6. 关键算法和数学直觉\n7. 典型落地方案\n8. 常见故障和排障路径\n9. 10 道面试题和答案\n10. 相关官方文档入口\n\n## 展示标准\n\n- 页面风格要清爽、克制、长文可读。\n- 首屏要先给结论和定位，再往下展开。\n- 源码部分要告诉读者从哪里读、先读什么、为什么。\n- 命令部分要解释作用，不只列命令。\n- 面试题必须附简短答案。\n\n## 内容颗粒度\n\n- 本质：一句话定义 + 3 到 5 个工程结论。\n- 架构：分层图 + 关键组件职责。\n- 场景：适合什么、不适合什么。\n- 原理：写出核心算法、数据结构、调度模型或控制机制。\n- 落地：给出可执行的上线模板。\n\n## 页面风格\n\n- 信息密度高，但不要挤成备忘录。\n- 使用明显的标题层级。\n- 用卡片承载元信息，用正文承载解释。\n- 避免纯列表堆砌。"
  },
  {
    "id": "kubernetes",
    "title": "Kubernetes",
    "domain": "Platform",
    "summary": "容器编排控制面，负责声明式调度、服务发现、存储和弹性治理。",
    "essence": "Kubernetes 本质是一个持续把现实状态拉回期望状态的分布式控制系统。",
    "scenarios": "适合微服务集群、多团队平台化、自动扩缩容、灰度发布和统一治理。",
    "sourceFocus": "pkg/scheduler、pkg/controller、pkg/kubelet、staging/src/k8s.io/api 关键路径。",
    "colors": [
      "#326ce5",
      "#e8eee0",
      "#0f7b78"
    ],
    "body": [
      "本质",
      "Kubernetes",
      "不是“启动容器的工具”，而是一个声明式控制系统。用户提交期望状态，控制面保存对象，控制器持续观察现实状态，再通过调谐循环把现实拉回期望。",
      "它的本质可以压缩成一句话：API",
      "对象是意图，controller",
      "是反馈回路，kubelet",
      "是节点执行器，etcd",
      "是事实来源。",
      "底层架构",
      "Kubernetes",
      "的链路分成六层：",
      "API",
      "层：API",
      "Server",
      "统一接收请求、鉴权、准入、校验和持久化",
      "状态层：etcd",
      "保存所有对象状态和版本",
      "调度层：Scheduler",
      "根据资源、亲和性、污点、拓扑和插件打分选择节点",
      "控制层：Controller",
      "Manager",
      "管理",
      "Deployment、ReplicaSet、Node、Job",
      "等对象",
      "节点层：kubelet",
      "拉镜像、挂卷、创建",
      "Pod、执行探针、上报状态",
      "插件层：CNI",
      "管网络，CSI",
      "管存储，CRI",
      "对接",
      "containerd",
      "架构图",
      "kubectl",
      "/",
      "controller",
      "/",
      "ci",
      "|",
      "API",
      "Server",
      "|",
      "etcd",
      "|",
      "Scheduler",
      "+",
      "Controller",
      "Manager",
      "|",
      "kubelet",
      "|",
      "containerd",
      "->",
      "runc",
      "->",
      "Linux",
      "kernel",
      "|",
      "CNI",
      "/",
      "CSI",
      "/",
      "probes",
      "这张图要抓住一个关键点：K8s",
      "的控制面不直接管理业务进程，它通过对象状态、watch",
      "事件和节点代理完成间接控制。",
      "典型场景",
      "适合",
      "Kubernetes",
      "的场景：",
      "多服务、多团队、多环境统一交付",
      "需要滚动发布、灰度、回滚和自动扩缩容",
      "需要统一服务发现、配置、密钥、网络策略和资源配额",
      "需要把",
      "Docker",
      "镜像纳入平台化调度",
      "不适合一上来就用",
      "Kubernetes",
      "的场景：",
      "服务数量很少，团队还没有容器化基础",
      "应用没有健康检查、日志和配置分离",
      "有状态系统没有备份、恢复、容量和故障演练方案",
      "底层原理",
      "Kubernetes",
      "的核心算法不是某一个神秘算法，而是一组控制论思想：",
      "声明式",
      "API：对象的",
      "spec",
      "是期望，status",
      "是现实",
      "调谐循环：controller",
      "不断计算",
      "spec",
      "和",
      "status",
      "的差异",
      "乐观并发：对象",
      "resourceVersion",
      "避免并发更新互相覆盖",
      "调度优化：过滤节点后对候选节点打分，选择综合分最高的节点",
      "反馈控制：HPA",
      "用指标和目标值比例计算副本数，类似负反馈系统",
      "调度里的数学直觉：",
      "过滤阶段是约束满足问题：不满足硬约束的节点直接剔除",
      "打分阶段是多目标加权：资源、亲和性、拓扑分散等分数加权求和",
      "扩缩容是比例控制：当前副本数乘以当前指标与目标指标的比值",
      "常用命令",
      "1.",
      "查看对象和事件",
      "kubectl",
      "get",
      "pod",
      "-A",
      "kubectl",
      "get",
      "deploy,svc,ingress",
      "-n",
      "<namespace>",
      "kubectl",
      "get",
      "events",
      "-A",
      "--sort-by=.lastTimestamp",
      "`get`",
      "用来快速确认对象是否存在、状态是否异常。事件按时间排序后，通常能看到调度失败、镜像拉取失败、探针失败和挂卷失败的第一现场。",
      "2.",
      "排查单个",
      "Pod",
      "kubectl",
      "describe",
      "pod",
      "<pod>",
      "-n",
      "<namespace>",
      "kubectl",
      "logs",
      "-f",
      "<pod>",
      "-n",
      "<namespace>",
      "kubectl",
      "logs",
      "<pod>",
      "-c",
      "<container>",
      "--previous",
      "-n",
      "<namespace>",
      "kubectl",
      "exec",
      "-it",
      "<pod>",
      "-n",
      "<namespace>",
      "--",
      "sh",
      "`describe`",
      "看事件、镜像、环境变量、挂载、探针和调度结果；`logs",
      "--previous`",
      "专门看上一次崩溃容器的日志；`exec`",
      "用于确认容器内文件、DNS",
      "和网络连通性。",
      "3.",
      "发布和回滚",
      "kubectl",
      "apply",
      "-f",
      "deploy.yaml",
      "kubectl",
      "rollout",
      "status",
      "deploy/<name>",
      "-n",
      "<namespace>",
      "kubectl",
      "rollout",
      "history",
      "deploy/<name>",
      "-n",
      "<namespace>",
      "kubectl",
      "rollout",
      "undo",
      "deploy/<name>",
      "-n",
      "<namespace>",
      "这组命令对应标准发布闭环：提交期望状态，等待滚动完成，保留发布历史，异常时回滚到上一版",
      "ReplicaSet。",
      "4.",
      "资源和容量",
      "kubectl",
      "top",
      "node",
      "kubectl",
      "top",
      "pod",
      "-A",
      "kubectl",
      "describe",
      "node",
      "<node>",
      "kubectl",
      "get",
      "hpa",
      "-A",
      "`top`",
      "看实时资源，`describe",
      "node`",
      "看节点容量、污点、压力和已分配资源，`get",
      "hpa`",
      "看扩缩容是否被指标驱动。",
      "源码重点",
      "建议按对象流转顺序读源码：",
      "`staging/src/k8s.io/api`：先理解",
      "Pod、Deployment、Service",
      "等",
      "API",
      "对象字段",
      "`pkg/apiserver`：请求如何鉴权、准入、校验并写入",
      "etcd",
      "`pkg/scheduler`：调度框架如何执行",
      "filter、score、bind",
      "`pkg/controller`：Deployment/ReplicaSet",
      "等控制器如何做调谐",
      "`pkg/kubelet`：节点如何",
      "syncPod、调用",
      "CRI、执行",
      "probe",
      "和回报状态",
      "源码阅读时不要从所有包开始扫，先追一个",
      "Pod",
      "的生命周期：创建",
      "Deployment，生成",
      "ReplicaSet，生成",
      "Pod，调度绑定节点，kubelet",
      "拉起容器，readiness",
      "变",
      "true，Service",
      "开始转发。",
      "典型落地方案",
      "一个生产应用模板至少包含：",
      "Deployment：声明副本数、镜像、资源、探针和滚动策略",
      "Service：提供稳定虚拟",
      "IP",
      "和服务发现",
      "Ingress/Gateway：暴露",
      "HTTP",
      "入口、TLS",
      "和路由规则",
      "ConfigMap/Secret：把配置和密钥从镜像里拆出来",
      "HPA/PDB：控制扩缩容和维护时的最小可用",
      "RBAC/NetworkPolicy：限制权限和网络访问范围",
      "Observability：日志、指标、trace",
      "和告警规则",
      "最小生产模板",
      "apiVersion:",
      "apps/v1",
      "kind:",
      "Deployment",
      "metadata:",
      "name:",
      "app",
      "spec:",
      "replicas:",
      "3",
      "strategy:",
      "rollingUpdate:",
      "maxSurge:",
      "1",
      "maxUnavailable:",
      "0",
      "selector:",
      "matchLabels:",
      "app:",
      "app",
      "template:",
      "metadata:",
      "labels:",
      "app:",
      "app",
      "spec:",
      "containers:",
      "-",
      "name:",
      "app",
      "image:",
      "registry.example.com/app:1.0.0",
      "ports:",
      "-",
      "containerPort:",
      "8080",
      "resources:",
      "requests:",
      "cpu:",
      "200m",
      "memory:",
      "256Mi",
      "limits:",
      "cpu:",
      "1",
      "memory:",
      "512Mi",
      "readinessProbe:",
      "httpGet:",
      "path:",
      "/healthz",
      "port:",
      "8080",
      "livenessProbe:",
      "httpGet:",
      "path:",
      "/livez",
      "port:",
      "8080",
      "10",
      "道面试题",
      "1.",
      "Kubernetes",
      "的本质是什么？",
      "它是声明式分布式控制系统。用户声明",
      "spec，控制器持续观察",
      "status，通过调谐循环把现实状态拉回期望状态。",
      "2.",
      "etcd",
      "为什么重要？",
      "etcd",
      "是集群事实来源，保存对象状态、版本和",
      "watch",
      "事件。控制面所有决策都依赖它，一旦丢失就会失去一致性基础。",
      "3.",
      "Pod",
      "Pending",
      "常见原因有哪些？",
      "资源不足、节点污点不容忍、亲和性不满足、PVC",
      "未绑定、镜像拉取前置条件失败、调度插件过滤掉所有节点。",
      "4.",
      "CrashLoopBackOff",
      "怎么定位？",
      "先看",
      "`describe`",
      "事件，再看",
      "`logs",
      "--previous`。重点检查启动命令、配置、环境变量、依赖服务、权限和",
      "liveness",
      "probe",
      "是否过早杀进程。",
      "5.",
      "Service",
      "和",
      "Ingress",
      "分别解决什么？",
      "Service",
      "解决集群内稳定访问和负载均衡；Ingress",
      "解决集群外",
      "HTTP/HTTPS",
      "入口、域名、TLS",
      "和路径路由。",
      "6.",
      "HPA",
      "的核心算法是什么？",
      "典型公式是目标副本数等于当前副本数乘以当前指标与目标指标的比值。它是一个基于观测指标的反馈控制器。",
      "7.",
      "Deployment",
      "滚动更新如何保证可用？",
      "通过新旧",
      "ReplicaSet",
      "并存、readiness",
      "probe、maxSurge",
      "和",
      "maxUnavailable",
      "控制替换节奏，只有新",
      "Pod",
      "就绪后才继续下一个批次。",
      "8.",
      "kubelet",
      "负责什么？",
      "kubelet",
      "是节点代理，负责拉镜像、挂载卷、调用",
      "CRI",
      "创建容器、执行探针、采集状态并回报",
      "API",
      "Server。",
      "9.",
      "CNI、CSI、CRI",
      "分别是什么？",
      "CNI",
      "接入网络，CSI",
      "接入存储，CRI",
      "接入容器运行时。它们把底层基础设施能力标准化给",
      "Kubernetes",
      "使用。",
      "10.",
      "如何设计一个生产可用的",
      "K8s",
      "应用模板？",
      "必须包含资源",
      "requests/limits、readiness/liveness、滚动策略、Service/Ingress、ConfigMap/Secret、HPA/PDB、RBAC、日志指标和可回滚镜像版本。"
    ],
    "bodyBlocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "本质"
      },
      {
        "type": "paragraph",
        "text": "Kubernetes 不是“启动容器的工具”，而是一个声明式控制系统。用户提交期望状态，控制面保存对象，控制器持续观察现实状态，再通过调谐循环把现实拉回期望。"
      },
      {
        "type": "paragraph",
        "text": "它的本质可以压缩成一句话：API 对象是意图，controller 是反馈回路，kubelet 是节点执行器，etcd 是事实来源。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层架构"
      },
      {
        "type": "paragraph",
        "text": "Kubernetes 的链路分成六层："
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "API 层：API Server 统一接收请求、鉴权、准入、校验和持久化",
          "状态层：etcd 保存所有对象状态和版本",
          "调度层：Scheduler 根据资源、亲和性、污点、拓扑和插件打分选择节点",
          "控制层：Controller Manager 管理 Deployment、ReplicaSet、Node、Job 等对象",
          "节点层：kubelet 拉镜像、挂卷、创建 Pod、执行探针、上报状态",
          "插件层：CNI 管网络，CSI 管存储，CRI 对接 containerd"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "架构图"
      },
      {
        "type": "code",
        "language": "text",
        "text": "kubectl / controller / ci\n          |\n      API Server\n          |\n        etcd\n          |\nScheduler + Controller Manager\n          |\n       kubelet\n          |\n containerd -> runc -> Linux kernel\n          |\n     CNI / CSI / probes"
      },
      {
        "type": "paragraph",
        "text": "这张图要抓住一个关键点：K8s 的控制面不直接管理业务进程，它通过对象状态、watch 事件和节点代理完成间接控制。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "典型场景"
      },
      {
        "type": "paragraph",
        "text": "适合 Kubernetes 的场景："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "多服务、多团队、多环境统一交付",
          "需要滚动发布、灰度、回滚和自动扩缩容",
          "需要统一服务发现、配置、密钥、网络策略和资源配额",
          "需要把 Docker 镜像纳入平台化调度"
        ]
      },
      {
        "type": "paragraph",
        "text": "不适合一上来就用 Kubernetes 的场景："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "服务数量很少，团队还没有容器化基础",
          "应用没有健康检查、日志和配置分离",
          "有状态系统没有备份、恢复、容量和故障演练方案"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层原理"
      },
      {
        "type": "paragraph",
        "text": "Kubernetes 的核心算法不是某一个神秘算法，而是一组控制论思想："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "声明式 API：对象的 spec 是期望，status 是现实",
          "调谐循环：controller 不断计算 spec 和 status 的差异",
          "乐观并发：对象 resourceVersion 避免并发更新互相覆盖",
          "调度优化：过滤节点后对候选节点打分，选择综合分最高的节点",
          "反馈控制：HPA 用指标和目标值比例计算副本数，类似负反馈系统"
        ]
      },
      {
        "type": "paragraph",
        "text": "调度里的数学直觉："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "过滤阶段是约束满足问题：不满足硬约束的节点直接剔除",
          "打分阶段是多目标加权：资源、亲和性、拓扑分散等分数加权求和",
          "扩缩容是比例控制：当前副本数乘以当前指标与目标指标的比值"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "常用命令"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "1. 查看对象和事件"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "kubectl get pod -A\nkubectl get deploy,svc,ingress -n <namespace>\nkubectl get events -A --sort-by=.lastTimestamp"
      },
      {
        "type": "paragraph",
        "text": "`get` 用来快速确认对象是否存在、状态是否异常。事件按时间排序后，通常能看到调度失败、镜像拉取失败、探针失败和挂卷失败的第一现场。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. 排查单个 Pod"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "kubectl describe pod <pod> -n <namespace>\nkubectl logs -f <pod> -n <namespace>\nkubectl logs <pod> -c <container> --previous -n <namespace>\nkubectl exec -it <pod> -n <namespace> -- sh"
      },
      {
        "type": "paragraph",
        "text": "`describe` 看事件、镜像、环境变量、挂载、探针和调度结果；`logs --previous` 专门看上一次崩溃容器的日志；`exec` 用于确认容器内文件、DNS 和网络连通性。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3. 发布和回滚"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "kubectl apply -f deploy.yaml\nkubectl rollout status deploy/<name> -n <namespace>\nkubectl rollout history deploy/<name> -n <namespace>\nkubectl rollout undo deploy/<name> -n <namespace>"
      },
      {
        "type": "paragraph",
        "text": "这组命令对应标准发布闭环：提交期望状态，等待滚动完成，保留发布历史，异常时回滚到上一版 ReplicaSet。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4. 资源和容量"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "kubectl top node\nkubectl top pod -A\nkubectl describe node <node>\nkubectl get hpa -A"
      },
      {
        "type": "paragraph",
        "text": "`top` 看实时资源，`describe node` 看节点容量、污点、压力和已分配资源，`get hpa` 看扩缩容是否被指标驱动。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "源码重点"
      },
      {
        "type": "paragraph",
        "text": "建议按对象流转顺序读源码："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "`staging/src/k8s.io/api`：先理解 Pod、Deployment、Service 等 API 对象字段",
          "`pkg/apiserver`：请求如何鉴权、准入、校验并写入 etcd",
          "`pkg/scheduler`：调度框架如何执行 filter、score、bind",
          "`pkg/controller`：Deployment/ReplicaSet 等控制器如何做调谐",
          "`pkg/kubelet`：节点如何 syncPod、调用 CRI、执行 probe 和回报状态"
        ]
      },
      {
        "type": "paragraph",
        "text": "源码阅读时不要从所有包开始扫，先追一个 Pod 的生命周期：创建 Deployment，生成 ReplicaSet，生成 Pod，调度绑定节点，kubelet 拉起容器，readiness 变 true，Service 开始转发。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "典型落地方案"
      },
      {
        "type": "paragraph",
        "text": "一个生产应用模板至少包含："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Deployment：声明副本数、镜像、资源、探针和滚动策略",
          "Service：提供稳定虚拟 IP 和服务发现",
          "Ingress/Gateway：暴露 HTTP 入口、TLS 和路由规则",
          "ConfigMap/Secret：把配置和密钥从镜像里拆出来",
          "HPA/PDB：控制扩缩容和维护时的最小可用",
          "RBAC/NetworkPolicy：限制权限和网络访问范围",
          "Observability：日志、指标、trace 和告警规则"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "最小生产模板"
      },
      {
        "type": "code",
        "language": "yaml",
        "text": "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: app\nspec:\n  replicas: 3\n  strategy:\n    rollingUpdate:\n      maxSurge: 1\n      maxUnavailable: 0\n  selector:\n    matchLabels:\n      app: app\n  template:\n    metadata:\n      labels:\n        app: app\n    spec:\n      containers:\n        - name: app\n          image: registry.example.com/app:1.0.0\n          ports:\n            - containerPort: 8080\n          resources:\n            requests:\n              cpu: 200m\n              memory: 256Mi\n            limits:\n              cpu: 1\n              memory: 512Mi\n          readinessProbe:\n            httpGet:\n              path: /healthz\n              port: 8080\n          livenessProbe:\n            httpGet:\n              path: /livez\n              port: 8080"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10 道面试题"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "1. Kubernetes 的本质是什么？"
      },
      {
        "type": "paragraph",
        "text": "它是声明式分布式控制系统。用户声明 spec，控制器持续观察 status，通过调谐循环把现实状态拉回期望状态。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. etcd 为什么重要？"
      },
      {
        "type": "paragraph",
        "text": "etcd 是集群事实来源，保存对象状态、版本和 watch 事件。控制面所有决策都依赖它，一旦丢失就会失去一致性基础。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3. Pod Pending 常见原因有哪些？"
      },
      {
        "type": "paragraph",
        "text": "资源不足、节点污点不容忍、亲和性不满足、PVC 未绑定、镜像拉取前置条件失败、调度插件过滤掉所有节点。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4. CrashLoopBackOff 怎么定位？"
      },
      {
        "type": "paragraph",
        "text": "先看 `describe` 事件，再看 `logs --previous`。重点检查启动命令、配置、环境变量、依赖服务、权限和 liveness probe 是否过早杀进程。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "5. Service 和 Ingress 分别解决什么？"
      },
      {
        "type": "paragraph",
        "text": "Service 解决集群内稳定访问和负载均衡；Ingress 解决集群外 HTTP/HTTPS 入口、域名、TLS 和路径路由。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "6. HPA 的核心算法是什么？"
      },
      {
        "type": "paragraph",
        "text": "典型公式是目标副本数等于当前副本数乘以当前指标与目标指标的比值。它是一个基于观测指标的反馈控制器。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "7. Deployment 滚动更新如何保证可用？"
      },
      {
        "type": "paragraph",
        "text": "通过新旧 ReplicaSet 并存、readiness probe、maxSurge 和 maxUnavailable 控制替换节奏，只有新 Pod 就绪后才继续下一个批次。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8. kubelet 负责什么？"
      },
      {
        "type": "paragraph",
        "text": "kubelet 是节点代理，负责拉镜像、挂载卷、调用 CRI 创建容器、执行探针、采集状态并回报 API Server。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9. CNI、CSI、CRI 分别是什么？"
      },
      {
        "type": "paragraph",
        "text": "CNI 接入网络，CSI 接入存储，CRI 接入容器运行时。它们把底层基础设施能力标准化给 Kubernetes 使用。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "10. 如何设计一个生产可用的 K8s 应用模板？"
      },
      {
        "type": "paragraph",
        "text": "必须包含资源 requests/limits、readiness/liveness、滚动策略、Service/Ingress、ConfigMap/Secret、HPA/PDB、RBAC、日志指标和可回滚镜像版本。"
      }
    ],
    "rawMarkdown": "## 本质\n\nKubernetes 不是“启动容器的工具”，而是一个声明式控制系统。用户提交期望状态，控制面保存对象，控制器持续观察现实状态，再通过调谐循环把现实拉回期望。\n\n它的本质可以压缩成一句话：API 对象是意图，controller 是反馈回路，kubelet 是节点执行器，etcd 是事实来源。\n\n## 底层架构\n\nKubernetes 的链路分成六层：\n\n1. API 层：API Server 统一接收请求、鉴权、准入、校验和持久化\n2. 状态层：etcd 保存所有对象状态和版本\n3. 调度层：Scheduler 根据资源、亲和性、污点、拓扑和插件打分选择节点\n4. 控制层：Controller Manager 管理 Deployment、ReplicaSet、Node、Job 等对象\n5. 节点层：kubelet 拉镜像、挂卷、创建 Pod、执行探针、上报状态\n6. 插件层：CNI 管网络，CSI 管存储，CRI 对接 containerd\n\n### 架构图\n\n```text\nkubectl / controller / ci\n          |\n      API Server\n          |\n        etcd\n          |\nScheduler + Controller Manager\n          |\n       kubelet\n          |\n containerd -> runc -> Linux kernel\n          |\n     CNI / CSI / probes\n```\n\n这张图要抓住一个关键点：K8s 的控制面不直接管理业务进程，它通过对象状态、watch 事件和节点代理完成间接控制。\n\n## 典型场景\n\n适合 Kubernetes 的场景：\n\n- 多服务、多团队、多环境统一交付\n- 需要滚动发布、灰度、回滚和自动扩缩容\n- 需要统一服务发现、配置、密钥、网络策略和资源配额\n- 需要把 Docker 镜像纳入平台化调度\n\n不适合一上来就用 Kubernetes 的场景：\n\n- 服务数量很少，团队还没有容器化基础\n- 应用没有健康检查、日志和配置分离\n- 有状态系统没有备份、恢复、容量和故障演练方案\n\n## 底层原理\n\nKubernetes 的核心算法不是某一个神秘算法，而是一组控制论思想：\n\n- 声明式 API：对象的 spec 是期望，status 是现实\n- 调谐循环：controller 不断计算 spec 和 status 的差异\n- 乐观并发：对象 resourceVersion 避免并发更新互相覆盖\n- 调度优化：过滤节点后对候选节点打分，选择综合分最高的节点\n- 反馈控制：HPA 用指标和目标值比例计算副本数，类似负反馈系统\n\n调度里的数学直觉：\n\n- 过滤阶段是约束满足问题：不满足硬约束的节点直接剔除\n- 打分阶段是多目标加权：资源、亲和性、拓扑分散等分数加权求和\n- 扩缩容是比例控制：当前副本数乘以当前指标与目标指标的比值\n\n## 常用命令\n\n### 1. 查看对象和事件\n\n```bash\nkubectl get pod -A\nkubectl get deploy,svc,ingress -n <namespace>\nkubectl get events -A --sort-by=.lastTimestamp\n```\n\n`get` 用来快速确认对象是否存在、状态是否异常。事件按时间排序后，通常能看到调度失败、镜像拉取失败、探针失败和挂卷失败的第一现场。\n\n### 2. 排查单个 Pod\n\n```bash\nkubectl describe pod <pod> -n <namespace>\nkubectl logs -f <pod> -n <namespace>\nkubectl logs <pod> -c <container> --previous -n <namespace>\nkubectl exec -it <pod> -n <namespace> -- sh\n```\n\n`describe` 看事件、镜像、环境变量、挂载、探针和调度结果；`logs --previous` 专门看上一次崩溃容器的日志；`exec` 用于确认容器内文件、DNS 和网络连通性。\n\n### 3. 发布和回滚\n\n```bash\nkubectl apply -f deploy.yaml\nkubectl rollout status deploy/<name> -n <namespace>\nkubectl rollout history deploy/<name> -n <namespace>\nkubectl rollout undo deploy/<name> -n <namespace>\n```\n\n这组命令对应标准发布闭环：提交期望状态，等待滚动完成，保留发布历史，异常时回滚到上一版 ReplicaSet。\n\n### 4. 资源和容量\n\n```bash\nkubectl top node\nkubectl top pod -A\nkubectl describe node <node>\nkubectl get hpa -A\n```\n\n`top` 看实时资源，`describe node` 看节点容量、污点、压力和已分配资源，`get hpa` 看扩缩容是否被指标驱动。\n\n## 源码重点\n\n建议按对象流转顺序读源码：\n\n- `staging/src/k8s.io/api`：先理解 Pod、Deployment、Service 等 API 对象字段\n- `pkg/apiserver`：请求如何鉴权、准入、校验并写入 etcd\n- `pkg/scheduler`：调度框架如何执行 filter、score、bind\n- `pkg/controller`：Deployment/ReplicaSet 等控制器如何做调谐\n- `pkg/kubelet`：节点如何 syncPod、调用 CRI、执行 probe 和回报状态\n\n源码阅读时不要从所有包开始扫，先追一个 Pod 的生命周期：创建 Deployment，生成 ReplicaSet，生成 Pod，调度绑定节点，kubelet 拉起容器，readiness 变 true，Service 开始转发。\n\n## 典型落地方案\n\n一个生产应用模板至少包含：\n\n- Deployment：声明副本数、镜像、资源、探针和滚动策略\n- Service：提供稳定虚拟 IP 和服务发现\n- Ingress/Gateway：暴露 HTTP 入口、TLS 和路由规则\n- ConfigMap/Secret：把配置和密钥从镜像里拆出来\n- HPA/PDB：控制扩缩容和维护时的最小可用\n- RBAC/NetworkPolicy：限制权限和网络访问范围\n- Observability：日志、指标、trace 和告警规则\n\n### 最小生产模板\n\n```yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: app\nspec:\n  replicas: 3\n  strategy:\n    rollingUpdate:\n      maxSurge: 1\n      maxUnavailable: 0\n  selector:\n    matchLabels:\n      app: app\n  template:\n    metadata:\n      labels:\n        app: app\n    spec:\n      containers:\n        - name: app\n          image: registry.example.com/app:1.0.0\n          ports:\n            - containerPort: 8080\n          resources:\n            requests:\n              cpu: 200m\n              memory: 256Mi\n            limits:\n              cpu: 1\n              memory: 512Mi\n          readinessProbe:\n            httpGet:\n              path: /healthz\n              port: 8080\n          livenessProbe:\n            httpGet:\n              path: /livez\n              port: 8080\n```\n\n## 10 道面试题\n\n### 1. Kubernetes 的本质是什么？\n\n它是声明式分布式控制系统。用户声明 spec，控制器持续观察 status，通过调谐循环把现实状态拉回期望状态。\n\n### 2. etcd 为什么重要？\n\netcd 是集群事实来源，保存对象状态、版本和 watch 事件。控制面所有决策都依赖它，一旦丢失就会失去一致性基础。\n\n### 3. Pod Pending 常见原因有哪些？\n\n资源不足、节点污点不容忍、亲和性不满足、PVC 未绑定、镜像拉取前置条件失败、调度插件过滤掉所有节点。\n\n### 4. CrashLoopBackOff 怎么定位？\n\n先看 `describe` 事件，再看 `logs --previous`。重点检查启动命令、配置、环境变量、依赖服务、权限和 liveness probe 是否过早杀进程。\n\n### 5. Service 和 Ingress 分别解决什么？\n\nService 解决集群内稳定访问和负载均衡；Ingress 解决集群外 HTTP/HTTPS 入口、域名、TLS 和路径路由。\n\n### 6. HPA 的核心算法是什么？\n\n典型公式是目标副本数等于当前副本数乘以当前指标与目标指标的比值。它是一个基于观测指标的反馈控制器。\n\n### 7. Deployment 滚动更新如何保证可用？\n\n通过新旧 ReplicaSet 并存、readiness probe、maxSurge 和 maxUnavailable 控制替换节奏，只有新 Pod 就绪后才继续下一个批次。\n\n### 8. kubelet 负责什么？\n\nkubelet 是节点代理，负责拉镜像、挂载卷、调用 CRI 创建容器、执行探针、采集状态并回报 API Server。\n\n### 9. CNI、CSI、CRI 分别是什么？\n\nCNI 接入网络，CSI 接入存储，CRI 接入容器运行时。它们把底层基础设施能力标准化给 Kubernetes 使用。\n\n### 10. 如何设计一个生产可用的 K8s 应用模板？\n\n必须包含资源 requests/limits、readiness/liveness、滚动策略、Service/Ingress、ConfigMap/Secret、HPA/PDB、RBAC、日志指标和可回滚镜像版本。"
  },
  {
    "id": "mysql",
    "title": "MySQL",
    "domain": "Database",
    "summary": "经典关系数据库，适合在线事务、读写分离和成熟生态。",
    "essence": "MySQL 本质是围绕 InnoDB 存储引擎构建的事务数据库。",
    "scenarios": "适合高并发 OLTP、成熟业务系统和对生态兼容性要求高的场景。",
    "sourceFocus": "sql、opt、storage/innobase、trx、row、buf、btr。",
    "colors": [
      "#d8a321",
      "#f1dfb8",
      "#7f4d64"
    ],
    "body": [
      "本质",
      "MySQL",
      "的本质是",
      "SQL",
      "层加存储引擎的事务数据库。应用看到的是",
      "SQL、表和索引；真正决定一致性、锁、页、日志和崩溃恢复的是",
      "InnoDB。",
      "一句话理解：MySQL",
      "用",
      "B+Tree",
      "组织数据，用",
      "undo/redo",
      "保证事务和恢复，用",
      "binlog",
      "支撑复制和审计。",
      "底层架构",
      "MySQL",
      "链路分成六层：",
      "连接层：连接、认证、权限、线程或连接池",
      "SQL",
      "层：解析、预处理、优化器、执行器",
      "存储引擎层：InnoDB",
      "负责行、页、索引、锁和事务",
      "缓冲层：buffer",
      "pool",
      "缓存数据页和索引页",
      "日志层：undo、redo、binlog",
      "协同保证事务和复制",
      "复制层：主从、GTID、relay",
      "log、半同步或组复制",
      "架构图",
      "client",
      "|",
      "connection",
      "/",
      "parser",
      "/",
      "optimizer",
      "/",
      "executor",
      "|",
      "handler",
      "API",
      "|",
      "InnoDB:",
      "buffer",
      "pool",
      "+",
      "B+Tree",
      "+",
      "locks",
      "|",
      "undo",
      "log",
      "/",
      "redo",
      "log",
      "/",
      "data",
      "pages",
      "|",
      "binlog",
      "->",
      "replica",
      "relay",
      "log",
      "图里最重要的边界是",
      "SQL",
      "层和",
      "InnoDB",
      "层：慢",
      "SQL",
      "可能来自优化器选择，也可能来自存储层页读取和锁等待。",
      "典型场景",
      "适合",
      "MySQL",
      "的场景：",
      "高频",
      "OLTP",
      "交易系统",
      "电商、订单、账户、配置等成熟业务系统",
      "需要丰富生态、工具和运维经验的团队",
      "读写分离、分库分表、云数据库托管",
      "需要谨慎的场景：",
      "极复杂分析查询和多维报表",
      "超大单表且没有归档和分区方案",
      "多主强一致跨地域写入",
      "底层原理",
      "MySQL/InnoDB",
      "的核心原理：",
      "B+Tree：所有数据按页组织，聚簇索引叶子节点保存整行数据",
      "MVCC：通过",
      "undo",
      "log",
      "构造历史版本，减少读写冲突",
      "两阶段提交：redo",
      "log",
      "和",
      "binlog",
      "协调，保证崩溃恢复和复制一致",
      "锁：行锁、间隙锁、next-key",
      "lock",
      "解决并发和幻读问题",
      "Buffer",
      "Pool：缓存热页，降低磁盘",
      "I/O",
      "涉及的数学直觉：",
      "B+Tree",
      "用高扇出降低树高，千万级数据也只需少量页访问",
      "索引选择性越高，过滤效率越好",
      "成本优化器通过行数估计和",
      "I/O/CPU",
      "成本选择执行计划",
      "事务隔离是在一致性和并发吞吐之间做取舍",
      "常用命令",
      "1.",
      "连接和对象",
      "mysql",
      "-uroot",
      "-p",
      "show",
      "databases;",
      "use",
      "app;",
      "show",
      "tables;",
      "show",
      "create",
      "table",
      "orders\\G",
      "这些命令用于确认库表结构。`show",
      "create",
      "table`",
      "能看到索引、字符集、存储引擎和表选项。",
      "2.",
      "SQL",
      "执行计划",
      "explain",
      "select",
      "*",
      "from",
      "orders",
      "where",
      "user_id",
      "=",
      "1001",
      "order",
      "by",
      "created_at",
      "desc",
      "limit",
      "20;",
      "explain",
      "analyze",
      "select",
      "*",
      "from",
      "orders",
      "where",
      "user_id",
      "=",
      "1001;",
      "show",
      "warnings;",
      "`explain`",
      "重点看",
      "type、key、rows、filtered、Extra。`explain",
      "analyze`",
      "能看到真实执行耗时，适合验证优化器估计是否偏差过大。",
      "3.",
      "运行状态和锁",
      "show",
      "processlist;",
      "show",
      "engine",
      "innodb",
      "status\\G",
      "select",
      "*",
      "from",
      "information_schema.innodb_trx\\G",
      "`processlist`",
      "看活跃",
      "SQL，`innodb",
      "status`",
      "看死锁、锁等待、buffer",
      "pool",
      "和",
      "I/O，`innodb_trx`",
      "看长事务。",
      "4.",
      "复制和日志",
      "show",
      "master",
      "status;",
      "show",
      "replica",
      "status\\G",
      "show",
      "variables",
      "like",
      "'log_bin';",
      "show",
      "variables",
      "like",
      "'transaction_isolation';",
      "复制排障重点看延迟、IO/SQL",
      "线程状态、GTID",
      "和错误信息。隔离级别会影响锁和一致性表现。",
      "源码重点",
      "建议按",
      "SQL",
      "到",
      "InnoDB",
      "的路径读：",
      "`sql/`：解析、执行器、连接和语句生命周期",
      "`sql/opt*`：优化器和执行计划选择",
      "`storage/innobase/row`：行记录读写",
      "`storage/innobase/btr`：B+Tree",
      "索引操作",
      "`storage/innobase/trx`：事务、undo",
      "和隔离",
      "`storage/innobase/buf`：buffer",
      "pool",
      "`storage/innobase/log`：redo",
      "log",
      "和恢复",
      "源码阅读路线：从一条",
      "`select",
      "...",
      "where",
      "id",
      "=",
      "?`",
      "追到优化器选索引，再追",
      "handler",
      "API",
      "到",
      "InnoDB",
      "的",
      "B+Tree",
      "查找。",
      "典型落地方案",
      "OLTP",
      "业务落地原则：",
      "表必须有清晰主键，避免无主键大表",
      "高频查询用覆盖索引或合理联合索引",
      "事务短小，避免长事务拖住",
      "undo",
      "和锁",
      "写入链路避免大事务和批量无界更新",
      "慢查询、锁等待、复制延迟要有监控",
      "读写分离必须感知复制延迟，不能把强一致读打到从库",
      "大表提前做归档、分区或分库分表设计",
      "联合索引模板",
      "create",
      "index",
      "idx_orders_user_created",
      "on",
      "orders(user_id,",
      "created_at);",
      "explain",
      "select",
      "id,",
      "status,",
      "created_at",
      "from",
      "orders",
      "where",
      "user_id",
      "=",
      "1001",
      "order",
      "by",
      "created_at",
      "desc",
      "limit",
      "20;",
      "这个索引服务的是“按用户查最近订单”，不是随便把字段拼在一起。索引设计必须从查询模式倒推。",
      "10",
      "道面试题",
      "1.",
      "MySQL",
      "和",
      "PostgreSQL",
      "的差异是什么？",
      "MySQL",
      "生态成熟、OLTP",
      "使用广泛、工具链丰富；PostgreSQL",
      "在复杂",
      "SQL、扩展能力、类型系统和一致性能力上通常更强。",
      "2.",
      "InnoDB",
      "为什么重要？",
      "InnoDB",
      "承担事务、锁、MVCC、B+Tree、buffer",
      "pool",
      "和崩溃恢复，是",
      "MySQL",
      "生产能力的核心。",
      "3.",
      "redo",
      "log",
      "和",
      "binlog",
      "有什么不同？",
      "redo",
      "log",
      "是",
      "InnoDB",
      "物理日志，用于崩溃恢复；binlog",
      "是",
      "Server",
      "层逻辑日志，用于复制、审计和时间点恢复。",
      "4.",
      "什么是",
      "gap",
      "lock？",
      "gap",
      "lock",
      "锁住索引记录之间的间隙，用于可重复读下防止幻读，但也可能扩大锁范围导致并发下降。",
      "5.",
      "事务隔离级别有哪些？",
      "读未提交、读已提交、可重复读、串行化。隔离越强，并发成本通常越高，MySQL",
      "默认常见是可重复读。",
      "6.",
      "如何设计联合索引？",
      "从查询条件、排序、分组和选择性倒推。高频等值过滤字段通常靠前，范围字段之后的索引利用会受限制。",
      "7.",
      "explain",
      "重点看什么？",
      "看访问类型、使用索引、扫描行数、是否回表、是否",
      "filesort、是否临时表，以及优化器估算和真实执行是否一致。",
      "8.",
      "为什么会出现死锁？",
      "多个事务以不同顺序持有锁并等待对方释放，形成循环等待。解决方式是统一加锁顺序、缩短事务和增加合适索引。",
      "9.",
      "复制延迟怎么处理？",
      "减少大事务，优化从库资源，拆分热点写入，开启并行复制，并让业务在强一致读时回主库或等待位点。",
      "10.",
      "如何做高可用切换？",
      "需要主从复制、故障检测、选主、应用连接切换、数据一致性校验和回切方案，不能只依赖手工改连接串。"
    ],
    "bodyBlocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "本质"
      },
      {
        "type": "paragraph",
        "text": "MySQL 的本质是 SQL 层加存储引擎的事务数据库。应用看到的是 SQL、表和索引；真正决定一致性、锁、页、日志和崩溃恢复的是 InnoDB。"
      },
      {
        "type": "paragraph",
        "text": "一句话理解：MySQL 用 B+Tree 组织数据，用 undo/redo 保证事务和恢复，用 binlog 支撑复制和审计。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层架构"
      },
      {
        "type": "paragraph",
        "text": "MySQL 链路分成六层："
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "连接层：连接、认证、权限、线程或连接池",
          "SQL 层：解析、预处理、优化器、执行器",
          "存储引擎层：InnoDB 负责行、页、索引、锁和事务",
          "缓冲层：buffer pool 缓存数据页和索引页",
          "日志层：undo、redo、binlog 协同保证事务和复制",
          "复制层：主从、GTID、relay log、半同步或组复制"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "架构图"
      },
      {
        "type": "code",
        "language": "text",
        "text": "client\n  |\nconnection / parser / optimizer / executor\n  |\nhandler API\n  |\nInnoDB: buffer pool + B+Tree + locks\n  |\nundo log / redo log / data pages\n  |\nbinlog -> replica relay log"
      },
      {
        "type": "paragraph",
        "text": "图里最重要的边界是 SQL 层和 InnoDB 层：慢 SQL 可能来自优化器选择，也可能来自存储层页读取和锁等待。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "典型场景"
      },
      {
        "type": "paragraph",
        "text": "适合 MySQL 的场景："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "高频 OLTP 交易系统",
          "电商、订单、账户、配置等成熟业务系统",
          "需要丰富生态、工具和运维经验的团队",
          "读写分离、分库分表、云数据库托管"
        ]
      },
      {
        "type": "paragraph",
        "text": "需要谨慎的场景："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "极复杂分析查询和多维报表",
          "超大单表且没有归档和分区方案",
          "多主强一致跨地域写入"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层原理"
      },
      {
        "type": "paragraph",
        "text": "MySQL/InnoDB 的核心原理："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "B+Tree：所有数据按页组织，聚簇索引叶子节点保存整行数据",
          "MVCC：通过 undo log 构造历史版本，减少读写冲突",
          "两阶段提交：redo log 和 binlog 协调，保证崩溃恢复和复制一致",
          "锁：行锁、间隙锁、next-key lock 解决并发和幻读问题",
          "Buffer Pool：缓存热页，降低磁盘 I/O"
        ]
      },
      {
        "type": "paragraph",
        "text": "涉及的数学直觉："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "B+Tree 用高扇出降低树高，千万级数据也只需少量页访问",
          "索引选择性越高，过滤效率越好",
          "成本优化器通过行数估计和 I/O/CPU 成本选择执行计划",
          "事务隔离是在一致性和并发吞吐之间做取舍"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "常用命令"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "1. 连接和对象"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "mysql -uroot -p\nshow databases;\nuse app;\nshow tables;\nshow create table orders\\G"
      },
      {
        "type": "paragraph",
        "text": "这些命令用于确认库表结构。`show create table` 能看到索引、字符集、存储引擎和表选项。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. SQL 执行计划"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "explain select * from orders where user_id = 1001 order by created_at desc limit 20;\nexplain analyze select * from orders where user_id = 1001;\nshow warnings;"
      },
      {
        "type": "paragraph",
        "text": "`explain` 重点看 type、key、rows、filtered、Extra。`explain analyze` 能看到真实执行耗时，适合验证优化器估计是否偏差过大。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3. 运行状态和锁"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "show processlist;\nshow engine innodb status\\G\nselect * from information_schema.innodb_trx\\G"
      },
      {
        "type": "paragraph",
        "text": "`processlist` 看活跃 SQL，`innodb status` 看死锁、锁等待、buffer pool 和 I/O，`innodb_trx` 看长事务。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4. 复制和日志"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "show master status;\nshow replica status\\G\nshow variables like 'log_bin';\nshow variables like 'transaction_isolation';"
      },
      {
        "type": "paragraph",
        "text": "复制排障重点看延迟、IO/SQL 线程状态、GTID 和错误信息。隔离级别会影响锁和一致性表现。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "源码重点"
      },
      {
        "type": "paragraph",
        "text": "建议按 SQL 到 InnoDB 的路径读："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "`sql/`：解析、执行器、连接和语句生命周期",
          "`sql/opt*`：优化器和执行计划选择",
          "`storage/innobase/row`：行记录读写",
          "`storage/innobase/btr`：B+Tree 索引操作",
          "`storage/innobase/trx`：事务、undo 和隔离",
          "`storage/innobase/buf`：buffer pool",
          "`storage/innobase/log`：redo log 和恢复"
        ]
      },
      {
        "type": "paragraph",
        "text": "源码阅读路线：从一条 `select ... where id = ?` 追到优化器选索引，再追 handler API 到 InnoDB 的 B+Tree 查找。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "典型落地方案"
      },
      {
        "type": "paragraph",
        "text": "OLTP 业务落地原则："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "表必须有清晰主键，避免无主键大表",
          "高频查询用覆盖索引或合理联合索引",
          "事务短小，避免长事务拖住 undo 和锁",
          "写入链路避免大事务和批量无界更新",
          "慢查询、锁等待、复制延迟要有监控",
          "读写分离必须感知复制延迟，不能把强一致读打到从库",
          "大表提前做归档、分区或分库分表设计"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "联合索引模板"
      },
      {
        "type": "code",
        "language": "sql",
        "text": "create index idx_orders_user_created\non orders(user_id, created_at);\n\nexplain select id, status, created_at\nfrom orders\nwhere user_id = 1001\norder by created_at desc\nlimit 20;"
      },
      {
        "type": "paragraph",
        "text": "这个索引服务的是“按用户查最近订单”，不是随便把字段拼在一起。索引设计必须从查询模式倒推。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10 道面试题"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "1. MySQL 和 PostgreSQL 的差异是什么？"
      },
      {
        "type": "paragraph",
        "text": "MySQL 生态成熟、OLTP 使用广泛、工具链丰富；PostgreSQL 在复杂 SQL、扩展能力、类型系统和一致性能力上通常更强。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. InnoDB 为什么重要？"
      },
      {
        "type": "paragraph",
        "text": "InnoDB 承担事务、锁、MVCC、B+Tree、buffer pool 和崩溃恢复，是 MySQL 生产能力的核心。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3. redo log 和 binlog 有什么不同？"
      },
      {
        "type": "paragraph",
        "text": "redo log 是 InnoDB 物理日志，用于崩溃恢复；binlog 是 Server 层逻辑日志，用于复制、审计和时间点恢复。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4. 什么是 gap lock？"
      },
      {
        "type": "paragraph",
        "text": "gap lock 锁住索引记录之间的间隙，用于可重复读下防止幻读，但也可能扩大锁范围导致并发下降。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "5. 事务隔离级别有哪些？"
      },
      {
        "type": "paragraph",
        "text": "读未提交、读已提交、可重复读、串行化。隔离越强，并发成本通常越高，MySQL 默认常见是可重复读。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "6. 如何设计联合索引？"
      },
      {
        "type": "paragraph",
        "text": "从查询条件、排序、分组和选择性倒推。高频等值过滤字段通常靠前，范围字段之后的索引利用会受限制。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "7. explain 重点看什么？"
      },
      {
        "type": "paragraph",
        "text": "看访问类型、使用索引、扫描行数、是否回表、是否 filesort、是否临时表，以及优化器估算和真实执行是否一致。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8. 为什么会出现死锁？"
      },
      {
        "type": "paragraph",
        "text": "多个事务以不同顺序持有锁并等待对方释放，形成循环等待。解决方式是统一加锁顺序、缩短事务和增加合适索引。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9. 复制延迟怎么处理？"
      },
      {
        "type": "paragraph",
        "text": "减少大事务，优化从库资源，拆分热点写入，开启并行复制，并让业务在强一致读时回主库或等待位点。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "10. 如何做高可用切换？"
      },
      {
        "type": "paragraph",
        "text": "需要主从复制、故障检测、选主、应用连接切换、数据一致性校验和回切方案，不能只依赖手工改连接串。"
      }
    ],
    "rawMarkdown": "## 本质\n\nMySQL 的本质是 SQL 层加存储引擎的事务数据库。应用看到的是 SQL、表和索引；真正决定一致性、锁、页、日志和崩溃恢复的是 InnoDB。\n\n一句话理解：MySQL 用 B+Tree 组织数据，用 undo/redo 保证事务和恢复，用 binlog 支撑复制和审计。\n\n## 底层架构\n\nMySQL 链路分成六层：\n\n1. 连接层：连接、认证、权限、线程或连接池\n2. SQL 层：解析、预处理、优化器、执行器\n3. 存储引擎层：InnoDB 负责行、页、索引、锁和事务\n4. 缓冲层：buffer pool 缓存数据页和索引页\n5. 日志层：undo、redo、binlog 协同保证事务和复制\n6. 复制层：主从、GTID、relay log、半同步或组复制\n\n### 架构图\n\n```text\nclient\n  |\nconnection / parser / optimizer / executor\n  |\nhandler API\n  |\nInnoDB: buffer pool + B+Tree + locks\n  |\nundo log / redo log / data pages\n  |\nbinlog -> replica relay log\n```\n\n图里最重要的边界是 SQL 层和 InnoDB 层：慢 SQL 可能来自优化器选择，也可能来自存储层页读取和锁等待。\n\n## 典型场景\n\n适合 MySQL 的场景：\n\n- 高频 OLTP 交易系统\n- 电商、订单、账户、配置等成熟业务系统\n- 需要丰富生态、工具和运维经验的团队\n- 读写分离、分库分表、云数据库托管\n\n需要谨慎的场景：\n\n- 极复杂分析查询和多维报表\n- 超大单表且没有归档和分区方案\n- 多主强一致跨地域写入\n\n## 底层原理\n\nMySQL/InnoDB 的核心原理：\n\n- B+Tree：所有数据按页组织，聚簇索引叶子节点保存整行数据\n- MVCC：通过 undo log 构造历史版本，减少读写冲突\n- 两阶段提交：redo log 和 binlog 协调，保证崩溃恢复和复制一致\n- 锁：行锁、间隙锁、next-key lock 解决并发和幻读问题\n- Buffer Pool：缓存热页，降低磁盘 I/O\n\n涉及的数学直觉：\n\n- B+Tree 用高扇出降低树高，千万级数据也只需少量页访问\n- 索引选择性越高，过滤效率越好\n- 成本优化器通过行数估计和 I/O/CPU 成本选择执行计划\n- 事务隔离是在一致性和并发吞吐之间做取舍\n\n## 常用命令\n\n### 1. 连接和对象\n\n```bash\nmysql -uroot -p\nshow databases;\nuse app;\nshow tables;\nshow create table orders\\G\n```\n\n这些命令用于确认库表结构。`show create table` 能看到索引、字符集、存储引擎和表选项。\n\n### 2. SQL 执行计划\n\n```bash\nexplain select * from orders where user_id = 1001 order by created_at desc limit 20;\nexplain analyze select * from orders where user_id = 1001;\nshow warnings;\n```\n\n`explain` 重点看 type、key、rows、filtered、Extra。`explain analyze` 能看到真实执行耗时，适合验证优化器估计是否偏差过大。\n\n### 3. 运行状态和锁\n\n```bash\nshow processlist;\nshow engine innodb status\\G\nselect * from information_schema.innodb_trx\\G\n```\n\n`processlist` 看活跃 SQL，`innodb status` 看死锁、锁等待、buffer pool 和 I/O，`innodb_trx` 看长事务。\n\n### 4. 复制和日志\n\n```bash\nshow master status;\nshow replica status\\G\nshow variables like 'log_bin';\nshow variables like 'transaction_isolation';\n```\n\n复制排障重点看延迟、IO/SQL 线程状态、GTID 和错误信息。隔离级别会影响锁和一致性表现。\n\n## 源码重点\n\n建议按 SQL 到 InnoDB 的路径读：\n\n- `sql/`：解析、执行器、连接和语句生命周期\n- `sql/opt*`：优化器和执行计划选择\n- `storage/innobase/row`：行记录读写\n- `storage/innobase/btr`：B+Tree 索引操作\n- `storage/innobase/trx`：事务、undo 和隔离\n- `storage/innobase/buf`：buffer pool\n- `storage/innobase/log`：redo log 和恢复\n\n源码阅读路线：从一条 `select ... where id = ?` 追到优化器选索引，再追 handler API 到 InnoDB 的 B+Tree 查找。\n\n## 典型落地方案\n\nOLTP 业务落地原则：\n\n- 表必须有清晰主键，避免无主键大表\n- 高频查询用覆盖索引或合理联合索引\n- 事务短小，避免长事务拖住 undo 和锁\n- 写入链路避免大事务和批量无界更新\n- 慢查询、锁等待、复制延迟要有监控\n- 读写分离必须感知复制延迟，不能把强一致读打到从库\n- 大表提前做归档、分区或分库分表设计\n\n### 联合索引模板\n\n```sql\ncreate index idx_orders_user_created\non orders(user_id, created_at);\n\nexplain select id, status, created_at\nfrom orders\nwhere user_id = 1001\norder by created_at desc\nlimit 20;\n```\n\n这个索引服务的是“按用户查最近订单”，不是随便把字段拼在一起。索引设计必须从查询模式倒推。\n\n## 10 道面试题\n\n### 1. MySQL 和 PostgreSQL 的差异是什么？\n\nMySQL 生态成熟、OLTP 使用广泛、工具链丰富；PostgreSQL 在复杂 SQL、扩展能力、类型系统和一致性能力上通常更强。\n\n### 2. InnoDB 为什么重要？\n\nInnoDB 承担事务、锁、MVCC、B+Tree、buffer pool 和崩溃恢复，是 MySQL 生产能力的核心。\n\n### 3. redo log 和 binlog 有什么不同？\n\nredo log 是 InnoDB 物理日志，用于崩溃恢复；binlog 是 Server 层逻辑日志，用于复制、审计和时间点恢复。\n\n### 4. 什么是 gap lock？\n\ngap lock 锁住索引记录之间的间隙，用于可重复读下防止幻读，但也可能扩大锁范围导致并发下降。\n\n### 5. 事务隔离级别有哪些？\n\n读未提交、读已提交、可重复读、串行化。隔离越强，并发成本通常越高，MySQL 默认常见是可重复读。\n\n### 6. 如何设计联合索引？\n\n从查询条件、排序、分组和选择性倒推。高频等值过滤字段通常靠前，范围字段之后的索引利用会受限制。\n\n### 7. explain 重点看什么？\n\n看访问类型、使用索引、扫描行数、是否回表、是否 filesort、是否临时表，以及优化器估算和真实执行是否一致。\n\n### 8. 为什么会出现死锁？\n\n多个事务以不同顺序持有锁并等待对方释放，形成循环等待。解决方式是统一加锁顺序、缩短事务和增加合适索引。\n\n### 9. 复制延迟怎么处理？\n\n减少大事务，优化从库资源，拆分热点写入，开启并行复制，并让业务在强一致读时回主库或等待位点。\n\n### 10. 如何做高可用切换？\n\n需要主从复制、故障检测、选主、应用连接切换、数据一致性校验和回切方案，不能只依赖手工改连接串。"
  },
  {
    "id": "nginx",
    "title": "NGINX",
    "domain": "Middleware",
    "summary": "高性能 Web 代理和流量入口，负责反向代理、TLS、静态资源和限流。",
    "essence": "NGINX 本质是事件驱动的高并发连接处理器。",
    "scenarios": "适合反向代理、静态资源、负载均衡、TLS 终止和网关入口。",
    "sourceFocus": "src/event、http、stream、upstream、balancer 相关路径。",
    "colors": [
      "#d8a321",
      "#f1dfb8",
      "#0f7b78"
    ],
    "body": [
      "本质",
      "NGINX",
      "的本质是一个事件驱动的连接处理器。它通过少量",
      "worker、非阻塞",
      "I/O",
      "和模块化请求处理链路，承担反向代理、静态资源、TLS、负载均衡和限流。",
      "一句话理解：NGINX",
      "不擅长复杂业务逻辑，它擅长把大量连接稳定、低成本地接住、路由出去并保护后端。",
      "底层架构",
      "NGINX",
      "的链路分成五层：",
      "进程层：master",
      "管理",
      "worker、配置加载和平滑重启",
      "事件层：worker",
      "使用",
      "epoll/kqueue",
      "等事件机制处理连接",
      "HTTP",
      "层：请求解析、phase",
      "handler、location",
      "匹配、rewrite",
      "和",
      "access",
      "Upstream",
      "层：反向代理、连接池、负载均衡、超时和重试",
      "模块层：gzip、cache、limit、stream、ssl",
      "等能力按模块接入",
      "架构图",
      "client",
      "|",
      "master",
      "process",
      "|",
      "worker",
      "event",
      "loop",
      "|",
      "http",
      "phases",
      "->",
      "location",
      "->",
      "upstream",
      "|",
      "backend",
      "servers",
      "|",
      "access",
      "log",
      "/",
      "error",
      "log",
      "/",
      "metrics",
      "图里的关键点是",
      "worker",
      "事件循环：一个",
      "worker",
      "不为每个连接创建线程，而是用事件通知驱动读写。",
      "典型场景",
      "适合",
      "NGINX",
      "的场景：",
      "网站入口和反向代理",
      "静态资源和下载分发",
      "TLS",
      "终止和证书管理",
      "HTTP/TCP",
      "负载均衡",
      "限流、限连接、缓存和基础安全边界",
      "不适合让",
      "NGINX",
      "单独承担的场景：",
      "复杂鉴权、动态策略和服务治理",
      "深度",
      "API",
      "管理、插件化网关和多租户控制面",
      "需要业务状态和事务语义的逻辑",
      "底层原理",
      "NGINX",
      "高性能的核心原理：",
      "事件驱动：epoll/kqueue",
      "让",
      "worker",
      "在连接可读写时再处理",
      "非阻塞",
      "I/O：慢连接不会长期占住线程",
      "多进程模型：worker",
      "之间隔离，master",
      "可平滑",
      "reload",
      "零拷贝优化：静态文件发送可以减少数据拷贝",
      "共享内存区：限流、缓存元数据等跨",
      "worker",
      "共享状态",
      "负载均衡里的算法：",
      "round-robin：轮询，简单稳定",
      "weighted",
      "round-robin：按权重分配流量",
      "least_conn：选择当前连接数少的后端",
      "ip_hash/hash：把同一",
      "key",
      "尽量打到同一后端",
      "限流的数学直觉通常是漏桶或令牌桶：把突发流量整形成稳定速率，保护后端队列不被瞬间打爆。",
      "常用命令",
      "1.",
      "配置检查和重载",
      "nginx",
      "-t",
      "nginx",
      "-s",
      "reload",
      "nginx",
      "-s",
      "stop",
      "nginx",
      "-V",
      "`nginx",
      "-t`",
      "必须在",
      "reload",
      "前执行；`reload`",
      "会让",
      "master",
      "加载新配置并优雅替换",
      "worker；`-V`",
      "查看编译模块和",
      "OpenSSL",
      "等依赖。",
      "2.",
      "日志排查",
      "tail",
      "-f",
      "/var/log/nginx/access.log",
      "tail",
      "-f",
      "/var/log/nginx/error.log",
      "grep",
      "\"",
      "502",
      "\"",
      "/var/log/nginx/access.log",
      "grep",
      "\"upstream",
      "timed",
      "out\"",
      "/var/log/nginx/error.log",
      "access",
      "log",
      "看请求、状态码、耗时和",
      "upstream；error",
      "log",
      "看连接失败、超时、权限和配置问题。",
      "3.",
      "配置定位",
      "nginx",
      "-T",
      "curl",
      "-I",
      "https://example.com",
      "curl",
      "-v",
      "https://example.com/api/health",
      "`nginx",
      "-T`",
      "会输出完整配置，适合排查",
      "include",
      "后实际生效内容。`curl",
      "-v`",
      "看",
      "TLS、响应头和连接过程。",
      "4.",
      "连接和端口",
      "ss",
      "-lntp",
      "|",
      "grep",
      "nginx",
      "ss",
      "-ant",
      "|",
      "awk",
      "'{print",
      "$1}'",
      "|",
      "sort",
      "|",
      "uniq",
      "-c",
      "用于确认监听端口、连接状态和是否出现大量",
      "TIME-WAIT、CLOSE-WAIT。",
      "源码重点",
      "建议按请求生命周期读：",
      "`src/core`：内存池、配置解析、基础数据结构",
      "`src/event`：事件模型、连接和定时器",
      "`src/http/ngx_http_request.c`：HTTP",
      "请求创建和处理",
      "`src/http/ngx_http_core_module.c`：location",
      "和",
      "phase",
      "handler",
      "`src/http/ngx_http_upstream.c`：反向代理和上游交互",
      "`src/http/ngx_http_upstream_round_robin.c`：轮询负载均衡",
      "源码阅读路线：从",
      "worker",
      "accept",
      "连接开始，追请求解析、phase",
      "执行、location",
      "命中、upstream",
      "转发和日志写入。",
      "典型落地方案",
      "生产入口层配置要包含：",
      "TLS",
      "终止和安全协议版本限制",
      "upstream",
      "后端池和健康检查策略",
      "proxy",
      "timeout、buffer、body",
      "size",
      "等边界",
      "access",
      "log",
      "带",
      "request",
      "time",
      "和",
      "upstream",
      "time",
      "限流和限连接保护核心接口",
      "静态资源缓存和压缩",
      "reload",
      "前配置检查，变更可回滚",
      "反向代理模板",
      "upstream",
      "app_backend",
      "{",
      "least_conn;",
      "server",
      "10.0.0.11:8080",
      "max_fails=3",
      "fail_timeout=10s;",
      "server",
      "10.0.0.12:8080",
      "max_fails=3",
      "fail_timeout=10s;",
      "}",
      "server",
      "{",
      "listen",
      "443",
      "ssl",
      "http2;",
      "server_name",
      "example.com;",
      "location",
      "/api/",
      "{",
      "proxy_pass",
      "http://app_backend;",
      "proxy_connect_timeout",
      "3s;",
      "proxy_read_timeout",
      "30s;",
      "proxy_set_header",
      "Host",
      "$host;",
      "proxy_set_header",
      "X-Request-Id",
      "$request_id;",
      "}",
      "}",
      "10",
      "道面试题",
      "1.",
      "NGINX",
      "为什么高性能？",
      "因为它使用事件驱动、非阻塞",
      "I/O",
      "和多",
      "worker",
      "模型，用少量进程处理大量连接，避免一连接一线程的高开销。",
      "2.",
      "Master/Worker",
      "模型是什么？",
      "Master",
      "负责读取配置、管理",
      "worker、平滑重载和信号处理；worker",
      "负责实际处理连接和请求。",
      "3.",
      "反向代理和负载均衡有什么区别？",
      "反向代理是替客户端访问后端服务，负载均衡是在多个后端之间选择一个目标。负载均衡通常是反向代理的一部分。",
      "4.",
      "为什么",
      "NGINX",
      "适合入口层？",
      "它擅长连接管理、TLS、路由、静态资源、限流和基础安全控制，可以把后端从连接洪峰里保护出来。",
      "5.",
      "location",
      "匹配大致怎么理解？",
      "先处理精确匹配和最长前缀，再根据规则处理正则匹配。排查路由问题时要看最终命中的",
      "location，而不是只看配置顺序。",
      "6.",
      "upstream",
      "负载均衡算法有哪些？",
      "常见有轮询、加权轮询、最少连接、ip_hash",
      "和通用",
      "hash。选择取决于后端能力、连接时长和会话粘性需求。",
      "7.",
      "`nginx",
      "-t`",
      "检查什么？",
      "它检查配置语法、include",
      "文件、证书路径和模块配置是否可加载，避免错误配置",
      "reload",
      "到线上。",
      "8.",
      "NGINX",
      "如何做限流？",
      "通过共享内存记录",
      "key",
      "的请求状态，按漏桶或令牌桶思想控制请求速率，超限后延迟或拒绝。",
      "9.",
      "如何定位",
      "502/504？",
      "502",
      "多看上游连接失败、进程崩溃、协议错误；504",
      "多看上游响应慢、超时配置和后端处理耗时。",
      "10.",
      "NGINX",
      "和",
      "API",
      "网关有什么关系？",
      "NGINX",
      "可以作为网关的数据面，但完整",
      "API",
      "网关通常还需要控制面、认证、鉴权、插件、灰度、限额和审计。"
    ],
    "bodyBlocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "本质"
      },
      {
        "type": "paragraph",
        "text": "NGINX 的本质是一个事件驱动的连接处理器。它通过少量 worker、非阻塞 I/O 和模块化请求处理链路，承担反向代理、静态资源、TLS、负载均衡和限流。"
      },
      {
        "type": "paragraph",
        "text": "一句话理解：NGINX 不擅长复杂业务逻辑，它擅长把大量连接稳定、低成本地接住、路由出去并保护后端。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层架构"
      },
      {
        "type": "paragraph",
        "text": "NGINX 的链路分成五层："
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "进程层：master 管理 worker、配置加载和平滑重启",
          "事件层：worker 使用 epoll/kqueue 等事件机制处理连接",
          "HTTP 层：请求解析、phase handler、location 匹配、rewrite 和 access",
          "Upstream 层：反向代理、连接池、负载均衡、超时和重试",
          "模块层：gzip、cache、limit、stream、ssl 等能力按模块接入"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "架构图"
      },
      {
        "type": "code",
        "language": "text",
        "text": "client\n  |\nmaster process\n  |\nworker event loop\n  |\nhttp phases -> location -> upstream\n  |\nbackend servers\n  |\naccess log / error log / metrics"
      },
      {
        "type": "paragraph",
        "text": "图里的关键点是 worker 事件循环：一个 worker 不为每个连接创建线程，而是用事件通知驱动读写。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "典型场景"
      },
      {
        "type": "paragraph",
        "text": "适合 NGINX 的场景："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "网站入口和反向代理",
          "静态资源和下载分发",
          "TLS 终止和证书管理",
          "HTTP/TCP 负载均衡",
          "限流、限连接、缓存和基础安全边界"
        ]
      },
      {
        "type": "paragraph",
        "text": "不适合让 NGINX 单独承担的场景："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "复杂鉴权、动态策略和服务治理",
          "深度 API 管理、插件化网关和多租户控制面",
          "需要业务状态和事务语义的逻辑"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层原理"
      },
      {
        "type": "paragraph",
        "text": "NGINX 高性能的核心原理："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "事件驱动：epoll/kqueue 让 worker 在连接可读写时再处理",
          "非阻塞 I/O：慢连接不会长期占住线程",
          "多进程模型：worker 之间隔离，master 可平滑 reload",
          "零拷贝优化：静态文件发送可以减少数据拷贝",
          "共享内存区：限流、缓存元数据等跨 worker 共享状态"
        ]
      },
      {
        "type": "paragraph",
        "text": "负载均衡里的算法："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "round-robin：轮询，简单稳定",
          "weighted round-robin：按权重分配流量",
          "least_conn：选择当前连接数少的后端",
          "ip_hash/hash：把同一 key 尽量打到同一后端"
        ]
      },
      {
        "type": "paragraph",
        "text": "限流的数学直觉通常是漏桶或令牌桶：把突发流量整形成稳定速率，保护后端队列不被瞬间打爆。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "常用命令"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "1. 配置检查和重载"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "nginx -t\nnginx -s reload\nnginx -s stop\nnginx -V"
      },
      {
        "type": "paragraph",
        "text": "`nginx -t` 必须在 reload 前执行；`reload` 会让 master 加载新配置并优雅替换 worker；`-V` 查看编译模块和 OpenSSL 等依赖。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. 日志排查"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "tail -f /var/log/nginx/access.log\ntail -f /var/log/nginx/error.log\ngrep \" 502 \" /var/log/nginx/access.log\ngrep \"upstream timed out\" /var/log/nginx/error.log"
      },
      {
        "type": "paragraph",
        "text": "access log 看请求、状态码、耗时和 upstream；error log 看连接失败、超时、权限和配置问题。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3. 配置定位"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "nginx -T\ncurl -I https://example.com\ncurl -v https://example.com/api/health"
      },
      {
        "type": "paragraph",
        "text": "`nginx -T` 会输出完整配置，适合排查 include 后实际生效内容。`curl -v` 看 TLS、响应头和连接过程。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4. 连接和端口"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "ss -lntp | grep nginx\nss -ant | awk '{print $1}' | sort | uniq -c"
      },
      {
        "type": "paragraph",
        "text": "用于确认监听端口、连接状态和是否出现大量 TIME-WAIT、CLOSE-WAIT。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "源码重点"
      },
      {
        "type": "paragraph",
        "text": "建议按请求生命周期读："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "`src/core`：内存池、配置解析、基础数据结构",
          "`src/event`：事件模型、连接和定时器",
          "`src/http/ngx_http_request.c`：HTTP 请求创建和处理",
          "`src/http/ngx_http_core_module.c`：location 和 phase handler",
          "`src/http/ngx_http_upstream.c`：反向代理和上游交互",
          "`src/http/ngx_http_upstream_round_robin.c`：轮询负载均衡"
        ]
      },
      {
        "type": "paragraph",
        "text": "源码阅读路线：从 worker accept 连接开始，追请求解析、phase 执行、location 命中、upstream 转发和日志写入。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "典型落地方案"
      },
      {
        "type": "paragraph",
        "text": "生产入口层配置要包含："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "TLS 终止和安全协议版本限制",
          "upstream 后端池和健康检查策略",
          "proxy timeout、buffer、body size 等边界",
          "access log 带 request time 和 upstream time",
          "限流和限连接保护核心接口",
          "静态资源缓存和压缩",
          "reload 前配置检查，变更可回滚"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "反向代理模板"
      },
      {
        "type": "code",
        "language": "nginx",
        "text": "upstream app_backend {\n    least_conn;\n    server 10.0.0.11:8080 max_fails=3 fail_timeout=10s;\n    server 10.0.0.12:8080 max_fails=3 fail_timeout=10s;\n}\n\nserver {\n    listen 443 ssl http2;\n    server_name example.com;\n\n    location /api/ {\n        proxy_pass http://app_backend;\n        proxy_connect_timeout 3s;\n        proxy_read_timeout 30s;\n        proxy_set_header Host $host;\n        proxy_set_header X-Request-Id $request_id;\n    }\n}"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10 道面试题"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "1. NGINX 为什么高性能？"
      },
      {
        "type": "paragraph",
        "text": "因为它使用事件驱动、非阻塞 I/O 和多 worker 模型，用少量进程处理大量连接，避免一连接一线程的高开销。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. Master/Worker 模型是什么？"
      },
      {
        "type": "paragraph",
        "text": "Master 负责读取配置、管理 worker、平滑重载和信号处理；worker 负责实际处理连接和请求。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3. 反向代理和负载均衡有什么区别？"
      },
      {
        "type": "paragraph",
        "text": "反向代理是替客户端访问后端服务，负载均衡是在多个后端之间选择一个目标。负载均衡通常是反向代理的一部分。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4. 为什么 NGINX 适合入口层？"
      },
      {
        "type": "paragraph",
        "text": "它擅长连接管理、TLS、路由、静态资源、限流和基础安全控制，可以把后端从连接洪峰里保护出来。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "5. location 匹配大致怎么理解？"
      },
      {
        "type": "paragraph",
        "text": "先处理精确匹配和最长前缀，再根据规则处理正则匹配。排查路由问题时要看最终命中的 location，而不是只看配置顺序。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "6. upstream 负载均衡算法有哪些？"
      },
      {
        "type": "paragraph",
        "text": "常见有轮询、加权轮询、最少连接、ip_hash 和通用 hash。选择取决于后端能力、连接时长和会话粘性需求。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "7. `nginx -t` 检查什么？"
      },
      {
        "type": "paragraph",
        "text": "它检查配置语法、include 文件、证书路径和模块配置是否可加载，避免错误配置 reload 到线上。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8. NGINX 如何做限流？"
      },
      {
        "type": "paragraph",
        "text": "通过共享内存记录 key 的请求状态，按漏桶或令牌桶思想控制请求速率，超限后延迟或拒绝。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9. 如何定位 502/504？"
      },
      {
        "type": "paragraph",
        "text": "502 多看上游连接失败、进程崩溃、协议错误；504 多看上游响应慢、超时配置和后端处理耗时。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "10. NGINX 和 API 网关有什么关系？"
      },
      {
        "type": "paragraph",
        "text": "NGINX 可以作为网关的数据面，但完整 API 网关通常还需要控制面、认证、鉴权、插件、灰度、限额和审计。"
      }
    ],
    "rawMarkdown": "## 本质\n\nNGINX 的本质是一个事件驱动的连接处理器。它通过少量 worker、非阻塞 I/O 和模块化请求处理链路，承担反向代理、静态资源、TLS、负载均衡和限流。\n\n一句话理解：NGINX 不擅长复杂业务逻辑，它擅长把大量连接稳定、低成本地接住、路由出去并保护后端。\n\n## 底层架构\n\nNGINX 的链路分成五层：\n\n1. 进程层：master 管理 worker、配置加载和平滑重启\n2. 事件层：worker 使用 epoll/kqueue 等事件机制处理连接\n3. HTTP 层：请求解析、phase handler、location 匹配、rewrite 和 access\n4. Upstream 层：反向代理、连接池、负载均衡、超时和重试\n5. 模块层：gzip、cache、limit、stream、ssl 等能力按模块接入\n\n### 架构图\n\n```text\nclient\n  |\nmaster process\n  |\nworker event loop\n  |\nhttp phases -> location -> upstream\n  |\nbackend servers\n  |\naccess log / error log / metrics\n```\n\n图里的关键点是 worker 事件循环：一个 worker 不为每个连接创建线程，而是用事件通知驱动读写。\n\n## 典型场景\n\n适合 NGINX 的场景：\n\n- 网站入口和反向代理\n- 静态资源和下载分发\n- TLS 终止和证书管理\n- HTTP/TCP 负载均衡\n- 限流、限连接、缓存和基础安全边界\n\n不适合让 NGINX 单独承担的场景：\n\n- 复杂鉴权、动态策略和服务治理\n- 深度 API 管理、插件化网关和多租户控制面\n- 需要业务状态和事务语义的逻辑\n\n## 底层原理\n\nNGINX 高性能的核心原理：\n\n- 事件驱动：epoll/kqueue 让 worker 在连接可读写时再处理\n- 非阻塞 I/O：慢连接不会长期占住线程\n- 多进程模型：worker 之间隔离，master 可平滑 reload\n- 零拷贝优化：静态文件发送可以减少数据拷贝\n- 共享内存区：限流、缓存元数据等跨 worker 共享状态\n\n负载均衡里的算法：\n\n- round-robin：轮询，简单稳定\n- weighted round-robin：按权重分配流量\n- least_conn：选择当前连接数少的后端\n- ip_hash/hash：把同一 key 尽量打到同一后端\n\n限流的数学直觉通常是漏桶或令牌桶：把突发流量整形成稳定速率，保护后端队列不被瞬间打爆。\n\n## 常用命令\n\n### 1. 配置检查和重载\n\n```bash\nnginx -t\nnginx -s reload\nnginx -s stop\nnginx -V\n```\n\n`nginx -t` 必须在 reload 前执行；`reload` 会让 master 加载新配置并优雅替换 worker；`-V` 查看编译模块和 OpenSSL 等依赖。\n\n### 2. 日志排查\n\n```bash\ntail -f /var/log/nginx/access.log\ntail -f /var/log/nginx/error.log\ngrep \" 502 \" /var/log/nginx/access.log\ngrep \"upstream timed out\" /var/log/nginx/error.log\n```\n\naccess log 看请求、状态码、耗时和 upstream；error log 看连接失败、超时、权限和配置问题。\n\n### 3. 配置定位\n\n```bash\nnginx -T\ncurl -I https://example.com\ncurl -v https://example.com/api/health\n```\n\n`nginx -T` 会输出完整配置，适合排查 include 后实际生效内容。`curl -v` 看 TLS、响应头和连接过程。\n\n### 4. 连接和端口\n\n```bash\nss -lntp | grep nginx\nss -ant | awk '{print $1}' | sort | uniq -c\n```\n\n用于确认监听端口、连接状态和是否出现大量 TIME-WAIT、CLOSE-WAIT。\n\n## 源码重点\n\n建议按请求生命周期读：\n\n- `src/core`：内存池、配置解析、基础数据结构\n- `src/event`：事件模型、连接和定时器\n- `src/http/ngx_http_request.c`：HTTP 请求创建和处理\n- `src/http/ngx_http_core_module.c`：location 和 phase handler\n- `src/http/ngx_http_upstream.c`：反向代理和上游交互\n- `src/http/ngx_http_upstream_round_robin.c`：轮询负载均衡\n\n源码阅读路线：从 worker accept 连接开始，追请求解析、phase 执行、location 命中、upstream 转发和日志写入。\n\n## 典型落地方案\n\n生产入口层配置要包含：\n\n- TLS 终止和安全协议版本限制\n- upstream 后端池和健康检查策略\n- proxy timeout、buffer、body size 等边界\n- access log 带 request time 和 upstream time\n- 限流和限连接保护核心接口\n- 静态资源缓存和压缩\n- reload 前配置检查，变更可回滚\n\n### 反向代理模板\n\n```nginx\nupstream app_backend {\n    least_conn;\n    server 10.0.0.11:8080 max_fails=3 fail_timeout=10s;\n    server 10.0.0.12:8080 max_fails=3 fail_timeout=10s;\n}\n\nserver {\n    listen 443 ssl http2;\n    server_name example.com;\n\n    location /api/ {\n        proxy_pass http://app_backend;\n        proxy_connect_timeout 3s;\n        proxy_read_timeout 30s;\n        proxy_set_header Host $host;\n        proxy_set_header X-Request-Id $request_id;\n    }\n}\n```\n\n## 10 道面试题\n\n### 1. NGINX 为什么高性能？\n\n因为它使用事件驱动、非阻塞 I/O 和多 worker 模型，用少量进程处理大量连接，避免一连接一线程的高开销。\n\n### 2. Master/Worker 模型是什么？\n\nMaster 负责读取配置、管理 worker、平滑重载和信号处理；worker 负责实际处理连接和请求。\n\n### 3. 反向代理和负载均衡有什么区别？\n\n反向代理是替客户端访问后端服务，负载均衡是在多个后端之间选择一个目标。负载均衡通常是反向代理的一部分。\n\n### 4. 为什么 NGINX 适合入口层？\n\n它擅长连接管理、TLS、路由、静态资源、限流和基础安全控制，可以把后端从连接洪峰里保护出来。\n\n### 5. location 匹配大致怎么理解？\n\n先处理精确匹配和最长前缀，再根据规则处理正则匹配。排查路由问题时要看最终命中的 location，而不是只看配置顺序。\n\n### 6. upstream 负载均衡算法有哪些？\n\n常见有轮询、加权轮询、最少连接、ip_hash 和通用 hash。选择取决于后端能力、连接时长和会话粘性需求。\n\n### 7. `nginx -t` 检查什么？\n\n它检查配置语法、include 文件、证书路径和模块配置是否可加载，避免错误配置 reload 到线上。\n\n### 8. NGINX 如何做限流？\n\n通过共享内存记录 key 的请求状态，按漏桶或令牌桶思想控制请求速率，超限后延迟或拒绝。\n\n### 9. 如何定位 502/504？\n\n502 多看上游连接失败、进程崩溃、协议错误；504 多看上游响应慢、超时配置和后端处理耗时。\n\n### 10. NGINX 和 API 网关有什么关系？\n\nNGINX 可以作为网关的数据面，但完整 API 网关通常还需要控制面、认证、鉴权、插件、灰度、限额和审计。"
  },
  {
    "id": "postgresql",
    "title": "PostgreSQL",
    "domain": "Database",
    "summary": "强一致关系数据库，适合事务、复杂查询和可靠数据存储。",
    "essence": "PostgreSQL 本质是带优化器、MVCC 和 WAL 的事务型数据管理系统。",
    "scenarios": "适合核心交易、复杂 SQL、报表分析和需要可靠恢复的业务。",
    "sourceFocus": "src/backend/optimizer、executor、storage、access、wal。",
    "colors": [
      "#5b7f45",
      "#fffaf0",
      "#d8a321"
    ],
    "body": [
      "本质",
      "PostgreSQL",
      "的本质是一个强调正确性、可扩展性和",
      "SQL",
      "表达力的事务数据库。它用",
      "MVCC",
      "管并发，用",
      "WAL",
      "管恢复，用优化器和执行器把声明式",
      "SQL",
      "变成物理执行计划。",
      "一句话理解：PostgreSQL",
      "是数据库内核、查询引擎和扩展平台的组合。",
      "底层架构",
      "PostgreSQL",
      "链路分成六层：",
      "连接层：backend",
      "process",
      "处理客户端会话",
      "SQL",
      "层：parser、rewriter、planner/optimizer、executor",
      "存储层：heap",
      "page、tuple、visibility、buffer",
      "manager",
      "索引层：B-Tree、GIN、GiST、BRIN",
      "等访问方法",
      "事务层：MVCC、snapshot、lock、vacuum",
      "恢复层：WAL、checkpoint、archive、replication",
      "架构图",
      "client",
      "|",
      "backend",
      "process",
      "|",
      "parser",
      "->",
      "planner",
      "->",
      "executor",
      "|",
      "heap",
      "/",
      "index",
      "access",
      "methods",
      "|",
      "buffer",
      "manager",
      "|",
      "WAL",
      "->",
      "checkpoint",
      "->",
      "replication",
      "关键点：PostgreSQL",
      "的每个连接通常对应一个",
      "backend",
      "进程，查询在",
      "executor",
      "中按照计划节点拉取数据。",
      "典型场景",
      "适合",
      "PostgreSQL",
      "的场景：",
      "核心交易、账户、权限、配置和元数据",
      "复杂查询、窗口函数、CTE",
      "和报表分析",
      "JSONB、全文检索、GIS、向量等扩展能力",
      "对一致性、恢复和数据正确性要求高的系统",
      "需要谨慎的场景：",
      "极高写入吞吐但缺少分区和归档策略",
      "大量短连接且没有连接池",
      "长事务频繁存在、vacuum",
      "被长期拖住",
      "底层原理",
      "PostgreSQL",
      "的核心原理：",
      "MVCC：每行版本带事务可见性信息，读写通过",
      "snapshot",
      "判断可见",
      "WAL：先写日志再写数据页，崩溃后通过重放恢复",
      "Cost",
      "Based",
      "Optimizer：基于统计信息估算扫描、连接、排序和聚合成本",
      "Buffer",
      "Manager：缓存数据页，减少磁盘读取",
      "VACUUM：清理不可见旧版本，防止表膨胀",
      "算法和数学直觉：",
      "B-Tree",
      "适合等值和范围查询，GIN",
      "适合倒排索引，BRIN",
      "适合大表按物理顺序过滤",
      "查询优化是搜索问题，优化器在候选执行计划里选择估算成本最低的方案",
      "统计信息的直方图和相关性会影响行数估算，估错会导致错误",
      "join",
      "顺序",
      "MVCC",
      "用版本链和可见性判断换取读写并发",
      "常用命令",
      "1.",
      "连接和对象",
      "psql",
      "-h",
      "localhost",
      "-U",
      "postgres",
      "\\l",
      "\\c",
      "app",
      "\\dt",
      "\\d+",
      "orders",
      "这些元命令用于查看数据库、表和结构。`\\d+`",
      "能看到列、索引、存储和统计信息摘要。",
      "2.",
      "执行计划",
      "explain",
      "analyze",
      "select",
      "*",
      "from",
      "orders",
      "where",
      "id",
      "=",
      "1;",
      "explain",
      "(analyze,",
      "buffers)",
      "select",
      "*",
      "from",
      "orders",
      "where",
      "user_id",
      "=",
      "1001;",
      "`analyze`",
      "执行真实",
      "SQL",
      "并返回耗时；`buffers`",
      "看共享缓冲命中和读盘情况。慢",
      "SQL",
      "排查离不开这两个视角。",
      "3.",
      "活动和锁",
      "select",
      "pid,",
      "state,",
      "wait_event_type,",
      "wait_event,",
      "query",
      "from",
      "pg_stat_activity;",
      "select",
      "*",
      "from",
      "pg_locks",
      "where",
      "not",
      "granted;",
      "select",
      "*",
      "from",
      "pg_stat_user_tables;",
      "`pg_stat_activity`",
      "看当前会话和等待事件，`pg_locks`",
      "看锁等待，`pg_stat_user_tables`",
      "看扫描、更新和",
      "vacuum",
      "状态。",
      "4.",
      "维护和复制",
      "vacuum",
      "analyze",
      "orders;",
      "select",
      "*",
      "from",
      "pg_stat_replication;",
      "select",
      "pg_current_wal_lsn();",
      "`vacuum",
      "analyze`",
      "清理旧版本并更新统计信息；复制排障看",
      "WAL",
      "位点、延迟和从库回放状态。",
      "源码重点",
      "建议按一条查询的生命周期读：",
      "`src/backend/parser`：SQL",
      "解析成语法树",
      "`src/backend/optimizer`：路径生成、成本估算、计划选择",
      "`src/backend/executor`：执行计划节点",
      "`src/backend/access/heap`：heap",
      "表访问",
      "`src/backend/access/nbtree`：B-Tree",
      "索引",
      "`src/backend/storage/buffer`：缓冲区管理",
      "`src/backend/access/transam`：事务、WAL",
      "和提交",
      "源码阅读路线：从",
      "`exec_simple_query`",
      "追到",
      "parse、plan、execute，再看一个",
      "index",
      "scan",
      "如何访问",
      "heap",
      "tuple",
      "并判断可见性。",
      "典型落地方案",
      "生产",
      "PostgreSQL",
      "方案要关注：",
      "所有服务通过连接池访问，避免连接风暴",
      "表按业务访问模式设计索引和分区",
      "慢查询定期看",
      "`pg_stat_statements`",
      "长事务、锁等待、表膨胀和",
      "autovacuum",
      "必须监控",
      "WAL",
      "归档、基础备份和恢复演练要定期验证",
      "主从复制用于读扩展和容灾，但强一致读要谨慎",
      "重要变更先在预发执行",
      "`explain",
      "analyze`",
      "查询优化模板",
      "create",
      "index",
      "idx_orders_user_created",
      "on",
      "orders(user_id,",
      "created_at",
      "desc);",
      "explain",
      "(analyze,",
      "buffers)",
      "select",
      "id,",
      "status,",
      "created_at",
      "from",
      "orders",
      "where",
      "user_id",
      "=",
      "1001",
      "order",
      "by",
      "created_at",
      "desc",
      "limit",
      "20;",
      "优化目标不是“建更多索引”，而是让高频查询少扫页、少排序、少回表，并保持写入成本可控。",
      "10",
      "道面试题",
      "1.",
      "PostgreSQL",
      "为什么适合核心业务？",
      "因为它有强事务能力、丰富",
      "SQL、可靠",
      "WAL",
      "恢复和成熟扩展生态，能支撑一致性要求高且查询复杂的业务。",
      "2.",
      "MVCC",
      "解决什么问题？",
      "MVCC",
      "让读事务看到一致快照，减少读写互相阻塞，同时用行版本和可见性规则处理并发。",
      "3.",
      "B-Tree",
      "索引有什么优势？",
      "B-Tree",
      "保持有序，树高低，适合等值、范围、排序和前缀匹配，是最通用的索引结构。",
      "4.",
      "WAL",
      "的作用是什么？",
      "WAL",
      "先记录变更日志，再异步写数据页。崩溃后数据库可以重放",
      "WAL，恢复到一致状态。",
      "5.",
      "EXPLAIN",
      "里重点看什么？",
      "重点看扫描方式、行数估计、实际行数、join",
      "顺序、排序聚合、buffer",
      "命中和最耗时节点。",
      "6.",
      "长事务为什么危险？",
      "长事务持有旧",
      "snapshot，会阻止旧版本清理，导致表膨胀、vacuum",
      "压力、锁等待和复制延迟。",
      "7.",
      "主从复制如何工作？",
      "主库生成",
      "WAL，从库接收并按顺序重放",
      "WAL。物理复制保证从库数据页与主库变化保持一致。",
      "8.",
      "VACUUM",
      "为什么重要？",
      "它清理不可见旧版本，更新可见性信息，配合",
      "analyze",
      "更新统计信息，防止膨胀和执行计划恶化。",
      "9.",
      "事务隔离级别有什么差异？",
      "读已提交每条语句一个快照，可重复读整个事务一个快照，串行化提供更强一致性但冲突和重试成本更高。",
      "10.",
      "如何定位慢",
      "SQL？",
      "从",
      "`pg_stat_statements`",
      "找高耗时",
      "SQL，用",
      "`explain",
      "analyze",
      "buffers`",
      "看计划、行数估计、索引、排序、join",
      "和读盘情况。"
    ],
    "bodyBlocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "本质"
      },
      {
        "type": "paragraph",
        "text": "PostgreSQL 的本质是一个强调正确性、可扩展性和 SQL 表达力的事务数据库。它用 MVCC 管并发，用 WAL 管恢复，用优化器和执行器把声明式 SQL 变成物理执行计划。"
      },
      {
        "type": "paragraph",
        "text": "一句话理解：PostgreSQL 是数据库内核、查询引擎和扩展平台的组合。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层架构"
      },
      {
        "type": "paragraph",
        "text": "PostgreSQL 链路分成六层："
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "连接层：backend process 处理客户端会话",
          "SQL 层：parser、rewriter、planner/optimizer、executor",
          "存储层：heap page、tuple、visibility、buffer manager",
          "索引层：B-Tree、GIN、GiST、BRIN 等访问方法",
          "事务层：MVCC、snapshot、lock、vacuum",
          "恢复层：WAL、checkpoint、archive、replication"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "架构图"
      },
      {
        "type": "code",
        "language": "text",
        "text": "client\n  |\nbackend process\n  |\nparser -> planner -> executor\n  |\nheap / index access methods\n  |\nbuffer manager\n  |\nWAL -> checkpoint -> replication"
      },
      {
        "type": "paragraph",
        "text": "关键点：PostgreSQL 的每个连接通常对应一个 backend 进程，查询在 executor 中按照计划节点拉取数据。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "典型场景"
      },
      {
        "type": "paragraph",
        "text": "适合 PostgreSQL 的场景："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "核心交易、账户、权限、配置和元数据",
          "复杂查询、窗口函数、CTE 和报表分析",
          "JSONB、全文检索、GIS、向量等扩展能力",
          "对一致性、恢复和数据正确性要求高的系统"
        ]
      },
      {
        "type": "paragraph",
        "text": "需要谨慎的场景："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "极高写入吞吐但缺少分区和归档策略",
          "大量短连接且没有连接池",
          "长事务频繁存在、vacuum 被长期拖住"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层原理"
      },
      {
        "type": "paragraph",
        "text": "PostgreSQL 的核心原理："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "MVCC：每行版本带事务可见性信息，读写通过 snapshot 判断可见",
          "WAL：先写日志再写数据页，崩溃后通过重放恢复",
          "Cost Based Optimizer：基于统计信息估算扫描、连接、排序和聚合成本",
          "Buffer Manager：缓存数据页，减少磁盘读取",
          "VACUUM：清理不可见旧版本，防止表膨胀"
        ]
      },
      {
        "type": "paragraph",
        "text": "算法和数学直觉："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "B-Tree 适合等值和范围查询，GIN 适合倒排索引，BRIN 适合大表按物理顺序过滤",
          "查询优化是搜索问题，优化器在候选执行计划里选择估算成本最低的方案",
          "统计信息的直方图和相关性会影响行数估算，估错会导致错误 join 顺序",
          "MVCC 用版本链和可见性判断换取读写并发"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "常用命令"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "1. 连接和对象"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "psql -h localhost -U postgres\n\\l\n\\c app\n\\dt\n\\d+ orders"
      },
      {
        "type": "paragraph",
        "text": "这些元命令用于查看数据库、表和结构。`\\d+` 能看到列、索引、存储和统计信息摘要。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. 执行计划"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "explain analyze select * from orders where id = 1;\nexplain (analyze, buffers) select * from orders where user_id = 1001;"
      },
      {
        "type": "paragraph",
        "text": "`analyze` 执行真实 SQL 并返回耗时；`buffers` 看共享缓冲命中和读盘情况。慢 SQL 排查离不开这两个视角。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3. 活动和锁"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "select pid, state, wait_event_type, wait_event, query from pg_stat_activity;\nselect * from pg_locks where not granted;\nselect * from pg_stat_user_tables;"
      },
      {
        "type": "paragraph",
        "text": "`pg_stat_activity` 看当前会话和等待事件，`pg_locks` 看锁等待，`pg_stat_user_tables` 看扫描、更新和 vacuum 状态。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4. 维护和复制"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "vacuum analyze orders;\nselect * from pg_stat_replication;\nselect pg_current_wal_lsn();"
      },
      {
        "type": "paragraph",
        "text": "`vacuum analyze` 清理旧版本并更新统计信息；复制排障看 WAL 位点、延迟和从库回放状态。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "源码重点"
      },
      {
        "type": "paragraph",
        "text": "建议按一条查询的生命周期读："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "`src/backend/parser`：SQL 解析成语法树",
          "`src/backend/optimizer`：路径生成、成本估算、计划选择",
          "`src/backend/executor`：执行计划节点",
          "`src/backend/access/heap`：heap 表访问",
          "`src/backend/access/nbtree`：B-Tree 索引",
          "`src/backend/storage/buffer`：缓冲区管理",
          "`src/backend/access/transam`：事务、WAL 和提交"
        ]
      },
      {
        "type": "paragraph",
        "text": "源码阅读路线：从 `exec_simple_query` 追到 parse、plan、execute，再看一个 index scan 如何访问 heap tuple 并判断可见性。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "典型落地方案"
      },
      {
        "type": "paragraph",
        "text": "生产 PostgreSQL 方案要关注："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "所有服务通过连接池访问，避免连接风暴",
          "表按业务访问模式设计索引和分区",
          "慢查询定期看 `pg_stat_statements`",
          "长事务、锁等待、表膨胀和 autovacuum 必须监控",
          "WAL 归档、基础备份和恢复演练要定期验证",
          "主从复制用于读扩展和容灾，但强一致读要谨慎",
          "重要变更先在预发执行 `explain analyze`"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "查询优化模板"
      },
      {
        "type": "code",
        "language": "sql",
        "text": "create index idx_orders_user_created\non orders(user_id, created_at desc);\n\nexplain (analyze, buffers)\nselect id, status, created_at\nfrom orders\nwhere user_id = 1001\norder by created_at desc\nlimit 20;"
      },
      {
        "type": "paragraph",
        "text": "优化目标不是“建更多索引”，而是让高频查询少扫页、少排序、少回表，并保持写入成本可控。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10 道面试题"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "1. PostgreSQL 为什么适合核心业务？"
      },
      {
        "type": "paragraph",
        "text": "因为它有强事务能力、丰富 SQL、可靠 WAL 恢复和成熟扩展生态，能支撑一致性要求高且查询复杂的业务。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. MVCC 解决什么问题？"
      },
      {
        "type": "paragraph",
        "text": "MVCC 让读事务看到一致快照，减少读写互相阻塞，同时用行版本和可见性规则处理并发。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3. B-Tree 索引有什么优势？"
      },
      {
        "type": "paragraph",
        "text": "B-Tree 保持有序，树高低，适合等值、范围、排序和前缀匹配，是最通用的索引结构。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4. WAL 的作用是什么？"
      },
      {
        "type": "paragraph",
        "text": "WAL 先记录变更日志，再异步写数据页。崩溃后数据库可以重放 WAL，恢复到一致状态。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "5. EXPLAIN 里重点看什么？"
      },
      {
        "type": "paragraph",
        "text": "重点看扫描方式、行数估计、实际行数、join 顺序、排序聚合、buffer 命中和最耗时节点。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "6. 长事务为什么危险？"
      },
      {
        "type": "paragraph",
        "text": "长事务持有旧 snapshot，会阻止旧版本清理，导致表膨胀、vacuum 压力、锁等待和复制延迟。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "7. 主从复制如何工作？"
      },
      {
        "type": "paragraph",
        "text": "主库生成 WAL，从库接收并按顺序重放 WAL。物理复制保证从库数据页与主库变化保持一致。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8. VACUUM 为什么重要？"
      },
      {
        "type": "paragraph",
        "text": "它清理不可见旧版本，更新可见性信息，配合 analyze 更新统计信息，防止膨胀和执行计划恶化。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9. 事务隔离级别有什么差异？"
      },
      {
        "type": "paragraph",
        "text": "读已提交每条语句一个快照，可重复读整个事务一个快照，串行化提供更强一致性但冲突和重试成本更高。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "10. 如何定位慢 SQL？"
      },
      {
        "type": "paragraph",
        "text": "从 `pg_stat_statements` 找高耗时 SQL，用 `explain analyze buffers` 看计划、行数估计、索引、排序、join 和读盘情况。"
      }
    ],
    "rawMarkdown": "## 本质\n\nPostgreSQL 的本质是一个强调正确性、可扩展性和 SQL 表达力的事务数据库。它用 MVCC 管并发，用 WAL 管恢复，用优化器和执行器把声明式 SQL 变成物理执行计划。\n\n一句话理解：PostgreSQL 是数据库内核、查询引擎和扩展平台的组合。\n\n## 底层架构\n\nPostgreSQL 链路分成六层：\n\n1. 连接层：backend process 处理客户端会话\n2. SQL 层：parser、rewriter、planner/optimizer、executor\n3. 存储层：heap page、tuple、visibility、buffer manager\n4. 索引层：B-Tree、GIN、GiST、BRIN 等访问方法\n5. 事务层：MVCC、snapshot、lock、vacuum\n6. 恢复层：WAL、checkpoint、archive、replication\n\n### 架构图\n\n```text\nclient\n  |\nbackend process\n  |\nparser -> planner -> executor\n  |\nheap / index access methods\n  |\nbuffer manager\n  |\nWAL -> checkpoint -> replication\n```\n\n关键点：PostgreSQL 的每个连接通常对应一个 backend 进程，查询在 executor 中按照计划节点拉取数据。\n\n## 典型场景\n\n适合 PostgreSQL 的场景：\n\n- 核心交易、账户、权限、配置和元数据\n- 复杂查询、窗口函数、CTE 和报表分析\n- JSONB、全文检索、GIS、向量等扩展能力\n- 对一致性、恢复和数据正确性要求高的系统\n\n需要谨慎的场景：\n\n- 极高写入吞吐但缺少分区和归档策略\n- 大量短连接且没有连接池\n- 长事务频繁存在、vacuum 被长期拖住\n\n## 底层原理\n\nPostgreSQL 的核心原理：\n\n- MVCC：每行版本带事务可见性信息，读写通过 snapshot 判断可见\n- WAL：先写日志再写数据页，崩溃后通过重放恢复\n- Cost Based Optimizer：基于统计信息估算扫描、连接、排序和聚合成本\n- Buffer Manager：缓存数据页，减少磁盘读取\n- VACUUM：清理不可见旧版本，防止表膨胀\n\n算法和数学直觉：\n\n- B-Tree 适合等值和范围查询，GIN 适合倒排索引，BRIN 适合大表按物理顺序过滤\n- 查询优化是搜索问题，优化器在候选执行计划里选择估算成本最低的方案\n- 统计信息的直方图和相关性会影响行数估算，估错会导致错误 join 顺序\n- MVCC 用版本链和可见性判断换取读写并发\n\n## 常用命令\n\n### 1. 连接和对象\n\n```bash\npsql -h localhost -U postgres\n\\l\n\\c app\n\\dt\n\\d+ orders\n```\n\n这些元命令用于查看数据库、表和结构。`\\d+` 能看到列、索引、存储和统计信息摘要。\n\n### 2. 执行计划\n\n```bash\nexplain analyze select * from orders where id = 1;\nexplain (analyze, buffers) select * from orders where user_id = 1001;\n```\n\n`analyze` 执行真实 SQL 并返回耗时；`buffers` 看共享缓冲命中和读盘情况。慢 SQL 排查离不开这两个视角。\n\n### 3. 活动和锁\n\n```bash\nselect pid, state, wait_event_type, wait_event, query from pg_stat_activity;\nselect * from pg_locks where not granted;\nselect * from pg_stat_user_tables;\n```\n\n`pg_stat_activity` 看当前会话和等待事件，`pg_locks` 看锁等待，`pg_stat_user_tables` 看扫描、更新和 vacuum 状态。\n\n### 4. 维护和复制\n\n```bash\nvacuum analyze orders;\nselect * from pg_stat_replication;\nselect pg_current_wal_lsn();\n```\n\n`vacuum analyze` 清理旧版本并更新统计信息；复制排障看 WAL 位点、延迟和从库回放状态。\n\n## 源码重点\n\n建议按一条查询的生命周期读：\n\n- `src/backend/parser`：SQL 解析成语法树\n- `src/backend/optimizer`：路径生成、成本估算、计划选择\n- `src/backend/executor`：执行计划节点\n- `src/backend/access/heap`：heap 表访问\n- `src/backend/access/nbtree`：B-Tree 索引\n- `src/backend/storage/buffer`：缓冲区管理\n- `src/backend/access/transam`：事务、WAL 和提交\n\n源码阅读路线：从 `exec_simple_query` 追到 parse、plan、execute，再看一个 index scan 如何访问 heap tuple 并判断可见性。\n\n## 典型落地方案\n\n生产 PostgreSQL 方案要关注：\n\n- 所有服务通过连接池访问，避免连接风暴\n- 表按业务访问模式设计索引和分区\n- 慢查询定期看 `pg_stat_statements`\n- 长事务、锁等待、表膨胀和 autovacuum 必须监控\n- WAL 归档、基础备份和恢复演练要定期验证\n- 主从复制用于读扩展和容灾，但强一致读要谨慎\n- 重要变更先在预发执行 `explain analyze`\n\n### 查询优化模板\n\n```sql\ncreate index idx_orders_user_created\non orders(user_id, created_at desc);\n\nexplain (analyze, buffers)\nselect id, status, created_at\nfrom orders\nwhere user_id = 1001\norder by created_at desc\nlimit 20;\n```\n\n优化目标不是“建更多索引”，而是让高频查询少扫页、少排序、少回表，并保持写入成本可控。\n\n## 10 道面试题\n\n### 1. PostgreSQL 为什么适合核心业务？\n\n因为它有强事务能力、丰富 SQL、可靠 WAL 恢复和成熟扩展生态，能支撑一致性要求高且查询复杂的业务。\n\n### 2. MVCC 解决什么问题？\n\nMVCC 让读事务看到一致快照，减少读写互相阻塞，同时用行版本和可见性规则处理并发。\n\n### 3. B-Tree 索引有什么优势？\n\nB-Tree 保持有序，树高低，适合等值、范围、排序和前缀匹配，是最通用的索引结构。\n\n### 4. WAL 的作用是什么？\n\nWAL 先记录变更日志，再异步写数据页。崩溃后数据库可以重放 WAL，恢复到一致状态。\n\n### 5. EXPLAIN 里重点看什么？\n\n重点看扫描方式、行数估计、实际行数、join 顺序、排序聚合、buffer 命中和最耗时节点。\n\n### 6. 长事务为什么危险？\n\n长事务持有旧 snapshot，会阻止旧版本清理，导致表膨胀、vacuum 压力、锁等待和复制延迟。\n\n### 7. 主从复制如何工作？\n\n主库生成 WAL，从库接收并按顺序重放 WAL。物理复制保证从库数据页与主库变化保持一致。\n\n### 8. VACUUM 为什么重要？\n\n它清理不可见旧版本，更新可见性信息，配合 analyze 更新统计信息，防止膨胀和执行计划恶化。\n\n### 9. 事务隔离级别有什么差异？\n\n读已提交每条语句一个快照，可重复读整个事务一个快照，串行化提供更强一致性但冲突和重试成本更高。\n\n### 10. 如何定位慢 SQL？\n\n从 `pg_stat_statements` 找高耗时 SQL，用 `explain analyze buffers` 看计划、行数估计、索引、排序、join 和读盘情况。"
  },
  {
    "id": "rabbitmq",
    "title": "RabbitMQ",
    "domain": "Middleware",
    "summary": "面向路由和确认的消息中间件，适合可靠投递和复杂分发。",
    "essence": "RabbitMQ 本质是面向交换机、队列和确认语义的消息路由器。",
    "scenarios": "适合任务分发、业务事件、延迟处理、死信重试和复杂路由。",
    "sourceFocus": "rabbit_channel、rabbit_queue、rabbit_exchange、ack/requeue/dead-letter 路径。",
    "colors": [
      "#7f4d64",
      "#f1dfb8",
      "#0f7b78"
    ],
    "body": [
      "本质",
      "RabbitMQ",
      "的本质是一个带路由规则和确认语义的消息投递系统。Producer",
      "不直接把消息塞给",
      "Consumer，而是把消息发到",
      "Exchange，Exchange",
      "根据",
      "binding",
      "把消息路由到",
      "Queue，Consumer",
      "再通过",
      "ack/nack",
      "表达处理结果。",
      "它最擅长的不是极限吞吐，而是业务消息的可靠投递、复杂路由、失败重试和死信处理。",
      "底层架构",
      "RabbitMQ",
      "的链路可以拆成六层：",
      "连接层：TCP",
      "连接、AMQP",
      "协议、channel",
      "多路复用",
      "路由层：exchange",
      "根据",
      "direct、topic、fanout、headers",
      "匹配",
      "binding",
      "队列层：queue",
      "保存消息并管理消费者",
      "确认层：ack、nack、reject、requeue",
      "控制消息生命周期",
      "可靠性层：持久化、publisher",
      "confirm、镜像队列或",
      "quorum",
      "queue",
      "异常层：TTL、死信交换机、重试队列、告警和限流",
      "架构图",
      "producer",
      "|",
      "AMQP",
      "channel",
      "|",
      "exchange",
      "--",
      "binding",
      "key",
      "-->",
      "queue",
      "|",
      "consumer",
      "|",
      "ack",
      "/",
      "nack",
      "/",
      "requeue",
      "|",
      "dead",
      "letter",
      "exchange",
      "这张图的重点是：RabbitMQ",
      "的“智能”在",
      "broker",
      "侧，消息路由、确认和重试都由",
      "broker",
      "参与管理。",
      "典型场景",
      "适合",
      "RabbitMQ",
      "的场景：",
      "业务任务分发和异步处理",
      "订单、通知、邮件、审核等需要确认的消息",
      "topic/direct/fanout",
      "等复杂路由",
      "延迟处理、失败重试和死信兜底",
      "不适合的场景：",
      "超大规模日志流和埋点流",
      "需要长时间保留、反复回放的大数据管道",
      "消费顺序和吞吐都要求极高的事件流平台",
      "底层原理",
      "RabbitMQ",
      "的核心算法和语义：",
      "路由匹配：direct",
      "精确匹配，topic",
      "使用通配符模式匹配，fanout",
      "广播",
      "确认状态机：消息在",
      "ready、unacked、acked、dead-letter",
      "等状态之间流转",
      "prefetch",
      "背压：限制消费者未确认消息数，避免慢消费者被压垮",
      "至少一次投递：ack",
      "前异常会重新投递，所以消费端必须幂等",
      "死信转移：拒绝、过期或超过重试条件后进入",
      "DLX",
      "数学直觉主要在排队模型：当生产速率长期大于消费速率，队列长度会持续增长，最终表现为内存、磁盘、延迟和重试风暴。RabbitMQ",
      "调优不是只调参数，而是让到达率、服务率和失败率重新平衡。",
      "常用命令",
      "1.",
      "节点状态",
      "rabbitmqctl",
      "status",
      "rabbitmq-diagnostics",
      "check_running",
      "rabbitmq-diagnostics",
      "check_local_alarms",
      "这些命令用于确认节点是否运行、是否触发内存或磁盘告警。RabbitMQ",
      "一旦触发",
      "alarm，可能会阻塞生产者。",
      "2.",
      "查看队列和路由",
      "rabbitmqctl",
      "list_queues",
      "name",
      "messages",
      "messages_ready",
      "messages_unacknowledged",
      "consumers",
      "rabbitmqctl",
      "list_exchanges",
      "name",
      "type",
      "durable",
      "rabbitmqctl",
      "list_bindings",
      "source_name",
      "destination_name",
      "routing_key",
      "队列排障重点看",
      "ready、unacked",
      "和",
      "consumers。ready",
      "高说明积压，unacked",
      "高说明消费者拿了消息但处理慢或没",
      "ack。",
      "3.",
      "插件和管理台",
      "rabbitmq-plugins",
      "enable",
      "rabbitmq_management",
      "rabbitmqctl",
      "add_user",
      "admin",
      "strong-password",
      "rabbitmqctl",
      "set_user_tags",
      "admin",
      "administrator",
      "管理台适合看拓扑、积压和连接，但生产必须控制账号权限和公网暴露。",
      "4.",
      "策略和高可用",
      "rabbitmqctl",
      "set_policy",
      "ha-all",
      "\"^critical\\\\.\"",
      "'{\"ha-mode\":\"all\"}'",
      "rabbitmqctl",
      "list_policies",
      "现代版本更推荐",
      "quorum",
      "queue",
      "承担强可靠队列。老式镜像队列要谨慎使用，避免集群抖动时放大同步成本。",
      "源码重点",
      "RabbitMQ",
      "使用",
      "Erlang，建议按",
      "AMQP",
      "生命周期读：",
      "`rabbit_channel`：channel",
      "如何处理",
      "basic.publish、basic.consume、ack",
      "`rabbit_exchange`：exchange",
      "声明、绑定和路由分发",
      "`rabbit_queue`：队列进出、消费者管理和投递",
      "`rabbit_amqqueue_process`：队列进程状态机",
      "`rabbit_dead_letter`：死信转发路径",
      "quorum",
      "相关模块：Raft",
      "思想下的复制队列",
      "源码阅读路线：从",
      "basic.publish",
      "进入",
      "channel，追",
      "exchange",
      "route",
      "到",
      "queue，再追",
      "basic.deliver",
      "和",
      "basic.ack。",
      "典型落地方案",
      "可靠业务消息方案：",
      "Producer",
      "使用",
      "publisher",
      "confirm，确认",
      "broker",
      "收到消息",
      "Exchange、Queue、Message",
      "都使用持久化配置",
      "Consumer",
      "手动",
      "ack，业务处理成功后再确认",
      "设置",
      "prefetch，防止单消费者拿太多未确认消息",
      "失败消息进入重试队列，多次失败后进入死信队列",
      "消费端用业务唯一键保证幂等",
      "监控",
      "ready、unacked、deliver",
      "rate、ack",
      "rate、redeliver",
      "rate",
      "重试和死信模板",
      "business",
      "exchange",
      "|",
      "business",
      "queue",
      "|",
      "consumer",
      "fails",
      "|",
      "retry",
      "queue",
      "with",
      "ttl",
      "|",
      "dead",
      "letter",
      "back",
      "to",
      "business",
      "exchange",
      "|",
      "too",
      "many",
      "retries",
      "->",
      "final",
      "dead",
      "queue",
      "10",
      "道面试题",
      "1.",
      "RabbitMQ",
      "和",
      "Kafka",
      "有什么差异？",
      "RabbitMQ",
      "强调路由、确认、重试和投递语义；Kafka",
      "强调高吞吐、日志存储和消息回放。前者像业务消息路由器，后者像事件日志平台。",
      "2.",
      "exchange",
      "的几种类型是什么？",
      "direct",
      "按",
      "routing",
      "key",
      "精确匹配，topic",
      "按通配符匹配，fanout",
      "广播到所有绑定队列，headers",
      "根据消息头匹配。",
      "3.",
      "ack",
      "为什么重要？",
      "ack",
      "是消费者告诉",
      "broker",
      "消息已成功处理的信号。没有",
      "ack，消息不会被安全移除，异常时会重新投递。",
      "4.",
      "什么是死信队列？",
      "消息被拒绝、过期、队列满或超过重试策略后，会被转发到死信交换机绑定的队列，用于后续补偿或人工处理。",
      "5.",
      "prefetch",
      "是什么？",
      "prefetch",
      "限制单个消费者未确认消息数量，是消费者侧背压机制。它防止慢消费者一次拿太多消息。",
      "6.",
      "如何保证消费者幂等？",
      "使用业务唯一",
      "ID、去重表、唯一索引或状态机判断，确保同一消息重复投递也不会重复扣款、发货或发通知。",
      "7.",
      "延迟消息怎么实现？",
      "常见方案是",
      "TTL",
      "加死信交换机，或使用延迟消息插件。核心是让消息先停留一段时间，再路由到业务队列。",
      "8.",
      "为什么会重复消费？",
      "至少一次投递语义下，消费者处理成功但",
      "ack",
      "前宕机，或网络导致",
      "ack",
      "丢失，broker",
      "会重新投递。",
      "9.",
      "requeue",
      "有什么风险？",
      "毒消息会反复回到队列并被再次消费，形成重试风暴。应限制重试次数，最终进入死信队列。",
      "10.",
      "RabbitMQ",
      "线上积压怎么处理？",
      "先看",
      "ready、unacked",
      "和消费速率，再扩消费者、降低处理耗时、限制重试风暴、隔离毒消息，并检查是否触发磁盘或内存",
      "alarm。"
    ],
    "bodyBlocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "本质"
      },
      {
        "type": "paragraph",
        "text": "RabbitMQ 的本质是一个带路由规则和确认语义的消息投递系统。Producer 不直接把消息塞给 Consumer，而是把消息发到 Exchange，Exchange 根据 binding 把消息路由到 Queue，Consumer 再通过 ack/nack 表达处理结果。"
      },
      {
        "type": "paragraph",
        "text": "它最擅长的不是极限吞吐，而是业务消息的可靠投递、复杂路由、失败重试和死信处理。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层架构"
      },
      {
        "type": "paragraph",
        "text": "RabbitMQ 的链路可以拆成六层："
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "连接层：TCP 连接、AMQP 协议、channel 多路复用",
          "路由层：exchange 根据 direct、topic、fanout、headers 匹配 binding",
          "队列层：queue 保存消息并管理消费者",
          "确认层：ack、nack、reject、requeue 控制消息生命周期",
          "可靠性层：持久化、publisher confirm、镜像队列或 quorum queue",
          "异常层：TTL、死信交换机、重试队列、告警和限流"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "架构图"
      },
      {
        "type": "code",
        "language": "text",
        "text": "producer\n  |\nAMQP channel\n  |\nexchange -- binding key --> queue\n  |\nconsumer\n  |\nack / nack / requeue\n  |\ndead letter exchange"
      },
      {
        "type": "paragraph",
        "text": "这张图的重点是：RabbitMQ 的“智能”在 broker 侧，消息路由、确认和重试都由 broker 参与管理。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "典型场景"
      },
      {
        "type": "paragraph",
        "text": "适合 RabbitMQ 的场景："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "业务任务分发和异步处理",
          "订单、通知、邮件、审核等需要确认的消息",
          "topic/direct/fanout 等复杂路由",
          "延迟处理、失败重试和死信兜底"
        ]
      },
      {
        "type": "paragraph",
        "text": "不适合的场景："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "超大规模日志流和埋点流",
          "需要长时间保留、反复回放的大数据管道",
          "消费顺序和吞吐都要求极高的事件流平台"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层原理"
      },
      {
        "type": "paragraph",
        "text": "RabbitMQ 的核心算法和语义："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "路由匹配：direct 精确匹配，topic 使用通配符模式匹配，fanout 广播",
          "确认状态机：消息在 ready、unacked、acked、dead-letter 等状态之间流转",
          "prefetch 背压：限制消费者未确认消息数，避免慢消费者被压垮",
          "至少一次投递：ack 前异常会重新投递，所以消费端必须幂等",
          "死信转移：拒绝、过期或超过重试条件后进入 DLX"
        ]
      },
      {
        "type": "paragraph",
        "text": "数学直觉主要在排队模型：当生产速率长期大于消费速率，队列长度会持续增长，最终表现为内存、磁盘、延迟和重试风暴。RabbitMQ 调优不是只调参数，而是让到达率、服务率和失败率重新平衡。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "常用命令"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "1. 节点状态"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "rabbitmqctl status\nrabbitmq-diagnostics check_running\nrabbitmq-diagnostics check_local_alarms"
      },
      {
        "type": "paragraph",
        "text": "这些命令用于确认节点是否运行、是否触发内存或磁盘告警。RabbitMQ 一旦触发 alarm，可能会阻塞生产者。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. 查看队列和路由"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "rabbitmqctl list_queues name messages messages_ready messages_unacknowledged consumers\nrabbitmqctl list_exchanges name type durable\nrabbitmqctl list_bindings source_name destination_name routing_key"
      },
      {
        "type": "paragraph",
        "text": "队列排障重点看 ready、unacked 和 consumers。ready 高说明积压，unacked 高说明消费者拿了消息但处理慢或没 ack。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3. 插件和管理台"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "rabbitmq-plugins enable rabbitmq_management\nrabbitmqctl add_user admin strong-password\nrabbitmqctl set_user_tags admin administrator"
      },
      {
        "type": "paragraph",
        "text": "管理台适合看拓扑、积压和连接，但生产必须控制账号权限和公网暴露。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4. 策略和高可用"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "rabbitmqctl set_policy ha-all \"^critical\\\\.\" '{\"ha-mode\":\"all\"}'\nrabbitmqctl list_policies"
      },
      {
        "type": "paragraph",
        "text": "现代版本更推荐 quorum queue 承担强可靠队列。老式镜像队列要谨慎使用，避免集群抖动时放大同步成本。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "源码重点"
      },
      {
        "type": "paragraph",
        "text": "RabbitMQ 使用 Erlang，建议按 AMQP 生命周期读："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "`rabbit_channel`：channel 如何处理 basic.publish、basic.consume、ack",
          "`rabbit_exchange`：exchange 声明、绑定和路由分发",
          "`rabbit_queue`：队列进出、消费者管理和投递",
          "`rabbit_amqqueue_process`：队列进程状态机",
          "`rabbit_dead_letter`：死信转发路径",
          "quorum 相关模块：Raft 思想下的复制队列"
        ]
      },
      {
        "type": "paragraph",
        "text": "源码阅读路线：从 basic.publish 进入 channel，追 exchange route 到 queue，再追 basic.deliver 和 basic.ack。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "典型落地方案"
      },
      {
        "type": "paragraph",
        "text": "可靠业务消息方案："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Producer 使用 publisher confirm，确认 broker 收到消息",
          "Exchange、Queue、Message 都使用持久化配置",
          "Consumer 手动 ack，业务处理成功后再确认",
          "设置 prefetch，防止单消费者拿太多未确认消息",
          "失败消息进入重试队列，多次失败后进入死信队列",
          "消费端用业务唯一键保证幂等",
          "监控 ready、unacked、deliver rate、ack rate、redeliver rate"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "重试和死信模板"
      },
      {
        "type": "code",
        "language": "text",
        "text": "business exchange\n  |\nbusiness queue\n  |\nconsumer fails\n  |\nretry queue with ttl\n  |\ndead letter back to business exchange\n  |\ntoo many retries -> final dead queue"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10 道面试题"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "1. RabbitMQ 和 Kafka 有什么差异？"
      },
      {
        "type": "paragraph",
        "text": "RabbitMQ 强调路由、确认、重试和投递语义；Kafka 强调高吞吐、日志存储和消息回放。前者像业务消息路由器，后者像事件日志平台。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. exchange 的几种类型是什么？"
      },
      {
        "type": "paragraph",
        "text": "direct 按 routing key 精确匹配，topic 按通配符匹配，fanout 广播到所有绑定队列，headers 根据消息头匹配。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3. ack 为什么重要？"
      },
      {
        "type": "paragraph",
        "text": "ack 是消费者告诉 broker 消息已成功处理的信号。没有 ack，消息不会被安全移除，异常时会重新投递。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4. 什么是死信队列？"
      },
      {
        "type": "paragraph",
        "text": "消息被拒绝、过期、队列满或超过重试策略后，会被转发到死信交换机绑定的队列，用于后续补偿或人工处理。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "5. prefetch 是什么？"
      },
      {
        "type": "paragraph",
        "text": "prefetch 限制单个消费者未确认消息数量，是消费者侧背压机制。它防止慢消费者一次拿太多消息。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "6. 如何保证消费者幂等？"
      },
      {
        "type": "paragraph",
        "text": "使用业务唯一 ID、去重表、唯一索引或状态机判断，确保同一消息重复投递也不会重复扣款、发货或发通知。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "7. 延迟消息怎么实现？"
      },
      {
        "type": "paragraph",
        "text": "常见方案是 TTL 加死信交换机，或使用延迟消息插件。核心是让消息先停留一段时间，再路由到业务队列。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8. 为什么会重复消费？"
      },
      {
        "type": "paragraph",
        "text": "至少一次投递语义下，消费者处理成功但 ack 前宕机，或网络导致 ack 丢失，broker 会重新投递。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9. requeue 有什么风险？"
      },
      {
        "type": "paragraph",
        "text": "毒消息会反复回到队列并被再次消费，形成重试风暴。应限制重试次数，最终进入死信队列。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "10. RabbitMQ 线上积压怎么处理？"
      },
      {
        "type": "paragraph",
        "text": "先看 ready、unacked 和消费速率，再扩消费者、降低处理耗时、限制重试风暴、隔离毒消息，并检查是否触发磁盘或内存 alarm。"
      }
    ],
    "rawMarkdown": "## 本质\n\nRabbitMQ 的本质是一个带路由规则和确认语义的消息投递系统。Producer 不直接把消息塞给 Consumer，而是把消息发到 Exchange，Exchange 根据 binding 把消息路由到 Queue，Consumer 再通过 ack/nack 表达处理结果。\n\n它最擅长的不是极限吞吐，而是业务消息的可靠投递、复杂路由、失败重试和死信处理。\n\n## 底层架构\n\nRabbitMQ 的链路可以拆成六层：\n\n1. 连接层：TCP 连接、AMQP 协议、channel 多路复用\n2. 路由层：exchange 根据 direct、topic、fanout、headers 匹配 binding\n3. 队列层：queue 保存消息并管理消费者\n4. 确认层：ack、nack、reject、requeue 控制消息生命周期\n5. 可靠性层：持久化、publisher confirm、镜像队列或 quorum queue\n6. 异常层：TTL、死信交换机、重试队列、告警和限流\n\n### 架构图\n\n```text\nproducer\n  |\nAMQP channel\n  |\nexchange -- binding key --> queue\n  |\nconsumer\n  |\nack / nack / requeue\n  |\ndead letter exchange\n```\n\n这张图的重点是：RabbitMQ 的“智能”在 broker 侧，消息路由、确认和重试都由 broker 参与管理。\n\n## 典型场景\n\n适合 RabbitMQ 的场景：\n\n- 业务任务分发和异步处理\n- 订单、通知、邮件、审核等需要确认的消息\n- topic/direct/fanout 等复杂路由\n- 延迟处理、失败重试和死信兜底\n\n不适合的场景：\n\n- 超大规模日志流和埋点流\n- 需要长时间保留、反复回放的大数据管道\n- 消费顺序和吞吐都要求极高的事件流平台\n\n## 底层原理\n\nRabbitMQ 的核心算法和语义：\n\n- 路由匹配：direct 精确匹配，topic 使用通配符模式匹配，fanout 广播\n- 确认状态机：消息在 ready、unacked、acked、dead-letter 等状态之间流转\n- prefetch 背压：限制消费者未确认消息数，避免慢消费者被压垮\n- 至少一次投递：ack 前异常会重新投递，所以消费端必须幂等\n- 死信转移：拒绝、过期或超过重试条件后进入 DLX\n\n数学直觉主要在排队模型：当生产速率长期大于消费速率，队列长度会持续增长，最终表现为内存、磁盘、延迟和重试风暴。RabbitMQ 调优不是只调参数，而是让到达率、服务率和失败率重新平衡。\n\n## 常用命令\n\n### 1. 节点状态\n\n```bash\nrabbitmqctl status\nrabbitmq-diagnostics check_running\nrabbitmq-diagnostics check_local_alarms\n```\n\n这些命令用于确认节点是否运行、是否触发内存或磁盘告警。RabbitMQ 一旦触发 alarm，可能会阻塞生产者。\n\n### 2. 查看队列和路由\n\n```bash\nrabbitmqctl list_queues name messages messages_ready messages_unacknowledged consumers\nrabbitmqctl list_exchanges name type durable\nrabbitmqctl list_bindings source_name destination_name routing_key\n```\n\n队列排障重点看 ready、unacked 和 consumers。ready 高说明积压，unacked 高说明消费者拿了消息但处理慢或没 ack。\n\n### 3. 插件和管理台\n\n```bash\nrabbitmq-plugins enable rabbitmq_management\nrabbitmqctl add_user admin strong-password\nrabbitmqctl set_user_tags admin administrator\n```\n\n管理台适合看拓扑、积压和连接，但生产必须控制账号权限和公网暴露。\n\n### 4. 策略和高可用\n\n```bash\nrabbitmqctl set_policy ha-all \"^critical\\\\.\" '{\"ha-mode\":\"all\"}'\nrabbitmqctl list_policies\n```\n\n现代版本更推荐 quorum queue 承担强可靠队列。老式镜像队列要谨慎使用，避免集群抖动时放大同步成本。\n\n## 源码重点\n\nRabbitMQ 使用 Erlang，建议按 AMQP 生命周期读：\n\n- `rabbit_channel`：channel 如何处理 basic.publish、basic.consume、ack\n- `rabbit_exchange`：exchange 声明、绑定和路由分发\n- `rabbit_queue`：队列进出、消费者管理和投递\n- `rabbit_amqqueue_process`：队列进程状态机\n- `rabbit_dead_letter`：死信转发路径\n- quorum 相关模块：Raft 思想下的复制队列\n\n源码阅读路线：从 basic.publish 进入 channel，追 exchange route 到 queue，再追 basic.deliver 和 basic.ack。\n\n## 典型落地方案\n\n可靠业务消息方案：\n\n- Producer 使用 publisher confirm，确认 broker 收到消息\n- Exchange、Queue、Message 都使用持久化配置\n- Consumer 手动 ack，业务处理成功后再确认\n- 设置 prefetch，防止单消费者拿太多未确认消息\n- 失败消息进入重试队列，多次失败后进入死信队列\n- 消费端用业务唯一键保证幂等\n- 监控 ready、unacked、deliver rate、ack rate、redeliver rate\n\n### 重试和死信模板\n\n```text\nbusiness exchange\n  |\nbusiness queue\n  |\nconsumer fails\n  |\nretry queue with ttl\n  |\ndead letter back to business exchange\n  |\ntoo many retries -> final dead queue\n```\n\n## 10 道面试题\n\n### 1. RabbitMQ 和 Kafka 有什么差异？\n\nRabbitMQ 强调路由、确认、重试和投递语义；Kafka 强调高吞吐、日志存储和消息回放。前者像业务消息路由器，后者像事件日志平台。\n\n### 2. exchange 的几种类型是什么？\n\ndirect 按 routing key 精确匹配，topic 按通配符匹配，fanout 广播到所有绑定队列，headers 根据消息头匹配。\n\n### 3. ack 为什么重要？\n\nack 是消费者告诉 broker 消息已成功处理的信号。没有 ack，消息不会被安全移除，异常时会重新投递。\n\n### 4. 什么是死信队列？\n\n消息被拒绝、过期、队列满或超过重试策略后，会被转发到死信交换机绑定的队列，用于后续补偿或人工处理。\n\n### 5. prefetch 是什么？\n\nprefetch 限制单个消费者未确认消息数量，是消费者侧背压机制。它防止慢消费者一次拿太多消息。\n\n### 6. 如何保证消费者幂等？\n\n使用业务唯一 ID、去重表、唯一索引或状态机判断，确保同一消息重复投递也不会重复扣款、发货或发通知。\n\n### 7. 延迟消息怎么实现？\n\n常见方案是 TTL 加死信交换机，或使用延迟消息插件。核心是让消息先停留一段时间，再路由到业务队列。\n\n### 8. 为什么会重复消费？\n\n至少一次投递语义下，消费者处理成功但 ack 前宕机，或网络导致 ack 丢失，broker 会重新投递。\n\n### 9. requeue 有什么风险？\n\n毒消息会反复回到队列并被再次消费，形成重试风暴。应限制重试次数，最终进入死信队列。\n\n### 10. RabbitMQ 线上积压怎么处理？\n\n先看 ready、unacked 和消费速率，再扩消费者、降低处理耗时、限制重试风暴、隔离毒消息，并检查是否触发磁盘或内存 alarm。"
  },
  {
    "id": "redis",
    "title": "Redis",
    "domain": "Middleware",
    "summary": "内存数据结构数据库，常用作缓存、计数器、锁和轻量消息能力。",
    "essence": "Redis 本质是把高频数据放到内存，并用多种数据结构和过期策略管理访问压力。",
    "scenarios": "适合热点缓存、排行榜、分布式锁、会话、限流和轻量队列。",
    "sourceFocus": "server.c、dict.c、t_string.c、expire.c、evict.c、networking.c。",
    "colors": [
      "#de6449",
      "#f1dfb8",
      "#7f4d64"
    ],
    "body": [
      "本质",
      "Redis",
      "的本质不是“更快的数据库”，而是一个以内存、事件循环和紧凑数据结构为核心的高频访问层。它把数据库无法承受或没必要承受的读写压力前移到内存，并用过期、淘汰、复制和持久化控制风险。",
      "一句话理解：Redis",
      "牺牲一部分存储容量和复杂查询能力，换取极低延迟、高",
      "QPS",
      "和丰富的原子数据结构。",
      "底层架构",
      "Redis",
      "的核心链路分成五层：",
      "网络层：I/O",
      "多路复用接收连接和命令",
      "命令层：解析",
      "RESP",
      "协议，查找命令表并执行",
      "数据层：dict、sds、skiplist、quicklist、listpack",
      "等结构保存对象",
      "生命周期层：过期删除、内存淘汰、慢日志、监控",
      "可靠性层：RDB、AOF、复制、哨兵或",
      "Cluster",
      "架构图",
      "client",
      "|",
      "RESP",
      "protocol",
      "|",
      "event",
      "loop",
      "+",
      "command",
      "table",
      "|",
      "dict",
      "->",
      "redis",
      "object",
      "->",
      "encoding",
      "|",
      "expire",
      "/",
      "eviction",
      "/",
      "persistence",
      "|",
      "replication",
      "/",
      "sentinel",
      "/",
      "cluster",
      "要抓住这个图的关键：Redis",
      "的快来自“内存访问",
      "+",
      "少锁模型",
      "+",
      "精心选择的数据结构”，而不是简单因为它单线程。",
      "典型场景",
      "适合",
      "Redis",
      "的场景：",
      "热点缓存和缓存旁路",
      "分布式锁、限流、计数器",
      "排行榜、时间窗口统计、会话存储",
      "轻量队列、Stream、延迟不高的事件缓冲",
      "需要谨慎的场景：",
      "强一致事务事实源",
      "大对象和无边界",
      "key",
      "设计",
      "没有过期、淘汰和降级策略的核心链路缓存",
      "底层原理",
      "Redis",
      "的核心算法和数学直觉：",
      "哈希表：平均",
      "O(1)",
      "查找，渐进式",
      "rehash",
      "避免一次性搬迁阻塞",
      "跳表：用多层随机索引近似平衡树，支持有序集合范围查询",
      "LRU/LFU：用近似统计估计最近访问或访问频率，降低全量维护成本",
      "过期采样：主动过期不是扫描全库，而是抽样检查，平衡",
      "CPU",
      "和内存回收",
      "单线程命令执行：避免共享状态锁竞争，让每条命令天然具备原子性",
      "Redis",
      "的工程取舍是：把复杂性放进数据结构和事件循环，而不是放进线程锁。",
      "常用命令",
      "1.",
      "基础读写和过期",
      "redis-cli",
      "ping",
      "redis-cli",
      "set",
      "user:1",
      "'{\"name\":\"yc\"}'",
      "ex",
      "3600",
      "redis-cli",
      "get",
      "user:1",
      "redis-cli",
      "ttl",
      "user:1",
      "redis-cli",
      "del",
      "user:1",
      "`ex`",
      "设置秒级过期，`ttl`",
      "看剩余生命周期。缓存",
      "key",
      "必须有明确过期策略，否则会把内存变成不可控成本。",
      "2.",
      "运行状态和内存",
      "redis-cli",
      "info",
      "memory",
      "redis-cli",
      "info",
      "stats",
      "redis-cli",
      "dbsize",
      "redis-cli",
      "slowlog",
      "get",
      "10",
      "redis-cli",
      "latency",
      "latest",
      "`info",
      "memory`",
      "看",
      "used_memory、碎片率和淘汰情况；`slowlog`",
      "看慢命令；`latency`",
      "看是否有",
      "fork、AOF、网络或大",
      "key",
      "引发的抖动。",
      "3.",
      "Key",
      "排查",
      "redis-cli",
      "scan",
      "0",
      "match",
      "\"user:*\"",
      "count",
      "100",
      "redis-cli",
      "type",
      "user:1",
      "redis-cli",
      "object",
      "encoding",
      "user:1",
      "redis-cli",
      "memory",
      "usage",
      "user:1",
      "生产不要用",
      "`keys",
      "*`",
      "扫全库。`scan`",
      "是增量游标，适合低风险扫描；`object",
      "encoding`",
      "可以看底层编码，帮助判断内存膨胀原因。",
      "4.",
      "原子脚本",
      "redis-cli",
      "eval",
      "\"if",
      "redis.call('get',",
      "KEYS[1])",
      "==",
      "ARGV[1]",
      "then",
      "return",
      "redis.call('del',",
      "KEYS[1])",
      "else",
      "return",
      "0",
      "end\"",
      "1",
      "lock:order",
      "123",
      "Lua",
      "脚本在",
      "Redis",
      "内原子执行，常用于释放锁、计数限流和多",
      "key",
      "条件更新。",
      "源码重点",
      "建议按命令执行路径读源码：",
      "`server.c`：初始化、事件循环、命令调度",
      "`networking.c`：连接、读写缓冲和协议解析",
      "`dict.c`：哈希表、rehash",
      "和",
      "key",
      "空间",
      "`object.c`：对象类型、编码和引用计数",
      "`expire.c`：过期字典、惰性删除、主动过期",
      "`evict.c`：内存淘汰策略",
      "`t_string.c`、`t_zset.c`、`t_stream.c`：具体数据类型实现",
      "源码阅读路线：从",
      "`SET`",
      "命令进入命令表，追到对象创建、dict",
      "写入、过期设置、AOF",
      "追加和复制传播。",
      "典型落地方案",
      "Redis",
      "作为缓存层时，数据库仍然是事实源：",
      "读流程：先读",
      "Redis，未命中再读数据库，然后回填缓存",
      "写流程：先写数据库，再删除或更新缓存",
      "热点",
      "key：预热、拆分、限流和本地缓存兜底",
      "大",
      "key：限制",
      "value",
      "大小，拆分结构，监控",
      "`memory",
      "usage`",
      "高可用：主从复制加哨兵，或用",
      "Cluster",
      "做分片",
      "故障策略：缓存不可用时要有降级，不能让全部请求打爆数据库",
      "缓存旁路模板",
      "request",
      "|",
      "get",
      "cache",
      "|",
      "hit",
      "->",
      "return",
      "|",
      "miss",
      "->",
      "query",
      "database",
      "|",
      "set",
      "cache",
      "with",
      "ttl",
      "|",
      "return",
      "10",
      "道面试题",
      "1.",
      "Redis",
      "为什么快？",
      "主要因为数据在内存里，命令执行路径短，核心数据结构高效，并且单线程命令执行避免了大量锁竞争。",
      "2.",
      "Redis",
      "单线程为什么还能高性能？",
      "单线程主要指命令执行线程。网络",
      "I/O",
      "使用多路复用，命令通常很短，避免线程切换和锁竞争后吞吐反而更稳定。",
      "3.",
      "LRU",
      "和",
      "LFU",
      "的区别是什么？",
      "LRU",
      "关注最近是否访问，LFU",
      "关注访问频率。短期热点适合",
      "LRU，长期稳定热点更适合",
      "LFU。",
      "4.",
      "缓存穿透、击穿、雪崩分别是什么？",
      "穿透是查询不存在的数据，击穿是热点",
      "key",
      "失效后大量请求打到数据库，雪崩是大批",
      "key",
      "同时失效。对应方案是空值缓存、互斥重建和过期时间随机化。",
      "5.",
      "Redis",
      "过期键如何处理？",
      "同时使用惰性删除和主动过期。访问",
      "key",
      "时发现过期会删除，后台也会抽样扫描过期字典，避免全量扫描阻塞。",
      "6.",
      "AOF",
      "和",
      "RDB",
      "有什么差异？",
      "AOF",
      "记录写命令，恢复更细但文件可能更大；RDB",
      "是快照，恢复快但可能丢失快照后的写入。",
      "7.",
      "分布式锁如何避免误删？",
      "加锁时写唯一",
      "token，释放时用",
      "Lua",
      "校验",
      "token",
      "再删除。否则锁过期后可能误删其他客户端新获得的锁。",
      "8.",
      "什么是渐进式",
      "rehash？",
      "扩容时不一次性迁移整个哈希表，而是在后续命令中分批搬迁桶，避免单次请求卡住。",
      "9.",
      "Redis",
      "Cluster",
      "为什么使用哈希槽？",
      "哈希槽把",
      "key",
      "空间拆成固定数量区间，便于节点分片、迁移和扩容。它把路由问题从节点数量变化中解耦出来。",
      "10.",
      "Redis",
      "线上变慢怎么排查？",
      "先看慢日志、延迟事件、CPU、内存碎片、大",
      "key、连接数、持久化",
      "fork、AOF",
      "fsync",
      "和网络延迟，再结合命令分布确认是否有危险命令。"
    ],
    "bodyBlocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "本质"
      },
      {
        "type": "paragraph",
        "text": "Redis 的本质不是“更快的数据库”，而是一个以内存、事件循环和紧凑数据结构为核心的高频访问层。它把数据库无法承受或没必要承受的读写压力前移到内存，并用过期、淘汰、复制和持久化控制风险。"
      },
      {
        "type": "paragraph",
        "text": "一句话理解：Redis 牺牲一部分存储容量和复杂查询能力，换取极低延迟、高 QPS 和丰富的原子数据结构。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层架构"
      },
      {
        "type": "paragraph",
        "text": "Redis 的核心链路分成五层："
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "网络层：I/O 多路复用接收连接和命令",
          "命令层：解析 RESP 协议，查找命令表并执行",
          "数据层：dict、sds、skiplist、quicklist、listpack 等结构保存对象",
          "生命周期层：过期删除、内存淘汰、慢日志、监控",
          "可靠性层：RDB、AOF、复制、哨兵或 Cluster"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "架构图"
      },
      {
        "type": "code",
        "language": "text",
        "text": "client\n  |\nRESP protocol\n  |\nevent loop + command table\n  |\ndict -> redis object -> encoding\n  |\nexpire / eviction / persistence\n  |\nreplication / sentinel / cluster"
      },
      {
        "type": "paragraph",
        "text": "要抓住这个图的关键：Redis 的快来自“内存访问 + 少锁模型 + 精心选择的数据结构”，而不是简单因为它单线程。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "典型场景"
      },
      {
        "type": "paragraph",
        "text": "适合 Redis 的场景："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "热点缓存和缓存旁路",
          "分布式锁、限流、计数器",
          "排行榜、时间窗口统计、会话存储",
          "轻量队列、Stream、延迟不高的事件缓冲"
        ]
      },
      {
        "type": "paragraph",
        "text": "需要谨慎的场景："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "强一致事务事实源",
          "大对象和无边界 key 设计",
          "没有过期、淘汰和降级策略的核心链路缓存"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层原理"
      },
      {
        "type": "paragraph",
        "text": "Redis 的核心算法和数学直觉："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "哈希表：平均 O(1) 查找，渐进式 rehash 避免一次性搬迁阻塞",
          "跳表：用多层随机索引近似平衡树，支持有序集合范围查询",
          "LRU/LFU：用近似统计估计最近访问或访问频率，降低全量维护成本",
          "过期采样：主动过期不是扫描全库，而是抽样检查，平衡 CPU 和内存回收",
          "单线程命令执行：避免共享状态锁竞争，让每条命令天然具备原子性"
        ]
      },
      {
        "type": "paragraph",
        "text": "Redis 的工程取舍是：把复杂性放进数据结构和事件循环，而不是放进线程锁。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "常用命令"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "1. 基础读写和过期"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "redis-cli ping\nredis-cli set user:1 '{\"name\":\"yc\"}' ex 3600\nredis-cli get user:1\nredis-cli ttl user:1\nredis-cli del user:1"
      },
      {
        "type": "paragraph",
        "text": "`ex` 设置秒级过期，`ttl` 看剩余生命周期。缓存 key 必须有明确过期策略，否则会把内存变成不可控成本。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. 运行状态和内存"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "redis-cli info memory\nredis-cli info stats\nredis-cli dbsize\nredis-cli slowlog get 10\nredis-cli latency latest"
      },
      {
        "type": "paragraph",
        "text": "`info memory` 看 used_memory、碎片率和淘汰情况；`slowlog` 看慢命令；`latency` 看是否有 fork、AOF、网络或大 key 引发的抖动。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3. Key 排查"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "redis-cli scan 0 match \"user:*\" count 100\nredis-cli type user:1\nredis-cli object encoding user:1\nredis-cli memory usage user:1"
      },
      {
        "type": "paragraph",
        "text": "生产不要用 `keys *` 扫全库。`scan` 是增量游标，适合低风险扫描；`object encoding` 可以看底层编码，帮助判断内存膨胀原因。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4. 原子脚本"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "redis-cli eval \"if redis.call('get', KEYS[1]) == ARGV[1] then return redis.call('del', KEYS[1]) else return 0 end\" 1 lock:order 123"
      },
      {
        "type": "paragraph",
        "text": "Lua 脚本在 Redis 内原子执行，常用于释放锁、计数限流和多 key 条件更新。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "源码重点"
      },
      {
        "type": "paragraph",
        "text": "建议按命令执行路径读源码："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "`server.c`：初始化、事件循环、命令调度",
          "`networking.c`：连接、读写缓冲和协议解析",
          "`dict.c`：哈希表、rehash 和 key 空间",
          "`object.c`：对象类型、编码和引用计数",
          "`expire.c`：过期字典、惰性删除、主动过期",
          "`evict.c`：内存淘汰策略",
          "`t_string.c`、`t_zset.c`、`t_stream.c`：具体数据类型实现"
        ]
      },
      {
        "type": "paragraph",
        "text": "源码阅读路线：从 `SET` 命令进入命令表，追到对象创建、dict 写入、过期设置、AOF 追加和复制传播。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "典型落地方案"
      },
      {
        "type": "paragraph",
        "text": "Redis 作为缓存层时，数据库仍然是事实源："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "读流程：先读 Redis，未命中再读数据库，然后回填缓存",
          "写流程：先写数据库，再删除或更新缓存",
          "热点 key：预热、拆分、限流和本地缓存兜底",
          "大 key：限制 value 大小，拆分结构，监控 `memory usage`",
          "高可用：主从复制加哨兵，或用 Cluster 做分片",
          "故障策略：缓存不可用时要有降级，不能让全部请求打爆数据库"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "缓存旁路模板"
      },
      {
        "type": "code",
        "language": "text",
        "text": "request\n  |\nget cache\n  |\nhit -> return\n  |\nmiss -> query database\n  |\nset cache with ttl\n  |\nreturn"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10 道面试题"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "1. Redis 为什么快？"
      },
      {
        "type": "paragraph",
        "text": "主要因为数据在内存里，命令执行路径短，核心数据结构高效，并且单线程命令执行避免了大量锁竞争。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. Redis 单线程为什么还能高性能？"
      },
      {
        "type": "paragraph",
        "text": "单线程主要指命令执行线程。网络 I/O 使用多路复用，命令通常很短，避免线程切换和锁竞争后吞吐反而更稳定。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3. LRU 和 LFU 的区别是什么？"
      },
      {
        "type": "paragraph",
        "text": "LRU 关注最近是否访问，LFU 关注访问频率。短期热点适合 LRU，长期稳定热点更适合 LFU。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4. 缓存穿透、击穿、雪崩分别是什么？"
      },
      {
        "type": "paragraph",
        "text": "穿透是查询不存在的数据，击穿是热点 key 失效后大量请求打到数据库，雪崩是大批 key 同时失效。对应方案是空值缓存、互斥重建和过期时间随机化。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "5. Redis 过期键如何处理？"
      },
      {
        "type": "paragraph",
        "text": "同时使用惰性删除和主动过期。访问 key 时发现过期会删除，后台也会抽样扫描过期字典，避免全量扫描阻塞。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "6. AOF 和 RDB 有什么差异？"
      },
      {
        "type": "paragraph",
        "text": "AOF 记录写命令，恢复更细但文件可能更大；RDB 是快照，恢复快但可能丢失快照后的写入。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "7. 分布式锁如何避免误删？"
      },
      {
        "type": "paragraph",
        "text": "加锁时写唯一 token，释放时用 Lua 校验 token 再删除。否则锁过期后可能误删其他客户端新获得的锁。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8. 什么是渐进式 rehash？"
      },
      {
        "type": "paragraph",
        "text": "扩容时不一次性迁移整个哈希表，而是在后续命令中分批搬迁桶，避免单次请求卡住。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9. Redis Cluster 为什么使用哈希槽？"
      },
      {
        "type": "paragraph",
        "text": "哈希槽把 key 空间拆成固定数量区间，便于节点分片、迁移和扩容。它把路由问题从节点数量变化中解耦出来。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "10. Redis 线上变慢怎么排查？"
      },
      {
        "type": "paragraph",
        "text": "先看慢日志、延迟事件、CPU、内存碎片、大 key、连接数、持久化 fork、AOF fsync 和网络延迟，再结合命令分布确认是否有危险命令。"
      }
    ],
    "rawMarkdown": "## 本质\n\nRedis 的本质不是“更快的数据库”，而是一个以内存、事件循环和紧凑数据结构为核心的高频访问层。它把数据库无法承受或没必要承受的读写压力前移到内存，并用过期、淘汰、复制和持久化控制风险。\n\n一句话理解：Redis 牺牲一部分存储容量和复杂查询能力，换取极低延迟、高 QPS 和丰富的原子数据结构。\n\n## 底层架构\n\nRedis 的核心链路分成五层：\n\n1. 网络层：I/O 多路复用接收连接和命令\n2. 命令层：解析 RESP 协议，查找命令表并执行\n3. 数据层：dict、sds、skiplist、quicklist、listpack 等结构保存对象\n4. 生命周期层：过期删除、内存淘汰、慢日志、监控\n5. 可靠性层：RDB、AOF、复制、哨兵或 Cluster\n\n### 架构图\n\n```text\nclient\n  |\nRESP protocol\n  |\nevent loop + command table\n  |\ndict -> redis object -> encoding\n  |\nexpire / eviction / persistence\n  |\nreplication / sentinel / cluster\n```\n\n要抓住这个图的关键：Redis 的快来自“内存访问 + 少锁模型 + 精心选择的数据结构”，而不是简单因为它单线程。\n\n## 典型场景\n\n适合 Redis 的场景：\n\n- 热点缓存和缓存旁路\n- 分布式锁、限流、计数器\n- 排行榜、时间窗口统计、会话存储\n- 轻量队列、Stream、延迟不高的事件缓冲\n\n需要谨慎的场景：\n\n- 强一致事务事实源\n- 大对象和无边界 key 设计\n- 没有过期、淘汰和降级策略的核心链路缓存\n\n## 底层原理\n\nRedis 的核心算法和数学直觉：\n\n- 哈希表：平均 O(1) 查找，渐进式 rehash 避免一次性搬迁阻塞\n- 跳表：用多层随机索引近似平衡树，支持有序集合范围查询\n- LRU/LFU：用近似统计估计最近访问或访问频率，降低全量维护成本\n- 过期采样：主动过期不是扫描全库，而是抽样检查，平衡 CPU 和内存回收\n- 单线程命令执行：避免共享状态锁竞争，让每条命令天然具备原子性\n\nRedis 的工程取舍是：把复杂性放进数据结构和事件循环，而不是放进线程锁。\n\n## 常用命令\n\n### 1. 基础读写和过期\n\n```bash\nredis-cli ping\nredis-cli set user:1 '{\"name\":\"yc\"}' ex 3600\nredis-cli get user:1\nredis-cli ttl user:1\nredis-cli del user:1\n```\n\n`ex` 设置秒级过期，`ttl` 看剩余生命周期。缓存 key 必须有明确过期策略，否则会把内存变成不可控成本。\n\n### 2. 运行状态和内存\n\n```bash\nredis-cli info memory\nredis-cli info stats\nredis-cli dbsize\nredis-cli slowlog get 10\nredis-cli latency latest\n```\n\n`info memory` 看 used_memory、碎片率和淘汰情况；`slowlog` 看慢命令；`latency` 看是否有 fork、AOF、网络或大 key 引发的抖动。\n\n### 3. Key 排查\n\n```bash\nredis-cli scan 0 match \"user:*\" count 100\nredis-cli type user:1\nredis-cli object encoding user:1\nredis-cli memory usage user:1\n```\n\n生产不要用 `keys *` 扫全库。`scan` 是增量游标，适合低风险扫描；`object encoding` 可以看底层编码，帮助判断内存膨胀原因。\n\n### 4. 原子脚本\n\n```bash\nredis-cli eval \"if redis.call('get', KEYS[1]) == ARGV[1] then return redis.call('del', KEYS[1]) else return 0 end\" 1 lock:order 123\n```\n\nLua 脚本在 Redis 内原子执行，常用于释放锁、计数限流和多 key 条件更新。\n\n## 源码重点\n\n建议按命令执行路径读源码：\n\n- `server.c`：初始化、事件循环、命令调度\n- `networking.c`：连接、读写缓冲和协议解析\n- `dict.c`：哈希表、rehash 和 key 空间\n- `object.c`：对象类型、编码和引用计数\n- `expire.c`：过期字典、惰性删除、主动过期\n- `evict.c`：内存淘汰策略\n- `t_string.c`、`t_zset.c`、`t_stream.c`：具体数据类型实现\n\n源码阅读路线：从 `SET` 命令进入命令表，追到对象创建、dict 写入、过期设置、AOF 追加和复制传播。\n\n## 典型落地方案\n\nRedis 作为缓存层时，数据库仍然是事实源：\n\n- 读流程：先读 Redis，未命中再读数据库，然后回填缓存\n- 写流程：先写数据库，再删除或更新缓存\n- 热点 key：预热、拆分、限流和本地缓存兜底\n- 大 key：限制 value 大小，拆分结构，监控 `memory usage`\n- 高可用：主从复制加哨兵，或用 Cluster 做分片\n- 故障策略：缓存不可用时要有降级，不能让全部请求打爆数据库\n\n### 缓存旁路模板\n\n```text\nrequest\n  |\nget cache\n  |\nhit -> return\n  |\nmiss -> query database\n  |\nset cache with ttl\n  |\nreturn\n```\n\n## 10 道面试题\n\n### 1. Redis 为什么快？\n\n主要因为数据在内存里，命令执行路径短，核心数据结构高效，并且单线程命令执行避免了大量锁竞争。\n\n### 2. Redis 单线程为什么还能高性能？\n\n单线程主要指命令执行线程。网络 I/O 使用多路复用，命令通常很短，避免线程切换和锁竞争后吞吐反而更稳定。\n\n### 3. LRU 和 LFU 的区别是什么？\n\nLRU 关注最近是否访问，LFU 关注访问频率。短期热点适合 LRU，长期稳定热点更适合 LFU。\n\n### 4. 缓存穿透、击穿、雪崩分别是什么？\n\n穿透是查询不存在的数据，击穿是热点 key 失效后大量请求打到数据库，雪崩是大批 key 同时失效。对应方案是空值缓存、互斥重建和过期时间随机化。\n\n### 5. Redis 过期键如何处理？\n\n同时使用惰性删除和主动过期。访问 key 时发现过期会删除，后台也会抽样扫描过期字典，避免全量扫描阻塞。\n\n### 6. AOF 和 RDB 有什么差异？\n\nAOF 记录写命令，恢复更细但文件可能更大；RDB 是快照，恢复快但可能丢失快照后的写入。\n\n### 7. 分布式锁如何避免误删？\n\n加锁时写唯一 token，释放时用 Lua 校验 token 再删除。否则锁过期后可能误删其他客户端新获得的锁。\n\n### 8. 什么是渐进式 rehash？\n\n扩容时不一次性迁移整个哈希表，而是在后续命令中分批搬迁桶，避免单次请求卡住。\n\n### 9. Redis Cluster 为什么使用哈希槽？\n\n哈希槽把 key 空间拆成固定数量区间，便于节点分片、迁移和扩容。它把路由问题从节点数量变化中解耦出来。\n\n### 10. Redis 线上变慢怎么排查？\n\n先看慢日志、延迟事件、CPU、内存碎片、大 key、连接数、持久化 fork、AOF fsync 和网络延迟，再结合命令分布确认是否有危险命令。"
  }
];
