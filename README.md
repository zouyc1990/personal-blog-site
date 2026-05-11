# 永诚手记 | 个人博客网站

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
colors: "#7f4d64,#f1dfb8,#5b7f45"
---

第一段正文。

第二段正文。
```

`category` 建议只使用这五个值：`SRE理念`、`AI`、`算法`、`编程`、`Cloud最佳实践`。

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
