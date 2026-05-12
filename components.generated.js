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
      "不是“给运维加个大模型”，而是用数据建模、异常检测和自动化动作，把运维噪声降下来，把人从重复判断里解放出来。",
      "架构",
      "数据接入：日志、指标、trace、事件、工单。",
      "特征处理：窗口聚合、去噪、标准化。",
      "模型层：异常检测、聚类、分类、相关性分析。",
      "规则层：SLO、阈值、抑制、维护窗口。",
      "执行层：告警路由、自动化脚本、Runbook。",
      "底层原理",
      "AIOps",
      "的底层不是单一模型，而是一个“数据",
      "-",
      "特征",
      "-",
      "模型",
      "-",
      "规则",
      "-",
      "执行”的闭环。模型负责给出概率判断，规则负责约束误报和高风险动作，执行层负责把判断变成动作。",
      "一个可落地的",
      "AIOps",
      "系统一般会把数据按时间窗口切片，再做聚合特征：",
      "指标：均值、方差、斜率、峰值、P95/P99",
      "日志：错误率、模式频次、token",
      "级聚类",
      "事件：时间邻近性、标签相似度、拓扑关系",
      "trace：调用链异常、跨度延迟、错误传播路径",
      "模型层常见任务：",
      "异常检测：找出偏离正常分布的点",
      "告警聚类：把重复噪声收敛成事件簇",
      "根因排序：按拓扑和时序推测最可能故障源",
      "预测：基于趋势做容量和风险预警",
      "常用命令",
      "kubectl",
      "get",
      "events",
      "-A",
      "grep",
      "-R",
      "\"ERROR\"",
      "logs/",
      "promtool",
      "check",
      "rules",
      "alerts.yml",
      "python",
      "train.py",
      "--config",
      "config.yaml",
      "源码重点",
      "特征提取：窗口、统计量、时序",
      "异常检测：z-score、EWMA、Isolation",
      "Forest",
      "关联分析：图模型、规则匹配、聚类",
      "自动化：Runbook",
      "执行器和审批闭环",
      "典型落地方案",
      "告警先聚类，再去重，再关联根因。",
      "容量预测用于提前扩容。",
      "高风险动作要带审批和回滚。",
      "先从单个业务域做试点，只接入少量高价值告警。",
      "自动化动作必须支持",
      "dry-run、审批、回滚和审计。",
      "AIOps",
      "不替代监控，而是减少噪声并提高处置效率。",
      "和",
      "K8s、Prometheus、日志平台、工单系统联动，形成观测到执行闭环。",
      "对关键动作设置人工确认阈值，自动化只处理低风险、可逆动作。",
      "先从容量预测、告警聚类、相似事件合并这三类高收益场景落地。",
      "落地方案示意",
      "Prometheus",
      "/",
      "Logs",
      "/",
      "Trace",
      "/",
      "Events",
      "|",
      "feature",
      "pipeline",
      "|",
      "anomaly",
      "+",
      "clustering",
      "+",
      "RCA",
      "|",
      "rule",
      "engine",
      "/",
      "SLO",
      "guard",
      "|",
      "alert",
      "routing",
      "/",
      "runbook",
      "|",
      "automated",
      "fix",
      "/",
      "human",
      "approval",
      "10",
      "道面试题",
      "AIOps",
      "和传统监控有什么区别？",
      "告警降噪怎么做？",
      "异常检测有哪些常见方法？",
      "为什么需要特征窗口？",
      "怎么做根因分析？",
      "规则和模型怎么结合？",
      "预测性扩容怎么设计？",
      "如何避免自动化误伤？",
      "AIOps",
      "的数据源有哪些？",
      "大模型在",
      "AIOps",
      "里适合做什么？"
    ],
    "bodyBlocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "本质"
      },
      {
        "type": "paragraph",
        "text": "AIOps 不是“给运维加个大模型”，而是用数据建模、异常检测和自动化动作，把运维噪声降下来，把人从重复判断里解放出来。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "架构"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "数据接入：日志、指标、trace、事件、工单。",
          "特征处理：窗口聚合、去噪、标准化。",
          "模型层：异常检测、聚类、分类、相关性分析。",
          "规则层：SLO、阈值、抑制、维护窗口。",
          "执行层：告警路由、自动化脚本、Runbook。"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层原理"
      },
      {
        "type": "paragraph",
        "text": "AIOps 的底层不是单一模型，而是一个“数据 - 特征 - 模型 - 规则 - 执行”的闭环。模型负责给出概率判断，规则负责约束误报和高风险动作，执行层负责把判断变成动作。"
      },
      {
        "type": "paragraph",
        "text": "一个可落地的 AIOps 系统一般会把数据按时间窗口切片，再做聚合特征："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "指标：均值、方差、斜率、峰值、P95/P99",
          "日志：错误率、模式频次、token 级聚类",
          "事件：时间邻近性、标签相似度、拓扑关系",
          "trace：调用链异常、跨度延迟、错误传播路径"
        ]
      },
      {
        "type": "paragraph",
        "text": "模型层常见任务："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "异常检测：找出偏离正常分布的点",
          "告警聚类：把重复噪声收敛成事件簇",
          "根因排序：按拓扑和时序推测最可能故障源",
          "预测：基于趋势做容量和风险预警"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "常用命令"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "kubectl get events -A\ngrep -R \"ERROR\" logs/\npromtool check rules alerts.yml\npython train.py --config config.yaml"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "源码重点"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "特征提取：窗口、统计量、时序",
          "异常检测：z-score、EWMA、Isolation Forest",
          "关联分析：图模型、规则匹配、聚类",
          "自动化：Runbook 执行器和审批闭环"
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
          "告警先聚类，再去重，再关联根因。",
          "容量预测用于提前扩容。",
          "高风险动作要带审批和回滚。",
          "先从单个业务域做试点，只接入少量高价值告警。",
          "自动化动作必须支持 dry-run、审批、回滚和审计。",
          "AIOps 不替代监控，而是减少噪声并提高处置效率。",
          "和 K8s、Prometheus、日志平台、工单系统联动，形成观测到执行闭环。",
          "对关键动作设置人工确认阈值，自动化只处理低风险、可逆动作。",
          "先从容量预测、告警聚类、相似事件合并这三类高收益场景落地。"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "落地方案示意"
      },
      {
        "type": "code",
        "language": "text",
        "text": "Prometheus / Logs / Trace / Events\n            |\n        feature pipeline\n            |\n   anomaly + clustering + RCA\n            |\n     rule engine / SLO guard\n            |\n     alert routing / runbook\n            |\n   automated fix / human approval"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10 道面试题"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "AIOps 和传统监控有什么区别？",
          "告警降噪怎么做？",
          "异常检测有哪些常见方法？",
          "为什么需要特征窗口？",
          "怎么做根因分析？",
          "规则和模型怎么结合？",
          "预测性扩容怎么设计？",
          "如何避免自动化误伤？",
          "AIOps 的数据源有哪些？",
          "大模型在 AIOps 里适合做什么？"
        ]
      }
    ],
    "rawMarkdown": "## 本质\n\nAIOps 不是“给运维加个大模型”，而是用数据建模、异常检测和自动化动作，把运维噪声降下来，把人从重复判断里解放出来。\n\n## 架构\n\n1. 数据接入：日志、指标、trace、事件、工单。\n2. 特征处理：窗口聚合、去噪、标准化。\n3. 模型层：异常检测、聚类、分类、相关性分析。\n4. 规则层：SLO、阈值、抑制、维护窗口。\n5. 执行层：告警路由、自动化脚本、Runbook。\n\n## 底层原理\n\nAIOps 的底层不是单一模型，而是一个“数据 - 特征 - 模型 - 规则 - 执行”的闭环。模型负责给出概率判断，规则负责约束误报和高风险动作，执行层负责把判断变成动作。\n\n一个可落地的 AIOps 系统一般会把数据按时间窗口切片，再做聚合特征：\n\n- 指标：均值、方差、斜率、峰值、P95/P99\n- 日志：错误率、模式频次、token 级聚类\n- 事件：时间邻近性、标签相似度、拓扑关系\n- trace：调用链异常、跨度延迟、错误传播路径\n\n模型层常见任务：\n\n- 异常检测：找出偏离正常分布的点\n- 告警聚类：把重复噪声收敛成事件簇\n- 根因排序：按拓扑和时序推测最可能故障源\n- 预测：基于趋势做容量和风险预警\n\n## 常用命令\n\n```bash\nkubectl get events -A\ngrep -R \"ERROR\" logs/\npromtool check rules alerts.yml\npython train.py --config config.yaml\n```\n\n## 源码重点\n\n- 特征提取：窗口、统计量、时序\n- 异常检测：z-score、EWMA、Isolation Forest\n- 关联分析：图模型、规则匹配、聚类\n- 自动化：Runbook 执行器和审批闭环\n\n## 典型落地方案\n\n- 告警先聚类，再去重，再关联根因。\n- 容量预测用于提前扩容。\n- 高风险动作要带审批和回滚。\n- 先从单个业务域做试点，只接入少量高价值告警。\n- 自动化动作必须支持 dry-run、审批、回滚和审计。\n- AIOps 不替代监控，而是减少噪声并提高处置效率。\n- 和 K8s、Prometheus、日志平台、工单系统联动，形成观测到执行闭环。\n- 对关键动作设置人工确认阈值，自动化只处理低风险、可逆动作。\n- 先从容量预测、告警聚类、相似事件合并这三类高收益场景落地。\n\n## 落地方案示意\n\n```text\nPrometheus / Logs / Trace / Events\n            |\n        feature pipeline\n            |\n   anomaly + clustering + RCA\n            |\n     rule engine / SLO guard\n            |\n     alert routing / runbook\n            |\n   automated fix / human approval\n```\n\n## 10 道面试题\n\n1. AIOps 和传统监控有什么区别？\n2. 告警降噪怎么做？\n3. 异常检测有哪些常见方法？\n4. 为什么需要特征窗口？\n5. 怎么做根因分析？\n6. 规则和模型怎么结合？\n7. 预测性扩容怎么设计？\n8. 如何避免自动化误伤？\n9. AIOps 的数据源有哪些？\n10. 大模型在 AIOps 里适合做什么？"
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
      "是把交付流程标准化。它的价值不是自动化本身，而是可验证、可审计、可回滚。",
      "架构",
      "代码提交触发流水线。",
      "单元测试和静态检查先跑。",
      "构建镜像和制品。",
      "部署到测试/预发/生产。",
      "回滚与审批机制兜底。",
      "底层原理",
      "CI/CD",
      "的底层是“把每一次变更都变成可验证证据”。流水线不是单纯串命令，而是一个带状态机、缓存、门禁和回滚分支的控制系统。",
      "关键原则：",
      "一次构建产出一个唯一制品，制品必须可追溯",
      "先验证，再构建，再部署，再放量",
      "失败保留日志、制品和环境上下文",
      "生产发布必须能快速回滚",
      "权限、签名、审批和审计要贯穿全链路",
      "常用命令",
      "git",
      "status",
      "git",
      "commit",
      "-m",
      "\"...\"",
      "docker",
      "build",
      "-t",
      "app:ci",
      ".",
      "kubectl",
      "rollout",
      "status",
      "deploy/app",
      "kubectl",
      "rollout",
      "undo",
      "deploy/app",
      "源码重点",
      "pipeline",
      "orchestration：阶段、条件、并行、缓存",
      "artifact",
      "store：制品存储与版本",
      "deploy",
      "hooks：灰度、回滚、审批",
      "policy：权限、签名、门禁",
      "典型落地方案",
      "代码提交后自动跑测试和扫描。",
      "构建产物只从流水线发出，不手工上传。",
      "生产发布分阶段灰度并可一键回滚。",
      "和",
      "K8s",
      "结合时，流水线只做制品和发布，不做人肉",
      "SSH",
      "上机。",
      "镜像",
      "tag",
      "与",
      "commit",
      "SHA",
      "绑定，便于回滚和审计。",
      "重要环境通过审批门禁和变更窗口控制发布节奏。",
      "流水线要接入制品库、镜像仓库、扫描器、部署控制器和通知系统。",
      "发布结果要回写到工单、变更记录和审计日志。",
      "高风险环境引入手动批准或双人确认。",
      "落地方案示意",
      "git",
      "push",
      "|",
      "lint",
      "/",
      "test",
      "/",
      "scan",
      "|",
      "build",
      "artifact",
      "/",
      "image",
      "|",
      "deploy",
      "to",
      "dev",
      "->",
      "staging",
      "->",
      "prod",
      "|",
      "smoke",
      "test",
      "/",
      "canary",
      "|",
      "rollback",
      "if",
      "needed",
      "10",
      "道面试题",
      "CI",
      "和",
      "CD",
      "的区别是什么？",
      "为什么流水线要分阶段？",
      "如何设计制品库？",
      "为什么要做静态检查和安全扫描？",
      "灰度发布怎么做？",
      "回滚如何保证快速？",
      "如何控制流水线权限？",
      "失败后怎样保留证据？",
      "如何避免“流水线能过但线上失败”？",
      "CI/CD",
      "如何和",
      "K8s",
      "结合？"
    ],
    "bodyBlocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "本质"
      },
      {
        "type": "paragraph",
        "text": "CI/CD 是把交付流程标准化。它的价值不是自动化本身，而是可验证、可审计、可回滚。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "架构"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "代码提交触发流水线。",
          "单元测试和静态检查先跑。",
          "构建镜像和制品。",
          "部署到测试/预发/生产。",
          "回滚与审批机制兜底。"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层原理"
      },
      {
        "type": "paragraph",
        "text": "CI/CD 的底层是“把每一次变更都变成可验证证据”。流水线不是单纯串命令，而是一个带状态机、缓存、门禁和回滚分支的控制系统。"
      },
      {
        "type": "paragraph",
        "text": "关键原则："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "一次构建产出一个唯一制品，制品必须可追溯",
          "先验证，再构建，再部署，再放量",
          "失败保留日志、制品和环境上下文",
          "生产发布必须能快速回滚",
          "权限、签名、审批和审计要贯穿全链路"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "常用命令"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "git status\ngit commit -m \"...\"\ndocker build -t app:ci .\nkubectl rollout status deploy/app\nkubectl rollout undo deploy/app"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "源码重点"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "pipeline orchestration：阶段、条件、并行、缓存",
          "artifact store：制品存储与版本",
          "deploy hooks：灰度、回滚、审批",
          "policy：权限、签名、门禁"
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
          "代码提交后自动跑测试和扫描。",
          "构建产物只从流水线发出，不手工上传。",
          "生产发布分阶段灰度并可一键回滚。",
          "和 K8s 结合时，流水线只做制品和发布，不做人肉 SSH 上机。",
          "镜像 tag 与 commit SHA 绑定，便于回滚和审计。",
          "重要环境通过审批门禁和变更窗口控制发布节奏。",
          "流水线要接入制品库、镜像仓库、扫描器、部署控制器和通知系统。",
          "发布结果要回写到工单、变更记录和审计日志。",
          "高风险环境引入手动批准或双人确认。"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "落地方案示意"
      },
      {
        "type": "code",
        "language": "text",
        "text": "git push\n  |\nlint / test / scan\n  |\nbuild artifact / image\n  |\ndeploy to dev -> staging -> prod\n  |\nsmoke test / canary\n  |\nrollback if needed"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10 道面试题"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "CI 和 CD 的区别是什么？",
          "为什么流水线要分阶段？",
          "如何设计制品库？",
          "为什么要做静态检查和安全扫描？",
          "灰度发布怎么做？",
          "回滚如何保证快速？",
          "如何控制流水线权限？",
          "失败后怎样保留证据？",
          "如何避免“流水线能过但线上失败”？",
          "CI/CD 如何和 K8s 结合？"
        ]
      }
    ],
    "rawMarkdown": "## 本质\n\nCI/CD 是把交付流程标准化。它的价值不是自动化本身，而是可验证、可审计、可回滚。\n\n## 架构\n\n1. 代码提交触发流水线。\n2. 单元测试和静态检查先跑。\n3. 构建镜像和制品。\n4. 部署到测试/预发/生产。\n5. 回滚与审批机制兜底。\n\n## 底层原理\n\nCI/CD 的底层是“把每一次变更都变成可验证证据”。流水线不是单纯串命令，而是一个带状态机、缓存、门禁和回滚分支的控制系统。\n\n关键原则：\n\n- 一次构建产出一个唯一制品，制品必须可追溯\n- 先验证，再构建，再部署，再放量\n- 失败保留日志、制品和环境上下文\n- 生产发布必须能快速回滚\n- 权限、签名、审批和审计要贯穿全链路\n\n## 常用命令\n\n```bash\ngit status\ngit commit -m \"...\"\ndocker build -t app:ci .\nkubectl rollout status deploy/app\nkubectl rollout undo deploy/app\n```\n\n## 源码重点\n\n- pipeline orchestration：阶段、条件、并行、缓存\n- artifact store：制品存储与版本\n- deploy hooks：灰度、回滚、审批\n- policy：权限、签名、门禁\n\n## 典型落地方案\n\n- 代码提交后自动跑测试和扫描。\n- 构建产物只从流水线发出，不手工上传。\n- 生产发布分阶段灰度并可一键回滚。\n- 和 K8s 结合时，流水线只做制品和发布，不做人肉 SSH 上机。\n- 镜像 tag 与 commit SHA 绑定，便于回滚和审计。\n- 重要环境通过审批门禁和变更窗口控制发布节奏。\n- 流水线要接入制品库、镜像仓库、扫描器、部署控制器和通知系统。\n- 发布结果要回写到工单、变更记录和审计日志。\n- 高风险环境引入手动批准或双人确认。\n\n## 落地方案示意\n\n```text\ngit push\n  |\nlint / test / scan\n  |\nbuild artifact / image\n  |\ndeploy to dev -> staging -> prod\n  |\nsmoke test / canary\n  |\nrollback if needed\n```\n\n## 10 道面试题\n\n1. CI 和 CD 的区别是什么？\n2. 为什么流水线要分阶段？\n3. 如何设计制品库？\n4. 为什么要做静态检查和安全扫描？\n5. 灰度发布怎么做？\n6. 回滚如何保证快速？\n7. 如何控制流水线权限？\n8. 失败后怎样保留证据？\n9. 如何避免“流水线能过但线上失败”？\n10. CI/CD 如何和 K8s 结合？"
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
      "的本质不是“虚拟机”，而是一个围绕镜像、容器和",
      "registry",
      "的交付系统。它解决的是可复制性和环境漂移问题。",
      "架构",
      "Dockerfile",
      "生成镜像层。",
      "BuildKit",
      "负责构建和缓存。",
      "Registry",
      "存储",
      "manifest",
      "和",
      "layer。",
      "containerd/runc",
      "拉起",
      "OCI",
      "容器。",
      "Linux",
      "namespaces/cgroups",
      "提供隔离。",
      "底层原理",
      "Docker",
      "的核心是“内容寻址",
      "+",
      "分层复用",
      "+",
      "运行时隔离”。",
      "内容寻址：镜像",
      "layer",
      "用",
      "digest",
      "标识，避免重复传输。",
      "分层复用：共同基础层只存一份。",
      "写时复制：运行时只对修改发生复制。",
      "OCI",
      "标准：把镜像和运行时接口统一起来。",
      "常用命令",
      "docker",
      "build",
      "-t",
      "app:1.0",
      ".",
      "docker",
      "run",
      "--rm",
      "-p",
      "8080:8080",
      "app:1.0",
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
      "docker",
      "pull",
      "nginx:1.27",
      "docker",
      "tag",
      "app:1.0",
      "registry.example.com/app:1.0",
      "源码重点",
      "`moby/daemon`：容器生命周期管理",
      "`moby/builder`：构建流程",
      "`containerd`：容器运行与镜像管理",
      "`runc`：OCI",
      "runtime",
      "启动容器进程",
      "典型落地方案",
      "所有服务用多阶段",
      "Dockerfile。",
      "运行镜像只保留必要二进制和配置。",
      "使用不可变",
      "tag",
      "或",
      "digest",
      "发布。",
      "搭配扫描、签名和非",
      "root",
      "用户运行。",
      "10",
      "道面试题",
      "Docker",
      "和虚拟机的核心差异是什么？",
      "镜像分层为什么能加速构建？",
      "什么是",
      "copy-on-write？",
      "namespace",
      "和",
      "cgroup",
      "分别隔离什么？",
      "容器里为什么最好不要用",
      "root？",
      "ENTRYPOINT",
      "和",
      "CMD",
      "的区别是什么？",
      "为什么容器默认写入会落到容器层？",
      "`docker",
      "inspect`",
      "重点看什么？",
      "你如何设计一个可回滚的镜像发布流程？",
      "Docker",
      "镜像过大时你怎么排查？"
    ],
    "bodyBlocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "本质"
      },
      {
        "type": "paragraph",
        "text": "Docker 的本质不是“虚拟机”，而是一个围绕镜像、容器和 registry 的交付系统。它解决的是可复制性和环境漂移问题。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "架构"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "Dockerfile 生成镜像层。",
          "BuildKit 负责构建和缓存。",
          "Registry 存储 manifest 和 layer。",
          "containerd/runc 拉起 OCI 容器。",
          "Linux namespaces/cgroups 提供隔离。"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层原理"
      },
      {
        "type": "paragraph",
        "text": "Docker 的核心是“内容寻址 + 分层复用 + 运行时隔离”。"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "内容寻址：镜像 layer 用 digest 标识，避免重复传输。",
          "分层复用：共同基础层只存一份。",
          "写时复制：运行时只对修改发生复制。",
          "OCI 标准：把镜像和运行时接口统一起来。"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "常用命令"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "docker build -t app:1.0 .\ndocker run --rm -p 8080:8080 app:1.0\ndocker ps -a\ndocker logs -f <container>\ndocker exec -it <container> sh\ndocker inspect <container>\ndocker stats\ndocker images\ndocker pull nginx:1.27\ndocker tag app:1.0 registry.example.com/app:1.0"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "源码重点"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "`moby/daemon`：容器生命周期管理",
          "`moby/builder`：构建流程",
          "`containerd`：容器运行与镜像管理",
          "`runc`：OCI runtime 启动容器进程"
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
          "所有服务用多阶段 Dockerfile。",
          "运行镜像只保留必要二进制和配置。",
          "使用不可变 tag 或 digest 发布。",
          "搭配扫描、签名和非 root 用户运行。"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10 道面试题"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "Docker 和虚拟机的核心差异是什么？",
          "镜像分层为什么能加速构建？",
          "什么是 copy-on-write？",
          "namespace 和 cgroup 分别隔离什么？",
          "容器里为什么最好不要用 root？",
          "ENTRYPOINT 和 CMD 的区别是什么？",
          "为什么容器默认写入会落到容器层？",
          "`docker inspect` 重点看什么？",
          "你如何设计一个可回滚的镜像发布流程？",
          "Docker 镜像过大时你怎么排查？"
        ]
      }
    ],
    "rawMarkdown": "## 本质\n\nDocker 的本质不是“虚拟机”，而是一个围绕镜像、容器和 registry 的交付系统。它解决的是可复制性和环境漂移问题。\n\n## 架构\n\n1. Dockerfile 生成镜像层。\n2. BuildKit 负责构建和缓存。\n3. Registry 存储 manifest 和 layer。\n4. containerd/runc 拉起 OCI 容器。\n5. Linux namespaces/cgroups 提供隔离。\n\n## 底层原理\n\nDocker 的核心是“内容寻址 + 分层复用 + 运行时隔离”。\n\n- 内容寻址：镜像 layer 用 digest 标识，避免重复传输。\n- 分层复用：共同基础层只存一份。\n- 写时复制：运行时只对修改发生复制。\n- OCI 标准：把镜像和运行时接口统一起来。\n\n## 常用命令\n\n```bash\ndocker build -t app:1.0 .\ndocker run --rm -p 8080:8080 app:1.0\ndocker ps -a\ndocker logs -f <container>\ndocker exec -it <container> sh\ndocker inspect <container>\ndocker stats\ndocker images\ndocker pull nginx:1.27\ndocker tag app:1.0 registry.example.com/app:1.0\n```\n\n## 源码重点\n\n- `moby/daemon`：容器生命周期管理\n- `moby/builder`：构建流程\n- `containerd`：容器运行与镜像管理\n- `runc`：OCI runtime 启动容器进程\n\n## 典型落地方案\n\n- 所有服务用多阶段 Dockerfile。\n- 运行镜像只保留必要二进制和配置。\n- 使用不可变 tag 或 digest 发布。\n- 搭配扫描、签名和非 root 用户运行。\n\n## 10 道面试题\n\n1. Docker 和虚拟机的核心差异是什么？\n2. 镜像分层为什么能加速构建？\n3. 什么是 copy-on-write？\n4. namespace 和 cgroup 分别隔离什么？\n5. 容器里为什么最好不要用 root？\n6. ENTRYPOINT 和 CMD 的区别是什么？\n7. 为什么容器默认写入会落到容器层？\n8. `docker inspect` 重点看什么？\n9. 你如何设计一个可回滚的镜像发布流程？\n10. Docker 镜像过大时你怎么排查？"
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
      "不是传统队列，而是分区追加日志。它把消息顺序写入磁盘，用",
      "offset",
      "表达消费进度。",
      "架构",
      "Producer",
      "写入分区。",
      "Broker",
      "负责存储和复制。",
      "Partition",
      "定义有序日志。",
      "Consumer",
      "Group",
      "做分摊消费。",
      "Controller",
      "负责元数据和副本协调。",
      "常用命令",
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
      "kafka-consumer-groups.sh",
      "--bootstrap-server",
      "localhost:9092",
      "--describe",
      "--group",
      "demo",
      "源码重点",
      "`kafka/log`：日志段、索引、清理",
      "`kafka/replica`：副本同步",
      "`kafka/group`：消费组协调",
      "`kafka/controller`：元数据和",
      "leader",
      "变更",
      "典型落地方案",
      "事件命名统一，字段版本化。",
      "生产端保证幂等，消费端保证可重试。",
      "分区",
      "key",
      "设计要兼顾顺序和负载分布。",
      "10",
      "道面试题",
      "Kafka",
      "为什么吞吐高？",
      "Partition",
      "的作用是什么？",
      "Consumer",
      "Group",
      "的分配机制是什么？",
      "offset",
      "是什么？",
      "Kafka",
      "如何保证顺序？",
      "ISR",
      "是什么？",
      "生产者幂等性解决什么问题？",
      "Kafka",
      "适合做延迟队列吗？",
      "什么时候会发生",
      "rebalancing？",
      "如何设计一个事件主题？"
    ],
    "bodyBlocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "本质"
      },
      {
        "type": "paragraph",
        "text": "Kafka 不是传统队列，而是分区追加日志。它把消息顺序写入磁盘，用 offset 表达消费进度。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "架构"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "Producer 写入分区。",
          "Broker 负责存储和复制。",
          "Partition 定义有序日志。",
          "Consumer Group 做分摊消费。",
          "Controller 负责元数据和副本协调。"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "常用命令"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "kafka-topics.sh --bootstrap-server localhost:9092 --list\nkafka-topics.sh --create --topic events --partitions 6 --replication-factor 3 --bootstrap-server localhost:9092\nkafka-console-producer.sh --bootstrap-server localhost:9092 --topic events\nkafka-console-consumer.sh --bootstrap-server localhost:9092 --topic events --from-beginning\nkafka-consumer-groups.sh --bootstrap-server localhost:9092 --describe --group demo"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "源码重点"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "`kafka/log`：日志段、索引、清理",
          "`kafka/replica`：副本同步",
          "`kafka/group`：消费组协调",
          "`kafka/controller`：元数据和 leader 变更"
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
          "事件命名统一，字段版本化。",
          "生产端保证幂等，消费端保证可重试。",
          "分区 key 设计要兼顾顺序和负载分布。"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10 道面试题"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "Kafka 为什么吞吐高？",
          "Partition 的作用是什么？",
          "Consumer Group 的分配机制是什么？",
          "offset 是什么？",
          "Kafka 如何保证顺序？",
          "ISR 是什么？",
          "生产者幂等性解决什么问题？",
          "Kafka 适合做延迟队列吗？",
          "什么时候会发生 rebalancing？",
          "如何设计一个事件主题？"
        ]
      }
    ],
    "rawMarkdown": "## 本质\n\nKafka 不是传统队列，而是分区追加日志。它把消息顺序写入磁盘，用 offset 表达消费进度。\n\n## 架构\n\n1. Producer 写入分区。\n2. Broker 负责存储和复制。\n3. Partition 定义有序日志。\n4. Consumer Group 做分摊消费。\n5. Controller 负责元数据和副本协调。\n\n## 常用命令\n\n```bash\nkafka-topics.sh --bootstrap-server localhost:9092 --list\nkafka-topics.sh --create --topic events --partitions 6 --replication-factor 3 --bootstrap-server localhost:9092\nkafka-console-producer.sh --bootstrap-server localhost:9092 --topic events\nkafka-console-consumer.sh --bootstrap-server localhost:9092 --topic events --from-beginning\nkafka-consumer-groups.sh --bootstrap-server localhost:9092 --describe --group demo\n```\n\n## 源码重点\n\n- `kafka/log`：日志段、索引、清理\n- `kafka/replica`：副本同步\n- `kafka/group`：消费组协调\n- `kafka/controller`：元数据和 leader 变更\n\n## 典型落地方案\n\n- 事件命名统一，字段版本化。\n- 生产端保证幂等，消费端保证可重试。\n- 分区 key 设计要兼顾顺序和负载分布。\n\n## 10 道面试题\n\n1. Kafka 为什么吞吐高？\n2. Partition 的作用是什么？\n3. Consumer Group 的分配机制是什么？\n4. offset 是什么？\n5. Kafka 如何保证顺序？\n6. ISR 是什么？\n7. 生产者幂等性解决什么问题？\n8. Kafka 适合做延迟队列吗？\n9. 什么时候会发生 rebalancing？\n10. 如何设计一个事件主题？"
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
      "不是容器启动器，而是一个期望状态系统。你写的是目标，控制器负责执行差异修正。",
      "架构",
      "API",
      "Server",
      "接收请求。",
      "etcd",
      "保存对象状态。",
      "Scheduler",
      "负责调度决策。",
      "Controller",
      "负责副本和生命周期。",
      "Kubelet",
      "在节点上执行启动。",
      "CNI/CSI",
      "负责网络和存储。",
      "常用命令",
      "kubectl",
      "get",
      "pod",
      "-A",
      "kubectl",
      "describe",
      "pod",
      "<name>",
      "kubectl",
      "logs",
      "-f",
      "<pod>",
      "kubectl",
      "apply",
      "-f",
      "deploy.yaml",
      "kubectl",
      "delete",
      "pod",
      "<name>",
      "kubectl",
      "rollout",
      "status",
      "deploy/<name>",
      "kubectl",
      "rollout",
      "undo",
      "deploy/<name>",
      "kubectl",
      "get",
      "events",
      "--sort-by=.lastTimestamp",
      "kubectl",
      "top",
      "pod",
      "kubectl",
      "exec",
      "-it",
      "<pod>",
      "--",
      "sh",
      "源码重点",
      "`pkg/scheduler`：过滤和打分",
      "`pkg/controller`：副本控制与回收",
      "`pkg/kubelet`：节点执行器",
      "`staging/src/k8s.io/api`：对象模型",
      "典型落地方案",
      "用",
      "Deployment/Service/Ingress",
      "构成标准应用模板。",
      "用",
      "requests/limits、HPA、PDB",
      "建立资源和稳定性边界。",
      "用",
      "namespace、RBAC、NetworkPolicy",
      "做租户隔离。",
      "10",
      "道面试题",
      "Kubernetes",
      "的本质是什么？",
      "etcd",
      "为什么重要？",
      "Pod",
      "Pending",
      "常见原因有哪些？",
      "CrashLoopBackOff",
      "怎么定位？",
      "Service",
      "和",
      "Ingress",
      "分别解决什么问题？",
      "HPA",
      "的核心依据是什么？",
      "Deployment",
      "滚动更新怎么保证可用？",
      "kubelet",
      "负责什么？",
      "CNI",
      "和",
      "CSI",
      "分别是什么？",
      "你怎么设计一个生产可用的",
      "K8s",
      "应用模板？"
    ],
    "bodyBlocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "本质"
      },
      {
        "type": "paragraph",
        "text": "Kubernetes 不是容器启动器，而是一个期望状态系统。你写的是目标，控制器负责执行差异修正。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "架构"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "API Server 接收请求。",
          "etcd 保存对象状态。",
          "Scheduler 负责调度决策。",
          "Controller 负责副本和生命周期。",
          "Kubelet 在节点上执行启动。",
          "CNI/CSI 负责网络和存储。"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "常用命令"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "kubectl get pod -A\nkubectl describe pod <name>\nkubectl logs -f <pod>\nkubectl apply -f deploy.yaml\nkubectl delete pod <name>\nkubectl rollout status deploy/<name>\nkubectl rollout undo deploy/<name>\nkubectl get events --sort-by=.lastTimestamp\nkubectl top pod\nkubectl exec -it <pod> -- sh"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "源码重点"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "`pkg/scheduler`：过滤和打分",
          "`pkg/controller`：副本控制与回收",
          "`pkg/kubelet`：节点执行器",
          "`staging/src/k8s.io/api`：对象模型"
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
          "用 Deployment/Service/Ingress 构成标准应用模板。",
          "用 requests/limits、HPA、PDB 建立资源和稳定性边界。",
          "用 namespace、RBAC、NetworkPolicy 做租户隔离。"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10 道面试题"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "Kubernetes 的本质是什么？",
          "etcd 为什么重要？",
          "Pod Pending 常见原因有哪些？",
          "CrashLoopBackOff 怎么定位？",
          "Service 和 Ingress 分别解决什么问题？",
          "HPA 的核心依据是什么？",
          "Deployment 滚动更新怎么保证可用？",
          "kubelet 负责什么？",
          "CNI 和 CSI 分别是什么？",
          "你怎么设计一个生产可用的 K8s 应用模板？"
        ]
      }
    ],
    "rawMarkdown": "## 本质\n\nKubernetes 不是容器启动器，而是一个期望状态系统。你写的是目标，控制器负责执行差异修正。\n\n## 架构\n\n1. API Server 接收请求。\n2. etcd 保存对象状态。\n3. Scheduler 负责调度决策。\n4. Controller 负责副本和生命周期。\n5. Kubelet 在节点上执行启动。\n6. CNI/CSI 负责网络和存储。\n\n## 常用命令\n\n```bash\nkubectl get pod -A\nkubectl describe pod <name>\nkubectl logs -f <pod>\nkubectl apply -f deploy.yaml\nkubectl delete pod <name>\nkubectl rollout status deploy/<name>\nkubectl rollout undo deploy/<name>\nkubectl get events --sort-by=.lastTimestamp\nkubectl top pod\nkubectl exec -it <pod> -- sh\n```\n\n## 源码重点\n\n- `pkg/scheduler`：过滤和打分\n- `pkg/controller`：副本控制与回收\n- `pkg/kubelet`：节点执行器\n- `staging/src/k8s.io/api`：对象模型\n\n## 典型落地方案\n\n- 用 Deployment/Service/Ingress 构成标准应用模板。\n- 用 requests/limits、HPA、PDB 建立资源和稳定性边界。\n- 用 namespace、RBAC、NetworkPolicy 做租户隔离。\n\n## 10 道面试题\n\n1. Kubernetes 的本质是什么？\n2. etcd 为什么重要？\n3. Pod Pending 常见原因有哪些？\n4. CrashLoopBackOff 怎么定位？\n5. Service 和 Ingress 分别解决什么问题？\n6. HPA 的核心依据是什么？\n7. Deployment 滚动更新怎么保证可用？\n8. kubelet 负责什么？\n9. CNI 和 CSI 分别是什么？\n10. 你怎么设计一个生产可用的 K8s 应用模板？"
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
      "的核心是事务、索引和存储引擎。业务看到的是",
      "SQL，真正承担并发和持久化的是",
      "InnoDB。",
      "架构",
      "SQL",
      "层解析和优化。",
      "InnoDB",
      "负责事务、锁和页。",
      "undo/redo",
      "处理回滚和恢复。",
      "binlog",
      "负责复制。",
      "常用命令",
      "mysql",
      "-uroot",
      "-p",
      "show",
      "databases;",
      "show",
      "tables;",
      "explain",
      "select",
      "*",
      "from",
      "t",
      "where",
      "id",
      "=",
      "1;",
      "show",
      "processlist;",
      "show",
      "engine",
      "innodb",
      "status\\G",
      "源码重点",
      "`sql`：SQL",
      "层",
      "`storage/innobase`：InnoDB",
      "`btr`：B+Tree",
      "`trx`：事务",
      "`row`：行记录",
      "典型落地方案",
      "对",
      "OLTP",
      "用合适的索引和事务边界。",
      "对读多场景做读写分离。",
      "对大表做归档、分区和慢查询治理。",
      "10",
      "道面试题",
      "MySQL",
      "和",
      "PostgreSQL",
      "的差异是什么？",
      "InnoDB",
      "为什么重要？",
      "redo",
      "log",
      "和",
      "binlog",
      "有什么不同？",
      "什么是",
      "gap",
      "lock？",
      "事务隔离级别有哪些？",
      "如何设计联合索引？",
      "explain",
      "重点看什么？",
      "为什么会出现死锁？",
      "复制延迟怎么处理？",
      "如何做高可用切换？"
    ],
    "bodyBlocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "本质"
      },
      {
        "type": "paragraph",
        "text": "MySQL 的核心是事务、索引和存储引擎。业务看到的是 SQL，真正承担并发和持久化的是 InnoDB。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "架构"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "SQL 层解析和优化。",
          "InnoDB 负责事务、锁和页。",
          "undo/redo 处理回滚和恢复。",
          "binlog 负责复制。"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "常用命令"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "mysql -uroot -p\nshow databases;\nshow tables;\nexplain select * from t where id = 1;\nshow processlist;\nshow engine innodb status\\G"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "源码重点"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "`sql`：SQL 层",
          "`storage/innobase`：InnoDB",
          "`btr`：B+Tree",
          "`trx`：事务",
          "`row`：行记录"
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
          "对 OLTP 用合适的索引和事务边界。",
          "对读多场景做读写分离。",
          "对大表做归档、分区和慢查询治理。"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10 道面试题"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "MySQL 和 PostgreSQL 的差异是什么？",
          "InnoDB 为什么重要？",
          "redo log 和 binlog 有什么不同？",
          "什么是 gap lock？",
          "事务隔离级别有哪些？",
          "如何设计联合索引？",
          "explain 重点看什么？",
          "为什么会出现死锁？",
          "复制延迟怎么处理？",
          "如何做高可用切换？"
        ]
      }
    ],
    "rawMarkdown": "## 本质\n\nMySQL 的核心是事务、索引和存储引擎。业务看到的是 SQL，真正承担并发和持久化的是 InnoDB。\n\n## 架构\n\n1. SQL 层解析和优化。\n2. InnoDB 负责事务、锁和页。\n3. undo/redo 处理回滚和恢复。\n4. binlog 负责复制。\n\n## 常用命令\n\n```bash\nmysql -uroot -p\nshow databases;\nshow tables;\nexplain select * from t where id = 1;\nshow processlist;\nshow engine innodb status\\G\n```\n\n## 源码重点\n\n- `sql`：SQL 层\n- `storage/innobase`：InnoDB\n- `btr`：B+Tree\n- `trx`：事务\n- `row`：行记录\n\n## 典型落地方案\n\n- 对 OLTP 用合适的索引和事务边界。\n- 对读多场景做读写分离。\n- 对大表做归档、分区和慢查询治理。\n\n## 10 道面试题\n\n1. MySQL 和 PostgreSQL 的差异是什么？\n2. InnoDB 为什么重要？\n3. redo log 和 binlog 有什么不同？\n4. 什么是 gap lock？\n5. 事务隔离级别有哪些？\n6. 如何设计联合索引？\n7. explain 重点看什么？\n8. 为什么会出现死锁？\n9. 复制延迟怎么处理？\n10. 如何做高可用切换？"
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
      "的核心是事件驱动和非阻塞",
      "IO。它通过少量",
      "worker",
      "处理大量连接。",
      "架构",
      "Master",
      "进程管理配置和",
      "worker。",
      "Worker",
      "用事件循环处理连接。",
      "HTTP",
      "upstream",
      "做反向代理。",
      "Stream",
      "模块处理",
      "TCP/UDP。",
      "多种负载均衡策略决定后端选择。",
      "常用命令",
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
      "tail",
      "-f",
      "/var/log/nginx/access.log",
      "tail",
      "-f",
      "/var/log/nginx/error.log",
      "源码重点",
      "`src/event`：事件循环",
      "`src/http`：HTTP",
      "请求处理",
      "`src/http/ngx_http_upstream*`：上游代理",
      "`src/http/ngx_http_upstream_round_robin.c`：轮询负载均衡",
      "典型落地方案",
      "用",
      "NGINX",
      "做入口代理和",
      "TLS",
      "终止。",
      "用",
      "upstream",
      "配后端应用池。",
      "配置超时、缓存和限流，防止流量风暴。",
      "10",
      "道面试题",
      "NGINX",
      "为什么高性能？",
      "Master/Worker",
      "模型是什么？",
      "反向代理和负载均衡有什么区别？",
      "为什么",
      "NGINX",
      "适合做入口层？",
      "rewrite",
      "和",
      "location",
      "如何匹配？",
      "upstream",
      "负载均衡算法有哪些？",
      "`nginx",
      "-t`",
      "检查什么？",
      "NGINX",
      "如何做限流？",
      "如何定位",
      "502/504？",
      "NGINX",
      "和网关的关系是什么？"
    ],
    "bodyBlocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "本质"
      },
      {
        "type": "paragraph",
        "text": "NGINX 的核心是事件驱动和非阻塞 IO。它通过少量 worker 处理大量连接。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "架构"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "Master 进程管理配置和 worker。",
          "Worker 用事件循环处理连接。",
          "HTTP upstream 做反向代理。",
          "Stream 模块处理 TCP/UDP。",
          "多种负载均衡策略决定后端选择。"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "常用命令"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "nginx -t\nnginx -s reload\nnginx -s stop\nnginx -V\ntail -f /var/log/nginx/access.log\ntail -f /var/log/nginx/error.log"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "源码重点"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "`src/event`：事件循环",
          "`src/http`：HTTP 请求处理",
          "`src/http/ngx_http_upstream*`：上游代理",
          "`src/http/ngx_http_upstream_round_robin.c`：轮询负载均衡"
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
          "用 NGINX 做入口代理和 TLS 终止。",
          "用 upstream 配后端应用池。",
          "配置超时、缓存和限流，防止流量风暴。"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10 道面试题"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "NGINX 为什么高性能？",
          "Master/Worker 模型是什么？",
          "反向代理和负载均衡有什么区别？",
          "为什么 NGINX 适合做入口层？",
          "rewrite 和 location 如何匹配？",
          "upstream 负载均衡算法有哪些？",
          "`nginx -t` 检查什么？",
          "NGINX 如何做限流？",
          "如何定位 502/504？",
          "NGINX 和网关的关系是什么？"
        ]
      }
    ],
    "rawMarkdown": "## 本质\n\nNGINX 的核心是事件驱动和非阻塞 IO。它通过少量 worker 处理大量连接。\n\n## 架构\n\n1. Master 进程管理配置和 worker。\n2. Worker 用事件循环处理连接。\n3. HTTP upstream 做反向代理。\n4. Stream 模块处理 TCP/UDP。\n5. 多种负载均衡策略决定后端选择。\n\n## 常用命令\n\n```bash\nnginx -t\nnginx -s reload\nnginx -s stop\nnginx -V\ntail -f /var/log/nginx/access.log\ntail -f /var/log/nginx/error.log\n```\n\n## 源码重点\n\n- `src/event`：事件循环\n- `src/http`：HTTP 请求处理\n- `src/http/ngx_http_upstream*`：上游代理\n- `src/http/ngx_http_upstream_round_robin.c`：轮询负载均衡\n\n## 典型落地方案\n\n- 用 NGINX 做入口代理和 TLS 终止。\n- 用 upstream 配后端应用池。\n- 配置超时、缓存和限流，防止流量风暴。\n\n## 10 道面试题\n\n1. NGINX 为什么高性能？\n2. Master/Worker 模型是什么？\n3. 反向代理和负载均衡有什么区别？\n4. 为什么 NGINX 适合做入口层？\n5. rewrite 和 location 如何匹配？\n6. upstream 负载均衡算法有哪些？\n7. `nginx -t` 检查什么？\n8. NGINX 如何做限流？\n9. 如何定位 502/504？\n10. NGINX 和网关的关系是什么？"
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
      "的核心是事务一致性、SQL",
      "能力和可恢复性。它既是数据库，也是查询引擎和恢复系统。",
      "架构",
      "Parser/Planner",
      "生成执行计划。",
      "Executor",
      "运行计划。",
      "Storage",
      "管理页和索引。",
      "MVCC",
      "处理并发。",
      "WAL",
      "保障崩溃恢复。",
      "常用命令",
      "psql",
      "-h",
      "localhost",
      "-U",
      "postgres",
      "psql",
      "-c",
      "\"select",
      "now();\"",
      "psql",
      "-c",
      "\"\\l\"",
      "psql",
      "-c",
      "\"\\dt\"",
      "psql",
      "-c",
      "\"explain",
      "analyze",
      "select",
      "*",
      "from",
      "t",
      "where",
      "id",
      "=",
      "1;\"",
      "源码重点",
      "`optimizer`：计划选择",
      "`executor`：执行路径",
      "`storage`：页与缓冲",
      "`wal`：日志恢复",
      "典型落地方案",
      "关键业务用主从复制和备份恢复。",
      "慢查询靠索引、分区和执行计划优化。",
      "对长事务和锁等待进行监控治理。",
      "10",
      "道面试题",
      "PostgreSQL",
      "为什么适合核心业务？",
      "MVCC",
      "解决什么问题？",
      "B+Tree",
      "索引有什么优势？",
      "WAL",
      "的作用是什么？",
      "EXPLAIN",
      "里重点看什么？",
      "长事务为什么危险？",
      "主从复制如何工作？",
      "VACUUM",
      "为什么重要？",
      "事务隔离级别有什么差异？",
      "如何定位慢",
      "SQL？"
    ],
    "bodyBlocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "本质"
      },
      {
        "type": "paragraph",
        "text": "PostgreSQL 的核心是事务一致性、SQL 能力和可恢复性。它既是数据库，也是查询引擎和恢复系统。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "架构"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "Parser/Planner 生成执行计划。",
          "Executor 运行计划。",
          "Storage 管理页和索引。",
          "MVCC 处理并发。",
          "WAL 保障崩溃恢复。"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "常用命令"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "psql -h localhost -U postgres\npsql -c \"select now();\"\npsql -c \"\\l\"\npsql -c \"\\dt\"\npsql -c \"explain analyze select * from t where id = 1;\""
      },
      {
        "type": "heading",
        "level": 2,
        "text": "源码重点"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "`optimizer`：计划选择",
          "`executor`：执行路径",
          "`storage`：页与缓冲",
          "`wal`：日志恢复"
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
          "关键业务用主从复制和备份恢复。",
          "慢查询靠索引、分区和执行计划优化。",
          "对长事务和锁等待进行监控治理。"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10 道面试题"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "PostgreSQL 为什么适合核心业务？",
          "MVCC 解决什么问题？",
          "B+Tree 索引有什么优势？",
          "WAL 的作用是什么？",
          "EXPLAIN 里重点看什么？",
          "长事务为什么危险？",
          "主从复制如何工作？",
          "VACUUM 为什么重要？",
          "事务隔离级别有什么差异？",
          "如何定位慢 SQL？"
        ]
      }
    ],
    "rawMarkdown": "## 本质\n\nPostgreSQL 的核心是事务一致性、SQL 能力和可恢复性。它既是数据库，也是查询引擎和恢复系统。\n\n## 架构\n\n1. Parser/Planner 生成执行计划。\n2. Executor 运行计划。\n3. Storage 管理页和索引。\n4. MVCC 处理并发。\n5. WAL 保障崩溃恢复。\n\n## 常用命令\n\n```bash\npsql -h localhost -U postgres\npsql -c \"select now();\"\npsql -c \"\\l\"\npsql -c \"\\dt\"\npsql -c \"explain analyze select * from t where id = 1;\"\n```\n\n## 源码重点\n\n- `optimizer`：计划选择\n- `executor`：执行路径\n- `storage`：页与缓冲\n- `wal`：日志恢复\n\n## 典型落地方案\n\n- 关键业务用主从复制和备份恢复。\n- 慢查询靠索引、分区和执行计划优化。\n- 对长事务和锁等待进行监控治理。\n\n## 10 道面试题\n\n1. PostgreSQL 为什么适合核心业务？\n2. MVCC 解决什么问题？\n3. B+Tree 索引有什么优势？\n4. WAL 的作用是什么？\n5. EXPLAIN 里重点看什么？\n6. 长事务为什么危险？\n7. 主从复制如何工作？\n8. VACUUM 为什么重要？\n9. 事务隔离级别有什么差异？\n10. 如何定位慢 SQL？"
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
      "更像消息路由层。消息先进入",
      "exchange，再根据绑定规则进入",
      "queue，由消费者确认。",
      "架构",
      "Producer",
      "发送消息到",
      "exchange。",
      "Exchange",
      "按类型路由。",
      "Queue",
      "保存待消费消息。",
      "Consumer",
      "ack/nack",
      "消息。",
      "Dead",
      "Letter",
      "处理失败消息。",
      "常用命令",
      "rabbitmqctl",
      "status",
      "rabbitmqctl",
      "list_queues",
      "rabbitmqctl",
      "list_exchanges",
      "rabbitmqctl",
      "list_bindings",
      "rabbitmq-plugins",
      "enable",
      "rabbitmq_management",
      "源码重点",
      "`rabbit_channel`：通道与协议流转",
      "`rabbit_queue`：队列存储与投递",
      "`rabbit_exchange`：交换机路由",
      "ack/nack/requeue：确认语义",
      "典型落地方案",
      "用",
      "direct/topic/fanout",
      "分离不同消息类型。",
      "对失败消息统一进死信队列。",
      "消费侧保持幂等，避免重复投递造成副作用。",
      "10",
      "道面试题",
      "RabbitMQ",
      "和",
      "Kafka",
      "有什么差异？",
      "exchange",
      "的几种类型分别是什么？",
      "ack",
      "为什么重要？",
      "什么是死信队列？",
      "prefetch",
      "是什么？",
      "如何保证消费者幂等？",
      "延迟消息怎么实现？",
      "为什么会出现重复消费？",
      "requeue",
      "会带来什么问题？",
      "什么场景更适合",
      "RabbitMQ？"
    ],
    "bodyBlocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "本质"
      },
      {
        "type": "paragraph",
        "text": "RabbitMQ 更像消息路由层。消息先进入 exchange，再根据绑定规则进入 queue，由消费者确认。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "架构"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "Producer 发送消息到 exchange。",
          "Exchange 按类型路由。",
          "Queue 保存待消费消息。",
          "Consumer ack/nack 消息。",
          "Dead Letter 处理失败消息。"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "常用命令"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "rabbitmqctl status\nrabbitmqctl list_queues\nrabbitmqctl list_exchanges\nrabbitmqctl list_bindings\nrabbitmq-plugins enable rabbitmq_management"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "源码重点"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "`rabbit_channel`：通道与协议流转",
          "`rabbit_queue`：队列存储与投递",
          "`rabbit_exchange`：交换机路由",
          "ack/nack/requeue：确认语义"
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
          "用 direct/topic/fanout 分离不同消息类型。",
          "对失败消息统一进死信队列。",
          "消费侧保持幂等，避免重复投递造成副作用。"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10 道面试题"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "RabbitMQ 和 Kafka 有什么差异？",
          "exchange 的几种类型分别是什么？",
          "ack 为什么重要？",
          "什么是死信队列？",
          "prefetch 是什么？",
          "如何保证消费者幂等？",
          "延迟消息怎么实现？",
          "为什么会出现重复消费？",
          "requeue 会带来什么问题？",
          "什么场景更适合 RabbitMQ？"
        ]
      }
    ],
    "rawMarkdown": "## 本质\n\nRabbitMQ 更像消息路由层。消息先进入 exchange，再根据绑定规则进入 queue，由消费者确认。\n\n## 架构\n\n1. Producer 发送消息到 exchange。\n2. Exchange 按类型路由。\n3. Queue 保存待消费消息。\n4. Consumer ack/nack 消息。\n5. Dead Letter 处理失败消息。\n\n## 常用命令\n\n```bash\nrabbitmqctl status\nrabbitmqctl list_queues\nrabbitmqctl list_exchanges\nrabbitmqctl list_bindings\nrabbitmq-plugins enable rabbitmq_management\n```\n\n## 源码重点\n\n- `rabbit_channel`：通道与协议流转\n- `rabbit_queue`：队列存储与投递\n- `rabbit_exchange`：交换机路由\n- ack/nack/requeue：确认语义\n\n## 典型落地方案\n\n- 用 direct/topic/fanout 分离不同消息类型。\n- 对失败消息统一进死信队列。\n- 消费侧保持幂等，避免重复投递造成副作用。\n\n## 10 道面试题\n\n1. RabbitMQ 和 Kafka 有什么差异？\n2. exchange 的几种类型分别是什么？\n3. ack 为什么重要？\n4. 什么是死信队列？\n5. prefetch 是什么？\n6. 如何保证消费者幂等？\n7. 延迟消息怎么实现？\n8. 为什么会出现重复消费？\n9. requeue 会带来什么问题？\n10. 什么场景更适合 RabbitMQ？"
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
      "的核心是“快”：用内存和高效数据结构把访问延迟降到极低，同时用复制和持久化保证一定程度的可靠性。",
      "架构",
      "单线程事件循环处理网络和命令。",
      "内存字典和多种对象编码存放数据。",
      "AOF/RDB",
      "负责持久化。",
      "主从复制和哨兵/集群负责可用性。",
      "常用命令",
      "redis-cli",
      "ping",
      "redis-cli",
      "set",
      "k",
      "v",
      "redis-cli",
      "get",
      "k",
      "redis-cli",
      "ttl",
      "k",
      "redis-cli",
      "info",
      "memory",
      "redis-cli",
      "slowlog",
      "get",
      "redis-cli",
      "monitor",
      "redis-cli",
      "scan",
      "0",
      "redis-cli",
      "eval",
      "\"return",
      "redis.call('get',",
      "KEYS[1])\"",
      "1",
      "k",
      "源码重点",
      "`server.c`：主事件循环与命令执行入口",
      "`dict.c`：哈希表与渐进式",
      "rehash",
      "`expire.c`：过期管理",
      "`evict.c`：淘汰策略",
      "`t_*.c`：各类数据结构",
      "典型落地方案",
      "做缓存旁路，数据库是事实源，Redis",
      "是加速层。",
      "对热点",
      "key",
      "做拆分、预热和限流。",
      "对锁、计数、排行榜要严格定义幂等和过期策略。",
      "10",
      "道面试题",
      "Redis",
      "为什么快？",
      "Redis",
      "单线程为什么还能高性能？",
      "LRU",
      "和",
      "LFU",
      "的区别是什么？",
      "缓存穿透、击穿、雪崩分别是什么？",
      "Redis",
      "过期键是怎么处理的？",
      "AOF",
      "和",
      "RDB",
      "有什么差异？",
      "分布式锁如何避免误删？",
      "什么是渐进式",
      "rehash？",
      "Redis",
      "适合做消息队列吗？",
      "集群模式下",
      "key",
      "为什么要哈希槽？"
    ],
    "bodyBlocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "本质"
      },
      {
        "type": "paragraph",
        "text": "Redis 的核心是“快”：用内存和高效数据结构把访问延迟降到极低，同时用复制和持久化保证一定程度的可靠性。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "架构"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "单线程事件循环处理网络和命令。",
          "内存字典和多种对象编码存放数据。",
          "AOF/RDB 负责持久化。",
          "主从复制和哨兵/集群负责可用性。"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "常用命令"
      },
      {
        "type": "code",
        "language": "bash",
        "text": "redis-cli ping\nredis-cli set k v\nredis-cli get k\nredis-cli ttl k\nredis-cli info memory\nredis-cli slowlog get\nredis-cli monitor\nredis-cli scan 0\nredis-cli eval \"return redis.call('get', KEYS[1])\" 1 k"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "源码重点"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "`server.c`：主事件循环与命令执行入口",
          "`dict.c`：哈希表与渐进式 rehash",
          "`expire.c`：过期管理",
          "`evict.c`：淘汰策略",
          "`t_*.c`：各类数据结构"
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
          "做缓存旁路，数据库是事实源，Redis 是加速层。",
          "对热点 key 做拆分、预热和限流。",
          "对锁、计数、排行榜要严格定义幂等和过期策略。"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10 道面试题"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "Redis 为什么快？",
          "Redis 单线程为什么还能高性能？",
          "LRU 和 LFU 的区别是什么？",
          "缓存穿透、击穿、雪崩分别是什么？",
          "Redis 过期键是怎么处理的？",
          "AOF 和 RDB 有什么差异？",
          "分布式锁如何避免误删？",
          "什么是渐进式 rehash？",
          "Redis 适合做消息队列吗？",
          "集群模式下 key 为什么要哈希槽？"
        ]
      }
    ],
    "rawMarkdown": "## 本质\n\nRedis 的核心是“快”：用内存和高效数据结构把访问延迟降到极低，同时用复制和持久化保证一定程度的可靠性。\n\n## 架构\n\n1. 单线程事件循环处理网络和命令。\n2. 内存字典和多种对象编码存放数据。\n3. AOF/RDB 负责持久化。\n4. 主从复制和哨兵/集群负责可用性。\n\n## 常用命令\n\n```bash\nredis-cli ping\nredis-cli set k v\nredis-cli get k\nredis-cli ttl k\nredis-cli info memory\nredis-cli slowlog get\nredis-cli monitor\nredis-cli scan 0\nredis-cli eval \"return redis.call('get', KEYS[1])\" 1 k\n```\n\n## 源码重点\n\n- `server.c`：主事件循环与命令执行入口\n- `dict.c`：哈希表与渐进式 rehash\n- `expire.c`：过期管理\n- `evict.c`：淘汰策略\n- `t_*.c`：各类数据结构\n\n## 典型落地方案\n\n- 做缓存旁路，数据库是事实源，Redis 是加速层。\n- 对热点 key 做拆分、预热和限流。\n- 对锁、计数、排行榜要严格定义幂等和过期策略。\n\n## 10 道面试题\n\n1. Redis 为什么快？\n2. Redis 单线程为什么还能高性能？\n3. LRU 和 LFU 的区别是什么？\n4. 缓存穿透、击穿、雪崩分别是什么？\n5. Redis 过期键是怎么处理的？\n6. AOF 和 RDB 有什么差异？\n7. 分布式锁如何避免误删？\n8. 什么是渐进式 rehash？\n9. Redis 适合做消息队列吗？\n10. 集群模式下 key 为什么要哈希槽？"
  }
];
