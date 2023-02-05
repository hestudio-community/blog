---
title: heStudio BingWallpaper Get
icon: api
article: false
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
Get /gettitle
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

::: code-tabs

@tab Docker部署 (推荐)
```shell
docker pull registry.cn-hangzhou.aliyuncs.com/hestudio/hestudio_bing_wallpaper_get:1.1.0
```


@tab NPM安装
```shell
npm i hestudio-bingwallpaper-get
cd node_modules/hestudio-bingwallpaper-get/ && npm run server
```

@tab 手动安装
```shell
git clone https://gitlab.com/heStudio/bing-wallpaper-get.git
cd bing-wallpaper-get
npm run server
```

:::