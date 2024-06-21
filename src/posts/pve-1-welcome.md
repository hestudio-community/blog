---
title: Proxmox VE (PVE) 教学 (1) | 介绍与安装
tag:
  - Proxmox VE
  - Linux
  - 虚拟化
  - 运维
category: Proxmox VE
---

在？好久没更新了，最近在研究 pve，这不刚研究透彻，所以就先记录一下吧。最近我会集中推出关于 Proxmox VE 的系列文章，该部分将会在[CSDN 专栏](http://t.csdnimg.cn/h8fiC)同步更新，欢迎订阅，当然你也可以订阅博客的该[分类](/category/proxmox-ve/)。

### 介绍 | Proxmox VE：强大而灵活的开源虚拟化平台

Proxmox Virtual Environment，简称 Proxmox VE，是一款专为企业级应用场景设计的开源虚拟化管理平台，以其高度集成、易于使用和卓越的性能而备受赞誉。基于 Debian Linux 稳健的基础，Proxmox VE 提供了一个统一的解决方案来部署、管理和监控虚拟机（VMs）及轻量级容器（Containers），实现计算、网络和存储资源的高度整合与优化。以下是对 Proxmox VE 主要特性和优势的详细介绍：

#### 核心技术

1. 双模虚拟化：

   - KVM（Kernel-based Virtual Machine）：作为主流的硬件虚拟化技术，KVM 使 Proxmox VE 能够创建和运行全功能的虚拟机，充分利用硬件虚拟化支持（如 Intel VT 或 AMD-V），为每个 VM 提供接近裸金属的性能和隔离性。KVM VM 支持各种操作系统，包括 Windows、Linux 以及其他类 UNIX 系统。

   - LXC（Linux Containers）：Proxmox VE 还支持基于 Linux 内核的容器技术，即 LXC。容器提供了轻量级的隔离环境，共享主机内核，适用于快速启动、低开销的应用场景，尤其适合运行相同或相似 Linux 发行版的服务或微服务架构。

#### 特性与功能

2. Web 管理界面：

   - Proxmox VE 提供了一个直观、基于浏览器的管理界面，无需额外安装客户端软件。管理员可以轻松地创建、配置、迁移、备份和恢复虚拟机及容器，监控资源使用情况，以及管理存储、网络、防火墙规则等。

3. 集群支持：

   - Proxmox VE 允许将多个节点组成集群，实现资源的集中管理和高可用性。集群中的节点可以协同工作，提供故障转移、负载均衡和资源共享等功能，确保业务连续性和扩展性。

4. 存储管理：

   - 支持多种存储后端，包括本地磁盘、网络存储（如 iSCSI、NFS、Ceph 等），并提供高级特性如 thin provisioning、快照、复制和备份，以满足不同级别的数据保护和效率需求。

5. 备份与恢复：

   - 内建的备份系统允许对虚拟机和容器进行定期或按需备份，备份数据可以存储在本地或远程位置，并支持增量备份和压缩以节省空间。恢复过程简单快捷，确保在灾难恢复场景下能够迅速恢复服务。

6. 网络与安全：

   - 集成的防火墙功能允许为每个 VM 或容器定义详细的网络访问规则，确保网络安全。支持 VLAN、IPsec VPN、负载均衡器等网络服务，便于构建复杂的企业级网络架构。

7. 模板与快照：

   - 提供系统模板功能，简化新 VM 或容器的部署过程。通过创建和使用模板，用户可以快速复制预配置好的系统环境。此外，快照功能允许捕获虚拟资源某一时刻的状态，用于快速回滚或克隆。

#### 开源与社区

8.  完全开源：

    - Proxmox VE 是一款遵循 GPLv2 许可协议的开源软件，这意味着用户可以免费下载、使用、修改和分发源代码，无需支付任何许可证费用。这种开放性不仅降低了总体拥有成本，也鼓励了社区贡献和第三方集成。

9.  活跃社区与生态系统：

    - Proxmox VE 拥有一个庞大的全球用户社区，用户可以通过论坛、文档、教程和博客获取技术支持和最佳实践。丰富的插件和第三方工具进一步扩展了平台的功能，形成一个生机勃勃的生态系统。

> 介绍部分由国产大模型“通义千问”自动生成。

### 安装

#### 1. 下载镜像

我们首先进入 [Proxmox VE 官网](https://www.proxmox.com/en/proxmox-virtual-environment/overview)，找到`Download`按钮。

![](https://image.hestudio.net/i/2024/04/20/6622ace340216.png)

我们直接下载最新版本的 Proxmox VE 镜像。

![](https://image.hestudio.net/i/2024/04/20/6622ad4343002.png)

在下载完成之后，你需要制作一个安装盘以用于在服务器上引导安装。这边推荐使用[Refus](https://rufus.ie/zh/).如果你使用 Vertoy，你仅仅只需要镜像放置在移动储存设备中。

#### 2. 启动安装

在继续以下的内容，我们默认你已经制作启动盘和知晓你服务器的 BIOS 选择启动设备的按钮（如`F12`）。如果你并不知道这些，请先自行搜索或者咨询你的服务器硬件厂商。

在你启动后，你将看到以下界面：

![](https://image.hestudio.net/i/2024/04/20/6622af96067b3.png)

这说明你已经成功启动了安装程序。按下`Enter`键，进入安装界面。等待一会，然后进行后面的安装进程。

---

![](https://image.hestudio.net/i/2024/04/20/6622b067062ce.png)

这个页面要求你同意用户协议，按下`I agree`以继续安装。

---

![](https://image.hestudio.net/i/2024/04/20/6622b0f604375.png)

在这个页面，你需要选择安装硬盘位置。我这已经选好了，如果你有多块的硬盘，你可以在`Target HardDisk`中选择你想安装的硬盘。然后按下右下角的`Next`键。

> 为什么我这里的硬盘空间那么小？我已经安装好了，所以我在虚拟机里运行安装程序用于演示截图。实际安装的时候请选一个大一点的硬盘。

> 虚拟机里肯定不支持 VT 技术，所以肯定不能虚拟机里嵌套虚拟机。实际上，我这个演示是不能安装的。
> ![](https://image.hestudio.net/i/2024/04/20/6622c2eb871e6.png)

---

![](https://image.hestudio.net/i/2024/04/20/6622b291a853b.png)

在这里是选择语言的地方。其实在这里，Proxmox VE 安装程序已经连上网络了，所以自动识别出了我所在的国家。如果你的跟我的不一样，请修改成我这样的。如果你并不处在中国大陆，请忽略我说的话。

点击右下角`Next`进行下一步。

---

![](https://image.hestudio.net/i/2024/04/20/6622b3a150e14.png)

在这里你需要设置密码和你的邮箱。在输入邮箱的时候，建议输入你自己的真实邮箱。PVE 可能会向你发送告警邮件（我反正没有收到过）。

---

![](https://image.hestudio.net/i/2024/04/20/6622b4fd32899.png)

在这里你需要设置网络。PVE 已经自动识别出了网络配置了，所以我就不需要设置了。如果没有识别出来你的网络配置，你需要手动设置一下。如果你的服务器有多个网卡，你需要手动选择绑定的网卡。

在这里有多种情况：

- 如果直接像我一样，PVE 自动补充了网络配置，那么你可以直接点击右下角的`Next`键。

- 如果你将有线接口接入了路由器，但并没有自动识别出来你的网络配置，你需要手动设置一下。

  - 我使用的是华为路由器，默认网关是`192.168.3.1`，在一般情况下，路由器的管理 IP 也就是路由器的网关地址。
  - 你需要将 IP 地址设置在同网段下的其他 IP 地址，并要确保不要和现有设备的冲突。
  - 网关（Gateway）设置成路由器的网关地址。
  - DNS 服务器（DNS Server）按照自己需求设置。如果你不知道设置成什么，可以设置成`114.114.114.114`(114DNS).
  - 如果你不太清楚如何设置，你可以将你的手机或者其他设备连入 WIFI，然后参考它的设置。

    ![](https://image.hestudio.net/i/2024/04/20/6622b9856b321.png)

    在这里可以看见，我手机的 IPV4 地址是`192.168.3.3`，网关（路由）地址是`192.168.3.1`，子网掩码是`255.255.255.0`。于是我们可以这么设置（不一定要跟我的一样） - IP 地址：`192.168.3.100/24`（我敢保证这个地址肯定没有被 DHCP 分配，不信你可以登录路由器管理平台查看该 IP 是否被占用），只要是同一网段下的 IP 地址就行（如果我可以设置`192.168.3.x`下没有被占用的从`1`至`255`的 IP 地址，那么我这里设置成`192.168.3.100`就 OK 了）。至于后面的`/24`，表示 24 位的子网掩码，也就是`255.255.255.0`，如果你的子网掩码不是`255.255.255.0`，请参考子网掩码对照表。

|    子网掩码     | 十进制 |
| :-------------: | :----: |
|     0.0.0.0     |   0    |
|    128.0.0.0    |   1    |
|    192.0.0.0    |   2    |
|    224.0.0.0    |   3    |
|    240.0.0.0    |   4    |
|    248.0.0.0    |   5    |
|    252.0.0.0    |   6    |
|    254.0.0.0    |   7    |
|    255.0.0.0    |   8    |
|   255.128.0.0   |   9    |
|   255.192.0.0   |   10   |
|   255.224.0.0   |   11   |
|   255.240.0.0   |   12   |
|   255.248.0.0   |   13   |
|   255.252.0.0   |   14   |
|   255.254.0.0   |   15   |
|   255.255.0.0   |   16   |
|  255.255.128.0  |   17   |
|  255.255.192.0  |   18   |
|  255.255.224.0  |   19   |
|  255.255.240.0  |   20   |
|  255.255.248.0  |   21   |
|  255.255.252.0  |   22   |
|  255.255.254.0  |   23   |
|  255.255.255.0  |   24   |
| 255.255.255.128 |   25   |
| 255.255.255.192 |   26   |
| 255.255.255.224 |   27   |
| 255.255.255.240 |   28   |
| 255.255.255.248 |   29   |
| 255.255.255.252 |   30   |
| 255.255.255.254 |   31   |
| 255.255.255.255 |   32   |

- 如果你并没有将服务器接入网络，你可以任意设置。你需要将网线口插入你的电脑。如果你将 IP 地址设置为`192.168.137.100/24`，网关设置为`192.168.137.1`，DNS 服务器设置为`114.114.114.114`，那么你就需要在你电脑的以太网设置中这样设置。

  我这里以 Windows 11 为例，首先打开电脑设置，找到网络和 Internet，然后点击以太网设置，点击 IP 地址后面的编辑。

  ![](https://image.hestudio.net/i/2024/04/20/6622c0c85629b.png)

  在电脑段设置一个同网段下的不同 IP 地址和相同的子网掩码（具体参考上方的子网掩码对照表），不要设置网关，DNS 地址任意填写。然后保存

在这里你需要牢记这个 IP 地址，后续我们需要通过这个 IP 地址来访问 PVE。如果你需要修改绑定网卡和 IP 地址，请关注我下一篇文章。

---

![](https://image.hestudio.net/i/2024/04/20/6622c2282e43f.png)

在这里你可以总览一边你的配置，然后点击`Install`键开始安装！在安装后可以通过`https://服务器IP地址:8006`访问 PVE。

![](https://image.hestudio.net/i/2024/04/20/6622c4ce0f861.png)

输入用户名`root`，然后输入你设置的密码，选择语言，登录即可。

#### 可能遇到的问题

- 在部分通过 EFI 安装的设备中，可能无法正确的创建引导项，此时需要手动创建引导项。

![](https://image.hestudio.net/i/2024/04/20/6622c3bd82567.png)
![](https://image.hestudio.net/i/2024/04/20/6622c3e474928.png)

我们通过`Advanced Options`进入高级选项，然后选择`Rescue boot`进入救援模式，进入后登录系统，然后通过`update-grub`命令更新引导项。