---
title: 紧急通知 | failed to execute child process dbus-launch Bug通报
category: 软件补丁
---

`failed to execute child process "dbus-launch"`问题源出现在官方镜像在`2023-08-23 13:36`的构建中，目前该问题只能等到官方修复。在该时间之后安装的用户在使用vnc服务后会出现该问题。目前仅能通过重装降级解决。

我们已经重新配置了脚本的镜像源，请备份原有系统然后降级。未遇到该问题的用户无需操作。

方法是：
1. 备份kali容器（可选）：参考 [备份与恢复 - 在Android手机上安装kali Linux 的 Q&A](https://www.hestudio.net/docs/kali_for_android.html#%E5%A4%87%E4%BB%BD%E4%B8%8E%E6%81%A2%E5%A4%8D)
2.  删除现有容器文件与配置文件，删除缓存 
执行以下命令：
```sh
rm -rf ~/ka_install ~/kali-arm* ${PREFIX}/bin/startkali 
```
详见：[删除 - 在Android手机上安装kali Linux 的 Q&A](https://www.hestudio.net/docs/kali_for_android.html#%E5%88%A0%E9%99%A4)
3. 使用脚本全新安装：
```sh
termux-setup-storage && curl -O --url https://res.hestudio.net/kali_for_android/install.sh && chmod +x install.sh && ./install.sh
```
详见 [安装脚本 - 在Android手机上安装kali Linux 的 Q&A](https://www.hestudio.net/docs/kali_for_android.html#%E5%AE%89%E8%A3%85%E8%84%9A%E6%9C%AC)

该版本为紧急版本，未经过充分测试，如遇到问题请在该页面评论。

