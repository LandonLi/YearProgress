# ⏳ Year Progress

> 一个极简、赛博科技风格的年度进度追踪器。
>
> A minimalist, cyberpunk-style real-time year progress tracker.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![PWA](https://img.shields.io/badge/PWA-Supported-purple.svg)
![Style](https://img.shields.io/badge/Style-Cyberpunk-cyan.svg)

[**在线演示 (Demo)**](https://year-nhw8.pages.dev) <!-- 记得替换成你的实际链接 -->

## ✨ 特性 (Features)

*   **🎨 极简科技美学**：采用 Cyberpunk/Glassmorphism 设计语言，无边框沉浸式体验。
*   **🌗 双色主题**：支持深色 (Dark) / 亮色 (Light) 模式，自动跟随系统或手动切换。
*   **⚡ 实时高精计算**：精确到小数点后 6 位的实时进度展示，感受时间的流动。
*   **📱 PWA 支持**：符合 Progressive Web App 标准，可安装至手机/桌面，支持离线访问。
*   **🎆 物理烟花引擎**：基于 Canvas 的高性能粒子系统，支持重力与空气阻力模拟。
    *   *自动触发*：新年零点自动燃放。
    *   *手动触发*：开发者控制台彩蛋。
*   **🚀 极致性能**：纯原生 HTML/CSS/JS 实现，无任何外部依赖，加载瞬间完成。

## 🛠️ 安装与开发 (Installation)

本项目为纯静态网站，无需构建过程。

### 本地运行

1.  克隆仓库：
    ```bash
    git clone https://github.com/LandonLi/YearProgress
    cd YearProgress
    ```

2.  启动本地服务器：
    由于使用了 PWA (Service Worker) 和 ES6 模块，建议通过 HTTP 服务运行，而不是直接打开文件。
    
    *   **VS Code**: 使用 "Live Server" 插件。
    *   **Python**: `python -m http.server 8000`
    *   **Node**: `npx http-server`

3.  在浏览器访问 `http://localhost:8000`。

## 📂 项目结构 (Structure)

```text
YearProgress/
├── img/                     # 图标资源目录
│   ├── android-chrome-*.png # PWA 图标
│   ├── apple-touch-icon.png # iOS 图标
│   ├── favicon-*.png        # 网页图标
│   └── logo.svg             # 原始矢量图标
├── index.html               # 主入口 (包含核心 CSS/JS)
├── sw.js                    # Service Worker (PWA 缓存策略)
├── site.webmanifest         # PWA 配置文件
├── favicon.ico              # 兼容旧版图标
└── README.md                # 项目说明
```

## 🎮 彩蛋 (Easter Egg)

想要立即查看新年烟花效果？

1.  打开浏览器控制台 (F12 / Console)。
2.  输入以下命令并回车：

```javascript
window.triggerFireworks()
```

页面将立即触发烟花秀🎆

## 🚀 部署 (Deployment)

本项目适配 **Cloudflare Pages**、**Vercel**、**Netlify** 或 **GitHub Pages**。

### Cloudflare Pages (推荐)

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/LandonLi/YearProgress)

## 📄 许可证 (License)

MIT License © 2025

---

**Enjoy your time!**
