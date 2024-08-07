---
title: 小米手机在Windows老版本系统使用USB网络共享
tag:
  - RNDIS
  - USB
  - Windows
  - Android
category: Windows
---

在一些老版本的系统中，系统并没有内置 RNDIS 需要的驱动。这导致在手机上开启 USB 网络共享时，电脑并不能识别。

我在老家的 WindowsXP 老古董上网时遇到了这个问题。我的手机连接到电脑，打开 USB 网络驱动时候并没有连接到网络。在设备管理器里，RNDIS 设备标着黄色三角号，也就是没有驱动。

我从网络中搜索 RNDIS 的驱动，但是无法安装上。这个驱动可以匹配其他的安卓手机，但是不能匹配小米手机。我下载了小米的 winusb 驱动，在 RNDIS 报错页面安装了这个驱动之后可以正常使用了。

---

首先，需要下载 winusb 驱动。

关注[微信公众号 heStudio Community](/about/weixin.html)回复 miusb 获取下载链接。

下载后解压文件，手机连接电脑，将该文件传输到电脑。然后打开 USB 网络共享。在设备管理器中右键 RNDIS，选择“更新驱动程序”，然后选择“从列表指定位置安装驱动”（如果提示从 Windows Update 更新驱动，请选择否）

![](https://image.hestudio.net/i/2024/07/10/668e778aef109.webp)

选择“在这些位置搜索最佳驱动程序”，点击“浏览”，选择解压后文件所在的文件夹，点击下一步。这样就安装成功 了。

![](https://image.hestudio.net/i/2024/07/10/668e77a1c885a.webp)
