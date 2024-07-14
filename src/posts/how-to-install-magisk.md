---
title: 安卓手机刷入Magisk面具教程
tag:
  - Android
  - Magisk
category: Android
---

手机如果想获取 Root 权限，刷入面具是必要的做法。本期文章将会教你如何刷入 Magisk 面具。

### 准备工作

- Magisk: 关注[微信公众号 heStudio Community](/about/weixin.html)回复 magisk 获取下载链接。
- 第三方 Recovery（官方 Recovery 能玩出什么花样？？）以下做出两个推荐，看看哪个更适合你的手机。
  - [Twrp](https://twrp.me/Devices/)
  - [Orangefox](https://orangefox.download/zh-CN)
- 一台解锁 Boot Loader 锁或者没有 Bootloader 锁的手机
- [ADB/Fastboot 工具](https://developer.android.google.cn/tools/releases/platform-tools?hl=zh-cn#downloads)

### 解锁 BootLoader

由于需要修补 Boot，所以必须解锁 BootLoader，解锁 BootLoader 后才能刷入第三方 Recovery。小米手机可以在官网解锁 BootLoader 锁，OPPO 手机部分机型可以使用深度测试解锁。其他品牌手机另解。

- [小米手机解锁 BootLoader](https://www.miui.com/unlock/index.html)
- [OPPO 手机深度测试](https://www.oppo.cn/thread-397164526-1)

### 刷入第三方 Recovery

打开你的系统终端，`cd [ADB工具文件夹]`，然后输入以下命令：

Windows Powershell / Linux bash / MacOS zsh

```bash
./fastboot flash recovery [recovery.img路径]
```

然后重启手机，按对应按键进入 Recovery

### 刷入面具

将`Magisk.apk`改名为`Magisk.zip`，然后通过 Recovery 刷入。

在开机后如果没有发现你的手机桌面有 Magisk，你需要手动安装，然后修补 Boot（MIUI 经常这样），如果有 Magisk，点击后安装完整版，然后等待自动修补。

下面是手动修补 Boot 的教程，如果你的系统自动修补了 Boot，可以完结撒花了。

### 修补 Boot（非必须）

下载你的系统线刷包，然后解压文件，找到`boot.img`并提取到手机。

打开 Magisk，点击画红框的安装按钮，选择“安装到 Recovery”，单击下一步，然后选择“选择并修补一个文件”，选择文件，完成修补过程。

将修补后的 Boot 导入到电脑，通过 Fastboot 刷入。

```bash
./fastboot flash boot [修补后的boot.img路径]
```

![](https://image.hestudio.net/i/2024/07/11/668fc31b96ab4.webp)

- 附件： [小米线刷包下载](https://xiaomirom.com/)
