---
title: "算法：从问题结构拆到状态转移"
category: "算法"
date: "2026-05-09"
readTime: "10 min"
excerpt: "算法不是背模板，而是从约束中识别问题结构，再把结构翻译成数据结构和状态转移。"
quote: "顶层看问题不变量，底层看状态如何被更新。"
topThinking: "先识别约束、目标函数、不变量和可复用子问题。"
deepDive: "拆到状态定义、转移方程、边界条件、复杂度和数据结构选择。"
colors: "#0f7b78,#f2b66d,#7f4d64"
---

## 顶层思维：先看问题属于哪种结构

算法题表面千变万化，但底层结构并不多。真正重要的是先识别它属于哪一类问题。

我会先问四个问题：

- 有没有重叠子问题，能不能用动态规划
- 有没有单调性，能不能用二分、单调栈、滑动窗口
- 有没有图结构，节点和边分别是什么
- 有没有局部最优可以推出全局最优，能不能贪心

## 底层拆解：动态规划必须说清楚状态

很多 DP 写不出来，不是因为不会公式，而是状态定义含糊。

一个 DP 至少要拆到：

1. `dp[i]` 或 `dp[i][j]` 到底表示什么
2. 状态从哪些旧状态转移而来
3. 初始状态是什么
4. 遍历顺序为什么正确
5. 时间和空间复杂度是多少

## 例子：最小路径和

```js
function minPathSum(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const dp = Array.from({ length: rows }, () => Array(cols).fill(Infinity));

  dp[0][0] = grid[0][0];

  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      if (r > 0) dp[r][c] = Math.min(dp[r][c], dp[r - 1][c] + grid[r][c]);
      if (c > 0) dp[r][c] = Math.min(dp[r][c], dp[r][c - 1] + grid[r][c]);
    }
  }

  return dp[rows - 1][cols - 1];
}
```

这里的顶层结构是“无环网格上的最短路径”，底层实现是二维状态转移。只要这两层都清楚，题目换皮也不会慌。
