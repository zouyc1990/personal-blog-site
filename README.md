# 永成手记 | 个人博客网站

这是一个零依赖前端、Markdown 内容驱动的个人博客。定位为长期沉淀五大主题：

- SRE理念
- AI
- 算法
- 编程
- Cloud最佳实践

## 本地使用

```bash
npm run build
open index.html
```

`npm run build` 会读取 `content/posts/*.md`，生成 `posts.generated.js`。浏览器打开 `index.html` 时会加载这个生成文件。

## 写新文章

在 `content/posts/` 下新增一个 Markdown 文件，例如：

```bash
content/posts/my-new-post.md
```

文件格式：

```md
---
title: "文章标题"
category: "SRE理念"
date: "2026-05-11"
readTime: "8 min"
excerpt: "文章摘要"
quote: "文章金句"
topThinking: "顶层判断：目标、约束、取舍、边界"
deepDive: "底层抓手：协议、源码、参数、配置、故障链路"
colors: "#7f4d64,#f1dfb8,#5b7f45"
---

## 顶层思维：先讲系统判断

这里写为什么、边界、权衡、指标、反馈回路。

## 底层拆解：再讲技术细节

- 关键协议或数据结构
- 核心参数和配置
- 失败路径和排障证据

```yaml
example: config
```
```

`category` 建议只使用这五个值：`SRE理念`、`AI`、`算法`、`编程`、`Cloud最佳实践`。

每篇文章建议固定回答两个问题：

- 顶层思维：这个问题在系统、组织、业务或长期演进里的本质是什么
- 深入底层：具体到协议、代码、配置、资源、指标和故障链路时，它到底如何运转

## 发布到 GitHub Pages

第一次发布：

```bash
git init
git add .
git commit -m "Initial personal blog"
git branch -M main
git remote add origin git@github.com:你的用户名/你的仓库名.git
git push -u origin main
```

然后到 GitHub 仓库：

1. 打开 `Settings`
2. 进入 `Pages`
3. `Build and deployment` 选择 `GitHub Actions`
4. 回到 `Actions`，等待 `Deploy blog to GitHub Pages` 跑完

之后每次发布文章：

```bash
npm run build
git add .
git commit -m "Add new blog post"
git push
```

push 到 `main` 后，`.github/workflows/deploy.yml` 会自动构建并部署到 GitHub Pages。

## 文件结构

- `index.html`：页面结构
- `styles.css`：视觉样式和响应式布局
- `script.js`：搜索、筛选、弹窗、归档等交互
- `content/posts/`：Markdown 文章
- `scripts/build-content.js`：把文章编译成 `posts.generated.js`
- `.github/workflows/deploy.yml`：GitHub Pages 自动部署流程
