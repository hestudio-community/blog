---
title: 在LTSC版本的Windows上安装Microsoft Store
tag:
    - Windows
category: Windows
---

LTSC版本的Windows相对于常规版本的Windows移除了非必需的系统组件和更宽松的更新策略，在运行效率的优于常规版本的Windous。这个特点使得一些比较低端的电脑可以流畅的运行Windows。

但是，一些软件仅在Microsoft Store提供，我个人使用的就是LTSC的系统，如果要下载Minecraft的话就需要Microsoft Store。Microsoft Store提供了更严格的应用审核机制，可以保证安装的应用不会再你的电脑中乱搞。

---

下面介绍如何在LTSC版本的Windows上安装Microsoft Store

首先按下Windows+X，打开管理员模式的Windows Powershell

![](https://image.hestudio.net/i/2024/01/11/659ecef2d5901.png)

在命令框里面输入以下指令并运行

```powershell
wsreset -i
```

运行后会提示`'C:\Windows\system32\ClipRenew.exe' 不是内部或外部命令，也不是可运行的程序或批处理文件。`但是通知中心已经提示了正在安装Microsoft Store.

![](https://image.hestudio.net/i/2024/01/11/659ed0924e312.png)

[![广告](https://image.hestudio.net/i/2024/03/05/65e5f73783b72.png)](https://haokawx.lot-ml.com/Product/index/502034)
