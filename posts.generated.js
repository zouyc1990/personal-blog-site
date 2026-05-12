window.BLOG_POSTS = [
  {
    "id": "container-learning-system",
    "title": "容器：从镜像构建拆到运行时隔离",
    "category": "容器",
    "date": "2026-05-12",
    "readTime": "20 min",
    "excerpt": "快速掌握容器要理解它的本质、底层架构、适用场景，以及镜像分层、调度、资源隔离背后的算法和数学原理。",
    "quote": "顶层看交付标准化，底层看进程、文件系统和网络命名空间。",
    "topThinking": "先把容器当成应用交付单元，建立构建、发布、回滚和安全扫描的标准链路。",
    "deepDive": "拆到 Dockerfile、镜像分层、cgroups、namespaces、bridge 网络、volume、registry 和运行时权限。",
    "body": [
      "顶层思维：容器解决的是交付一致性",
      "容器不是轻量虚拟机，核心价值是把应用、依赖、启动命令和运行约束封装成一个可以重复交付的单元。",
      "先建立这条生产链路：",
      "开发环境和生产环境使用同一份镜像",
      "Dockerfile",
      "固化构建步骤，避免人工配置漂移",
      "Registry",
      "管理版本，发布和回滚都基于不可变镜像",
      "digest",
      "Compose",
      "用来理解本地多服务依赖，Kubernetes",
      "用来承接生产调度",
      "SBOM、镜像扫描、非",
      "root",
      "运行和只读文件系统进入默认流程",
      "日志写",
      "stdout，配置从环境变量或挂载文件进入容器",
      "本质：容器不是机器，而是被标准化交付的进程",
      "容器的本质可以压成一句话：用镜像描述应用文件系统，用",
      "Linux",
      "内核隔离进程视图，用",
      "cgroups",
      "约束资源，再用标准接口把它交给调度系统运行。",
      "它解决的是三个工程问题：",
      "环境一致：把依赖、启动命令、系统库和配置入口封进镜像",
      "资源边界：把",
      "CPU、内存、IO、进程数限制在可控范围内",
      "交付速度：镜像可以构建、扫描、签名、推送、拉取和回滚",
      "它不解决所有问题。容器不会天然让应用高可用，也不会自动修复慢查询、内存泄漏和架构耦合。它只是把应用变成更容易被平台接管的交付单元。",
      "底层架构：从",
      "Dockerfile",
      "到内核能力",
      "容器体系可以拆成六层：",
      "构建层：Dockerfile、BuildKit、build",
      "context、layer",
      "cache",
      "镜像层：manifest、config、layer",
      "tar、digest、registry",
      "运行时层：containerd、runc、OCI",
      "runtime",
      "spec",
      "隔离层：namespaces、cgroups、capabilities、seccomp",
      "网络层：veth",
      "pair、bridge、iptables/nftables、DNS",
      "存储层：overlayfs、copy-on-write、volume、bind",
      "mount",
      "一次",
      "`docker",
      "run`",
      "的底层路径通常是：拉取镜像",
      "manifest，校验",
      "digest，解压镜像层，创建",
      "overlayfs",
      "merged",
      "view，配置",
      "namespace",
      "和",
      "cgroup，创建",
      "veth",
      "网络，最后通过",
      "runtime",
      "启动容器进程。",
      "典型场景：什么时候该用容器",
      "适合容器化的场景：",
      "无状态",
      "Web/API",
      "服务，需要快速部署、扩缩容和回滚",
      "CI/CD",
      "构建环境，需要保证构建依赖一致",
      "本地开发环境，需要一键启动数据库、缓存和依赖服务",
      "批处理任务，需要一次性运行并收集日志",
      "多团队平台化交付，需要统一镜像规范和安全扫描",
      "不适合直接容器化或需要谨慎的场景：",
      "强依赖内核模块、特权设备或复杂硬件驱动的服务",
      "对低延迟和内核参数极敏感的系统",
      "没有清晰数据目录和恢复策略的有状态服务",
      "把容器当虚拟机长期",
      "SSH",
      "进去维护的运维方式",
      "算法与数学原理",
      "内容寻址",
      "hash：镜像",
      "layer",
      "和",
      "manifest",
      "用",
      "digest",
      "标识，本质是用哈希函数把内容映射成固定长度指纹。内容不变，digest",
      "不变；内容变一位，digest",
      "大概率完全不同。",
      "Merkle/DAG",
      "思想：镜像分层可以理解成有向无环图。上层引用下层，复用相同",
      "layer，减少传输和存储成本。",
      "Copy-on-write：多个容器共享只读层，写入时才复制到容器层。它用空间换时间，避免每次启动都复制完整文件系统。",
      "CFS",
      "权重调度：CPU",
      "shares",
      "本质是权重分配。假设两个容器权重是",
      "1024",
      "和",
      "512，竞争",
      "CPU",
      "时近似按",
      "2:1",
      "获得时间片。",
      "内存限制与",
      "OOM：内存不是平均分配，而是硬约束。超过",
      "cgroup",
      "limit",
      "时，内核会根据",
      "OOM",
      "规则选择进程杀掉。",
      "底层拆解：容器本质是被隔离的进程",
      "容器启动后，本质上还是宿主机上的进程，只是被",
      "Linux",
      "内核能力限制在特定边界内。",
      "你需要能说清楚这些机制：",
      "namespaces",
      "隔离进程、网络、挂载点、主机名和用户视图",
      "cgroups",
      "限制",
      "CPU、内存、IO",
      "等资源使用",
      "union",
      "filesystem",
      "让镜像分层复用，并把运行时写入放在容器层",
      "bridge",
      "网络让容器获得虚拟网卡，再通过",
      "NAT",
      "访问外部网络",
      "volume",
      "把数据生命周期从容器生命周期里拆出来",
      "capabilities、seccomp、AppArmor/SELinux",
      "决定容器能调用哪些内核能力",
      "能力地图",
      "构建：会写多阶段",
      "Dockerfile，理解",
      "build",
      "context、layer",
      "cache、`.dockerignore`",
      "运行：会解释",
      "entrypoint、cmd、env、healthcheck、restart",
      "policy",
      "网络：会排查容器",
      "DNS、端口映射、bridge",
      "网络和容器间访问",
      "存储：会区分",
      "bind",
      "mount、named",
      "volume、临时文件和镜像层写入",
      "安全：会配置非",
      "root",
      "用户、最小权限、镜像扫描和",
      "secret",
      "注入",
      "发布：会用不可变",
      "tag/digest、回滚策略和",
      "registry",
      "权限控制",
      "快速实验清单",
      "写一个多阶段",
      "Dockerfile，把构建环境和运行环境分开",
      "用",
      "`docker",
      "inspect`",
      "查看镜像、网络、挂载和环境变量",
      "用",
      "`docker",
      "stats`",
      "观察",
      "CPU",
      "和内存限制",
      "用",
      "Compose",
      "启动",
      "Web、Redis、PostgreSQL",
      "三个服务",
      "推送镜像到",
      "Registry，再用固定",
      "tag",
      "回滚",
      "排障检查点",
      "启动失败：先看镜像是否存在、入口命令是否可执行、环境变量是否缺失",
      "端口不通：确认应用监听地址是",
      "`0.0.0.0`，再看端口映射和防火墙",
      "容器频繁退出：查看",
      "exit",
      "code、应用日志、healthcheck",
      "和",
      "OOM",
      "事件",
      "磁盘异常：确认写入位置是不是容器层，生产数据必须放到",
      "volume",
      "镜像过大：检查基础镜像、构建缓存、包管理器缓存和调试工具残留",
      "一个更像生产的",
      "Dockerfile",
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
      "这段配置的重点不是",
      "Node",
      "或",
      "NGINX，而是把构建工具链和运行镜像拆开，减少攻击面，让最终镜像只保留运行所需内容。",
      "官方文档入口",
      "Docker",
      "Docs:",
      "https://docs.docker.com/",
      "Dockerfile",
      "Reference:",
      "https://docs.docker.com/reference/dockerfile/",
      "Docker",
      "Compose:",
      "https://docs.docker.com/compose/",
      "Docker",
      "Engine",
      "Security:",
      "https://docs.docker.com/engine/security/"
    ],
    "bodyBlocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "顶层思维：容器解决的是交付一致性"
      },
      {
        "type": "paragraph",
        "text": "容器不是轻量虚拟机，核心价值是把应用、依赖、启动命令和运行约束封装成一个可以重复交付的单元。"
      },
      {
        "type": "paragraph",
        "text": "先建立这条生产链路："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "开发环境和生产环境使用同一份镜像",
          "Dockerfile 固化构建步骤，避免人工配置漂移",
          "Registry 管理版本，发布和回滚都基于不可变镜像 digest",
          "Compose 用来理解本地多服务依赖，Kubernetes 用来承接生产调度",
          "SBOM、镜像扫描、非 root 运行和只读文件系统进入默认流程",
          "日志写 stdout，配置从环境变量或挂载文件进入容器"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "本质：容器不是机器，而是被标准化交付的进程"
      },
      {
        "type": "paragraph",
        "text": "容器的本质可以压成一句话：用镜像描述应用文件系统，用 Linux 内核隔离进程视图，用 cgroups 约束资源，再用标准接口把它交给调度系统运行。"
      },
      {
        "type": "paragraph",
        "text": "它解决的是三个工程问题："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "环境一致：把依赖、启动命令、系统库和配置入口封进镜像",
          "资源边界：把 CPU、内存、IO、进程数限制在可控范围内",
          "交付速度：镜像可以构建、扫描、签名、推送、拉取和回滚"
        ]
      },
      {
        "type": "paragraph",
        "text": "它不解决所有问题。容器不会天然让应用高可用，也不会自动修复慢查询、内存泄漏和架构耦合。它只是把应用变成更容易被平台接管的交付单元。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层架构：从 Dockerfile 到内核能力"
      },
      {
        "type": "paragraph",
        "text": "容器体系可以拆成六层："
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "构建层：Dockerfile、BuildKit、build context、layer cache",
          "镜像层：manifest、config、layer tar、digest、registry",
          "运行时层：containerd、runc、OCI runtime spec",
          "隔离层：namespaces、cgroups、capabilities、seccomp",
          "网络层：veth pair、bridge、iptables/nftables、DNS",
          "存储层：overlayfs、copy-on-write、volume、bind mount"
        ]
      },
      {
        "type": "paragraph",
        "text": "一次 `docker run` 的底层路径通常是：拉取镜像 manifest，校验 digest，解压镜像层，创建 overlayfs merged view，配置 namespace 和 cgroup，创建 veth 网络，最后通过 runtime 启动容器进程。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "典型场景：什么时候该用容器"
      },
      {
        "type": "paragraph",
        "text": "适合容器化的场景："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "无状态 Web/API 服务，需要快速部署、扩缩容和回滚",
          "CI/CD 构建环境，需要保证构建依赖一致",
          "本地开发环境，需要一键启动数据库、缓存和依赖服务",
          "批处理任务，需要一次性运行并收集日志",
          "多团队平台化交付，需要统一镜像规范和安全扫描"
        ]
      },
      {
        "type": "paragraph",
        "text": "不适合直接容器化或需要谨慎的场景："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "强依赖内核模块、特权设备或复杂硬件驱动的服务",
          "对低延迟和内核参数极敏感的系统",
          "没有清晰数据目录和恢复策略的有状态服务",
          "把容器当虚拟机长期 SSH 进去维护的运维方式"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "算法与数学原理"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "内容寻址 hash：镜像 layer 和 manifest 用 digest 标识，本质是用哈希函数把内容映射成固定长度指纹。内容不变，digest 不变；内容变一位，digest 大概率完全不同。",
          "Merkle/DAG 思想：镜像分层可以理解成有向无环图。上层引用下层，复用相同 layer，减少传输和存储成本。",
          "Copy-on-write：多个容器共享只读层，写入时才复制到容器层。它用空间换时间，避免每次启动都复制完整文件系统。",
          "CFS 权重调度：CPU shares 本质是权重分配。假设两个容器权重是 1024 和 512，竞争 CPU 时近似按 2:1 获得时间片。",
          "内存限制与 OOM：内存不是平均分配，而是硬约束。超过 cgroup limit 时，内核会根据 OOM 规则选择进程杀掉。"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层拆解：容器本质是被隔离的进程"
      },
      {
        "type": "paragraph",
        "text": "容器启动后，本质上还是宿主机上的进程，只是被 Linux 内核能力限制在特定边界内。"
      },
      {
        "type": "paragraph",
        "text": "你需要能说清楚这些机制："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "namespaces 隔离进程、网络、挂载点、主机名和用户视图",
          "cgroups 限制 CPU、内存、IO 等资源使用",
          "union filesystem 让镜像分层复用，并把运行时写入放在容器层",
          "bridge 网络让容器获得虚拟网卡，再通过 NAT 访问外部网络",
          "volume 把数据生命周期从容器生命周期里拆出来",
          "capabilities、seccomp、AppArmor/SELinux 决定容器能调用哪些内核能力"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "能力地图"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "构建：会写多阶段 Dockerfile，理解 build context、layer cache、`.dockerignore`",
          "运行：会解释 entrypoint、cmd、env、healthcheck、restart policy",
          "网络：会排查容器 DNS、端口映射、bridge 网络和容器间访问",
          "存储：会区分 bind mount、named volume、临时文件和镜像层写入",
          "安全：会配置非 root 用户、最小权限、镜像扫描和 secret 注入",
          "发布：会用不可变 tag/digest、回滚策略和 registry 权限控制"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "快速实验清单"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "写一个多阶段 Dockerfile，把构建环境和运行环境分开",
          "用 `docker inspect` 查看镜像、网络、挂载和环境变量",
          "用 `docker stats` 观察 CPU 和内存限制",
          "用 Compose 启动 Web、Redis、PostgreSQL 三个服务",
          "推送镜像到 Registry，再用固定 tag 回滚"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "排障检查点"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "启动失败：先看镜像是否存在、入口命令是否可执行、环境变量是否缺失",
          "端口不通：确认应用监听地址是 `0.0.0.0`，再看端口映射和防火墙",
          "容器频繁退出：查看 exit code、应用日志、healthcheck 和 OOM 事件",
          "磁盘异常：确认写入位置是不是容器层，生产数据必须放到 volume",
          "镜像过大：检查基础镜像、构建缓存、包管理器缓存和调试工具残留"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "一个更像生产的 Dockerfile"
      },
      {
        "type": "code",
        "language": "dockerfile",
        "text": "FROM node:22-alpine AS build\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nRUN npm run build\n\nFROM nginx:1.27-alpine\nCOPY --from=build /app/dist /usr/share/nginx/html\nUSER nginx\nEXPOSE 8080\nHEALTHCHECK CMD wget -qO- http://127.0.0.1:8080/ || exit 1"
      },
      {
        "type": "paragraph",
        "text": "这段配置的重点不是 Node 或 NGINX，而是把构建工具链和运行镜像拆开，减少攻击面，让最终镜像只保留运行所需内容。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "官方文档入口"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Docker Docs: https://docs.docker.com/",
          "Dockerfile Reference: https://docs.docker.com/reference/dockerfile/",
          "Docker Compose: https://docs.docker.com/compose/",
          "Docker Engine Security: https://docs.docker.com/engine/security/"
        ]
      }
    ],
    "colors": [
      "#0f7b78",
      "#d7ece7",
      "#de6449"
    ]
  },
  {
    "id": "database-learning-system",
    "title": "数据库：从数据模型拆到慢查询治理",
    "category": "数据库",
    "date": "2026-05-12",
    "readTime": "23 min",
    "excerpt": "快速掌握数据库要理解它的本质、存储与查询架构、适用场景，以及索引、事务、复制、恢复背后的算法和数学原理。",
    "quote": "顶层看数据生命周期，底层看执行计划、锁和日志。",
    "topThinking": "先判断数据的读写模式、一致性要求、增长速度和恢复目标。",
    "deepDive": "拆到索引结构、MVCC、事务隔离、锁等待、WAL/binlog、复制延迟、备份恢复和慢查询计划。",
    "body": [
      "顶层思维：数据库首先是数据生命周期设计",
      "数据库学习不要从背参数开始，要先回答数据如何进入、如何变化、如何被查询、如何归档和如何恢复。",
      "建模时先问：",
      "这张表的主查询路径是什么",
      "数据增长速度和保留周期是什么",
      "写入是否需要强一致，读取是否可以接受延迟",
      "业务能接受的",
      "RPO",
      "和",
      "RTO",
      "是多少",
      "删除、归档、审计和脱敏策略在哪里执行",
      "本质：数据库是在约束下管理持久化状态",
      "数据库的本质不是“存数据”，而是在持久化、并发、查询效率、一致性和恢复成本之间做工程取舍。",
      "它同时承担五个职责：",
      "存储：把数据可靠写到磁盘或分布式存储",
      "查询：用索引、统计信息和优化器降低读取成本",
      "并发：用锁、MVCC、事务隔离处理多人同时读写",
      "恢复：用日志、checkpoint、备份和复制从故障中恢复",
      "约束：用主键、唯一键、外键、检查约束保护数据质量",
      "数据库学习的核心，是把业务问题翻译成访问模式、一致性边界和恢复目标。",
      "底层架构：SQL",
      "层、执行器、存储引擎和日志",
      "关系型数据库通常可以拆成六层：",
      "连接层：认证、连接池、会话状态、权限",
      "SQL",
      "层：解析、语义分析、重写、权限检查",
      "优化器：根据统计信息选择",
      "join",
      "顺序、索引和访问路径",
      "执行器：按计划扫描、过滤、排序、聚合、join",
      "存储引擎：页、缓冲池、索引、表空间、刷盘",
      "日志恢复：WAL/binlog、redo、undo、checkpoint、复制",
      "一次更新通常不是直接改磁盘数据文件就结束。数据库会先写日志，再改内存页，之后由后台刷盘。这样即使宕机，也能通过日志重放恢复到一致状态。",
      "典型场景：不同数据库解决不同矛盾",
      "PostgreSQL/MySQL：强结构化业务数据、事务、一致性、复杂查询",
      "Redis：热点缓存、计数、排行榜、短生命周期状态",
      "MongoDB：文档模型、半结构化数据、字段变化频繁的业务",
      "ClickHouse/列式库：分析查询、聚合、报表、海量只读或追加数据",
      "搜索引擎：倒排索引、全文检索、相关性排序",
      "不该做的事：",
      "用缓存代替数据库的一致性设计",
      "用文档库逃避数据模型思考",
      "在",
      "OLTP",
      "数据库上硬跑大规模分析报表",
      "没有恢复演练就以为备份等于安全",
      "算法与数学原理",
      "B+Tree：索引把有序",
      "key",
      "组织成多叉平衡树，让查询从全表扫描",
      "O(n)",
      "降到近似",
      "O(log",
      "n)，同时叶子节点适合范围扫描。",
      "LSM",
      "Tree：写入先进入内存结构和顺序日志，再逐层",
      "compaction，适合高写入吞吐，但读放大和压缩成本需要治理。",
      "MVCC：给数据版本打时间戳或事务",
      "ID，让读写尽量不互相阻塞。代价是版本垃圾和长事务治理。",
      "WAL：先写日志再写数据页。数学直觉是把随机修改转成顺序追加，并用日志顺序定义恢复顺序。",
      "两阶段提交：prepare",
      "和",
      "commit",
      "两个阶段协调多个参与者，保证跨资源提交的一致性，但会引入阻塞和协调成本。",
      "选择性与基数估计：优化器依赖统计分布估算行数。估错行数，就可能选错索引或",
      "join",
      "顺序。",
      "底层拆解：慢查询往往不是",
      "SQL",
      "一件事",
      "一个慢查询可能来自多个层次：",
      "没有命中合适索引，导致全表扫描",
      "选择性太差，优化器即使命中索引也要回表大量数据",
      "事务太长，持有锁或制造大量版本垃圾",
      "排序、聚合、join",
      "中间结果过大",
      "连接池耗尽，看起来像数据库慢",
      "复制延迟导致读写分离读到旧数据",
      "能力地图",
      "建模：实体关系、主键、唯一约束、范式、反范式和审计字段",
      "查询：执行计划、索引选择、统计信息、排序、聚合和分页",
      "事务：隔离级别、MVCC、锁等待、死锁、长事务和回滚成本",
      "高可用：主从复制、复制延迟、故障切换、读写分离一致性",
      "恢复：全量备份、增量日志、PITR、RPO、RTO",
      "和恢复演练",
      "治理：慢查询、容量趋势、归档、分区、权限和脱敏",
      "快速实验清单",
      "对同一条",
      "SQL",
      "分别加单列索引、联合索引，比较执行计划",
      "在两个事务里制造锁等待，观察阻塞链路",
      "开启慢查询日志，按耗时、扫描行数和调用频次排序",
      "做一次全量备份和恢复演练，记录真实恢复时间",
      "模拟主从复制延迟，验证业务是否依赖读后写一致性",
      "排障检查点",
      "查询突然变慢：先看执行计划是否变化，再看统计信息、索引和参数绑定",
      "CPU",
      "高：看慢查询、排序聚合、连接风暴和缺索引扫描",
      "锁等待：找阻塞事务、持锁",
      "SQL、事务年龄和应用是否忘记提交",
      "连接耗尽：看连接池配置、慢请求、事务占用和空闲连接回收",
      "复制延迟：看写入峰值、大事务、网络、从库",
      "IO",
      "和回放速度",
      "恢复失败：看备份是否可读、日志是否连续、恢复步骤是否演练过",
      "慢查询分析顺序",
      "确认",
      "SQL、参数、执行时间、扫描行数和返回行数",
      "查看执行计划，判断是否走了预期索引",
      "检查过滤条件选择性，联合索引顺序是否匹配查询",
      "看排序、聚合、join",
      "是否产生大量中间结果",
      "回到应用侧，确认连接池、超时、重试和分页方式",
      "数据库学习最重要的能力不是背语法，而是把业务访问模式翻译成数据结构、事务边界和恢复目标。",
      "官方文档入口",
      "PostgreSQL",
      "Docs:",
      "https://www.postgresql.org/docs/current/",
      "PostgreSQL",
      "Tutorial:",
      "https://www.postgresql.org/docs/current/tutorial.html",
      "MySQL",
      "8.4",
      "Reference",
      "Manual:",
      "https://dev.mysql.com/doc/refman/8.4/en/",
      "MongoDB",
      "Manual:",
      "https://www.mongodb.com/docs/manual/"
    ],
    "bodyBlocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "顶层思维：数据库首先是数据生命周期设计"
      },
      {
        "type": "paragraph",
        "text": "数据库学习不要从背参数开始，要先回答数据如何进入、如何变化、如何被查询、如何归档和如何恢复。"
      },
      {
        "type": "paragraph",
        "text": "建模时先问："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "这张表的主查询路径是什么",
          "数据增长速度和保留周期是什么",
          "写入是否需要强一致，读取是否可以接受延迟",
          "业务能接受的 RPO 和 RTO 是多少",
          "删除、归档、审计和脱敏策略在哪里执行"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "本质：数据库是在约束下管理持久化状态"
      },
      {
        "type": "paragraph",
        "text": "数据库的本质不是“存数据”，而是在持久化、并发、查询效率、一致性和恢复成本之间做工程取舍。"
      },
      {
        "type": "paragraph",
        "text": "它同时承担五个职责："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "存储：把数据可靠写到磁盘或分布式存储",
          "查询：用索引、统计信息和优化器降低读取成本",
          "并发：用锁、MVCC、事务隔离处理多人同时读写",
          "恢复：用日志、checkpoint、备份和复制从故障中恢复",
          "约束：用主键、唯一键、外键、检查约束保护数据质量"
        ]
      },
      {
        "type": "paragraph",
        "text": "数据库学习的核心，是把业务问题翻译成访问模式、一致性边界和恢复目标。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层架构：SQL 层、执行器、存储引擎和日志"
      },
      {
        "type": "paragraph",
        "text": "关系型数据库通常可以拆成六层："
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "连接层：认证、连接池、会话状态、权限",
          "SQL 层：解析、语义分析、重写、权限检查",
          "优化器：根据统计信息选择 join 顺序、索引和访问路径",
          "执行器：按计划扫描、过滤、排序、聚合、join",
          "存储引擎：页、缓冲池、索引、表空间、刷盘",
          "日志恢复：WAL/binlog、redo、undo、checkpoint、复制"
        ]
      },
      {
        "type": "paragraph",
        "text": "一次更新通常不是直接改磁盘数据文件就结束。数据库会先写日志，再改内存页，之后由后台刷盘。这样即使宕机，也能通过日志重放恢复到一致状态。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "典型场景：不同数据库解决不同矛盾"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "PostgreSQL/MySQL：强结构化业务数据、事务、一致性、复杂查询",
          "Redis：热点缓存、计数、排行榜、短生命周期状态",
          "MongoDB：文档模型、半结构化数据、字段变化频繁的业务",
          "ClickHouse/列式库：分析查询、聚合、报表、海量只读或追加数据",
          "搜索引擎：倒排索引、全文检索、相关性排序"
        ]
      },
      {
        "type": "paragraph",
        "text": "不该做的事："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "用缓存代替数据库的一致性设计",
          "用文档库逃避数据模型思考",
          "在 OLTP 数据库上硬跑大规模分析报表",
          "没有恢复演练就以为备份等于安全"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "算法与数学原理"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "B+Tree：索引把有序 key 组织成多叉平衡树，让查询从全表扫描 O(n) 降到近似 O(log n)，同时叶子节点适合范围扫描。",
          "LSM Tree：写入先进入内存结构和顺序日志，再逐层 compaction，适合高写入吞吐，但读放大和压缩成本需要治理。",
          "MVCC：给数据版本打时间戳或事务 ID，让读写尽量不互相阻塞。代价是版本垃圾和长事务治理。",
          "WAL：先写日志再写数据页。数学直觉是把随机修改转成顺序追加，并用日志顺序定义恢复顺序。",
          "两阶段提交：prepare 和 commit 两个阶段协调多个参与者，保证跨资源提交的一致性，但会引入阻塞和协调成本。",
          "选择性与基数估计：优化器依赖统计分布估算行数。估错行数，就可能选错索引或 join 顺序。"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层拆解：慢查询往往不是 SQL 一件事"
      },
      {
        "type": "paragraph",
        "text": "一个慢查询可能来自多个层次："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "没有命中合适索引，导致全表扫描",
          "选择性太差，优化器即使命中索引也要回表大量数据",
          "事务太长，持有锁或制造大量版本垃圾",
          "排序、聚合、join 中间结果过大",
          "连接池耗尽，看起来像数据库慢",
          "复制延迟导致读写分离读到旧数据"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "能力地图"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "建模：实体关系、主键、唯一约束、范式、反范式和审计字段",
          "查询：执行计划、索引选择、统计信息、排序、聚合和分页",
          "事务：隔离级别、MVCC、锁等待、死锁、长事务和回滚成本",
          "高可用：主从复制、复制延迟、故障切换、读写分离一致性",
          "恢复：全量备份、增量日志、PITR、RPO、RTO 和恢复演练",
          "治理：慢查询、容量趋势、归档、分区、权限和脱敏"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "快速实验清单"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "对同一条 SQL 分别加单列索引、联合索引，比较执行计划",
          "在两个事务里制造锁等待，观察阻塞链路",
          "开启慢查询日志，按耗时、扫描行数和调用频次排序",
          "做一次全量备份和恢复演练，记录真实恢复时间",
          "模拟主从复制延迟，验证业务是否依赖读后写一致性"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "排障检查点"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "查询突然变慢：先看执行计划是否变化，再看统计信息、索引和参数绑定",
          "CPU 高：看慢查询、排序聚合、连接风暴和缺索引扫描",
          "锁等待：找阻塞事务、持锁 SQL、事务年龄和应用是否忘记提交",
          "连接耗尽：看连接池配置、慢请求、事务占用和空闲连接回收",
          "复制延迟：看写入峰值、大事务、网络、从库 IO 和回放速度",
          "恢复失败：看备份是否可读、日志是否连续、恢复步骤是否演练过"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "慢查询分析顺序"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "确认 SQL、参数、执行时间、扫描行数和返回行数",
          "查看执行计划，判断是否走了预期索引",
          "检查过滤条件选择性，联合索引顺序是否匹配查询",
          "看排序、聚合、join 是否产生大量中间结果",
          "回到应用侧，确认连接池、超时、重试和分页方式"
        ]
      },
      {
        "type": "paragraph",
        "text": "数据库学习最重要的能力不是背语法，而是把业务访问模式翻译成数据结构、事务边界和恢复目标。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "官方文档入口"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "PostgreSQL Docs: https://www.postgresql.org/docs/current/",
          "PostgreSQL Tutorial: https://www.postgresql.org/docs/current/tutorial.html",
          "MySQL 8.4 Reference Manual: https://dev.mysql.com/doc/refman/8.4/en/",
          "MongoDB Manual: https://www.mongodb.com/docs/manual/"
        ]
      }
    ],
    "colors": [
      "#5b7f45",
      "#fffaf0",
      "#d8a321"
    ]
  },
  {
    "id": "k8s-learning-system",
    "title": "K8s：从对象模型拆到生产排障",
    "category": "K8s",
    "date": "2026-05-12",
    "readTime": "22 min",
    "excerpt": "快速掌握 Kubernetes 要理解它的本质、控制面架构、适用场景，以及调度、共识、弹性伸缩背后的算法和数学原理。",
    "quote": "顶层看期望状态，底层看控制器如何把现实拉回声明。",
    "topThinking": "先理解 Kubernetes 是声明式控制系统，不是简单的容器启动器。",
    "deepDive": "拆到 Pod、Deployment、Service、Ingress、ConfigMap、Secret、PVC、RBAC、调度、探针、HPA 和事件。",
    "body": [
      "顶层思维：K8s",
      "是期望状态系统",
      "Kubernetes",
      "的核心不是",
      "`kubectl",
      "apply`，而是你声明期望状态，控制器持续观察现实状态并尝试修正偏差。",
      "先抓住四条主线：",
      "Workload：Pod、Deployment、StatefulSet、DaemonSet",
      "管应用生命周期",
      "Traffic：Service、Ingress、Gateway",
      "API",
      "管服务发现和入口流量",
      "Config：ConfigMap、Secret、ServiceAccount",
      "管配置、密钥和身份",
      "Platform：Node、Scheduler、CNI、CSI、HPA、RBAC",
      "管资源、安全和扩缩容",
      "本质：K8s",
      "是分布式系统的期望状态控制器",
      "Kubernetes",
      "的本质不是“管理容器”，而是一个声明式分布式控制系统。",
      "你提交的是期望状态：需要几个副本、开放什么端口、需要多少资源、如何探活、如何挂载存储。控制面不断观察现实状态，并通过控制器把现实拉向期望。",
      "这个思想来自控制论：系统有目标值，有观测值，有误差，有调节动作。Kubernetes",
      "里的",
      "controller",
      "loop",
      "就是在不断执行：",
      "观察当前状态",
      "比较期望状态",
      "计算差异",
      "发起修正动作",
      "继续观察",
      "底层架构：控制面、节点面和扩展接口",
      "Kubernetes",
      "可以拆成三层：",
      "控制面：API",
      "Server、etcd、Scheduler、Controller",
      "Manager、Admission",
      "节点面：Kubelet、container",
      "runtime、kube-proxy、CNI、CSI",
      "扩展面：CRD、Operator、Webhook、Helm、Gateway/Ingress",
      "Controller",
      "一次创建",
      "Pod",
      "的完整路径：",
      "API",
      "Server",
      "校验请求，经过认证、鉴权、准入控制",
      "对象写入",
      "etcd，成为集群事实来源",
      "Scheduler",
      "监听到未绑定节点的",
      "Pod，执行过滤和打分",
      "Kubelet",
      "监听到分配给自己的",
      "Pod，调用",
      "runtime",
      "启动容器",
      "CNI",
      "配网络，CSI",
      "挂存储，探针决定是否接入流量",
      "Controller",
      "持续检查副本数、滚动发布和故障恢复",
      "典型场景：什么时候该用",
      "K8s",
      "适合",
      "Kubernetes",
      "的场景：",
      "微服务数量多，需要统一发布、伸缩、回滚和服务发现",
      "多团队共享基础设施，需要资源配额、命名空间和权限治理",
      "需要自动恢复、弹性伸缩、灰度发布和可观测标准化",
      "希望把平台能力沉淀成",
      "Operator、CRD",
      "或内部",
      "PaaS",
      "不适合直接上",
      "Kubernetes",
      "的场景：",
      "服务数量很少，发布频率低，团队没有平台运维能力",
      "业务复杂度低，但引入",
      "K8s",
      "后运维复杂度明显高于收益",
      "关键依赖没有监控、日志、备份和容量治理，先上",
      "K8s",
      "只会放大混乱",
      "算法与数学原理",
      "Raft",
      "共识：etcd",
      "用",
      "Raft",
      "保证多节点日志一致。核心是",
      "leader、term、quorum，多数派确认后日志才算提交。",
      "调度过滤与打分：Scheduler",
      "先过滤不可用节点，再给可用节点打分。它不是寻找全局最优，而是在约束下快速找到足够好的节点。",
      "Bin",
      "packing：资源调度类似装箱问题，要把不同",
      "CPU/内存需求的",
      "Pod",
      "放到有限节点上。这个问题通常没有低成本全局最优解，所以系统使用启发式策略。",
      "指数退避：失败重试不是固定频率，而是逐步拉长等待时间，避免故障时把压力继续打到依赖上。",
      "HPA",
      "控制公式：副本数近似按",
      "`当前副本数",
      "*",
      "当前指标",
      "/",
      "目标指标`",
      "调整。它背后是反馈控制，但会受到指标延迟和冷启动影响。",
      "底层拆解：一次发布如何落到集群",
      "一次",
      "Deployment",
      "更新，大致会经过这条链路：",
      "API",
      "Server",
      "接收声明并写入",
      "etcd",
      "Deployment",
      "Controller",
      "创建新的",
      "ReplicaSet",
      "ReplicaSet",
      "Controller",
      "创建",
      "Pod",
      "Scheduler",
      "为",
      "Pod",
      "选择",
      "Node",
      "Kubelet",
      "拉镜像、挂载卷、启动容器",
      "Readiness",
      "Probe",
      "通过后，Endpoint",
      "才接入流量",
      "Service",
      "或",
      "Ingress",
      "把请求转发到可用",
      "Pod",
      "这条链路就是排障地图。Pod",
      "不启动看事件和镜像，不能调度看资源和污点，不能访问看",
      "Service、Endpoint、NetworkPolicy",
      "和",
      "DNS。",
      "能力地图",
      "对象模型：Pod、ReplicaSet、Deployment、StatefulSet、DaemonSet",
      "流量入口：Service、EndpointSlice、Ingress、Gateway",
      "API、CoreDNS",
      "配置身份：ConfigMap、Secret、ServiceAccount、RBAC",
      "调度资源：requests、limits、taints、tolerations、affinity、priority",
      "存储状态：PV、PVC、StorageClass、StatefulSet、有状态服务滚动策略",
      "弹性稳定：readiness、liveness、startup",
      "probe、HPA、PDB、滚动发布",
      "排障证据：events、logs、describe、metrics、container",
      "status、node",
      "condition",
      "快速实验清单",
      "写",
      "Deployment、Service、Ingress、ConfigMap、Secret",
      "的最小",
      "YAML",
      "故意写错镜像",
      "tag，观察",
      "`kubectl",
      "describe",
      "pod`",
      "的事件",
      "设置",
      "readinessProbe，再验证未就绪",
      "Pod",
      "不接流量",
      "设置",
      "requests",
      "和",
      "limits，观察调度与",
      "OOMKilled",
      "用",
      "Helm",
      "安装一个组件，再查看渲染后的",
      "YAML",
      "排障检查点",
      "Pod",
      "Pending：看资源不足、nodeSelector、affinity、taints、PVC",
      "绑定",
      "ImagePullBackOff：看镜像名、tag、仓库权限、imagePullSecret",
      "和网络",
      "CrashLoopBackOff：看启动命令、配置文件、依赖连接、探针是否过早",
      "Service",
      "不通：看",
      "selector",
      "是否匹配、Endpoint",
      "是否生成、端口名和",
      "targetPort",
      "Ingress",
      "不通：看",
      "IngressClass、Controller",
      "日志、TLS",
      "secret",
      "和后端",
      "Service",
      "扩容无效：看",
      "HPA",
      "指标源、requests",
      "是否设置、PDB",
      "是否限制驱逐",
      "最小上线配置",
      "apiVersion:",
      "apps/v1",
      "kind:",
      "Deployment",
      "metadata:",
      "name:",
      "api",
      "spec:",
      "replicas:",
      "3",
      "selector:",
      "matchLabels:",
      "app:",
      "api",
      "template:",
      "metadata:",
      "labels:",
      "app:",
      "api",
      "spec:",
      "containers:",
      "-",
      "name:",
      "api",
      "image:",
      "example/api@sha256:...",
      "ports:",
      "-",
      "containerPort:",
      "8080",
      "resources:",
      "requests:",
      "cpu:",
      "300m",
      "memory:",
      "512Mi",
      "limits:",
      "memory:",
      "1Gi",
      "readinessProbe:",
      "httpGet:",
      "path:",
      "/ready",
      "port:",
      "8080",
      "livenessProbe:",
      "httpGet:",
      "path:",
      "/live",
      "port:",
      "8080",
      "最小上线配置必须回答四个问题：谁来接流量，何时接流量，需要多少资源，失败后如何恢复。",
      "官方文档入口",
      "Kubernetes",
      "Concepts:",
      "https://kubernetes.io/docs/concepts/",
      "Kubernetes",
      "Tasks:",
      "https://kubernetes.io/docs/tasks/",
      "Helm",
      "Docs:",
      "https://helm.sh/docs/",
      "etcd",
      "Docs:",
      "https://etcd.io/docs/"
    ],
    "bodyBlocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "顶层思维：K8s 是期望状态系统"
      },
      {
        "type": "paragraph",
        "text": "Kubernetes 的核心不是 `kubectl apply`，而是你声明期望状态，控制器持续观察现实状态并尝试修正偏差。"
      },
      {
        "type": "paragraph",
        "text": "先抓住四条主线："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Workload：Pod、Deployment、StatefulSet、DaemonSet 管应用生命周期",
          "Traffic：Service、Ingress、Gateway API 管服务发现和入口流量",
          "Config：ConfigMap、Secret、ServiceAccount 管配置、密钥和身份",
          "Platform：Node、Scheduler、CNI、CSI、HPA、RBAC 管资源、安全和扩缩容"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "本质：K8s 是分布式系统的期望状态控制器"
      },
      {
        "type": "paragraph",
        "text": "Kubernetes 的本质不是“管理容器”，而是一个声明式分布式控制系统。"
      },
      {
        "type": "paragraph",
        "text": "你提交的是期望状态：需要几个副本、开放什么端口、需要多少资源、如何探活、如何挂载存储。控制面不断观察现实状态，并通过控制器把现实拉向期望。"
      },
      {
        "type": "paragraph",
        "text": "这个思想来自控制论：系统有目标值，有观测值，有误差，有调节动作。Kubernetes 里的 controller loop 就是在不断执行："
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "观察当前状态",
          "比较期望状态",
          "计算差异",
          "发起修正动作",
          "继续观察"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层架构：控制面、节点面和扩展接口"
      },
      {
        "type": "paragraph",
        "text": "Kubernetes 可以拆成三层："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "控制面：API Server、etcd、Scheduler、Controller Manager、Admission",
          "节点面：Kubelet、container runtime、kube-proxy、CNI、CSI",
          "扩展面：CRD、Operator、Webhook、Helm、Gateway/Ingress Controller"
        ]
      },
      {
        "type": "paragraph",
        "text": "一次创建 Pod 的完整路径："
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "API Server 校验请求，经过认证、鉴权、准入控制",
          "对象写入 etcd，成为集群事实来源",
          "Scheduler 监听到未绑定节点的 Pod，执行过滤和打分",
          "Kubelet 监听到分配给自己的 Pod，调用 runtime 启动容器",
          "CNI 配网络，CSI 挂存储，探针决定是否接入流量",
          "Controller 持续检查副本数、滚动发布和故障恢复"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "典型场景：什么时候该用 K8s"
      },
      {
        "type": "paragraph",
        "text": "适合 Kubernetes 的场景："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "微服务数量多，需要统一发布、伸缩、回滚和服务发现",
          "多团队共享基础设施，需要资源配额、命名空间和权限治理",
          "需要自动恢复、弹性伸缩、灰度发布和可观测标准化",
          "希望把平台能力沉淀成 Operator、CRD 或内部 PaaS"
        ]
      },
      {
        "type": "paragraph",
        "text": "不适合直接上 Kubernetes 的场景："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "服务数量很少，发布频率低，团队没有平台运维能力",
          "业务复杂度低，但引入 K8s 后运维复杂度明显高于收益",
          "关键依赖没有监控、日志、备份和容量治理，先上 K8s 只会放大混乱"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "算法与数学原理"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Raft 共识：etcd 用 Raft 保证多节点日志一致。核心是 leader、term、quorum，多数派确认后日志才算提交。",
          "调度过滤与打分：Scheduler 先过滤不可用节点，再给可用节点打分。它不是寻找全局最优，而是在约束下快速找到足够好的节点。",
          "Bin packing：资源调度类似装箱问题，要把不同 CPU/内存需求的 Pod 放到有限节点上。这个问题通常没有低成本全局最优解，所以系统使用启发式策略。",
          "指数退避：失败重试不是固定频率，而是逐步拉长等待时间，避免故障时把压力继续打到依赖上。",
          "HPA 控制公式：副本数近似按 `当前副本数 * 当前指标 / 目标指标` 调整。它背后是反馈控制，但会受到指标延迟和冷启动影响。"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层拆解：一次发布如何落到集群"
      },
      {
        "type": "paragraph",
        "text": "一次 Deployment 更新，大致会经过这条链路："
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "API Server 接收声明并写入 etcd",
          "Deployment Controller 创建新的 ReplicaSet",
          "ReplicaSet Controller 创建 Pod",
          "Scheduler 为 Pod 选择 Node",
          "Kubelet 拉镜像、挂载卷、启动容器",
          "Readiness Probe 通过后，Endpoint 才接入流量",
          "Service 或 Ingress 把请求转发到可用 Pod"
        ]
      },
      {
        "type": "paragraph",
        "text": "这条链路就是排障地图。Pod 不启动看事件和镜像，不能调度看资源和污点，不能访问看 Service、Endpoint、NetworkPolicy 和 DNS。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "能力地图"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "对象模型：Pod、ReplicaSet、Deployment、StatefulSet、DaemonSet",
          "流量入口：Service、EndpointSlice、Ingress、Gateway API、CoreDNS",
          "配置身份：ConfigMap、Secret、ServiceAccount、RBAC",
          "调度资源：requests、limits、taints、tolerations、affinity、priority",
          "存储状态：PV、PVC、StorageClass、StatefulSet、有状态服务滚动策略",
          "弹性稳定：readiness、liveness、startup probe、HPA、PDB、滚动发布",
          "排障证据：events、logs、describe、metrics、container status、node condition"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "快速实验清单"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "写 Deployment、Service、Ingress、ConfigMap、Secret 的最小 YAML",
          "故意写错镜像 tag，观察 `kubectl describe pod` 的事件",
          "设置 readinessProbe，再验证未就绪 Pod 不接流量",
          "设置 requests 和 limits，观察调度与 OOMKilled",
          "用 Helm 安装一个组件，再查看渲染后的 YAML"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "排障检查点"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Pod Pending：看资源不足、nodeSelector、affinity、taints、PVC 绑定",
          "ImagePullBackOff：看镜像名、tag、仓库权限、imagePullSecret 和网络",
          "CrashLoopBackOff：看启动命令、配置文件、依赖连接、探针是否过早",
          "Service 不通：看 selector 是否匹配、Endpoint 是否生成、端口名和 targetPort",
          "Ingress 不通：看 IngressClass、Controller 日志、TLS secret 和后端 Service",
          "扩容无效：看 HPA 指标源、requests 是否设置、PDB 是否限制驱逐"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "最小上线配置"
      },
      {
        "type": "code",
        "language": "yaml",
        "text": "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: api\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: api\n  template:\n    metadata:\n      labels:\n        app: api\n    spec:\n      containers:\n        - name: api\n          image: example/api@sha256:...\n          ports:\n            - containerPort: 8080\n          resources:\n            requests:\n              cpu: 300m\n              memory: 512Mi\n            limits:\n              memory: 1Gi\n          readinessProbe:\n            httpGet:\n              path: /ready\n              port: 8080\n          livenessProbe:\n            httpGet:\n              path: /live\n              port: 8080"
      },
      {
        "type": "paragraph",
        "text": "最小上线配置必须回答四个问题：谁来接流量，何时接流量，需要多少资源，失败后如何恢复。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "官方文档入口"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Kubernetes Concepts: https://kubernetes.io/docs/concepts/",
          "Kubernetes Tasks: https://kubernetes.io/docs/tasks/",
          "Helm Docs: https://helm.sh/docs/",
          "etcd Docs: https://etcd.io/docs/"
        ]
      }
    ],
    "colors": [
      "#326ce5",
      "#e8eee0",
      "#0f7b78"
    ]
  },
  {
    "id": "middleware-learning-system",
    "title": "中间件：从流量入口拆到消息语义",
    "category": "中间件",
    "date": "2026-05-12",
    "readTime": "22 min",
    "excerpt": "快速掌握中间件要理解它的本质、底层架构、适用场景，以及缓存、队列、限流、路由背后的算法和数学原理。",
    "quote": "顶层看系统解耦，底层看一致性、延迟和失败语义。",
    "topThinking": "先判断中间件承担的是削峰、解耦、缓存、路由、治理还是观测职责。",
    "deepDive": "拆到 Redis 数据结构、Kafka 分区、RabbitMQ exchange、NGINX 代理、限流、重试、幂等和积压处理。",
    "body": [
      "顶层思维：中间件是系统边界上的能力层",
      "中间件不要按产品名死记，要按系统职责理解。",
      "常见职责可以拆成五类：",
      "流量入口：NGINX、Ingress、API",
      "Gateway",
      "负责路由、TLS、限流和灰度",
      "缓存加速：Redis",
      "负责热点数据、分布式锁、计数器和会话",
      "异步解耦：RabbitMQ、Kafka",
      "负责削峰、缓冲和事件分发",
      "流式处理：Kafka",
      "负责日志、事件流和数据管道",
      "可观测性：Prometheus、日志系统、Trace",
      "系统负责证据链",
      "判断一个中间件是否该引入，先问三个问题：它解决的是延迟、吞吐、隔离、可靠性还是治理？它失败时会不会把故障扩大？团队是否有能力观测和维护它？",
      "本质：中间件是在系统边界上管理时间和压力",
      "中间件的本质不是“多装一个组件”，而是在系统之间加一层可治理的缓冲、路由、协调或状态管理。",
      "它通常解决四类矛盾：",
      "时间矛盾：生产者和消费者速度不同，所以需要队列和流",
      "空间矛盾：热点数据离用户太远，所以需要缓存和",
      "CDN",
      "依赖矛盾：下游不稳定，所以需要限流、熔断、重试和隔离",
      "治理矛盾：服务太多，所以需要网关、注册发现、配置和观测",
      "每引入一个中间件，系统就多一个状态源、多一个失败模式、多一套容量模型。所以学习中间件的关键不是会启动，而是能判断它在链路中承担什么语义。",
      "底层架构：代理、存储、复制和消费语义",
      "中间件可以按架构形态拆成四类：",
      "代理型：NGINX、API",
      "Gateway。核心是连接管理、路由、负载均衡、限流、TLS。",
      "缓存型：Redis。核心是内存数据结构、过期、淘汰、持久化、复制。",
      "队列型：RabbitMQ。核心是",
      "exchange、queue、ack、dead",
      "letter、prefetch。",
      "日志流型：Kafka。核心是",
      "topic、partition、append",
      "log、offset、consumer",
      "group。",
      "它们的共同底层问题是：请求来了放在哪里，谁来消费，失败是否重试，状态是否复制，容量满了怎么办。",
      "典型场景：什么时候引入中间件",
      "适合引入中间件的场景：",
      "Redis：读多写少、热点明显、允许短暂不一致的查询加速",
      "RabbitMQ：业务事件需要可靠投递、路由规则复杂、任务需要确认和死信",
      "Kafka：高吞吐日志、行为事件、数据管道、跨系统事件流",
      "NGINX/Gateway：统一入口、TLS",
      "终止、灰度路由、限流和反向代理",
      "谨慎引入的场景：",
      "数据一致性要求极高却想靠缓存绕过数据库建模问题",
      "消费者没有幂等能力却引入至少一次投递队列",
      "下游容量没有治理却用队列无限堆积",
      "团队没有监控和排障能力却引入复杂集群",
      "算法与数学原理",
      "LRU/LFU：缓存淘汰用访问时间或访问频率近似预测未来访问。它是概率判断，不是绝对正确。",
      "一致性哈希：把节点和",
      "key",
      "映射到哈希环，节点变化时只迁移相邻区间数据，降低扩缩容抖动。",
      "Bloom",
      "Filter：用多个哈希函数判断元素“可能存在”或“一定不存在”，常用于缓存穿透防护。",
      "令牌桶：请求先拿",
      "token，桶按固定速率补充。它允许短时突发，但长期速率受限。",
      "日志追加模型：Kafka",
      "把消息追加到分区日志，顺序写磁盘比随机写更高效，消费者用",
      "offset",
      "表示进度。",
      "排队论：队列延迟和利用率非线性相关。当系统接近满负荷时，等待时间会急剧上升，不是线性变慢。",
      "底层拆解：消息系统首先要问语义",
      "学习消息队列时，不要只会生产和消费，要能回答这些问题：",
      "消息是否允许重复，消费者是否幂等",
      "失败后是重试、进入死信队列，还是阻塞整个分区",
      "顺序要求是全局顺序，还是同一个",
      "key",
      "内有序",
      "积压后如何扩容消费者，瓶颈在",
      "broker",
      "还是下游数据库",
      "消息确认发生在处理前还是处理后",
      "保留策略、过期时间和磁盘水位如何设置",
      "能力地图",
      "网关代理：连接复用、超时、重试、限流、TLS、灰度路由",
      "缓存系统：缓存旁路、过期策略、淘汰策略、热点",
      "key、持久化",
      "消息队列：确认、重试、死信、顺序、幂等、消费者组",
      "流处理：分区、offset、保留时间、compact、rebalancing",
      "稳定性：背压、熔断、降级、隔离舱、连接池和线程池",
      "可观测：吞吐、延迟、错误率、积压量、连接数、重试次数",
      "快速实验清单",
      "用",
      "Redis",
      "实现缓存旁路模式，并处理缓存穿透、击穿、雪崩",
      "用",
      "RabbitMQ",
      "写",
      "direct、topic、fanout",
      "三种",
      "exchange",
      "用",
      "Kafka",
      "建",
      "topic、分区、消费者组，观察",
      "rebalancing",
      "用",
      "NGINX",
      "配置",
      "upstream、超时、重试和限流",
      "给每个组件加延迟、错误率、积压量和连接数指标",
      "排障检查点",
      "Redis",
      "延迟高：看慢日志、大",
      "key、热",
      "key、内存淘汰、fork",
      "和网络",
      "缓存不一致：看写数据库和删缓存的顺序、重试、延迟双删和过期时间",
      "Kafka",
      "积压：看生产速率、消费速率、分区数、消费者数量和下游瓶颈",
      "RabbitMQ",
      "阻塞：看未确认消息、prefetch、死信队列、磁盘水位",
      "NGINX",
      "502/504：看",
      "upstream",
      "健康、连接超时、读超时、后端连接池",
      "重试放大：看超时设置、最大重试次数、退避和抖动",
      "一条请求里的中间件视角",
      "网关接入请求，决定是否限流、鉴权、路由和记录",
      "trace",
      "id",
      "服务先读缓存，命中则快速返回，未命中进入数据库",
      "写路径先提交数据库，再发出事件或删除缓存",
      "队列消费者异步处理通知、索引、报表或外部调用",
      "可观测系统串起网关、服务、缓存、队列和数据库的证据链",
      "中间件学习的核心是失败语义：失败时是丢、等、重试、降级，还是把压力传递给下游。",
      "官方文档入口",
      "Redis",
      "Docs:",
      "https://redis.io/docs/latest/",
      "Kafka",
      "Documentation:",
      "https://kafka.apache.org/documentation/",
      "RabbitMQ",
      "Docs:",
      "https://www.rabbitmq.com/docs",
      "NGINX",
      "Docs:",
      "https://nginx.org/en/docs/"
    ],
    "bodyBlocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "顶层思维：中间件是系统边界上的能力层"
      },
      {
        "type": "paragraph",
        "text": "中间件不要按产品名死记，要按系统职责理解。"
      },
      {
        "type": "paragraph",
        "text": "常见职责可以拆成五类："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "流量入口：NGINX、Ingress、API Gateway 负责路由、TLS、限流和灰度",
          "缓存加速：Redis 负责热点数据、分布式锁、计数器和会话",
          "异步解耦：RabbitMQ、Kafka 负责削峰、缓冲和事件分发",
          "流式处理：Kafka 负责日志、事件流和数据管道",
          "可观测性：Prometheus、日志系统、Trace 系统负责证据链"
        ]
      },
      {
        "type": "paragraph",
        "text": "判断一个中间件是否该引入，先问三个问题：它解决的是延迟、吞吐、隔离、可靠性还是治理？它失败时会不会把故障扩大？团队是否有能力观测和维护它？"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "本质：中间件是在系统边界上管理时间和压力"
      },
      {
        "type": "paragraph",
        "text": "中间件的本质不是“多装一个组件”，而是在系统之间加一层可治理的缓冲、路由、协调或状态管理。"
      },
      {
        "type": "paragraph",
        "text": "它通常解决四类矛盾："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "时间矛盾：生产者和消费者速度不同，所以需要队列和流",
          "空间矛盾：热点数据离用户太远，所以需要缓存和 CDN",
          "依赖矛盾：下游不稳定，所以需要限流、熔断、重试和隔离",
          "治理矛盾：服务太多，所以需要网关、注册发现、配置和观测"
        ]
      },
      {
        "type": "paragraph",
        "text": "每引入一个中间件，系统就多一个状态源、多一个失败模式、多一套容量模型。所以学习中间件的关键不是会启动，而是能判断它在链路中承担什么语义。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层架构：代理、存储、复制和消费语义"
      },
      {
        "type": "paragraph",
        "text": "中间件可以按架构形态拆成四类："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "代理型：NGINX、API Gateway。核心是连接管理、路由、负载均衡、限流、TLS。",
          "缓存型：Redis。核心是内存数据结构、过期、淘汰、持久化、复制。",
          "队列型：RabbitMQ。核心是 exchange、queue、ack、dead letter、prefetch。",
          "日志流型：Kafka。核心是 topic、partition、append log、offset、consumer group。"
        ]
      },
      {
        "type": "paragraph",
        "text": "它们的共同底层问题是：请求来了放在哪里，谁来消费，失败是否重试，状态是否复制，容量满了怎么办。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "典型场景：什么时候引入中间件"
      },
      {
        "type": "paragraph",
        "text": "适合引入中间件的场景："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Redis：读多写少、热点明显、允许短暂不一致的查询加速",
          "RabbitMQ：业务事件需要可靠投递、路由规则复杂、任务需要确认和死信",
          "Kafka：高吞吐日志、行为事件、数据管道、跨系统事件流",
          "NGINX/Gateway：统一入口、TLS 终止、灰度路由、限流和反向代理"
        ]
      },
      {
        "type": "paragraph",
        "text": "谨慎引入的场景："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "数据一致性要求极高却想靠缓存绕过数据库建模问题",
          "消费者没有幂等能力却引入至少一次投递队列",
          "下游容量没有治理却用队列无限堆积",
          "团队没有监控和排障能力却引入复杂集群"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "算法与数学原理"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "LRU/LFU：缓存淘汰用访问时间或访问频率近似预测未来访问。它是概率判断，不是绝对正确。",
          "一致性哈希：把节点和 key 映射到哈希环，节点变化时只迁移相邻区间数据，降低扩缩容抖动。",
          "Bloom Filter：用多个哈希函数判断元素“可能存在”或“一定不存在”，常用于缓存穿透防护。",
          "令牌桶：请求先拿 token，桶按固定速率补充。它允许短时突发，但长期速率受限。",
          "日志追加模型：Kafka 把消息追加到分区日志，顺序写磁盘比随机写更高效，消费者用 offset 表示进度。",
          "排队论：队列延迟和利用率非线性相关。当系统接近满负荷时，等待时间会急剧上升，不是线性变慢。"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "底层拆解：消息系统首先要问语义"
      },
      {
        "type": "paragraph",
        "text": "学习消息队列时，不要只会生产和消费，要能回答这些问题："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "消息是否允许重复，消费者是否幂等",
          "失败后是重试、进入死信队列，还是阻塞整个分区",
          "顺序要求是全局顺序，还是同一个 key 内有序",
          "积压后如何扩容消费者，瓶颈在 broker 还是下游数据库",
          "消息确认发生在处理前还是处理后",
          "保留策略、过期时间和磁盘水位如何设置"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "能力地图"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "网关代理：连接复用、超时、重试、限流、TLS、灰度路由",
          "缓存系统：缓存旁路、过期策略、淘汰策略、热点 key、持久化",
          "消息队列：确认、重试、死信、顺序、幂等、消费者组",
          "流处理：分区、offset、保留时间、compact、rebalancing",
          "稳定性：背压、熔断、降级、隔离舱、连接池和线程池",
          "可观测：吞吐、延迟、错误率、积压量、连接数、重试次数"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "快速实验清单"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "用 Redis 实现缓存旁路模式，并处理缓存穿透、击穿、雪崩",
          "用 RabbitMQ 写 direct、topic、fanout 三种 exchange",
          "用 Kafka 建 topic、分区、消费者组，观察 rebalancing",
          "用 NGINX 配置 upstream、超时、重试和限流",
          "给每个组件加延迟、错误率、积压量和连接数指标"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "排障检查点"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Redis 延迟高：看慢日志、大 key、热 key、内存淘汰、fork 和网络",
          "缓存不一致：看写数据库和删缓存的顺序、重试、延迟双删和过期时间",
          "Kafka 积压：看生产速率、消费速率、分区数、消费者数量和下游瓶颈",
          "RabbitMQ 阻塞：看未确认消息、prefetch、死信队列、磁盘水位",
          "NGINX 502/504：看 upstream 健康、连接超时、读超时、后端连接池",
          "重试放大：看超时设置、最大重试次数、退避和抖动"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "一条请求里的中间件视角"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "网关接入请求，决定是否限流、鉴权、路由和记录 trace id",
          "服务先读缓存，命中则快速返回，未命中进入数据库",
          "写路径先提交数据库，再发出事件或删除缓存",
          "队列消费者异步处理通知、索引、报表或外部调用",
          "可观测系统串起网关、服务、缓存、队列和数据库的证据链"
        ]
      },
      {
        "type": "paragraph",
        "text": "中间件学习的核心是失败语义：失败时是丢、等、重试、降级，还是把压力传递给下游。"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "官方文档入口"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Redis Docs: https://redis.io/docs/latest/",
          "Kafka Documentation: https://kafka.apache.org/documentation/",
          "RabbitMQ Docs: https://www.rabbitmq.com/docs",
          "NGINX Docs: https://nginx.org/en/docs/"
        ]
      }
    ],
    "colors": [
      "#de6449",
      "#f1dfb8",
      "#7f4d64"
    ]
  },
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
