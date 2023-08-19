---
title: heStudio BingWallpaper Get
icon: api
article: false
---

## demo
![这是一张自动更换的图片](https://api.hestudio.net/bgimage)

## 调用方法 {#way}

::: tip
运行端口在`3000`
:::

### 获取图片 {#getimage}
```
GET /getimage
```

### 获取图片标题 {#gettitle}
```
GET /gettitle
```

返回参数：

| 参数 | 说明 |
|---|---|
| `title` | 标题 |

### 获取图片版权信息 {#getcopyright}
```
GET /getcopyright
```

返回参数：

| 参数 | 说明 |
|---|---|
| `copyright` | 版权信息 |
| `copyrightlink` | 版权信息所对应的链接 |

## 安装方法 {#install}

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

## 在其他地方找到本项目 {#link}

- Gitlab: https://gitlab.com/heStudio/bing-wallpaper-get
- NPM: https://www.npmjs.com/package/hestudio-bingwallpaper-get
- Docker Hub: https://hub.docker.com/r/hestudio/bingwallpaper_get

## 高级用法 {#pro}

::: danger 小白慎入
在使用高级用法之前，你需要了解`nodejs`,`docker`,`javascript`和`linux`的一些知识。如果你是小白，你应当只使用基本用法。
:::

::: info 假设条件
在下文中，我们将假设你将服务运行在`localhost:3000`

**请根据自己的实际需求更改文字**
:::

### 环境变量 {#env}

#### `hbwg_port`: 自定义程序端口
- 默认值: `3000`

#### `hbwg_host`: 自定义Bing前置URL
- 默认值: `https://cn.bing.com`

#### `hbwg_config`: 自定义请求参数
- 默认值: `format=js&idx=0&n=1&mkt=zh-CN`

#### `hbwg_external`: 外部文件路径
- 默认值: `./external.js`

### 修改组件行为 {#external}
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

#### `rootprogram`: 自定义`GET /`的行为 {#rootprogram}

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
  rootprogram: (req, res, getback, logback, logerr) => {
    //在这里修改内容
    res.send("helloworld")
  }
}
```

#### `beforestart`: 在服务运行前导入代码 {#beforestart}

在开始这部分内容之前，你需要了解以下内容。

本组件导入了1个项目变量和4个项目函数。分别是`app`, `getback`, `postback`, `logback`, `logerr`

其中，`app`变量由`express.js`导入，修改此部分需要你额外具有`express.js`的知识。如果不是太了解，可以参考：

- http://expressjs.com/
- https://quickref.hestudio.net/docs/expressjs.html

你**不能**使用`app.listen()`，因为这会导致项目出现致命错误。当然，你也**不能**将URL路由至`/`, `/getimage`, `/geititle`, `/getcopyright`等，它们也会导致项目**无法正常运行**。你可以自定义`/`，但是仅限于**GET**请求。如果需要自定义`/`，请参考`rootprogram`函数。

当然，还有4个项目函数，它们分别是`getback(ip, path)`, `postback(ip, path)`, `logback(log)`, `logerr(err)`。我们分别来讲以下：

##### `getback(ip, path)` {#getback}

| 参数 | 参数类型 |
|---|---|
| `ip` | `String` |
| `path` | `String` |

输出效果大概是这样:
```text
[YYYY-MM-DD HH:mm:ss] ${ip} GET ${path}
```

##### `postback(ip, path)` {#postback}

| 参数 | 参数类型 |
|---|---|
| `ip` | `String` |
| `path` | `String` |

输出效果大概是这样:
```text
[YYYY-MM-DD HH:mm:ss] ${ip} POST ${path}
```

##### `logback(log)` {#logback}

| 参数 | 参数类型 |
|---|---|
| `log` | `String` |

输出效果大概是这样:
```text
[YYYY-MM-DD HH:mm:ss] ${log}
```

##### `logerr(err)` {#logerr}

| 参数 | 参数类型 |
|---|---|
| `err` | `String` |

输出效果大概是这样:
```text
[YYYY-MM-DD HH:mm:ss] ERROR: ${err}
```

好的，现在可以通过以下结构在服务运行前导入代码

```javascript {4-6}
// external.js

module.exports = {
  beforestart: (app, getback, postback, logback, logerr) => {
    //在这里修改内容
  }
}
```

#### `refreshtime`: 设置资源刷新时间 {#refreshtime}

在修改本部分内容之前，需要了解以下[`node-schedule`](https://www.npmjs.com/package/node-schedule)

已导入`rule`变量，需修改rule变量才能有效果。

::: details 官方教程
Recurrence Rule Scheduling

You can build recurrence rules to specify when a job should recur. For instance, consider this rule, which executes the function every hour at 42 minutes after the hour:
```javascript
const schedule = require('node-schedule');

const rule = new schedule.RecurrenceRule();
rule.minute = 42;

const job = schedule.scheduleJob(rule, function(){
  console.log('The answer to life, the universe, and everything!');
});
```
You can also use arrays to specify a list of acceptable values, and the Range object to specify a range of start and end values, with an optional step parameter. For instance, this will print a message on Thursday, Friday, Saturday, and Sunday at 5pm:
```javascript
const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(4, 6)];
rule.hour = 17;
rule.minute = 0;

const job = schedule.scheduleJob(rule, function(){
  console.log('Today is recognized by Rebecca Black!');
});
```
Timezones are also supported. Here is an example of executing at the start of every day in the UTC timezone.

```javascript
const rule = new schedule.RecurrenceRule();
rule.hour = 0;
rule.minute = 0;
rule.tz = 'Etc/UTC';

const job = schedule.scheduleJob(rule, function(){
  console.log('A new day has begun in the UTC timezone!');
});
```
A list of acceptable tz (timezone) values can be found at https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

RecurrenceRule properties
```text
second (0-59)
minute (0-59)
hour (0-23)
date (1-31)
month (0-11)
year
dayOfWeek (0-6) Starting with Sunday
tz
```

> Note: It's worth noting that the default value of a component of a recurrence rule is null (except for second, which is 0 for familiarity with cron). If we did not explicitly set minute to 0 above, the message would have instead been logged at 5:00pm, 5:01pm, 5:02pm, ..., 5:59pm. Probably not what you want.
:::

以下是示例代码，当然，它也是项目默认配置：
```javascript {4-10}
// external.js

module.exports = {
  refreshtime: (rule) => {
    //在这里修改内容
    rule.hour = 0;
    rule.minute = 0;
    rule.second = 0;
    rule.tz = 'Asia/Shanghai';
  }
}
```


