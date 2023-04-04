---
title: termux-x11教程
date: 2023-04-04 16:25:00
tag: 
    - Linux
    - VNC
    - X11
    - Termux
category: Android
---

小粉丝已经求稿两个星期了，不写是不行了。

termux-x11 是Termux的一个图形化项目，官方是这么介绍的。

```text
A Termux add-on app providing Android frontend for Xwayland.
```


--- 

### 安装工具
我们需要在Termux和安卓系统上安装工具以成功的运行程序。

#### x11-repo（必选）
Termux官方组件

```shell
pkg install x11-repo
```

#### xfce (可选)
Xfce 是类 UNIX 操作系统上的轻量级桌面环境。虽然它致力于快速与低资源消耗，但仍然具有视觉吸引力且易于使用。

我们安装它的原因主要是因为它对Termux的适配性更好，在官方Github上也是使用xfce作为案例。在本文中将以xfce作为案例安装，但你也可以选择其他桌面环境。

```shell
pkg install xfce
```

#### termux-x11 (主程序)
你需要同时安装Termux和安卓的安装包。

上面我们说了，它是"A Termux add-on app providing Android frontend for Xwayland".所以我们首先安装`xwayland`

```shell
pkg install xwayland
```


![](https://image.hestudio.org/img/2023/04/04/642c47bb0f158.jpg)

访问 https://github.com/termux/termux-x11/actions/workflows/debug_build.yml 

![Github Action 页面](https://image.hestudio.org/img/2023/04/04/642c448248d66.jpg)

选择最新的一个进入，在底部找到"Artifacts"，下载并解压该文件。

![](https://image.hestudio.org/img/2023/04/04/642c451390c51.jpg)

![](https://image.hestudio.org/img/2023/04/04/642c467084ad2.jpg)

我们需要`apk`和`deb`文件，先安装`apk`文件。

记住文件目录，在Termux安装`deb`文件

```shell
cd [你的文件目录]
dpkg -i termux-x11-1.02.07-0-all.deb
```

![](https://image.hestudio.org/img/2023/04/04/642c476edb2b1.jpg)

### 配置程序
官方为xfce提供了命令以启动xfce，分别是：

```shell
XDG_RUNTIME_DIR=${TMPDIR} termux-x11 :1 &
env DISPLAY=:1 dbus-launch --exit-with-session xfce4-session
```

我们为了启动方便，可以直接将它保存到一个shell文件里以供快速启动。

我这里以`x11`作为快捷名称，你也可以使用其他的名称。在使用其他的名称时，相应的指令也要更改

```shell
vim /data/data/com.termux/files/usr/bin/x11
```

在填写完之后我们要赋予其权限，

```shell
chmod +x /data/data/com.termux/files/usr/bin/x11
```

在里面填上上面的启动指令，以后将可以通过对应的指令启动。

---

此时功能已经可以使用。

![](https://image.hestudio.org/img/2023/04/05/642c4bb00adba.jpg)

![](https://image.hestudio.org/img/2023/04/05/642c4bb4085cc.jpg)

但是这样使用体验感很糟，我们需要一些小设置。

在长按termux-x11的图标后会显示出来几个选项，我们选择"Preferences"

![](https://image.hestudio.org/img/2023/04/05/642c4c601609e.jpg)

将框中的选项按照图示中的设置，并重新打开termux-x11

![](https://image.hestudio.org/img/2023/04/05/642c4d138279a.png)

可以正常使用了！

![](https://image.hestudio.org/img/2023/04/05/642c4e09d5602.jpg)