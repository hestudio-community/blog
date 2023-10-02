---
title: 修复 failed to execute child process 'dbus-launch' 问题
tag: 
    - Termux
    - Android
    - Kali Linux
    - Linux
category: Linux
---

在kali-nethunter 2023.3版本中，使用VNC链接桌面会报错`failed to execute child process 'dbus-launch'`

![受影响的版本](https://image.hestudio.net/i/2023/10/02/651a16033273c.png)

![](https://image.hestudio.net/i/2023/10/02/651a15b079c03.png)

在我咨询[Kali Linux社区](https://bugs.kali.org/view.php?id=8434)后，得到这么一个解决方案

```sh
sudo apt-get update
sudo apt install dbus-x11
```