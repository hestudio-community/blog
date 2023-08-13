---
title: heStudio BingWallpaper Get
icon: api
article: false
---

## demo
![这是一张自动更换的图片](https://api.hestudio.net/bgimage)

## 调用方法

::: tip
运行端口在`3000`
:::

### 获取图片
```
GET /getimage
```

### 获取图片标题
```
GET /gettitle
```

返回参数：

| 参数 | 说明 |
|---|---|
| `title` | 标题 |

### 获取图片版权信息
```
GET /getcopyright
```

返回参数：

| 参数 | 说明 |
|---|---|
| `copyright` | 版权信息 |
| `copyrightlink` | 版权信息所对应的链接 |

## 安装方法

::: code-tabs

@tab Docker部署 (推荐)
```sh
docker pull hestudio/bingwallpaper_get
docker run -d -p 3000:3000 hestudio/bingwallpaper_get
```


@tab NPM安装
```sh
npm install hestudio-bingwallpaper-get
echo "require('hestudio-bingwallpaper-get')" >> server.js
node server.js
```

@tab 手动安装
```sh
git clone https://gitlab.com/heStudio/bing-wallpaper-get.git
cd bing-wallpaper-get
npm install
npm run server
```

:::

## 在其他地方找到本项目

- Gitlab: https://gitlab.com/heStudio/bing-wallpaper-get
- NPM: https://www.npmjs.com/package/hestudio-bingwallpaper-get
- Docker Hub: https://hub.docker.com/r/hestudio/bingwallpaper_get

## 高级用法

::: danger 小白慎入
在使用高级用法之前，你需要了解`nodejs`,`docker`,`javascript`和`linux`的一些知识。如果你是小白，你应当只使用基本用法。
:::

::: info 假设条件
在下文中，我们将假设你将服务运行在`localhost:3000`

**请根据自己的实际需求更改文字**
:::

### 环境变量

#### hbwg_host
- 介绍: 自定义Bing前置URL
- 默认值: `https://cn.bing.com`

#### hbwg_config
- 介绍: 自定义请求参数
- 默认值: `format=js&idx=0&n=1&mkt=zh-CN`

#### hbwg_external
- 介绍: 外部文件路径
- 默认值: 项目运行路径

### 修改组件行为
::: tip 修改前提示
修改前你需要在根目录创建`external.js`文件。你可以自定义创建的路径和文件名称，只需添加`hbwg_external`环境变量即可。

将以下初始化内容粘贴到`external.js`:

```javascript
// external.js

module.exports = {
    // 组件配置
}
```
:::

#### 自定义`GET /`的行为

::: warning
修改此部分需要你额外具有`express.js`的知识。如果不是太了解，可以参考：

- http://expressjs.com/
- https://quickref.hestudio.net/docs/expressjs.html

:::

在默认情况下，访问`localhost:3000`会跳转到这里，你可以通过修改`rootprogram`函数以修改此行为。

示例项目如下：

```javascript {4-7}
// external.js

module.exports = {
    rootprogram: (req, res) => {
        //在这里修改内容
        res.send("helloworld")
    }
}
```


<Share colorful />
