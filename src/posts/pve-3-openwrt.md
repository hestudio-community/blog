---
title: Proxmox VE (PVE) 教学 (3) | 在 Proxmox VE 中安装与配置 OpenWrt
tag:
  - Proxmox VE
  - Linux
  - 虚拟化
  - 运维
  - OpenWRT
category: Proxmox VE
---

大家好，很长时间没有更新这个系列了。最近正在开发新项目，刚刚想起来我是不是还有一个什么专栏没更新。

本期的网络配置背景同于前两期的描述（ 详见https://www.hestudio.net/category/proxmox-ve/ ），这一期只是对网络配置的扩展，也就是安装软路由，实现网络配置的更多功能。

---

### 安装

工欲善其事，必先利其器。我们如果想配置OpenWrt，首先需要安装它。

我们选择一个适合我们自己的OpenWrt 发行版，本期我们选择iStoreOS 作为我们用于演示的发行版，我本人也是使用的这个发行版。这个发行版由我们国人开发，无论是扩展性还是易用性，或是本土化都做的非常好。他们提供了安装教程，详见 https://doc.linkease.com/zh/guide/istoreos/install_pve.html

---

### 网络设计

根据我的规划方案（可见往期描述），我的服务器具备一张无线网卡和有线网卡，网卡均内置驱动，我们并不需要为安装驱动而发愁。我通过连接外部无线网络为服务器提供网络，然后通过有线网口将网络接入房间路由器WAN 口实现软路由的功能。

如果你使用双有线方案，可以直接通过桥接实现，此种类型概不讨论。如果你使用双无线方案，操作与本文章大同小异，本教程仍然适合你。

我的网络方案详细见这张图：

![](https://image.hestudio.net/i/2024/06/13/666a6fbfdb94a.png)

其中，我的光猫的IP 段为`192.168.1.x/24`，源路由器的IP 段为`192.168.0.x/24`，终端路由器的IP 段为`192.168.3.x/24`。在分配IP 段的时候应注重避开这些IP 段。请提前了解你的家庭网络布局！

![](https://image.hestudio.net/i/2024/06/13/666a701eec56a.png)

通过追踪我的网络节点，可以发现，我将vmbr1（lan）的IP 段设置为`192.168.4.x/24`，其中为Proxmox VE分配的的IP 为`192.168.4.1/24`；OpenWrt，也就是网关的分配为`192.168.4.2/24`。其实这个IP 分配也是因人而异的，你可以将OpenWrt 和Proxmox VE 的顺序调换过来，或者任意设置，只要不超过子网掩码的限度即可。

![](https://image.hestudio.net/i/2024/06/13/666a75c984987.png)

具体可以参考一下我的设置，其中上文中的 `vmbr2` 对应该图的 `vmbr3`（后续描述均以vmbr2 出现），`wlp2s0` 为无线网卡，`enp1s0` 为有线网络。

`vmbr2`仅用于充当wan口，可以任意设置，分配的任意IP均为Proxmox VE 在此网卡中对应的IP 地址，同时也是wan口的网关。

---

### OpenWrt 配置

现在，我们进行到最后一步了。

首先将创建的两个虚拟网卡绑定到创建的虚拟机上，然后开机。此时，你需要记住两张虚拟网卡MAC 地址的一些特征，用于在虚拟机中识别对应的接口。

![](https://image.hestudio.net/i/2024/06/13/666a7b36348c8.png)

在开机并连接VNC后，按任意键进入命令行。输入`quickstart`，然后选择`Change LAN IP`，输入计划的网关IP，我这里设置为`192.168.4.2`，子网掩码设置为`255.255.255.0`，回车保存然后重启服务器。

重启后，通过网关地址进入控制面板，默认密码为`password`，如果忘记可以在命令行中通过`passwd root`修改密码。

进入控制台，选择“网络向导”，然后选择“连接现有路由器”。WAN 接口配置方式设置为“静态IP地址”，IP地址设置为wan口同网段下的除网关之外的任意IP，子网掩码仍旧设置为`255.255.255.0`，网关地址设置为`vmbr2`网卡下Proxmox VE对应的IP地址，这里为`192.168.5.1`。由于我们设置了静态IP，需要手动分配DNS地址，在这里可以输入国内常见的DNS地址（如`233.5.5.5`），这里自行查阅资料，我们的目的为接入互联网并且转发至有线网口，到这里目的已经达到了。

---

### 扩展：无线方案

如果要使用无线输出的话，需要将设备的硬件PCIE无线网卡直通至虚拟机，需要保证你的设备支持IOMMU 2.0，也就是硬件直通。你可以通过查阅你的CPU和主板相关资料判断你的设备是否支持IOMMU（部分厂商称其为VT-D），如果不支持，该文就到此结束了。

如果你的设备支持IOMMU，你可以参照这个方案启用。打开`/etc/default/grub`文件，找到`GRUB_CMDLINE_LINUX_DEFAULT`这一行，添加`intel_iommu=on`或者`amd_iommu=on`（这里取决你的CPU）参数，保存文件并退出。执行`update-grub`并重启。检查你的PCIE插槽是否可以直通。

检查软路由控制面板“网络”下是否存在无线选项，如果不存在，说明未挂载无线网卡或者系统中不包含驱动。在命令行中运行`lspci | grep "Network controller"`如果不存在设备，请检查是否已经连接好或者已经配置好硬件直通。

```bash
root@pve:~# lspci | grep "Network controller"

02:00.0 Network controller: Qualcomm Atheros AR93xx Wireless Network Adapter (rev 01)
```

如果显示了你的无线网卡，请检查你已经是否正确的安装驱动，详见 https://doc.linkease.com/zh/guide/istoreos/practice/WiFiSupported.html

到此，Proxmox VE最复杂的一环已经结束。
