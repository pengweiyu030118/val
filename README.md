# 无畏契约 VALORANT 游戏人格测试

一个电竞风格的 VALORANT 游戏人格测试 Web 应用，通过 25 道专业题目分析你的游戏人格。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: TailwindCSS
- **动画**: Framer Motion
- **特效**: Canvas Confetti + Canvas 粒子背景
- **部署**: Vercel

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式运行
npm run dev

# 浏览器访问
# http://localhost:3000
```

## 构建部署

```bash
# 生产构建
npm run build

# 启动生产服务
npm start
```

## Vercel 部署

1. 将项目推送到 GitHub 仓库
2. 在 [Vercel](https://vercel.com) 导入该仓库
3. 框架自动识别为 Next.js，无需额外配置
4. 点击 Deploy 即可

或使用 Vercel CLI：

```bash
npm i -g vercel
vercel
```

## 项目结构

```
val-test/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # 全局布局 + SEO metadata
│   │   ├── page.tsx            # 首页
│   │   ├── globals.css         # 全局样式
│   │   ├── test/
│   │   │   └── page.tsx        # 测试页
│   │   ├── result/
│   │   │   └── page.tsx        # 结果页
│   │   └── api/
│   │       └── result/
│   │           └── route.ts    # API 路由
│   ├── components/
│   │   ├── ParticleBackground.tsx  # 粒子背景
│   │   ├── ProgressBar.tsx        # 进度条
│   │   ├── QuestionCard.tsx       # 题目卡片
│   │   ├── RadarChart.tsx         # 雷达图
│   │   ├── ResultCard.tsx         # 结果卡片
│   │   ├── ShareButton.tsx        # 分享按钮
│   │   ├── SoundToggle.tsx        # 音效开关
│   │   └── LoadingScreen.tsx      # 加载画面
│   ├── data/
│   │   ├── questions.ts        # 25道题库
│   │   └── personalities.ts    # 8种人格数据
│   ├── hooks/
│   │   ├── useLocalStorage.ts  # localStorage Hook
│   │   └── useSound.ts         # 音效 Hook
│   ├── types/
│   │   └── index.ts            # TypeScript 类型定义
│   └── utils/
│       ├── calculate.ts        # 评分算法
│       └── share.ts            # 分享工具
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs
└── postcss.config.mjs
```

## 8 种人格类型

| 代号 | 名称 | 定位 |
|------|------|------|
| IGL | 冷静指挥官 | 指挥位 / 控场者 |
| DUEL | 冲锋决斗者 | 决斗者 / 突破手 |
| HUNT | 战术猎手 | 潜伏者 / 哨兵 |
| GUARD | 团队守护者 | 支援位 / 控场者 |
| SLTH | 潜伏大师 | 潜伏者 / 决斗者 |
| AIMG | 极限枪男 | 决斗者 / 自由人 |
| INFO | 信息控制者 | 先锋 / 信息位 |
| CLTH | 稳健残局王 | 残局专家 / 自由人 |

## 功能特性

- 25 道专业测试题目
- 8 种人格类型 + 完整分析
- Canvas 粒子动态背景
- 雷达图多维度展示
- 毛玻璃 + 霓虹光效 UI
- 页面切换动画
- 答题进度本地缓存
- 结果链接分享
- 移动端完美适配
- SEO 优化 (OpenGraph / Twitter Card)
- Framer Motion 流畅动效
- 音效反馈

## 环境变量

无需配置任何环境变量，开箱即用。
"# val" 
