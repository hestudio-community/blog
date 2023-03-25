---
title: heStudio BingWallpaper Get - 一个自动获取图片的必应壁纸接口
date: 2023-02-17 11:30:35
tag: 
    - Linux
    - 必应壁纸
    - Node
    - NPM
    - API
category: 软件发布
---

一个自动获取图片的必应壁纸二次封装接口，这个接口主要方便部分框架不支持自主嵌入处理窗口，仅支持图片链接和没有开发能力的人使用。

### demo
![这是一张自动更换的图片](https://hbwg.hestudio.org/getimage)

### 调用方法

::: tip
运行端口在`3000`
:::

#### 获取图片
```
GET /getimage
```

#### 获取图片标题
```
GET /gettitle
```

返回参数：

| 参数 | 说明 |
|---|---|
| `title` | 标题 |

#### 获取图片版权信息
```
GET /getcopyright
```

返回参数：

| 参数 | 说明 |
|---|---|
| `copyright` | 版权信息 |
| `copyrightlink` | 版权信息所对应的链接 |

### 安装方法

详见 https://www.hestudio.org/docs/hestudio_bing_wallpaper_get.html

<Share colorful />
