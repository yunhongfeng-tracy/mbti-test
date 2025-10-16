# GitHub Pages 部署指南

## 步骤1：创建GitHub仓库

1. 在GitHub上创建新仓库，命名为 `mbti-test` 或你喜欢的名称
2. 将本地文件推送到仓库：
```bash
git init
git add .
git commit -m "初始提交：MBTI性格测试项目"
git branch -M main
git remote add origin https://github.com/你的用户名/仓库名.git
git push -u origin main
```

## 步骤2：启用GitHub Pages

1. 进入仓库设置（Settings）
2. 在左侧菜单找到 "Pages"
3. 在 "Source" 部分选择 "Deploy from a branch"
4. 选择 "main" 分支，根目录 "/"
5. 点击保存

## 步骤3：访问网站

部署完成后，你的网站将可以通过以下地址访问：
- `https://你的用户名.github.io/仓库名`

## 自定义域名（可选）

如需使用自定义域名：
1. 在仓库根目录创建 `CNAME` 文件，内容为你的域名
2. 在域名服务商处添加CNAME记录指向你的GitHub Pages地址

## 项目特点

- ✅ 纯前端，无需后端服务器
- ✅ 响应式设计，支持移动端
- ✅ 60道精选MBTI测试题目
- ✅ 现代化UI界面
- ✅ 实时进度显示
- ✅ 结果分享功能