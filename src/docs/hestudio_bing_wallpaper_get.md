---
title: heStudio BingWallpaper Get
icon: api
article: false
---

::: details 目录
[[TOC]]
:::

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

@tab 手动安装 (不推荐，仅开发人员使用)
```sh
git clone https://github.com/hestudio-community/bing-wallpaper-get.git
cd bing-wallpaper-get
npm install -global pnpm
pnpm install
pnpm run server
```

:::

::: danger
请在更新版本之前仔细阅读[版本更新日志](https://github.com/hestudio-community/bing-wallpaper-get/blob/main/CHANGELOG)，并决定是否更新版本。盲目的更新版本可能会导致程序崩溃。建议在更新之前请先记录之前版本的版本号，在遇到兼容问题时可以回退到之前的版本。
:::

::: warning
我们将在`v1.3.2`版本之后将开发时使用的包管理器切换到`pnpm`，建议使用手动部署的也使用`pnpm`包管理器，`Docker`部署和`NPM`部署的用户不受影响。
:::

## 在其他地方找到本项目 {#link}

- GitHub: https://github.com/hestudio-community/bing-wallpaper-get
- NPM: https://www.npmjs.com/package/hestudio-bingwallpaper-get
- Docker Hub: https://hub.docker.com/r/hestudio/bingwallpaper_get

## 提交问题 {#issue}

https://github.com/hestudio-community/bing-wallpaper-get/issues

## 高级用法 {#pro}

::: danger 小白慎入
在使用高级用法之前，你需要了解`nodejs`,`docker`,`javascript`和`linux`的一些知识。如果你是小白，你应当只使用基本用法。
:::

::: info 假设条件
在下文中，我们将假设你将服务运行在`localhost:3000`

**请根据自己的实际需求按需修改，默认配置并不适合所有人**
:::

### 环境变量 {#env}

#### `hbwg_port`: 自定义程序端口 {#hbwg_port}
- 默认值: `3000`

#### `hbwg_host`: 自定义Bing前置URL {#hbwg_host}
- 默认值: `https://cn.bing.com`

#### `hbwg_config`: 自定义请求参数 {#hbwg_config}
- 默认值: `format=js&idx=0&n=1&mkt=zh-CN`

#### `hbwg_external`: 外部文件路径 {#hbwg_external}
- 默认值: `./external.js` 
- **注意：`external.js`如手动修改，需在环境变量输入绝对值**

#### `hbwg_getupdate`: 是否检查更新 <Badge text="v1.4.0" type="tip" vertical="middle" /> {#hbwg_getupdate} 
- 默认值: `true`
- **注意，你应当只传入`false`以禁用自动检查更新。如果你不需要禁用自动检查更新，应当传入`true`或者不传入任何值。** 

::: danger
我们已经在`v1.3.1`将此开关移至`external.js`文件，请浏览[检查更新开关](/docs/hestudio_bing_wallpaper_get.html#getupdate)。

**请注意，我们将在`v1.4.0`版本移除此环境变量。**
:::

#### `hbwg_packageurl`: `package.json`对应URL {#hbwg_packageurl}
- 默认值: `https://raw.githubusercontent.com/hestudio-community/bing-wallpaper-get/main/package.json`

::: tip 镜像源
对于部分用户，Github源不可用，建议更换成CDN源。

以下是几个我们认可的CDN源。当然，你也可以自定义成你自己的CDN源。

- NPM: https://registry.npmjs.com/hestudio-bingwallpaper-get/latest
- NPMMirror: https://registry.npmmirror.com/hestudio-bingwallpaper-get/latest
- jsDelivr: https://cdn.jsdelivr.net/npm/hestudio-bingwallpaper-get@latest/package.json
- UNPKG: https://unpkg.com/hestudio-bingwallpaper-get@latest/package.json
:::

#### `hbwg_header`: 传入真实IP的请求头 {#hbwg_header}
- 默认值: `x-real-ip`

#### `hbwg_tempdir`: 修改缓存目录 <Badge text="v1.4.0" type="tip" vertical="middle" /> {#hbwg_tempdir} 
- 默认值为项目根目录的`tmp`文件夹
- **需输入绝对值，如`/workspace/bing-wallpaper-get/tmp`**

### 修改组件行为 {#external}

修改前你需要在根目录创建`external.js`文件。你可以自定义创建的路径和文件名称，只需添加`hbwg_external`环境变量即可。

在开始这部分内容之前，你需要了解以下内容。

本项目导出了5个项目函数用于日志记录。它们分别是`getback(ip, path)`, `postback(ip, path)`, `logback(log)`, `logerr(err)`, `logwarn(warn)`。我们分别来讲一下：

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

##### `logwarn(warn)` {#logwarn}

| 参数 | 参数类型 |
|---|---|
| `warn` | `String` |

输出效果大概是这样:

```text
[YYYY-MM-DD HH:mm:ss] WARN: ${warn}
```

另外还有9个指示器。他们被包含在`hbwgConfig`对象当中，你只能查看它们的值，无法直接修改它们。该指示器提供给开发人员调试使用，不要在生产环境使用。 <Badge text="v1.4.0" type="tip" vertical="middle" />

- `hbwgConfig.port`(String): 程序端口号，可以在[`hbwg_port`](/docs/hestudio_bing_wallpaper_get.html#hbwg_port)修改。
- `hbwgConfig.api`(String): 服务地址，可以在[`hbwg_host`](/docs/hestudio_bing_wallpaper_get.html#hbwg_host)和[`hbwg_config`](/docs/hestudio_bing_wallpaper_get.html#hbwg_config)修改。
- `hbwgConfig.host`(String): Bing前置URL,可以在[`hbwg_host`](/docs/hestudio_bing_wallpaper_get.html#hbwg_host)修改。
- `hbwgConfig.getupdate`(String): 获取更新开关，可以在[获取更新开关](/docs/hestudio_bing_wallpaper_get.html#getupdate)修改。
- `hbwgConfig.packageurl`(String): 更新源，在检查更新时会请求该地址。可以在[`package.json`对应URL](/docs/hestudio_bing_wallpaper_get.html#hbwg_packageurl)修改。
- `hbwgConfig.header`(String): IP地址传入请求头，可以在[`hbwg_header`](/docs/hestudio_bing_wallpaper_get.html#hbwg_header)
- `hbwgConfig.tempDir`(String): 缓存目录，可以在[`hbwg_tempdir`](/docs/hestudio_bing_wallpaper_get.html#hbwg_tempdir)修改。
- `hbwgConfig.apiconfig`(Object): API配置，可以在[设置API配置](/docs/hestudio_bing_wallpaper_get.html#api)修改。
- `hbwgConfig.robots`(String | Boolean): robots.txt配置，可以在[`robots.txt`](/docs/hestudio_bing_wallpaper_get.html##robots)修改。

当然，你也直接可以用`hbwgConfig`对象获取到他们的全部信息。详见[示例](/docs/hestudio_bing_wallpaper_get.html#rootprogram)。

将以下初始化内容粘贴到`external.js`:

```javascript
// external.js

const {
  // 项目函数
  // getback
  // postback
  // logback
  // logerr
  // logwarn
  //
  // 配置信息
  // hbwgConfig
} = require(`${process.cwd()}/node_modules/hestudio-bingwallpaper-get`)

module.exports = {
  // 组件配置
}
```

上述模板中均已注释项目函数和指示器，可根据需要自行取消注释。

#### `getupdate`: 获取更新开关 {#getupdate}

此开关决定系统是否提示更新版本。

在默认状态下，这个开关是**开启**状态。程序会在刚开始运行时和每个[资源刷新周期](/docs/hestudio_bing_wallpaper_get.html#refreshtime)自动请求[更新源](/docs/hestudio_bing_wallpaper_get.html#hbwg_packageurl)。如果检测到更新源有更新的版本，将会在日志中提示。

::: tip
**不会**自动更新本程序，仅提示更新。
:::

如果需要禁用更新提示，可以在`external.js`中进行如下修改。

```javascript {4}
// external.js

module.exports = {
  getupdate: false;
}
```

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
  rootprogram: (req, res) => {
    //在这里修改内容
    res.send("helloworld")
  }
}
```

::: note 示例
一个输出程序配置信息的示例程序，你应当**仅在开发调试环境使用**

```javascript
// external.js

const { hbwgConfig } = require(`${process.cwd()}/node_modules/hestudio-bingwallpaper-get`)

module.exports = {
  rootprogram: (req, res) => {
    res.send(hbwgConfig)
  }
}
```
:::

#### `beforestart`: 在服务运行前导入代码 {#beforestart}

在开始这部分内容之前，你需要了解以下内容。

本组件中导入了`app`变量，该变量由`express.js`导入，修改此部分需要你额外具有`express.js`的知识。如果不是太了解，可以参考：

- http://expressjs.com/
- https://quickref.hestudio.net/docs/expressjs.html

你**不能**使用`app.listen()`，因为这会导致项目出现致命错误。当然，你也**不能**将URL路由至`/`, `/getimage`, `/geititle`, `/getcopyright`等，它们也会导致项目**无法正常运行**。你可以自定义`/`，但是仅限于**GET**请求。如果需要自定义`/`，请参考`rootprogram`函数。

好的，现在可以通过以下结构在服务运行前导入代码

```javascript {4-6}
// external.js

module.exports = {
  beforestart: (app) => {
    //在这里修改内容
  }
}
```

#### `refreshtime`: 设置资源刷新时间 {#refreshtime}

在修改本部分内容之前，需要了解一下[`node-schedule`](https://www.npmjs.com/package/node-schedule)

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

#### 设置API配置 <Badge text="v1.4.0" type="tip" vertical="middle" /> {#api}

##### 修改API对应路径 {#api.rename}

```javascript
module.exports = {
  api: {
    rename: {
      getimage: '/getimage',
      gettitle: '/gettitle',
      getcopyright: '/getcopyright'
    }
  }
}
```

##### 禁用API {#api.ban}

```javascript
module.exports = {
  api: {
    ban: ['getimage', 'gettitle', 'getcopyright']
  }
}
```

#### `robots.txt` <Badge text="v1.4.0" type="tip" vertical="middle" /> {#robots}

添加默认`robots.txt`，默认禁止所有搜索引擎爬取。

可以关闭，通过：
```javascript
module.exports = {
  robots: false
}
```

可以指定代码。
```javascript
module.exports = {
  robots: `
User-agent: *
Disallow: /
`
}
```

#### `/debug` （GET）调试接口 <Badge text="v1.4.0" type="tip" vertical="middle" /> {#debug}

1. 默认关闭，可在`external.js`中开启

```javascript
module.exports = {
  debug: true
}
```

2. 允许修改默认URL
```javascript
module.exports = {
  debug: {
    url: '/debug'
  }
}
```

3. 允许加设密码

```javascript
module.exports = {
  debug: {
    passwd: 'yourpassword'
  }
}
```

开发者可以如下格式在浏览器访问：

```text
/debug?passwd=yourpassword
```


#### 返回bing服务器原始请求结果 (`/bingsrc`) <Badge text="v1.4.0" type="tip" vertical="middle" /> {#bingsrc}

1. 用户可以通过 GET /bingsrc获取
2. 默认禁用，可以通过`external.js`开启

```javascript
module.exports = {
    bingsrc: true
}
```

3. 允许修改默认URL 

```javascript
module.exports = {
    bingsrc: {
        url: '/bingsrc'
    }
}
```

### 定时任务 <Badge text="v1.4.0" type="tip" vertical="middle" /> {#refreshtask} 
开发者可以在服务器刷新资源时自定义执行一些任务。

```javascript
module.exports = {
  refreshtask: () => {
    // 这里面是你要执行的定时任务
  }
}
