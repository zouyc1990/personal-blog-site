window.BLOG_POSTS = [
  {
    "id": "sre-change-philosophy",
    "title": "SRE 理念：从业务目标拆到故障链路",
    "category": "SRE理念",
    "date": "2026-05-11",
    "readTime": "10 min",
    "excerpt": "真正的 SRE 不是救火，而是把业务目标、可靠性预算、变更系统和底层探针连成一条可执行链路。",
    "quote": "顶层看错误预算，底层看请求如何失败。",
    "topThinking": "先定义用户可感知的可靠性目标，再用错误预算约束发布速度。",
    "deepDive": "拆到 SLIs、探针粒度、超时重试、限流熔断、回滚路径和告警证据。",
    "body": [
      "顶层思维：稳定性不是越高越好",
      "稳定性首先是一个业务取舍问题。系统不是为了“永不出错”而存在，而是为了在合理成本下持续交付用户价值。",
      "SRE",
      "的顶层框架可以用四句话概括：",
      "用户体验定义",
      "SLO，而不是机器指标定义",
      "SLO",
      "Error",
      "Budget",
      "把可靠性和发布速度放到同一个账本",
      "变更是故障的最大入口，所以发布系统必须被治理",
      "事故复盘的目标不是找人，而是修正系统默认路径",
      "底层拆解：一次请求如何变成一次事故",
      "把一个线上故障拆到底，通常会看到这条链路：",
      "客户端请求进入网关",
      "网关转发到服务实例",
      "服务访问缓存、数据库或下游",
      "API",
      "某个依赖延迟升高",
      "线程池/连接池被占满",
      "重试放大流量",
      "错误率升高，告警触发太晚",
      "回滚路径不清晰，恢复时间被拉长",
      "这说明可靠性设计不能只写“加监控”。真正要落地的是每一层的失败控制。",
      "可执行检查点",
      "SLI",
      "是否直接对应用户体验，比如成功率、端到端延迟、关键流程完成率",
      "告警是否只在需要人行动时触发",
      "发布是否有灰度、暂停、自动回滚和一键回滚",
      "超时是否小于调用方等待窗口",
      "重试是否有指数退避、抖动和最大次数",
      "熔断是否能保护下游，而不是把故障扩散到全链路",
      "一个最小",
      "SLO",
      "片段",
      "service:",
      "payment-api",
      "slo:",
      "objective:",
      "99.9",
      "window:",
      "30d",
      "sli:",
      "good_events:",
      "http_requests_total{status!~\"5..\",route=\"/pay\"}",
      "total_events:",
      "http_requests_total{route=\"/pay\"}",
      "alerts:",
      "burn_rate:",
      "fast:",
      "14.4",
      "slow:",
      "6",
      "这个配置的意义不在",
      "YAML",
      "本身，而在它把顶层目标和底层数据连起来：什么叫好事件，什么叫坏事件，什么时候必须停止发布。"
    ],
    "bodyBlocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "顶层思维：稳定性不是越高越好"
      },
      {
        "type": "paragraph",
        "text": "稳定性首先是一个业务取舍问题。系统不是为了“永不出错”而存在，而是为了在合理成本下持续交付用户价值。"
      },
      {
        "type": "paragraph",
        "text": "SRE 的顶层框架可以用四句话概括："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "用户体验定义 SLO，而不是机器指标定义 SLO",
          "Error Budget 把可靠性和发布速度放到同一个账本",
          "变更是故障的最大入口，所以发布系统必须被治理",
          "事故复盘的目标不是找人，而是修正系统默认路径"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层拆解：一次请求如何变成一次事故"
      },
      {
        "type": "paragraph",
        "text": "把一个线上故障拆到底，通常会看到这条链路："
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "客户端请求进入网关",
          "网关转发到服务实例",
          "服务访问缓存、数据库或下游 API",
          "某个依赖延迟升高",
          "线程池/连接池被占满",
          "重试放大流量",
          "错误率升高，告警触发太晚",
          "回滚路径不清晰，恢复时间被拉长"
        ]
      },
      {
        "type": "paragraph",
        "text": "这说明可靠性设计不能只写“加监控”。真正要落地的是每一层的失败控制。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "可执行检查点"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "SLI 是否直接对应用户体验，比如成功率、端到端延迟、关键流程完成率",
          "告警是否只在需要人行动时触发",
          "发布是否有灰度、暂停、自动回滚和一键回滚",
          "超时是否小于调用方等待窗口",
          "重试是否有指数退避、抖动和最大次数",
          "熔断是否能保护下游，而不是把故障扩散到全链路"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "一个最小 SLO 片段"
      },
      {
        "type": "code",
        "language": "yaml",
        "text": "service: payment-api\nslo:\n  objective: 99.9\n  window: 30d\n  sli:\n    good_events: http_requests_total{status!~\"5..\",route=\"/pay\"}\n    total_events: http_requests_total{route=\"/pay\"}\nalerts:\n  burn_rate:\n    fast: 14.4\n    slow: 6"
      },
      {
        "type": "paragraph",
        "text": "这个配置的意义不在 YAML 本身，而在它把顶层目标和底层数据连起来：什么叫好事件，什么叫坏事件，什么时候必须停止发布。"
      }
    ],
    "colors": [
      "#7f4d64",
      "#f1dfb8",
      "#5b7f45"
    ]
  },
  {
    "id": "ai-product-engineering",
    "title": "AI：从战略闭环拆到模型评测",
    "category": "AI",
    "date": "2026-05-10",
    "readTime": "11 min",
    "excerpt": "AI 产品不能只展示模型能力，必须建立场景、数据、评测、反馈和交付稳定性的闭环。",
    "quote": "顶层看价值闭环，底层看每一次 token 如何被约束和验证。",
    "topThinking": "先判断 AI 是否进入高频工作流，并能产生独特反馈数据。",
    "deepDive": "拆到 prompt、检索召回、rerank、上下文窗口、评测集、幻觉率和成本延迟。",
    "body": [
      "顶层思维：AI",
      "产品的核心不是模型",
      "模型能力会持续扩散，单纯“接入大模型”很快会失去差异。真正要判断的是这个产品有没有形成闭环。",
      "一个",
      "AI",
      "产品至少要回答四个顶层问题：",
      "任务是否足够高频，用户是否愿意在这里停留",
      "输入上下文是否独特，是否会随着使用越来越懂用户",
      "输出质量是否能被评测，而不是只能靠感觉",
      "结果是否能进入业务流程，而不是停在聊天窗口",
      "底层拆解：RAG",
      "不是把文档塞进向量库",
      "一个可用的",
      "RAG",
      "链路至少包含：",
      "文档切分：按语义边界切，而不是机械固定长度",
      "向量召回：保证相关内容能进入候选集",
      "关键词召回：补齐专有名词、编号、接口名",
      "rerank：把候选内容按问题相关性重新排序",
      "prompt",
      "组装：控制上下文、格式和不可回答策略",
      "评测：用固定问题集看命中率、引用准确率、幻觉率",
      "技术抓手",
      "chunk",
      "size",
      "不能只看",
      "token",
      "数，要看信息是否完整",
      "top_k",
      "过大会增加噪声，过小会漏召回",
      "prompt",
      "必须要求引用来源，否则很难定位错误",
      "评测集要覆盖简单事实、跨文档综合、无答案问题",
      "线上要记录",
      "query、retrieved",
      "chunks、answer、latency、cost",
      "一个",
      "RAG",
      "评测样例",
      "{",
      "\"question\":",
      "\"支付接口超时后系统会重试几次？\",",
      "\"expected_sources\":",
      "[\"runbook/payment-timeout.md\"],",
      "\"expected_answer\":",
      "\"最多重试",
      "2",
      "次，并使用指数退避。\",",
      "\"checks\":",
      "[\"source_hit\",",
      "\"answer_grounded\",",
      "\"no_extra_policy\"]",
      "}",
      "顶层决定这个",
      "AI",
      "能不能创造价值；底层决定它能不能稳定交付价值。"
    ],
    "bodyBlocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "顶层思维：AI 产品的核心不是模型"
      },
      {
        "type": "paragraph",
        "text": "模型能力会持续扩散，单纯“接入大模型”很快会失去差异。真正要判断的是这个产品有没有形成闭环。"
      },
      {
        "type": "paragraph",
        "text": "一个 AI 产品至少要回答四个顶层问题："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "任务是否足够高频，用户是否愿意在这里停留",
          "输入上下文是否独特，是否会随着使用越来越懂用户",
          "输出质量是否能被评测，而不是只能靠感觉",
          "结果是否能进入业务流程，而不是停在聊天窗口"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层拆解：RAG 不是把文档塞进向量库"
      },
      {
        "type": "paragraph",
        "text": "一个可用的 RAG 链路至少包含："
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "文档切分：按语义边界切，而不是机械固定长度",
          "向量召回：保证相关内容能进入候选集",
          "关键词召回：补齐专有名词、编号、接口名",
          "rerank：把候选内容按问题相关性重新排序",
          "prompt 组装：控制上下文、格式和不可回答策略",
          "评测：用固定问题集看命中率、引用准确率、幻觉率"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "技术抓手"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "chunk size 不能只看 token 数，要看信息是否完整",
          "top_k 过大会增加噪声，过小会漏召回",
          "prompt 必须要求引用来源，否则很难定位错误",
          "评测集要覆盖简单事实、跨文档综合、无答案问题",
          "线上要记录 query、retrieved chunks、answer、latency、cost"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "一个 RAG 评测样例"
      },
      {
        "type": "code",
        "language": "json",
        "text": "{\n  \"question\": \"支付接口超时后系统会重试几次？\",\n  \"expected_sources\": [\"runbook/payment-timeout.md\"],\n  \"expected_answer\": \"最多重试 2 次，并使用指数退避。\",\n  \"checks\": [\"source_hit\", \"answer_grounded\", \"no_extra_policy\"]\n}"
      },
      {
        "type": "paragraph",
        "text": "顶层决定这个 AI 能不能创造价值；底层决定它能不能稳定交付价值。"
      }
    ],
    "colors": [
      "#d8a321",
      "#17201d",
      "#de6449"
    ]
  },
  {
    "id": "algorithm-thinking",
    "title": "算法：从问题结构拆到状态转移",
    "category": "算法",
    "date": "2026-05-09",
    "readTime": "10 min",
    "excerpt": "算法不是背模板，而是从约束中识别问题结构，再把结构翻译成数据结构和状态转移。",
    "quote": "顶层看问题不变量，底层看状态如何被更新。",
    "topThinking": "先识别约束、目标函数、不变量和可复用子问题。",
    "deepDive": "拆到状态定义、转移方程、边界条件、复杂度和数据结构选择。",
    "body": [
      "顶层思维：先看问题属于哪种结构",
      "算法题表面千变万化，但底层结构并不多。真正重要的是先识别它属于哪一类问题。",
      "我会先问四个问题：",
      "有没有重叠子问题，能不能用动态规划",
      "有没有单调性，能不能用二分、单调栈、滑动窗口",
      "有没有图结构，节点和边分别是什么",
      "有没有局部最优可以推出全局最优，能不能贪心",
      "底层拆解：动态规划必须说清楚状态",
      "很多",
      "DP",
      "写不出来，不是因为不会公式，而是状态定义含糊。",
      "一个",
      "DP",
      "至少要拆到：",
      "`dp[i]`",
      "或",
      "`dp[i][j]`",
      "到底表示什么",
      "状态从哪些旧状态转移而来",
      "初始状态是什么",
      "遍历顺序为什么正确",
      "时间和空间复杂度是多少",
      "例子：最小路径和",
      "function",
      "minPathSum(grid)",
      "{",
      "const",
      "rows",
      "=",
      "grid.length;",
      "const",
      "cols",
      "=",
      "grid[0].length;",
      "const",
      "dp",
      "=",
      "Array.from({",
      "length:",
      "rows",
      "},",
      "()",
      "=>",
      "Array(cols).fill(Infinity));",
      "dp[0][0]",
      "=",
      "grid[0][0];",
      "for",
      "(let",
      "r",
      "=",
      "0;",
      "r",
      "<",
      "rows;",
      "r",
      "+=",
      "1)",
      "{",
      "for",
      "(let",
      "c",
      "=",
      "0;",
      "c",
      "<",
      "cols;",
      "c",
      "+=",
      "1)",
      "{",
      "if",
      "(r",
      ">",
      "0)",
      "dp[r][c]",
      "=",
      "Math.min(dp[r][c],",
      "dp[r",
      "-",
      "1][c]",
      "+",
      "grid[r][c]);",
      "if",
      "(c",
      ">",
      "0)",
      "dp[r][c]",
      "=",
      "Math.min(dp[r][c],",
      "dp[r][c",
      "-",
      "1]",
      "+",
      "grid[r][c]);",
      "}",
      "}",
      "return",
      "dp[rows",
      "-",
      "1][cols",
      "-",
      "1];",
      "}",
      "这里的顶层结构是“无环网格上的最短路径”，底层实现是二维状态转移。只要这两层都清楚，题目换皮也不会慌。"
    ],
    "bodyBlocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "顶层思维：先看问题属于哪种结构"
      },
      {
        "type": "paragraph",
        "text": "算法题表面千变万化，但底层结构并不多。真正重要的是先识别它属于哪一类问题。"
      },
      {
        "type": "paragraph",
        "text": "我会先问四个问题："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "有没有重叠子问题，能不能用动态规划",
          "有没有单调性，能不能用二分、单调栈、滑动窗口",
          "有没有图结构，节点和边分别是什么",
          "有没有局部最优可以推出全局最优，能不能贪心"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层拆解：动态规划必须说清楚状态"
      },
      {
        "type": "paragraph",
        "text": "很多 DP 写不出来，不是因为不会公式，而是状态定义含糊。"
      },
      {
        "type": "paragraph",
        "text": "一个 DP 至少要拆到："
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "`dp[i]` 或 `dp[i][j]` 到底表示什么",
          "状态从哪些旧状态转移而来",
          "初始状态是什么",
          "遍历顺序为什么正确",
          "时间和空间复杂度是多少"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "例子：最小路径和"
      },
      {
        "type": "code",
        "language": "js",
        "text": "function minPathSum(grid) {\n  const rows = grid.length;\n  const cols = grid[0].length;\n  const dp = Array.from({ length: rows }, () => Array(cols).fill(Infinity));\n\n  dp[0][0] = grid[0][0];\n\n  for (let r = 0; r < rows; r += 1) {\n    for (let c = 0; c < cols; c += 1) {\n      if (r > 0) dp[r][c] = Math.min(dp[r][c], dp[r - 1][c] + grid[r][c]);\n      if (c > 0) dp[r][c] = Math.min(dp[r][c], dp[r][c - 1] + grid[r][c]);\n    }\n  }\n\n  return dp[rows - 1][cols - 1];\n}"
      },
      {
        "type": "paragraph",
        "text": "这里的顶层结构是“无环网格上的最短路径”，底层实现是二维状态转移。只要这两层都清楚，题目换皮也不会慌。"
      }
    ],
    "colors": [
      "#0f7b78",
      "#f2b66d",
      "#7f4d64"
    ]
  },
  {
    "id": "programming-practice",
    "title": "编程：从系统边界拆到一行代码",
    "category": "编程",
    "date": "2026-05-08",
    "readTime": "10 min",
    "excerpt": "好代码既要服务系统边界，也要在函数、异常、测试和命名这些微观层面保持可维护。",
    "quote": "顶层看模块责任，底层看每个分支如何失败。",
    "topThinking": "先划清模块边界、数据流向和变化方向。",
    "deepDive": "拆到函数命名、错误处理、幂等性、测试夹具、日志字段和性能热点。",
    "body": [
      "顶层思维：代码首先是系统设计",
      "写代码不是把需求翻译成语法，而是把系统责任切成可理解、可替换、可测试的单元。",
      "我会优先看这些顶层问题：",
      "这个模块的输入和输出是否稳定",
      "它依赖了哪些外部状态",
      "哪些变化应该被隔离在模块内部",
      "错误应该在这里处理，还是向上抛给调用方",
      "底层拆解：一行代码也有工程质量",
      "底层细节决定长期维护成本。很多线上问题不是架构图错了，而是一个分支没处理、一个超时没设置、一个日志字段缺失。",
      "写函数时至少检查：",
      "参数是否需要校验",
      "返回值是否表达失败原因",
      "外部调用是否设置超时",
      "重试是否幂等",
      "日志是否包含",
      "trace",
      "id、用户",
      "id、资源",
      "id",
      "测试是否覆盖边界条件和失败路径",
      "一个更可维护的函数形状",
      "async",
      "function",
      "fetchUserProfile(userId:",
      "string,",
      "timeoutMs",
      "=",
      "800):",
      "Promise<UserProfile>",
      "{",
      "if",
      "(!userId)",
      "{",
      "throw",
      "new",
      "Error(\"userId",
      "is",
      "required\");",
      "}",
      "const",
      "response",
      "=",
      "await",
      "httpClient.get(`/users/${userId}`,",
      "{",
      "timeout:",
      "timeoutMs,",
      "headers:",
      "{",
      "\"x-request-source\":",
      "\"profile-service\"",
      "}",
      "});",
      "if",
      "(!response.ok)",
      "{",
      "throw",
      "new",
      "Error(`fetch",
      "user",
      "profile",
      "failed:",
      "${response.status}`);",
      "}",
      "return",
      "response.data;",
      "}",
      "这段代码不炫技，但它把边界、超时、失败和调用来源都显式化了。工程代码的价值，很多时候就在这种朴素的清晰里。"
    ],
    "bodyBlocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "顶层思维：代码首先是系统设计"
      },
      {
        "type": "paragraph",
        "text": "写代码不是把需求翻译成语法，而是把系统责任切成可理解、可替换、可测试的单元。"
      },
      {
        "type": "paragraph",
        "text": "我会优先看这些顶层问题："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "这个模块的输入和输出是否稳定",
          "它依赖了哪些外部状态",
          "哪些变化应该被隔离在模块内部",
          "错误应该在这里处理，还是向上抛给调用方"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层拆解：一行代码也有工程质量"
      },
      {
        "type": "paragraph",
        "text": "底层细节决定长期维护成本。很多线上问题不是架构图错了，而是一个分支没处理、一个超时没设置、一个日志字段缺失。"
      },
      {
        "type": "paragraph",
        "text": "写函数时至少检查："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "参数是否需要校验",
          "返回值是否表达失败原因",
          "外部调用是否设置超时",
          "重试是否幂等",
          "日志是否包含 trace id、用户 id、资源 id",
          "测试是否覆盖边界条件和失败路径"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "一个更可维护的函数形状"
      },
      {
        "type": "code",
        "language": "ts",
        "text": "async function fetchUserProfile(userId: string, timeoutMs = 800): Promise<UserProfile> {\n  if (!userId) {\n    throw new Error(\"userId is required\");\n  }\n\n  const response = await httpClient.get(`/users/${userId}`, {\n    timeout: timeoutMs,\n    headers: { \"x-request-source\": \"profile-service\" }\n  });\n\n  if (!response.ok) {\n    throw new Error(`fetch user profile failed: ${response.status}`);\n  }\n\n  return response.data;\n}"
      },
      {
        "type": "paragraph",
        "text": "这段代码不炫技，但它把边界、超时、失败和调用来源都显式化了。工程代码的价值，很多时候就在这种朴素的清晰里。"
      }
    ],
    "colors": [
      "#de6449",
      "#fffaf0",
      "#0f7b78"
    ]
  },
  {
    "id": "cloud-best-practices",
    "title": "Cloud 最佳实践：从治理模型拆到资源配置",
    "category": "Cloud最佳实践",
    "date": "2026-05-07",
    "readTime": "11 min",
    "excerpt": "云不是资源池，而是一套关于身份、网络、弹性、成本、安全和可观测性的治理系统。",
    "quote": "顶层看治理边界，底层看每个资源的默认配置是否安全。",
    "topThinking": "先设计账号、权限、网络、成本和发布治理模型。",
    "deepDive": "拆到 IAM policy、VPC 路由、安全组、HPA、requests/limits、日志指标和审计事件。",
    "body": [
      "顶层思维：上云不是把机器搬到云厂商",
      "Cloud",
      "最佳实践的核心不是会点多少云产品，而是能不能把资源组织成可靠、可治理、可审计的平台。",
      "我会先设计五个边界：",
      "账号边界：生产、测试、安全、共享服务是否隔离",
      "权限边界：人、服务、流水线分别拥有哪些最小权限",
      "网络边界：公网入口、私网服务、数据库访问如何隔离",
      "成本边界：谁为资源负责，异常增长如何发现",
      "发布边界：变更如何灰度、回滚、审计",
      "底层拆解：Kubernetes",
      "配置不是随便写",
      "一个服务是否稳定，很多时候取决于资源和探针配置。",
      "apiVersion:",
      "apps/v1",
      "kind:",
      "Deployment",
      "metadata:",
      "name:",
      "api-service",
      "spec:",
      "replicas:",
      "3",
      "template:",
      "spec:",
      "containers:",
      "-",
      "name:",
      "api",
      "image:",
      "example/api:1.0.0",
      "resources:",
      "requests:",
      "cpu:",
      "\"300m\"",
      "memory:",
      "\"512Mi\"",
      "limits:",
      "cpu:",
      "\"1000m\"",
      "memory:",
      "\"1Gi\"",
      "readinessProbe:",
      "httpGet:",
      "path:",
      "/ready",
      "port:",
      "8080",
      "initialDelaySeconds:",
      "10",
      "periodSeconds:",
      "5",
      "livenessProbe:",
      "httpGet:",
      "path:",
      "/live",
      "port:",
      "8080",
      "initialDelaySeconds:",
      "30",
      "periodSeconds:",
      "10",
      "这里的底层细节包括：`requests`",
      "影响调度，`limits`",
      "影响资源隔离，`readinessProbe`",
      "决定是否接流量，`livenessProbe`",
      "决定是否重启容器。",
      "云上检查清单",
      "所有生产资源是否有",
      "owner、env、cost-center",
      "标签",
      "服务账号是否遵循最小权限",
      "数据库是否禁止公网直连",
      "关键路径是否有多可用区容灾",
      "日志、指标、trace",
      "是否能串起一次请求",
      "成本异常是否能在一天内被发现",
      "顶层治理决定云平台能不能长期运转；底层配置决定每一次故障会不会被放大。"
    ],
    "bodyBlocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "顶层思维：上云不是把机器搬到云厂商"
      },
      {
        "type": "paragraph",
        "text": "Cloud 最佳实践的核心不是会点多少云产品，而是能不能把资源组织成可靠、可治理、可审计的平台。"
      },
      {
        "type": "paragraph",
        "text": "我会先设计五个边界："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "账号边界：生产、测试、安全、共享服务是否隔离",
          "权限边界：人、服务、流水线分别拥有哪些最小权限",
          "网络边界：公网入口、私网服务、数据库访问如何隔离",
          "成本边界：谁为资源负责，异常增长如何发现",
          "发布边界：变更如何灰度、回滚、审计"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层拆解：Kubernetes 配置不是随便写"
      },
      {
        "type": "paragraph",
        "text": "一个服务是否稳定，很多时候取决于资源和探针配置。"
      },
      {
        "type": "code",
        "language": "yaml",
        "text": "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: api-service\nspec:\n  replicas: 3\n  template:\n    spec:\n      containers:\n        - name: api\n          image: example/api:1.0.0\n          resources:\n            requests:\n              cpu: \"300m\"\n              memory: \"512Mi\"\n            limits:\n              cpu: \"1000m\"\n              memory: \"1Gi\"\n          readinessProbe:\n            httpGet:\n              path: /ready\n              port: 8080\n            initialDelaySeconds: 10\n            periodSeconds: 5\n          livenessProbe:\n            httpGet:\n              path: /live\n              port: 8080\n            initialDelaySeconds: 30\n            periodSeconds: 10"
      },
      {
        "type": "paragraph",
        "text": "这里的底层细节包括：`requests` 影响调度，`limits` 影响资源隔离，`readinessProbe` 决定是否接流量，`livenessProbe` 决定是否重启容器。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "云上检查清单"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "所有生产资源是否有 owner、env、cost-center 标签",
          "服务账号是否遵循最小权限",
          "数据库是否禁止公网直连",
          "关键路径是否有多可用区容灾",
          "日志、指标、trace 是否能串起一次请求",
          "成本异常是否能在一天内被发现"
        ]
      },
      {
        "type": "paragraph",
        "text": "顶层治理决定云平台能不能长期运转；底层配置决定每一次故障会不会被放大。"
      }
    ],
    "colors": [
      "#5b7f45",
      "#e8eee0",
      "#d8a321"
    ]
  }
];
