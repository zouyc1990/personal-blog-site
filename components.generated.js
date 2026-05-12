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
      "1.",
      "AIOps",
      "和传统监控有什么区别？",
      "传统监控以发现问题为主，AIOps",
      "更强调关联、聚类、预测和自动化处置。",
      "2.",
      "告警降噪怎么做？",
      "通过聚类、抑制、维护窗口、相似事件合并和阈值优化来减少重复告警。",
      "3.",
      "异常检测有哪些常见方法？",
      "有统计方法、时序方法、机器学习方法和规则方法，比如",
      "z-score、EWMA、Isolation",
      "Forest。",
      "4.",
      "为什么需要特征窗口？",
      "因为大多数运维数据是时间序列，窗口能把瞬时值变成可比较的统计特征。",
      "5.",
      "怎么做根因分析？",
      "结合拓扑、时间邻近性、标签关联和历史模式，给故障源排序，而不是简单猜一个答案。",
      "6.",
      "规则和模型怎么结合？",
      "模型负责概率判断，规则负责约束、护栏和高风险动作拦截，两者互补。",
      "7.",
      "预测性扩容怎么设计？",
      "从历史趋势、容量水位和业务周期性特征出发，预测未来一段时间的负载，再提前扩容。",
      "8.",
      "如何避免自动化误伤？",
      "对动作设审批门槛、dry-run、回滚和审计，只自动化低风险、可逆动作。",
      "9.",
      "AIOps",
      "的数据源有哪些？",
      "常见是日志、指标、trace、事件、工单和",
      "CMDB。",
      "10.",
      "大模型在",
      "AIOps",
      "里适合做什么？",
      "适合做总结、归纳、告警摘要、Runbook",
      "辅助和知识检索，不适合直接替代全部判断链路。"
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
        "type": "heading",
        "level": 3,
        "text": "1. AIOps 和传统监控有什么区别？"
      },
      {
        "type": "paragraph",
        "text": "传统监控以发现问题为主，AIOps 更强调关联、聚类、预测和自动化处置。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. 告警降噪怎么做？"
      },
      {
        "type": "paragraph",
        "text": "通过聚类、抑制、维护窗口、相似事件合并和阈值优化来减少重复告警。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3. 异常检测有哪些常见方法？"
      },
      {
        "type": "paragraph",
        "text": "有统计方法、时序方法、机器学习方法和规则方法，比如 z-score、EWMA、Isolation Forest。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4. 为什么需要特征窗口？"
      },
      {
        "type": "paragraph",
        "text": "因为大多数运维数据是时间序列，窗口能把瞬时值变成可比较的统计特征。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "5. 怎么做根因分析？"
      },
      {
        "type": "paragraph",
        "text": "结合拓扑、时间邻近性、标签关联和历史模式，给故障源排序，而不是简单猜一个答案。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "6. 规则和模型怎么结合？"
      },
      {
        "type": "paragraph",
        "text": "模型负责概率判断，规则负责约束、护栏和高风险动作拦截，两者互补。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "7. 预测性扩容怎么设计？"
      },
      {
        "type": "paragraph",
        "text": "从历史趋势、容量水位和业务周期性特征出发，预测未来一段时间的负载，再提前扩容。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8. 如何避免自动化误伤？"
      },
      {
        "type": "paragraph",
        "text": "对动作设审批门槛、dry-run、回滚和审计，只自动化低风险、可逆动作。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9. AIOps 的数据源有哪些？"
      },
      {
        "type": "paragraph",
        "text": "常见是日志、指标、trace、事件、工单和 CMDB。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "10. 大模型在 AIOps 里适合做什么？"
      },
      {
        "type": "paragraph",
        "text": "适合做总结、归纳、告警摘要、Runbook 辅助和知识检索，不适合直接替代全部判断链路。"
      }
    ],
    "rawMarkdown": "## 本质\n\nAIOps 不是“给运维加个大模型”，而是用数据建模、异常检测和自动化动作，把运维噪声降下来，把人从重复判断里解放出来。\n\n## 架构\n\n1. 数据接入：日志、指标、trace、事件、工单。\n2. 特征处理：窗口聚合、去噪、标准化。\n3. 模型层：异常检测、聚类、分类、相关性分析。\n4. 规则层：SLO、阈值、抑制、维护窗口。\n5. 执行层：告警路由、自动化脚本、Runbook。\n\n## 底层原理\n\nAIOps 的底层不是单一模型，而是一个“数据 - 特征 - 模型 - 规则 - 执行”的闭环。模型负责给出概率判断，规则负责约束误报和高风险动作，执行层负责把判断变成动作。\n\n一个可落地的 AIOps 系统一般会把数据按时间窗口切片，再做聚合特征：\n\n- 指标：均值、方差、斜率、峰值、P95/P99\n- 日志：错误率、模式频次、token 级聚类\n- 事件：时间邻近性、标签相似度、拓扑关系\n- trace：调用链异常、跨度延迟、错误传播路径\n\n模型层常见任务：\n\n- 异常检测：找出偏离正常分布的点\n- 告警聚类：把重复噪声收敛成事件簇\n- 根因排序：按拓扑和时序推测最可能故障源\n- 预测：基于趋势做容量和风险预警\n\n## 常用命令\n\n```bash\nkubectl get events -A\ngrep -R \"ERROR\" logs/\npromtool check rules alerts.yml\npython train.py --config config.yaml\n```\n\n## 源码重点\n\n- 特征提取：窗口、统计量、时序\n- 异常检测：z-score、EWMA、Isolation Forest\n- 关联分析：图模型、规则匹配、聚类\n- 自动化：Runbook 执行器和审批闭环\n\n## 典型落地方案\n\n- 告警先聚类，再去重，再关联根因。\n- 容量预测用于提前扩容。\n- 高风险动作要带审批和回滚。\n- 先从单个业务域做试点，只接入少量高价值告警。\n- 自动化动作必须支持 dry-run、审批、回滚和审计。\n- AIOps 不替代监控，而是减少噪声并提高处置效率。\n- 和 K8s、Prometheus、日志平台、工单系统联动，形成观测到执行闭环。\n- 对关键动作设置人工确认阈值，自动化只处理低风险、可逆动作。\n- 先从容量预测、告警聚类、相似事件合并这三类高收益场景落地。\n\n## 落地方案示意\n\n```text\nPrometheus / Logs / Trace / Events\n            |\n        feature pipeline\n            |\n   anomaly + clustering + RCA\n            |\n     rule engine / SLO guard\n            |\n     alert routing / runbook\n            |\n   automated fix / human approval\n```\n\n## 10 道面试题\n\n### 1. AIOps 和传统监控有什么区别？\n\n传统监控以发现问题为主，AIOps 更强调关联、聚类、预测和自动化处置。\n\n### 2. 告警降噪怎么做？\n\n通过聚类、抑制、维护窗口、相似事件合并和阈值优化来减少重复告警。\n\n### 3. 异常检测有哪些常见方法？\n\n有统计方法、时序方法、机器学习方法和规则方法，比如 z-score、EWMA、Isolation Forest。\n\n### 4. 为什么需要特征窗口？\n\n因为大多数运维数据是时间序列，窗口能把瞬时值变成可比较的统计特征。\n\n### 5. 怎么做根因分析？\n\n结合拓扑、时间邻近性、标签关联和历史模式，给故障源排序，而不是简单猜一个答案。\n\n### 6. 规则和模型怎么结合？\n\n模型负责概率判断，规则负责约束、护栏和高风险动作拦截，两者互补。\n\n### 7. 预测性扩容怎么设计？\n\n从历史趋势、容量水位和业务周期性特征出发，预测未来一段时间的负载，再提前扩容。\n\n### 8. 如何避免自动化误伤？\n\n对动作设审批门槛、dry-run、回滚和审计，只自动化低风险、可逆动作。\n\n### 9. AIOps 的数据源有哪些？\n\n常见是日志、指标、trace、事件、工单和 CMDB。\n\n### 10. 大模型在 AIOps 里适合做什么？\n\n适合做总结、归纳、告警摘要、Runbook 辅助和知识检索，不适合直接替代全部判断链路。"
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
      "1.",
      "CI",
      "和",
      "CD",
      "的区别是什么？",
      "CI",
      "关注持续集成和验证，CD",
      "关注持续交付/持续部署。前者保证代码健康，后者保证发布可控。",
      "2.",
      "为什么流水线要分阶段？",
      "因为不同阶段承担不同风险和成本，先快速失败，再逐步放量更高效。",
      "3.",
      "如何设计制品库？",
      "制品库要支持版本、追溯、权限、生命周期管理和回滚引用。",
      "4.",
      "为什么要做静态检查和安全扫描？",
      "它们能在尽量早的阶段发现低成本问题，减少后面环境里再发现的代价。",
      "5.",
      "灰度发布怎么做？",
      "先让少量流量访问新版本，再观察指标和错误率，最后逐步扩大流量。",
      "6.",
      "回滚如何保证快速？",
      "把制品版本固定，部署过程可逆，并保留上一个稳定版本的引用和配置。",
      "7.",
      "如何控制流水线权限？",
      "最小权限、环境隔离、审批门禁和密钥托管是核心。",
      "8.",
      "失败后怎样保留证据？",
      "保留日志、构建参数、制品版本、环境变量、部署记录和测试报告。",
      "9.",
      "如何避免“流水线能过但线上失败”？",
      "增加预发、冒烟、兼容性、容量和回滚演练，并让生产环境尽量接近真实流量。",
      "10.",
      "CI/CD",
      "如何和",
      "K8s",
      "结合？",
      "流水线负责编译、验证、制品和发布，K8s",
      "负责运行、扩缩容和滚动更新。"
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
        "type": "heading",
        "level": 3,
        "text": "1. CI 和 CD 的区别是什么？"
      },
      {
        "type": "paragraph",
        "text": "CI 关注持续集成和验证，CD 关注持续交付/持续部署。前者保证代码健康，后者保证发布可控。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. 为什么流水线要分阶段？"
      },
      {
        "type": "paragraph",
        "text": "因为不同阶段承担不同风险和成本，先快速失败，再逐步放量更高效。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3. 如何设计制品库？"
      },
      {
        "type": "paragraph",
        "text": "制品库要支持版本、追溯、权限、生命周期管理和回滚引用。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4. 为什么要做静态检查和安全扫描？"
      },
      {
        "type": "paragraph",
        "text": "它们能在尽量早的阶段发现低成本问题，减少后面环境里再发现的代价。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "5. 灰度发布怎么做？"
      },
      {
        "type": "paragraph",
        "text": "先让少量流量访问新版本，再观察指标和错误率，最后逐步扩大流量。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "6. 回滚如何保证快速？"
      },
      {
        "type": "paragraph",
        "text": "把制品版本固定，部署过程可逆，并保留上一个稳定版本的引用和配置。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "7. 如何控制流水线权限？"
      },
      {
        "type": "paragraph",
        "text": "最小权限、环境隔离、审批门禁和密钥托管是核心。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8. 失败后怎样保留证据？"
      },
      {
        "type": "paragraph",
        "text": "保留日志、构建参数、制品版本、环境变量、部署记录和测试报告。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9. 如何避免“流水线能过但线上失败”？"
      },
      {
        "type": "paragraph",
        "text": "增加预发、冒烟、兼容性、容量和回滚演练，并让生产环境尽量接近真实流量。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "10. CI/CD 如何和 K8s 结合？"
      },
      {
        "type": "paragraph",
        "text": "流水线负责编译、验证、制品和发布，K8s 负责运行、扩缩容和滚动更新。"
      }
    ],
    "rawMarkdown": "## 本质\n\nCI/CD 是把交付流程标准化。它的价值不是自动化本身，而是可验证、可审计、可回滚。\n\n## 架构\n\n1. 代码提交触发流水线。\n2. 单元测试和静态检查先跑。\n3. 构建镜像和制品。\n4. 部署到测试/预发/生产。\n5. 回滚与审批机制兜底。\n\n## 底层原理\n\nCI/CD 的底层是“把每一次变更都变成可验证证据”。流水线不是单纯串命令，而是一个带状态机、缓存、门禁和回滚分支的控制系统。\n\n关键原则：\n\n- 一次构建产出一个唯一制品，制品必须可追溯\n- 先验证，再构建，再部署，再放量\n- 失败保留日志、制品和环境上下文\n- 生产发布必须能快速回滚\n- 权限、签名、审批和审计要贯穿全链路\n\n## 常用命令\n\n```bash\ngit status\ngit commit -m \"...\"\ndocker build -t app:ci .\nkubectl rollout status deploy/app\nkubectl rollout undo deploy/app\n```\n\n## 源码重点\n\n- pipeline orchestration：阶段、条件、并行、缓存\n- artifact store：制品存储与版本\n- deploy hooks：灰度、回滚、审批\n- policy：权限、签名、门禁\n\n## 典型落地方案\n\n- 代码提交后自动跑测试和扫描。\n- 构建产物只从流水线发出，不手工上传。\n- 生产发布分阶段灰度并可一键回滚。\n- 和 K8s 结合时，流水线只做制品和发布，不做人肉 SSH 上机。\n- 镜像 tag 与 commit SHA 绑定，便于回滚和审计。\n- 重要环境通过审批门禁和变更窗口控制发布节奏。\n- 流水线要接入制品库、镜像仓库、扫描器、部署控制器和通知系统。\n- 发布结果要回写到工单、变更记录和审计日志。\n- 高风险环境引入手动批准或双人确认。\n\n## 落地方案示意\n\n```text\ngit push\n  |\nlint / test / scan\n  |\nbuild artifact / image\n  |\ndeploy to dev -> staging -> prod\n  |\nsmoke test / canary\n  |\nrollback if needed\n```\n\n## 10 道面试题\n\n### 1. CI 和 CD 的区别是什么？\n\nCI 关注持续集成和验证，CD 关注持续交付/持续部署。前者保证代码健康，后者保证发布可控。\n\n### 2. 为什么流水线要分阶段？\n\n因为不同阶段承担不同风险和成本，先快速失败，再逐步放量更高效。\n\n### 3. 如何设计制品库？\n\n制品库要支持版本、追溯、权限、生命周期管理和回滚引用。\n\n### 4. 为什么要做静态检查和安全扫描？\n\n它们能在尽量早的阶段发现低成本问题，减少后面环境里再发现的代价。\n\n### 5. 灰度发布怎么做？\n\n先让少量流量访问新版本，再观察指标和错误率，最后逐步扩大流量。\n\n### 6. 回滚如何保证快速？\n\n把制品版本固定，部署过程可逆，并保留上一个稳定版本的引用和配置。\n\n### 7. 如何控制流水线权限？\n\n最小权限、环境隔离、审批门禁和密钥托管是核心。\n\n### 8. 失败后怎样保留证据？\n\n保留日志、构建参数、制品版本、环境变量、部署记录和测试报告。\n\n### 9. 如何避免“流水线能过但线上失败”？\n\n增加预发、冒烟、兼容性、容量和回滚演练，并让生产环境尽量接近真实流量。\n\n### 10. CI/CD 如何和 K8s 结合？\n\n流水线负责编译、验证、制品和发布，K8s 负责运行、扩缩容和滚动更新。"
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
      "1.",
      "Kafka",
      "为什么吞吐高？",
      "因为它用顺序追加日志代替随机写，并且把读写和消费状态解耦，顺序",
      "I/O",
      "和批处理都更高效。",
      "2.",
      "Partition",
      "的作用是什么？",
      "Partition",
      "决定并行度和顺序边界。一个分区内有序，多分区并行，吞吐和顺序之间靠分区",
      "key",
      "取舍。",
      "3.",
      "Consumer",
      "Group",
      "的分配机制是什么？",
      "同一组内，一个分区同一时刻只会分配给一个消费者。组内通过协调器和",
      "rebalancing",
      "做任务划分。",
      "4.",
      "offset",
      "是什么？",
      "offset",
      "是消费者在分区日志里的读到哪一条的进度标记，类似游标。",
      "5.",
      "Kafka",
      "如何保证顺序？",
      "通过把同一业务",
      "key",
      "写到同一个分区，并控制消费端单分区顺序处理。",
      "6.",
      "ISR",
      "是什么？",
      "ISR",
      "是同步副本集合。只有落在",
      "ISR",
      "中的副本才被认为是健康候选，保证了副本可靠性。",
      "7.",
      "生产者幂等性解决什么问题？",
      "解决重试导致的重复写入问题，让生产者重试更安全。",
      "8.",
      "Kafka",
      "适合做延迟队列吗？",
      "不是原生强项。可以通过时间轮或延迟主题等方式实现，但语义不如专门延迟队列顺手。",
      "9.",
      "什么时候会发生",
      "rebalancing？",
      "消费者加入/退出、分区变化、消费组成员失联时都可能触发。",
      "10.",
      "如何设计一个事件主题？",
      "按业务事件命名，定义清晰",
      "schema，选择合适",
      "partition",
      "key，保证幂等消费和版本兼容。"
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
        "type": "heading",
        "level": 3,
        "text": "1. Kafka 为什么吞吐高？"
      },
      {
        "type": "paragraph",
        "text": "因为它用顺序追加日志代替随机写，并且把读写和消费状态解耦，顺序 I/O 和批处理都更高效。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. Partition 的作用是什么？"
      },
      {
        "type": "paragraph",
        "text": "Partition 决定并行度和顺序边界。一个分区内有序，多分区并行，吞吐和顺序之间靠分区 key 取舍。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3. Consumer Group 的分配机制是什么？"
      },
      {
        "type": "paragraph",
        "text": "同一组内，一个分区同一时刻只会分配给一个消费者。组内通过协调器和 rebalancing 做任务划分。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4. offset 是什么？"
      },
      {
        "type": "paragraph",
        "text": "offset 是消费者在分区日志里的读到哪一条的进度标记，类似游标。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "5. Kafka 如何保证顺序？"
      },
      {
        "type": "paragraph",
        "text": "通过把同一业务 key 写到同一个分区，并控制消费端单分区顺序处理。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "6. ISR 是什么？"
      },
      {
        "type": "paragraph",
        "text": "ISR 是同步副本集合。只有落在 ISR 中的副本才被认为是健康候选，保证了副本可靠性。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "7. 生产者幂等性解决什么问题？"
      },
      {
        "type": "paragraph",
        "text": "解决重试导致的重复写入问题，让生产者重试更安全。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8. Kafka 适合做延迟队列吗？"
      },
      {
        "type": "paragraph",
        "text": "不是原生强项。可以通过时间轮或延迟主题等方式实现，但语义不如专门延迟队列顺手。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9. 什么时候会发生 rebalancing？"
      },
      {
        "type": "paragraph",
        "text": "消费者加入/退出、分区变化、消费组成员失联时都可能触发。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "10. 如何设计一个事件主题？"
      },
      {
        "type": "paragraph",
        "text": "按业务事件命名，定义清晰 schema，选择合适 partition key，保证幂等消费和版本兼容。"
      }
    ],
    "rawMarkdown": "## 本质\n\nKafka 不是传统队列，而是分区追加日志。它把消息顺序写入磁盘，用 offset 表达消费进度。\n\n## 架构\n\n1. Producer 写入分区。\n2. Broker 负责存储和复制。\n3. Partition 定义有序日志。\n4. Consumer Group 做分摊消费。\n5. Controller 负责元数据和副本协调。\n\n## 常用命令\n\n```bash\nkafka-topics.sh --bootstrap-server localhost:9092 --list\nkafka-topics.sh --create --topic events --partitions 6 --replication-factor 3 --bootstrap-server localhost:9092\nkafka-console-producer.sh --bootstrap-server localhost:9092 --topic events\nkafka-console-consumer.sh --bootstrap-server localhost:9092 --topic events --from-beginning\nkafka-consumer-groups.sh --bootstrap-server localhost:9092 --describe --group demo\n```\n\n## 源码重点\n\n- `kafka/log`：日志段、索引、清理\n- `kafka/replica`：副本同步\n- `kafka/group`：消费组协调\n- `kafka/controller`：元数据和 leader 变更\n\n## 典型落地方案\n\n- 事件命名统一，字段版本化。\n- 生产端保证幂等，消费端保证可重试。\n- 分区 key 设计要兼顾顺序和负载分布。\n\n## 10 道面试题\n\n### 1. Kafka 为什么吞吐高？\n\n因为它用顺序追加日志代替随机写，并且把读写和消费状态解耦，顺序 I/O 和批处理都更高效。\n\n### 2. Partition 的作用是什么？\n\nPartition 决定并行度和顺序边界。一个分区内有序，多分区并行，吞吐和顺序之间靠分区 key 取舍。\n\n### 3. Consumer Group 的分配机制是什么？\n\n同一组内，一个分区同一时刻只会分配给一个消费者。组内通过协调器和 rebalancing 做任务划分。\n\n### 4. offset 是什么？\n\noffset 是消费者在分区日志里的读到哪一条的进度标记，类似游标。\n\n### 5. Kafka 如何保证顺序？\n\n通过把同一业务 key 写到同一个分区，并控制消费端单分区顺序处理。\n\n### 6. ISR 是什么？\n\nISR 是同步副本集合。只有落在 ISR 中的副本才被认为是健康候选，保证了副本可靠性。\n\n### 7. 生产者幂等性解决什么问题？\n\n解决重试导致的重复写入问题，让生产者重试更安全。\n\n### 8. Kafka 适合做延迟队列吗？\n\n不是原生强项。可以通过时间轮或延迟主题等方式实现，但语义不如专门延迟队列顺手。\n\n### 9. 什么时候会发生 rebalancing？\n\n消费者加入/退出、分区变化、消费组成员失联时都可能触发。\n\n### 10. 如何设计一个事件主题？\n\n按业务事件命名，定义清晰 schema，选择合适 partition key，保证幂等消费和版本兼容。"
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
      "1.",
      "Kubernetes",
      "的本质是什么？",
      "它是一个声明式分布式控制系统。你定义期望状态，控制器持续把现实拉回这个状态。",
      "2.",
      "etcd",
      "为什么重要？",
      "etcd",
      "是集群事实来源，保存了所有对象状态。没有它，控制面就失去一致性基础。",
      "3.",
      "Pod",
      "Pending",
      "常见原因有哪些？",
      "资源不足、污点和容忍度不匹配、亲和性约束、PVC",
      "未绑定、调度策略不满足，都可能让",
      "Pod",
      "卡在",
      "Pending。",
      "4.",
      "CrashLoopBackOff",
      "怎么定位？",
      "先看",
      "`describe`",
      "里的事件，再看容器日志、启动命令、配置文件和探针设置。大多数问题都在启动前几秒暴露。",
      "5.",
      "Service",
      "和",
      "Ingress",
      "分别解决什么问题？",
      "Service",
      "负责集群内稳定服务发现和负载均衡，Ingress",
      "负责集群外",
      "HTTP/HTTPS",
      "入口路由。",
      "6.",
      "HPA",
      "的核心依据是什么？",
      "通常是",
      "CPU、内存或自定义指标和目标值之间的比例关系。它本质上是一个反馈控制器。",
      "7.",
      "Deployment",
      "滚动更新怎么保证可用？",
      "靠新旧",
      "ReplicaSet",
      "并存、readiness",
      "gate、maxSurge",
      "和",
      "maxUnavailable",
      "共同控制。只有新",
      "Pod",
      "就绪后才逐步切流。",
      "8.",
      "kubelet",
      "负责什么？",
      "它在节点侧执行调谐：拉镜像、挂卷、启容器、做探针、回报状态。",
      "9.",
      "CNI",
      "和",
      "CSI",
      "分别是什么？",
      "CNI",
      "负责容器网络接入，CSI",
      "负责存储挂载。它们把网络和存储能力外接给",
      "K8s。",
      "10.",
      "你怎么设计一个生产可用的",
      "K8s",
      "应用模板？",
      "至少包含",
      "requests/limits、readiness/liveness",
      "probe、ConfigMap/Secret、RBAC、Ingress、HPA、监控和日志采集。"
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
        "type": "heading",
        "level": 3,
        "text": "1. Kubernetes 的本质是什么？"
      },
      {
        "type": "paragraph",
        "text": "它是一个声明式分布式控制系统。你定义期望状态，控制器持续把现实拉回这个状态。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. etcd 为什么重要？"
      },
      {
        "type": "paragraph",
        "text": "etcd 是集群事实来源，保存了所有对象状态。没有它，控制面就失去一致性基础。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3. Pod Pending 常见原因有哪些？"
      },
      {
        "type": "paragraph",
        "text": "资源不足、污点和容忍度不匹配、亲和性约束、PVC 未绑定、调度策略不满足，都可能让 Pod 卡在 Pending。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4. CrashLoopBackOff 怎么定位？"
      },
      {
        "type": "paragraph",
        "text": "先看 `describe` 里的事件，再看容器日志、启动命令、配置文件和探针设置。大多数问题都在启动前几秒暴露。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "5. Service 和 Ingress 分别解决什么问题？"
      },
      {
        "type": "paragraph",
        "text": "Service 负责集群内稳定服务发现和负载均衡，Ingress 负责集群外 HTTP/HTTPS 入口路由。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "6. HPA 的核心依据是什么？"
      },
      {
        "type": "paragraph",
        "text": "通常是 CPU、内存或自定义指标和目标值之间的比例关系。它本质上是一个反馈控制器。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "7. Deployment 滚动更新怎么保证可用？"
      },
      {
        "type": "paragraph",
        "text": "靠新旧 ReplicaSet 并存、readiness gate、maxSurge 和 maxUnavailable 共同控制。只有新 Pod 就绪后才逐步切流。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8. kubelet 负责什么？"
      },
      {
        "type": "paragraph",
        "text": "它在节点侧执行调谐：拉镜像、挂卷、启容器、做探针、回报状态。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9. CNI 和 CSI 分别是什么？"
      },
      {
        "type": "paragraph",
        "text": "CNI 负责容器网络接入，CSI 负责存储挂载。它们把网络和存储能力外接给 K8s。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "10. 你怎么设计一个生产可用的 K8s 应用模板？"
      },
      {
        "type": "paragraph",
        "text": "至少包含 requests/limits、readiness/liveness probe、ConfigMap/Secret、RBAC、Ingress、HPA、监控和日志采集。"
      }
    ],
    "rawMarkdown": "## 本质\n\nKubernetes 不是容器启动器，而是一个期望状态系统。你写的是目标，控制器负责执行差异修正。\n\n## 架构\n\n1. API Server 接收请求。\n2. etcd 保存对象状态。\n3. Scheduler 负责调度决策。\n4. Controller 负责副本和生命周期。\n5. Kubelet 在节点上执行启动。\n6. CNI/CSI 负责网络和存储。\n\n## 常用命令\n\n```bash\nkubectl get pod -A\nkubectl describe pod <name>\nkubectl logs -f <pod>\nkubectl apply -f deploy.yaml\nkubectl delete pod <name>\nkubectl rollout status deploy/<name>\nkubectl rollout undo deploy/<name>\nkubectl get events --sort-by=.lastTimestamp\nkubectl top pod\nkubectl exec -it <pod> -- sh\n```\n\n## 源码重点\n\n- `pkg/scheduler`：过滤和打分\n- `pkg/controller`：副本控制与回收\n- `pkg/kubelet`：节点执行器\n- `staging/src/k8s.io/api`：对象模型\n\n## 典型落地方案\n\n- 用 Deployment/Service/Ingress 构成标准应用模板。\n- 用 requests/limits、HPA、PDB 建立资源和稳定性边界。\n- 用 namespace、RBAC、NetworkPolicy 做租户隔离。\n\n## 10 道面试题\n\n### 1. Kubernetes 的本质是什么？\n\n它是一个声明式分布式控制系统。你定义期望状态，控制器持续把现实拉回这个状态。\n\n### 2. etcd 为什么重要？\n\netcd 是集群事实来源，保存了所有对象状态。没有它，控制面就失去一致性基础。\n\n### 3. Pod Pending 常见原因有哪些？\n\n资源不足、污点和容忍度不匹配、亲和性约束、PVC 未绑定、调度策略不满足，都可能让 Pod 卡在 Pending。\n\n### 4. CrashLoopBackOff 怎么定位？\n\n先看 `describe` 里的事件，再看容器日志、启动命令、配置文件和探针设置。大多数问题都在启动前几秒暴露。\n\n### 5. Service 和 Ingress 分别解决什么问题？\n\nService 负责集群内稳定服务发现和负载均衡，Ingress 负责集群外 HTTP/HTTPS 入口路由。\n\n### 6. HPA 的核心依据是什么？\n\n通常是 CPU、内存或自定义指标和目标值之间的比例关系。它本质上是一个反馈控制器。\n\n### 7. Deployment 滚动更新怎么保证可用？\n\n靠新旧 ReplicaSet 并存、readiness gate、maxSurge 和 maxUnavailable 共同控制。只有新 Pod 就绪后才逐步切流。\n\n### 8. kubelet 负责什么？\n\n它在节点侧执行调谐：拉镜像、挂卷、启容器、做探针、回报状态。\n\n### 9. CNI 和 CSI 分别是什么？\n\nCNI 负责容器网络接入，CSI 负责存储挂载。它们把网络和存储能力外接给 K8s。\n\n### 10. 你怎么设计一个生产可用的 K8s 应用模板？\n\n至少包含 requests/limits、readiness/liveness probe、ConfigMap/Secret、RBAC、Ingress、HPA、监控和日志采集。"
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
      "1.",
      "MySQL",
      "和",
      "PostgreSQL",
      "的差异是什么？",
      "MySQL",
      "更偏成熟生态和",
      "OLTP",
      "场景，PostgreSQL",
      "在复杂",
      "SQL、扩展能力和一致性治理上通常更强。",
      "2.",
      "InnoDB",
      "为什么重要？",
      "因为它承担了事务、锁、页、崩溃恢复等核心能力，真正决定",
      "MySQL",
      "的工程特性。",
      "3.",
      "redo",
      "log",
      "和",
      "binlog",
      "有什么不同？",
      "redo",
      "log",
      "面向崩溃恢复，binlog",
      "面向复制和逻辑变更记录。",
      "4.",
      "什么是",
      "gap",
      "lock？",
      "它是范围锁的一种，用于防止幻读，但也可能扩大锁冲突。",
      "5.",
      "事务隔离级别有哪些？",
      "读未提交、读已提交、可重复读、串行化。隔离越强，并发成本通常越高。",
      "6.",
      "如何设计联合索引？",
      "通常让最常用的过滤条件、排序条件和高选择性字段靠前，同时结合实际",
      "SQL",
      "进行验证。",
      "7.",
      "explain",
      "重点看什么？",
      "看是否走索引、扫描行数、回表、排序、连接方式和过滤效果。",
      "8.",
      "为什么会出现死锁？",
      "多个事务以不同顺序持有资源，互相等待对方释放锁，就会形成循环等待。",
      "9.",
      "复制延迟怎么处理？",
      "降低大事务、优化写入峰值、提高从库",
      "IO",
      "能力，并且对读写分离保持延迟感知。",
      "10.",
      "如何做高可用切换？",
      "要有主从复制、故障检测、切换脚本、应用连接重定向和回切策略。"
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
        "type": "heading",
        "level": 3,
        "text": "1. MySQL 和 PostgreSQL 的差异是什么？"
      },
      {
        "type": "paragraph",
        "text": "MySQL 更偏成熟生态和 OLTP 场景，PostgreSQL 在复杂 SQL、扩展能力和一致性治理上通常更强。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. InnoDB 为什么重要？"
      },
      {
        "type": "paragraph",
        "text": "因为它承担了事务、锁、页、崩溃恢复等核心能力，真正决定 MySQL 的工程特性。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3. redo log 和 binlog 有什么不同？"
      },
      {
        "type": "paragraph",
        "text": "redo log 面向崩溃恢复，binlog 面向复制和逻辑变更记录。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4. 什么是 gap lock？"
      },
      {
        "type": "paragraph",
        "text": "它是范围锁的一种，用于防止幻读，但也可能扩大锁冲突。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "5. 事务隔离级别有哪些？"
      },
      {
        "type": "paragraph",
        "text": "读未提交、读已提交、可重复读、串行化。隔离越强，并发成本通常越高。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "6. 如何设计联合索引？"
      },
      {
        "type": "paragraph",
        "text": "通常让最常用的过滤条件、排序条件和高选择性字段靠前，同时结合实际 SQL 进行验证。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "7. explain 重点看什么？"
      },
      {
        "type": "paragraph",
        "text": "看是否走索引、扫描行数、回表、排序、连接方式和过滤效果。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8. 为什么会出现死锁？"
      },
      {
        "type": "paragraph",
        "text": "多个事务以不同顺序持有资源，互相等待对方释放锁，就会形成循环等待。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9. 复制延迟怎么处理？"
      },
      {
        "type": "paragraph",
        "text": "降低大事务、优化写入峰值、提高从库 IO 能力，并且对读写分离保持延迟感知。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "10. 如何做高可用切换？"
      },
      {
        "type": "paragraph",
        "text": "要有主从复制、故障检测、切换脚本、应用连接重定向和回切策略。"
      }
    ],
    "rawMarkdown": "## 本质\n\nMySQL 的核心是事务、索引和存储引擎。业务看到的是 SQL，真正承担并发和持久化的是 InnoDB。\n\n## 架构\n\n1. SQL 层解析和优化。\n2. InnoDB 负责事务、锁和页。\n3. undo/redo 处理回滚和恢复。\n4. binlog 负责复制。\n\n## 常用命令\n\n```bash\nmysql -uroot -p\nshow databases;\nshow tables;\nexplain select * from t where id = 1;\nshow processlist;\nshow engine innodb status\\G\n```\n\n## 源码重点\n\n- `sql`：SQL 层\n- `storage/innobase`：InnoDB\n- `btr`：B+Tree\n- `trx`：事务\n- `row`：行记录\n\n## 典型落地方案\n\n- 对 OLTP 用合适的索引和事务边界。\n- 对读多场景做读写分离。\n- 对大表做归档、分区和慢查询治理。\n\n## 10 道面试题\n\n### 1. MySQL 和 PostgreSQL 的差异是什么？\n\nMySQL 更偏成熟生态和 OLTP 场景，PostgreSQL 在复杂 SQL、扩展能力和一致性治理上通常更强。\n\n### 2. InnoDB 为什么重要？\n\n因为它承担了事务、锁、页、崩溃恢复等核心能力，真正决定 MySQL 的工程特性。\n\n### 3. redo log 和 binlog 有什么不同？\n\nredo log 面向崩溃恢复，binlog 面向复制和逻辑变更记录。\n\n### 4. 什么是 gap lock？\n\n它是范围锁的一种，用于防止幻读，但也可能扩大锁冲突。\n\n### 5. 事务隔离级别有哪些？\n\n读未提交、读已提交、可重复读、串行化。隔离越强，并发成本通常越高。\n\n### 6. 如何设计联合索引？\n\n通常让最常用的过滤条件、排序条件和高选择性字段靠前，同时结合实际 SQL 进行验证。\n\n### 7. explain 重点看什么？\n\n看是否走索引、扫描行数、回表、排序、连接方式和过滤效果。\n\n### 8. 为什么会出现死锁？\n\n多个事务以不同顺序持有资源，互相等待对方释放锁，就会形成循环等待。\n\n### 9. 复制延迟怎么处理？\n\n降低大事务、优化写入峰值、提高从库 IO 能力，并且对读写分离保持延迟感知。\n\n### 10. 如何做高可用切换？\n\n要有主从复制、故障检测、切换脚本、应用连接重定向和回切策略。"
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
      "1.",
      "NGINX",
      "为什么高性能？",
      "它采用事件驱动和非阻塞",
      "IO，一个",
      "worker",
      "可以处理很多连接，避免了大量线程开销。",
      "2.",
      "Master/Worker",
      "模型是什么？",
      "Master",
      "负责配置和进程管理，Worker",
      "负责处理请求。这样可以做到平滑重载和高并发处理。",
      "3.",
      "反向代理和负载均衡有什么区别？",
      "反向代理负责替客户端转发请求，负载均衡是把请求分配给多个后端实例。",
      "4.",
      "为什么",
      "NGINX",
      "适合做入口层？",
      "因为它擅长连接管理、TLS",
      "终止、路由和限流，特别适合作为高流量边界层。",
      "5.",
      "rewrite",
      "和",
      "location",
      "如何匹配？",
      "location",
      "先按前缀、正则等规则匹配，rewrite",
      "会影响",
      "URI",
      "路由和后续处理。",
      "6.",
      "upstream",
      "负载均衡算法有哪些？",
      "轮询、加权轮询、最少连接等。选择依据是后端性能和流量特征。",
      "7.",
      "`nginx",
      "-t`",
      "检查什么？",
      "它检查配置语法和引用文件是否正确，避免重载后直接把线上打挂。",
      "8.",
      "NGINX",
      "如何做限流？",
      "通常通过漏桶/令牌桶思想限制请求速率，配合共享内存区记录状态。",
      "9.",
      "如何定位",
      "502/504？",
      "502",
      "多看上游应用异常和连接错误，504",
      "多看上游超时和后端处理时长。",
      "10.",
      "NGINX",
      "和网关的关系是什么？",
      "NGINX",
      "可以承担网关的部分能力，但现代网关通常还包括鉴权、路由、策略和插件体系。"
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
        "type": "heading",
        "level": 3,
        "text": "1. NGINX 为什么高性能？"
      },
      {
        "type": "paragraph",
        "text": "它采用事件驱动和非阻塞 IO，一个 worker 可以处理很多连接，避免了大量线程开销。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. Master/Worker 模型是什么？"
      },
      {
        "type": "paragraph",
        "text": "Master 负责配置和进程管理，Worker 负责处理请求。这样可以做到平滑重载和高并发处理。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3. 反向代理和负载均衡有什么区别？"
      },
      {
        "type": "paragraph",
        "text": "反向代理负责替客户端转发请求，负载均衡是把请求分配给多个后端实例。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4. 为什么 NGINX 适合做入口层？"
      },
      {
        "type": "paragraph",
        "text": "因为它擅长连接管理、TLS 终止、路由和限流，特别适合作为高流量边界层。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "5. rewrite 和 location 如何匹配？"
      },
      {
        "type": "paragraph",
        "text": "location 先按前缀、正则等规则匹配，rewrite 会影响 URI 路由和后续处理。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "6. upstream 负载均衡算法有哪些？"
      },
      {
        "type": "paragraph",
        "text": "轮询、加权轮询、最少连接等。选择依据是后端性能和流量特征。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "7. `nginx -t` 检查什么？"
      },
      {
        "type": "paragraph",
        "text": "它检查配置语法和引用文件是否正确，避免重载后直接把线上打挂。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8. NGINX 如何做限流？"
      },
      {
        "type": "paragraph",
        "text": "通常通过漏桶/令牌桶思想限制请求速率，配合共享内存区记录状态。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9. 如何定位 502/504？"
      },
      {
        "type": "paragraph",
        "text": "502 多看上游应用异常和连接错误，504 多看上游超时和后端处理时长。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "10. NGINX 和网关的关系是什么？"
      },
      {
        "type": "paragraph",
        "text": "NGINX 可以承担网关的部分能力，但现代网关通常还包括鉴权、路由、策略和插件体系。"
      }
    ],
    "rawMarkdown": "## 本质\n\nNGINX 的核心是事件驱动和非阻塞 IO。它通过少量 worker 处理大量连接。\n\n## 架构\n\n1. Master 进程管理配置和 worker。\n2. Worker 用事件循环处理连接。\n3. HTTP upstream 做反向代理。\n4. Stream 模块处理 TCP/UDP。\n5. 多种负载均衡策略决定后端选择。\n\n## 常用命令\n\n```bash\nnginx -t\nnginx -s reload\nnginx -s stop\nnginx -V\ntail -f /var/log/nginx/access.log\ntail -f /var/log/nginx/error.log\n```\n\n## 源码重点\n\n- `src/event`：事件循环\n- `src/http`：HTTP 请求处理\n- `src/http/ngx_http_upstream*`：上游代理\n- `src/http/ngx_http_upstream_round_robin.c`：轮询负载均衡\n\n## 典型落地方案\n\n- 用 NGINX 做入口代理和 TLS 终止。\n- 用 upstream 配后端应用池。\n- 配置超时、缓存和限流，防止流量风暴。\n\n## 10 道面试题\n\n### 1. NGINX 为什么高性能？\n\n它采用事件驱动和非阻塞 IO，一个 worker 可以处理很多连接，避免了大量线程开销。\n\n### 2. Master/Worker 模型是什么？\n\nMaster 负责配置和进程管理，Worker 负责处理请求。这样可以做到平滑重载和高并发处理。\n\n### 3. 反向代理和负载均衡有什么区别？\n\n反向代理负责替客户端转发请求，负载均衡是把请求分配给多个后端实例。\n\n### 4. 为什么 NGINX 适合做入口层？\n\n因为它擅长连接管理、TLS 终止、路由和限流，特别适合作为高流量边界层。\n\n### 5. rewrite 和 location 如何匹配？\n\nlocation 先按前缀、正则等规则匹配，rewrite 会影响 URI 路由和后续处理。\n\n### 6. upstream 负载均衡算法有哪些？\n\n轮询、加权轮询、最少连接等。选择依据是后端性能和流量特征。\n\n### 7. `nginx -t` 检查什么？\n\n它检查配置语法和引用文件是否正确，避免重载后直接把线上打挂。\n\n### 8. NGINX 如何做限流？\n\n通常通过漏桶/令牌桶思想限制请求速率，配合共享内存区记录状态。\n\n### 9. 如何定位 502/504？\n\n502 多看上游应用异常和连接错误，504 多看上游超时和后端处理时长。\n\n### 10. NGINX 和网关的关系是什么？\n\nNGINX 可以承担网关的部分能力，但现代网关通常还包括鉴权、路由、策略和插件体系。"
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
      "1.",
      "PostgreSQL",
      "为什么适合核心业务？",
      "因为它的事务能力、SQL",
      "表达力和恢复能力都很强，适合需要一致性和复杂查询的系统。",
      "2.",
      "MVCC",
      "解决什么问题？",
      "它让读写并发更友好，读事务可以看到一致快照，减少锁冲突。",
      "3.",
      "B+Tree",
      "索引有什么优势？",
      "它能保持有序、支持范围查询，并且树高较低，查找效率高。",
      "4.",
      "WAL",
      "的作用是什么？",
      "WAL",
      "先记录日志再落盘数据页，保证崩溃后可以按顺序重放恢复。",
      "5.",
      "EXPLAIN",
      "里重点看什么？",
      "重点看扫描方式、索引命中、行数估计、join",
      "顺序和排序/聚合开销。",
      "6.",
      "长事务为什么危险？",
      "长事务会拖住版本清理，增加锁等待，也会让回收和复制压力变大。",
      "7.",
      "主从复制如何工作？",
      "主库写",
      "WAL，从库按日志顺序重放，保持数据同步。",
      "8.",
      "VACUUM",
      "为什么重要？",
      "它负责清理旧版本和回收空间，避免表膨胀和性能下降。",
      "9.",
      "事务隔离级别有什么差异？",
      "隔离级别越高，一致性越强，但并发冲突和性能代价也通常越高。",
      "10.",
      "如何定位慢",
      "SQL？",
      "先看执行计划和索引，再看返回行数、排序、join、统计信息和应用参数。"
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
        "type": "heading",
        "level": 3,
        "text": "1. PostgreSQL 为什么适合核心业务？"
      },
      {
        "type": "paragraph",
        "text": "因为它的事务能力、SQL 表达力和恢复能力都很强，适合需要一致性和复杂查询的系统。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. MVCC 解决什么问题？"
      },
      {
        "type": "paragraph",
        "text": "它让读写并发更友好，读事务可以看到一致快照，减少锁冲突。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3. B+Tree 索引有什么优势？"
      },
      {
        "type": "paragraph",
        "text": "它能保持有序、支持范围查询，并且树高较低，查找效率高。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4. WAL 的作用是什么？"
      },
      {
        "type": "paragraph",
        "text": "WAL 先记录日志再落盘数据页，保证崩溃后可以按顺序重放恢复。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "5. EXPLAIN 里重点看什么？"
      },
      {
        "type": "paragraph",
        "text": "重点看扫描方式、索引命中、行数估计、join 顺序和排序/聚合开销。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "6. 长事务为什么危险？"
      },
      {
        "type": "paragraph",
        "text": "长事务会拖住版本清理，增加锁等待，也会让回收和复制压力变大。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "7. 主从复制如何工作？"
      },
      {
        "type": "paragraph",
        "text": "主库写 WAL，从库按日志顺序重放，保持数据同步。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8. VACUUM 为什么重要？"
      },
      {
        "type": "paragraph",
        "text": "它负责清理旧版本和回收空间，避免表膨胀和性能下降。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9. 事务隔离级别有什么差异？"
      },
      {
        "type": "paragraph",
        "text": "隔离级别越高，一致性越强，但并发冲突和性能代价也通常越高。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "10. 如何定位慢 SQL？"
      },
      {
        "type": "paragraph",
        "text": "先看执行计划和索引，再看返回行数、排序、join、统计信息和应用参数。"
      }
    ],
    "rawMarkdown": "## 本质\n\nPostgreSQL 的核心是事务一致性、SQL 能力和可恢复性。它既是数据库，也是查询引擎和恢复系统。\n\n## 架构\n\n1. Parser/Planner 生成执行计划。\n2. Executor 运行计划。\n3. Storage 管理页和索引。\n4. MVCC 处理并发。\n5. WAL 保障崩溃恢复。\n\n## 常用命令\n\n```bash\npsql -h localhost -U postgres\npsql -c \"select now();\"\npsql -c \"\\l\"\npsql -c \"\\dt\"\npsql -c \"explain analyze select * from t where id = 1;\"\n```\n\n## 源码重点\n\n- `optimizer`：计划选择\n- `executor`：执行路径\n- `storage`：页与缓冲\n- `wal`：日志恢复\n\n## 典型落地方案\n\n- 关键业务用主从复制和备份恢复。\n- 慢查询靠索引、分区和执行计划优化。\n- 对长事务和锁等待进行监控治理。\n\n## 10 道面试题\n\n### 1. PostgreSQL 为什么适合核心业务？\n\n因为它的事务能力、SQL 表达力和恢复能力都很强，适合需要一致性和复杂查询的系统。\n\n### 2. MVCC 解决什么问题？\n\n它让读写并发更友好，读事务可以看到一致快照，减少锁冲突。\n\n### 3. B+Tree 索引有什么优势？\n\n它能保持有序、支持范围查询，并且树高较低，查找效率高。\n\n### 4. WAL 的作用是什么？\n\nWAL 先记录日志再落盘数据页，保证崩溃后可以按顺序重放恢复。\n\n### 5. EXPLAIN 里重点看什么？\n\n重点看扫描方式、索引命中、行数估计、join 顺序和排序/聚合开销。\n\n### 6. 长事务为什么危险？\n\n长事务会拖住版本清理，增加锁等待，也会让回收和复制压力变大。\n\n### 7. 主从复制如何工作？\n\n主库写 WAL，从库按日志顺序重放，保持数据同步。\n\n### 8. VACUUM 为什么重要？\n\n它负责清理旧版本和回收空间，避免表膨胀和性能下降。\n\n### 9. 事务隔离级别有什么差异？\n\n隔离级别越高，一致性越强，但并发冲突和性能代价也通常越高。\n\n### 10. 如何定位慢 SQL？\n\n先看执行计划和索引，再看返回行数、排序、join、统计信息和应用参数。"
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
      "1.",
      "RabbitMQ",
      "和",
      "Kafka",
      "有什么差异？",
      "RabbitMQ",
      "更强调路由和确认，Kafka",
      "更强调吞吐和日志流。前者适合复杂投递语义，后者适合大规模事件流。",
      "2.",
      "exchange",
      "的几种类型分别是什么？",
      "direct",
      "按精确",
      "key",
      "路由，topic",
      "按模式匹配，fanout",
      "广播，headers",
      "按头部匹配。",
      "3.",
      "ack",
      "为什么重要？",
      "ack",
      "决定消息是否可以从队列中移除。没有",
      "ack，消息会被重新投递，可靠性和重复消费语义都依赖它。",
      "4.",
      "什么是死信队列？",
      "当消息被拒绝、过期或达到最大重试条件时，进入死信队列做后续处理。",
      "5.",
      "prefetch",
      "是什么？",
      "它限制消费者一次未确认消息的数量，用来防止某个消费者拿太多消息却处理不过来。",
      "6.",
      "如何保证消费者幂等？",
      "记录业务唯一",
      "ID、控制重复写入、使用去重表或幂等键，保证消息重复投递也不会产生副作用。",
      "7.",
      "延迟消息怎么实现？",
      "可以用",
      "TTL",
      "+",
      "死信队列，或者使用专门插件和延迟交换机。",
      "8.",
      "为什么会出现重复消费？",
      "因为消息投递通常追求至少一次语义，消费者在",
      "ack",
      "前宕机、超时或重试都可能导致重复。",
      "9.",
      "requeue",
      "会带来什么问题？",
      "它可能导致消息反复回到队头，形成“毒消息”循环，拖慢整个队列。",
      "10.",
      "什么场景更适合",
      "RabbitMQ？",
      "业务事件路由复杂、投递确认重要、失败重试和死信处理清晰的场景更适合。"
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
        "type": "heading",
        "level": 3,
        "text": "1. RabbitMQ 和 Kafka 有什么差异？"
      },
      {
        "type": "paragraph",
        "text": "RabbitMQ 更强调路由和确认，Kafka 更强调吞吐和日志流。前者适合复杂投递语义，后者适合大规模事件流。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. exchange 的几种类型分别是什么？"
      },
      {
        "type": "paragraph",
        "text": "direct 按精确 key 路由，topic 按模式匹配，fanout 广播，headers 按头部匹配。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3. ack 为什么重要？"
      },
      {
        "type": "paragraph",
        "text": "ack 决定消息是否可以从队列中移除。没有 ack，消息会被重新投递，可靠性和重复消费语义都依赖它。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4. 什么是死信队列？"
      },
      {
        "type": "paragraph",
        "text": "当消息被拒绝、过期或达到最大重试条件时，进入死信队列做后续处理。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "5. prefetch 是什么？"
      },
      {
        "type": "paragraph",
        "text": "它限制消费者一次未确认消息的数量，用来防止某个消费者拿太多消息却处理不过来。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "6. 如何保证消费者幂等？"
      },
      {
        "type": "paragraph",
        "text": "记录业务唯一 ID、控制重复写入、使用去重表或幂等键，保证消息重复投递也不会产生副作用。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "7. 延迟消息怎么实现？"
      },
      {
        "type": "paragraph",
        "text": "可以用 TTL + 死信队列，或者使用专门插件和延迟交换机。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8. 为什么会出现重复消费？"
      },
      {
        "type": "paragraph",
        "text": "因为消息投递通常追求至少一次语义，消费者在 ack 前宕机、超时或重试都可能导致重复。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9. requeue 会带来什么问题？"
      },
      {
        "type": "paragraph",
        "text": "它可能导致消息反复回到队头，形成“毒消息”循环，拖慢整个队列。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "10. 什么场景更适合 RabbitMQ？"
      },
      {
        "type": "paragraph",
        "text": "业务事件路由复杂、投递确认重要、失败重试和死信处理清晰的场景更适合。"
      }
    ],
    "rawMarkdown": "## 本质\n\nRabbitMQ 更像消息路由层。消息先进入 exchange，再根据绑定规则进入 queue，由消费者确认。\n\n## 架构\n\n1. Producer 发送消息到 exchange。\n2. Exchange 按类型路由。\n3. Queue 保存待消费消息。\n4. Consumer ack/nack 消息。\n5. Dead Letter 处理失败消息。\n\n## 常用命令\n\n```bash\nrabbitmqctl status\nrabbitmqctl list_queues\nrabbitmqctl list_exchanges\nrabbitmqctl list_bindings\nrabbitmq-plugins enable rabbitmq_management\n```\n\n## 源码重点\n\n- `rabbit_channel`：通道与协议流转\n- `rabbit_queue`：队列存储与投递\n- `rabbit_exchange`：交换机路由\n- ack/nack/requeue：确认语义\n\n## 典型落地方案\n\n- 用 direct/topic/fanout 分离不同消息类型。\n- 对失败消息统一进死信队列。\n- 消费侧保持幂等，避免重复投递造成副作用。\n\n## 10 道面试题\n\n### 1. RabbitMQ 和 Kafka 有什么差异？\n\nRabbitMQ 更强调路由和确认，Kafka 更强调吞吐和日志流。前者适合复杂投递语义，后者适合大规模事件流。\n\n### 2. exchange 的几种类型分别是什么？\n\ndirect 按精确 key 路由，topic 按模式匹配，fanout 广播，headers 按头部匹配。\n\n### 3. ack 为什么重要？\n\nack 决定消息是否可以从队列中移除。没有 ack，消息会被重新投递，可靠性和重复消费语义都依赖它。\n\n### 4. 什么是死信队列？\n\n当消息被拒绝、过期或达到最大重试条件时，进入死信队列做后续处理。\n\n### 5. prefetch 是什么？\n\n它限制消费者一次未确认消息的数量，用来防止某个消费者拿太多消息却处理不过来。\n\n### 6. 如何保证消费者幂等？\n\n记录业务唯一 ID、控制重复写入、使用去重表或幂等键，保证消息重复投递也不会产生副作用。\n\n### 7. 延迟消息怎么实现？\n\n可以用 TTL + 死信队列，或者使用专门插件和延迟交换机。\n\n### 8. 为什么会出现重复消费？\n\n因为消息投递通常追求至少一次语义，消费者在 ack 前宕机、超时或重试都可能导致重复。\n\n### 9. requeue 会带来什么问题？\n\n它可能导致消息反复回到队头，形成“毒消息”循环，拖慢整个队列。\n\n### 10. 什么场景更适合 RabbitMQ？\n\n业务事件路由复杂、投递确认重要、失败重试和死信处理清晰的场景更适合。"
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
      "1.",
      "Redis",
      "为什么快？",
      "它把高频操作放在内存里，并且使用高效数据结构和事件循环处理网络",
      "I/O，减少了磁盘和线程切换开销。",
      "2.",
      "Redis",
      "单线程为什么还能高性能？",
      "Redis",
      "的单线程主要负责执行命令，网络",
      "I/O",
      "用多路复用。避免了锁竞争和上下文切换，吞吐反而很高。",
      "3.",
      "LRU",
      "和",
      "LFU",
      "的区别是什么？",
      "LRU",
      "看最近是否访问，LFU",
      "看访问频率。前者适合短期热点，后者更适合稳定热点。",
      "4.",
      "缓存穿透、击穿、雪崩分别是什么？",
      "穿透是查不存在的数据，击穿是热点",
      "key",
      "失效，雪崩是大量",
      "key",
      "同时过期。它们分别对应空值、互斥和过期时间分散策略。",
      "5.",
      "Redis",
      "过期键是怎么处理的？",
      "Redis",
      "同时做惰性删除和主动过期扫描。这样既不会立即阻塞，也能逐步回收过期数据。",
      "6.",
      "AOF",
      "和",
      "RDB",
      "有什么差异？",
      "AOF",
      "记录每次写命令，恢复更细；RDB",
      "是快照，恢复更快、文件更紧凑。前者偏可靠，后者偏效率。",
      "7.",
      "分布式锁如何避免误删？",
      "锁要带唯一",
      "token，释放时校验持有者身份，通常配合",
      "Lua",
      "脚本原子执行。否则会误删别人的锁。",
      "8.",
      "什么是渐进式",
      "rehash？",
      "哈希表扩容不一次性搬完，而是在后续命令执行中分批迁移。这样能避免长时间阻塞。",
      "9.",
      "Redis",
      "适合做消息队列吗？",
      "可以做轻量队列，但不适合复杂可靠消息系统。它缺少",
      "Kafka/RabbitMQ",
      "那种成熟的持久化、确认和重试语义。",
      "10.",
      "集群模式下",
      "key",
      "为什么要哈希槽？",
      "哈希槽把",
      "key",
      "分布到不同节点，便于扩展和迁移。它解决的是水平扩展和重分片问题。"
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
        "type": "heading",
        "level": 3,
        "text": "1. Redis 为什么快？"
      },
      {
        "type": "paragraph",
        "text": "它把高频操作放在内存里，并且使用高效数据结构和事件循环处理网络 I/O，减少了磁盘和线程切换开销。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. Redis 单线程为什么还能高性能？"
      },
      {
        "type": "paragraph",
        "text": "Redis 的单线程主要负责执行命令，网络 I/O 用多路复用。避免了锁竞争和上下文切换，吞吐反而很高。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3. LRU 和 LFU 的区别是什么？"
      },
      {
        "type": "paragraph",
        "text": "LRU 看最近是否访问，LFU 看访问频率。前者适合短期热点，后者更适合稳定热点。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4. 缓存穿透、击穿、雪崩分别是什么？"
      },
      {
        "type": "paragraph",
        "text": "穿透是查不存在的数据，击穿是热点 key 失效，雪崩是大量 key 同时过期。它们分别对应空值、互斥和过期时间分散策略。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "5. Redis 过期键是怎么处理的？"
      },
      {
        "type": "paragraph",
        "text": "Redis 同时做惰性删除和主动过期扫描。这样既不会立即阻塞，也能逐步回收过期数据。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "6. AOF 和 RDB 有什么差异？"
      },
      {
        "type": "paragraph",
        "text": "AOF 记录每次写命令，恢复更细；RDB 是快照，恢复更快、文件更紧凑。前者偏可靠，后者偏效率。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "7. 分布式锁如何避免误删？"
      },
      {
        "type": "paragraph",
        "text": "锁要带唯一 token，释放时校验持有者身份，通常配合 Lua 脚本原子执行。否则会误删别人的锁。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8. 什么是渐进式 rehash？"
      },
      {
        "type": "paragraph",
        "text": "哈希表扩容不一次性搬完，而是在后续命令执行中分批迁移。这样能避免长时间阻塞。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9. Redis 适合做消息队列吗？"
      },
      {
        "type": "paragraph",
        "text": "可以做轻量队列，但不适合复杂可靠消息系统。它缺少 Kafka/RabbitMQ 那种成熟的持久化、确认和重试语义。"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "10. 集群模式下 key 为什么要哈希槽？"
      },
      {
        "type": "paragraph",
        "text": "哈希槽把 key 分布到不同节点，便于扩展和迁移。它解决的是水平扩展和重分片问题。"
      }
    ],
    "rawMarkdown": "## 本质\n\nRedis 的核心是“快”：用内存和高效数据结构把访问延迟降到极低，同时用复制和持久化保证一定程度的可靠性。\n\n## 架构\n\n1. 单线程事件循环处理网络和命令。\n2. 内存字典和多种对象编码存放数据。\n3. AOF/RDB 负责持久化。\n4. 主从复制和哨兵/集群负责可用性。\n\n## 常用命令\n\n```bash\nredis-cli ping\nredis-cli set k v\nredis-cli get k\nredis-cli ttl k\nredis-cli info memory\nredis-cli slowlog get\nredis-cli monitor\nredis-cli scan 0\nredis-cli eval \"return redis.call('get', KEYS[1])\" 1 k\n```\n\n## 源码重点\n\n- `server.c`：主事件循环与命令执行入口\n- `dict.c`：哈希表与渐进式 rehash\n- `expire.c`：过期管理\n- `evict.c`：淘汰策略\n- `t_*.c`：各类数据结构\n\n## 典型落地方案\n\n- 做缓存旁路，数据库是事实源，Redis 是加速层。\n- 对热点 key 做拆分、预热和限流。\n- 对锁、计数、排行榜要严格定义幂等和过期策略。\n\n## 10 道面试题\n\n### 1. Redis 为什么快？\n\n它把高频操作放在内存里，并且使用高效数据结构和事件循环处理网络 I/O，减少了磁盘和线程切换开销。\n\n### 2. Redis 单线程为什么还能高性能？\n\nRedis 的单线程主要负责执行命令，网络 I/O 用多路复用。避免了锁竞争和上下文切换，吞吐反而很高。\n\n### 3. LRU 和 LFU 的区别是什么？\n\nLRU 看最近是否访问，LFU 看访问频率。前者适合短期热点，后者更适合稳定热点。\n\n### 4. 缓存穿透、击穿、雪崩分别是什么？\n\n穿透是查不存在的数据，击穿是热点 key 失效，雪崩是大量 key 同时过期。它们分别对应空值、互斥和过期时间分散策略。\n\n### 5. Redis 过期键是怎么处理的？\n\nRedis 同时做惰性删除和主动过期扫描。这样既不会立即阻塞，也能逐步回收过期数据。\n\n### 6. AOF 和 RDB 有什么差异？\n\nAOF 记录每次写命令，恢复更细；RDB 是快照，恢复更快、文件更紧凑。前者偏可靠，后者偏效率。\n\n### 7. 分布式锁如何避免误删？\n\n锁要带唯一 token，释放时校验持有者身份，通常配合 Lua 脚本原子执行。否则会误删别人的锁。\n\n### 8. 什么是渐进式 rehash？\n\n哈希表扩容不一次性搬完，而是在后续命令执行中分批迁移。这样能避免长时间阻塞。\n\n### 9. Redis 适合做消息队列吗？\n\n可以做轻量队列，但不适合复杂可靠消息系统。它缺少 Kafka/RabbitMQ 那种成熟的持久化、确认和重试语义。\n\n### 10. 集群模式下 key 为什么要哈希槽？\n\n哈希槽把 key 分布到不同节点，便于扩展和迁移。它解决的是水平扩展和重分片问题。"
  }
];
