---
title: heStudio BingWallpaper Get
icon: api
article: false
---

### 计划
- [x] 代码
- [x] NPM构建
- [x] Docker快速部署
- [ ] Linux 安装包
- [ ] Windows 安装包

### demo
![这是一张自动更换的图片](https://hbwg.hestudio.org/getimage)

### 调用方法
运行端口在`3000`
```
GET /getimage
```

### 安装方法
#### Docker部署 (推荐)
```shell
docker pull registry.cn-hangzhou.aliyuncs.com/hestudio/hestudio_bing_wallpaper_get:1.0.0
```
#### NPM安装
```shell
npm i hestudio-bing-wallpaper-get
cd node_modules/hestudio-bing-wallpaper-get/ && npm run server
```

#### 手动安装
```shell
git clone https://gitlab.com/heStudio/bing-wallpaper-get.git
cd bing-wallpaper-get
npm run server
```

