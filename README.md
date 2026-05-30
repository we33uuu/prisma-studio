# Prisma Studio — Landing Page

Dark, cinematic landing page for Prisma creative studio.  
Built with **React 18 + Vite + TypeScript + Tailwind CSS + Framer Motion**.

## Tech Stack

| 工具 | 说明 |
|------|------|
| Vite 5 | 构建工具 |
| React 18 | UI 框架 |
| TypeScript | 类型安全 |
| Tailwind CSS 3 | 样式 |
| Framer Motion 11 | 动画 |
| Lucide React | 图标 |

## 快速启动

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器
npm run dev

# 3. 打开浏览器访问
# http://localhost:5173
```

## 构建生产版本

```bash
npm run build
npm run preview
```

## 项目结构

```
prisma-studio/
├── index.html                  # Google Fonts 引入（Almarai + Instrument Serif）
├── tailwind.config.js          # 自定义颜色 primary:#DEDBC8，字体 serif
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
└── src/
    ├── main.tsx                # 入口
    ├── App.tsx                 # 根组件（Hero → About → Features）
    ├── index.css               # 全局字体 + noise 纹理工具类
    └── components/
        ├── HeroSection.tsx         # 全屏视频英雄区
        ├── AboutSection.tsx        # 关于区（滚动字符透明度动画）
        ├── FeaturesSection.tsx     # 功能卡片网格区
        ├── WordsPullUp.tsx         # 单段文字上拉动画
        ├── WordsPullUpMultiStyle.tsx  # 多段混合样式上拉动画
        └── AnimatedLetter.tsx      # 滚动联动字符透明度组件
```

## 设计规范

- **背景色**: `#000000` 全局 / `#101010` About 卡片 / `#212121` Features 卡片
- **主色调**: `#E1E0CC` / `#DEDBC8`（暖奶油色）
- **字体**: Almarai（正文）+ Instrument Serif italic（斜体装饰）
- **动画缓动**: `[0.16, 1, 0.3, 1]`（pull-up）/ `[0.22, 1, 0.36, 1]`（卡片入场）
