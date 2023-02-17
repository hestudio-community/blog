---
title: heStudio BingWallpaper Get
date: 2022-12-14 12:01:35
tag: 
    - Linux
    - 必应壁纸
    - Node
    - NPM
    - API
category: 软件发布
---

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