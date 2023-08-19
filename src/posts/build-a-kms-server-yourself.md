---
title: 自己搭建一个KMS服务器
tag: 
    - Windows
    - Office
    - KMS
    - Linux
    - Docker
    - vlmcse
    - Github
category: Windows
---

::: danger 阅读前提示
本文仅适合个人用户，商业用户使用该程序可能会面临法律风险！！！

建议有经济能力的读者支持正版。
:::

知周所众，Windows和Office不是免费软件。如果是新购买的品牌机，则应该预装有正版的Windows家庭版，部分用户还附赠Office。但是，我相信我的读者一大部分用的是自己组装的电脑。

> 像我一样的穷*用户应该有不少。

![今天晚上的饭应该怎么办？？](https://image.hestudio.net/i/2023/07/28/64c3426e411f4.png)

像我这样的经常赶稿的忠实的巨硬用户虽说讨厌巨硬，但是也不能不用啊！！

（软件仅支持windows，臣不得不用啊！！！）

然后再问一下，你们在遇到这种憋屈的情况都是怎么处理的？？评论区见。

![](https://image.hestudio.net/i/2023/07/28/64c342d6bd794.png)

很想支持正版Windows和Office，但是经济实力不允许的个人用户看过来。

![这玩意都快赶上我服务器了。。。](https://image.hestudio.net/i/2023/07/28/64c342fb61a84.png)

对于这种不得不用的软件，我们肯定得想办法。对于网上的kms工具，它们需要我们的管理员权限。有的带自动续期的（kms激活每180天验证一次）的又需要常驻后台。这在降低设备安全性（指不定给你塞什么东西 了）的前提下又影响设备性能，非常不划算。如果使用其他的kms服务器，又怕突然停服跑路。

有服务器的我们可以自己搭建一个kms服务器（免费的），这种自己的东西才用的放心。当然没有服务器可以用linux挂着用。

这里用到全球最大同性交友网站Github的一个开源项目vlmcsd项目地址是：https://github.com/Wind4/vlmcsd

为了保证我们服务器的稳定运行，我们将在Docker里运行这个项目。vlmcsd项目的Docker仓库在https://github.com/Wind4/vlmcsd-docker

![](https://image.hestudio.net/i/2023/07/28/64c3432ebfd7e.png)

官网给了我们运行的命令，我们跟着它一起完成。

---

首先，你的服务器需要安装Git，Docker，Docker-Compose，Vim（可选）。然后我们找一个合适的位置克隆仓库。

```shell
git clone https://github.com/Wind4/vlmcsd-docker.git vlmcsd
```

当然大陆服务器可能克隆不下来。我们可以借助镜像站克隆。

```shell
git clone https://gitclone.com/github.com/Wind4/vlmcsd-docker.git vlmcsd
```

克隆完成后，我们进入该文件夹，会发现三个文件。此时如果你是境外的服务器，我们直接按照官网上的步骤进行。如果你是大陆服务器，请忽略这里，并查看图片底下的内容。

```shell
docker-compose up -d
```

或者
```shell
docker build -t vlmcsd .
docker run -idt -p 1688:1688 vlmcsd
```
当然你也可以借助宝塔面板等第三方管理工具进行管理。在利用第三方工具时需要开放1688的TCP端口。

![](https://image.hestudio.net/i/2023/07/28/64c34369bdb01.png)

如果你是大陆服务器，Github可能无法访问。我们还需要向上面那样修改为Github镜像。

```shell
vim Dockerfile
```

打开后，我们将划线位置修改成图片的这样。

![](https://image.hestudio.net/i/2023/07/28/64c3436b3fff8.png)

然后`:wq`保存并退出，再执行

```shell
docker-compose up -d
```

或者
```shell
docker build -t vlmcsd .
docker run -idt -p 1688:1688 vlmcsd
```
当然你也可以借助宝塔面板等第三方管理工具进行管理。在利用第三方工具时需要开放1688的TCP端口。

现在程序应该启动了，但是部分云服务器需要到服务商的控制台开启安全组。查看如何使用KMS，请访问 https://www.hestudio.net/posts/how-to-use-kms.html


