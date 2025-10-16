# MBTI性格测试

一个纯前端的MBTI性格测试网页应用，基于经典的MBTI性格类型理论。

## 功能特点

- 🎯 60道精选测试题目
- 📱 响应式设计，支持移动端
- 🎨 现代化UI界面
- 📊 实时进度显示
- 🔄 可回溯修改答案
- 📋 结果分享功能

## 技术栈

- HTML5
- CSS3 (Flexbox, Grid, 渐变背景)
- 原生JavaScript (ES6+)
- 响应式设计

## 部署到GitHub Pages

1. 将项目推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择部署分支（通常是main或gh-pages）
4. 访问 `https://[你的用户名].github.io/[仓库名]` 查看网站

## 本地运行

```bash
# 直接打开index.html文件
# 或使用本地服务器
python -m http.server 8000
# 访问 http://localhost:8000
```

## 项目结构

```
mbti_test_github/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # 逻辑脚本
├── CHANGELOG.md        # 版本更新记录
├── README.md           # 说明文档
├── deploy.md           # 部署指南
├── 404.html            # 错误页面
├── CNAME               # 自定义域名配置
└── .gitignore          # Git忽略配置
```

## MBTI类型说明

测试基于经典的MBTI四个维度：
- **E/I**: 外向 vs 内向
- **S/N**: 实感 vs 直觉  
- **T/F**: 思考 vs 情感
- **J/P**: 判断 vs 感知

## 许可证

本项目使用MIT许可证，测试题目基于公开的MBTI测试资源。