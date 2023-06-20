---
title: 在 Hexo 上使用 Waline
date: 2022-11-15 06:40:00
tag: 
    - Hexo
    - Waline
    - MySQL
    - Docker
category: Linux
---
这几天迁移服务器的，心想：我**（文明用语）都有服务器了，还用那个难用的valine吗？所以我准备从valine迁移到青出于蓝而胜于蓝的waline

[Waline](https://waline.js.org) 是一款从 [Valine](https://waline.js.org) 衍生的带后端评论系统。可以将 Waline 等价成 With backend Valine.它的强大的自由度吸引力我。这里不多介绍，详细请浏览 https://waline.js.org

因为咱也是有服务器的人了，所以我们直接全私有部署。详细的方案如以下所示：
- 服务端部署到我们服务器
- 数据库部署到MySQL


其他的部署方案请在waline官网查看，这里只讲述独立部署。

<!-- more -->

我打算用`docker-compose`部署到我们的服务器上，那么我们就需要准备`docker-compose.yml`
```yaml
version: '3.8'
services:
  web:
    image: 'lizheming/waline'
    restart: always
    ports:
      - 127.0.0.1:8360:8360
    volumes:
      - ${PWD}/data:/app/data
    environment:
        # 这里怎么填详见下文
```

那么我们还需要填写环境，有关环境变量的相关内容因为篇幅太长，所以我直接放传送门 https://waline.js.org/reference/env.html

众所周知，HTTP是明文传输的，而HTTPS是密文传输。所以我们想要实现密文传输，就需要SSL证书和Nginx反向代理。
SSL证书我们使用Let's Encrypt即可，现在我们要设置的是Nginx反向代理。

这里以宝塔面板为例，
1. 转到“网站”
2. 新建一个网站，配置如图所示
3. 保存，以留备用

![填写模板](https://image.hestudio.net/img/2022/12/11/6395a29cf37e7.jpg)



由于我们用的是MySQL，所以直接跳过传送门上面的内容，直接转到MySQL位置。

这里就有一个问题，就是你必须保证你的数据库在外部能访问，`localhost`在这里无效（别问我怎么知道的），你需要打开权限才能保证你的数据库在外边能访问，下文主机地址需要填写你的公网IP或者域名（像`www.hestudio.net`这样没有协议头和斜杠的纯域名）

::: warning 
你的数据库在外部能访问，建议你不要用默认的数据库端口号（3306）
:::

初次使用需要向MySQL数据库导入一段数据，将以下内容复制，另存为以`.sql`为后缀的文件，然后导入数据库。
```
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table wl_Comment
# ------------------------------------------------------------

CREATE TABLE `wl_Comment` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `comment` text,
  `insertedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `ip` varchar(100) DEFAULT '',
  `link` varchar(255) DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `nick` varchar(255) DEFAULT NULL,
  `pid` int(11) DEFAULT NULL,
  `rid` int(11) DEFAULT NULL,
  `sticky` boolean DEFAULT NULL,
  `status` varchar(50) NOT NULL DEFAULT '',
  `like` int(11) DEFAULT NULL,
  `ua` text,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table wl_Counter
# ------------------------------------------------------------

CREATE TABLE `wl_Counter` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `time` int(11) DEFAULT NULL,
  `reaction0` int(11) DEFAULT NULL,
  `reaction1` int(11) DEFAULT NULL,
  `reaction2` int(11) DEFAULT NULL,
  `reaction3` int(11) DEFAULT NULL,
  `reaction4` int(11) DEFAULT NULL,
  `reaction5` int(11) DEFAULT NULL,
  `reaction6` int(11) DEFAULT NULL,
  `reaction7` int(11) DEFAULT NULL,
  `reaction8` int(11) DEFAULT NULL,
  `url` varchar(255) NOT NULL DEFAULT '',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table wl_Users
# ------------------------------------------------------------

CREATE TABLE `wl_Users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `display_name` varchar(255) NOT NULL DEFAULT '',
  `email` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  `type` varchar(50) NOT NULL DEFAULT '',
  `label` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `github` varchar(255) DEFAULT NULL,
  `twitter` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `google` varchar(255) DEFAULT NULL,
  `weibo` varchar(255) DEFAULT NULL,
  `qq` varchar(255) DEFAULT NULL,
  `2fa` varchar(32) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
```

然后按照下面模板填写，以留备用
```yaml
version: '3.8'
services:
  web:
    image: 'lizheming/waline'
    restart: always
    ports:
      - 127.0.0.1:8360:8360
    volumes:
      - ${PWD}/data:/app/data
    environment:
      MYSQL_HOST: # 填你的数据库主机地址
      MYSQL_PORT: # 填你的数据库端口号
      MYSQL_DB: # 填你的数据库名
      MYSQL_USER: # 填你的数据库用户名
      MYSQL_PASSWORD: # 填你的数据库密码
```

现在你需要部署到Docker，这里以宝塔面板为例，
1. 进入Docker >> Compose模板

![Compose模板](https://image.hestudio.net/img/2022/12/11/6395a297bc475.png)

2. 点击“添加”
3. 模板名自定义，内容填入上面写好的yaml文件

![添加模板](https://image.hestudio.net/img/2022/12/11/6395a29954e67.png)

4. 保存，并转到“Compose”页面
5. 点击“添加Compose项目”

![添加Compose项目](https://image.hestudio.net/img/2022/12/11/6395a29a78b4c.png)

6. 选择刚才创建的模板，点击添加
7. 等待一定时间后，转到“容器”页面
8. 记住这个IP，过会有用
 
服务端的最后一步，配置反向代理，这里还是以宝塔面板为例
1. 进入网站设置 >> 反向代理 >> 添加反向代理
2. 如图所示

![模板](https://image.hestudio.net/img/2022/12/11/6395a29f1ea5d.jpg)

最后，访问
```text
https://评论系统域名/ui
```
并注册你的账号，如果注册成功即表示服务端的配置已经完成。


至此，服务端的配置就算告一段落了。下面开始客户端的配置，这里以hexo的fluid主题为例。
1. 编辑主题的`_config.yml`文件
2. 打开评论功能，并指定插件为waline（无需复制，只需编辑对应的内容即可）
```yaml
  # 评论插件
  # Comment plugin
  comments:
    enable: true
    # 指定的插件，需要同时设置对应插件的必要参数
    # The specified plugin needs to set the necessary parameters at the same time
    # Options: utterances | disqus | gitalk | valine | waline | changyan | livere | remark42 | twikoo | cusdis | giscus
    type: waline
```
3. 找到下面waline的相关配置
4. `serverURL` 为必填项，填写你的评论系统域名
5. 其他的配置详情详见 https://waline.js.org/reference/component.html


保存，部署。如果测试正常，就没有往下看的必要了。

当然，有的小伙伴遇到了虽然正确配置，但是网页底部的评论还是不显示，这个怎么办呢？因为向默认的CDN地址请求Hexo必须的`waline.min.js`时找不到文件（404）。

![返回404](https://image.hestudio.net/img/2022/12/11/6395a2a18e0f4.jpg)

以Hexo的fluid主题为例，将主题的_config.yml底部CDN配置的Waline改为heStudio的CDN，然后再次部署。

> 开发不易，多多支持 [#点击支持#](https://afdian.net/a/heStudio)

### CDN地址

::: warning
该 CDN 地址已经停更，非必要不推荐使用！

:::

```text
https://res.hestudio.net/comment/
```

<Share colorful />
