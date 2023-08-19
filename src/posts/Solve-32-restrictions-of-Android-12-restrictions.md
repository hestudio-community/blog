---
title: 解决安卓12限制32个线程
tag: 
    - Linux
    - Android
    - adb
    - Termux
category: Android
---

Android 12及以上用户在使用Termux时，有时会显示`[Process completed (signal 9) - press Enter]`，这是因为Android 12的PhantomProcesskiller限制了应用的子进程，最大允许应用有32个子进程。

![](https://image.hestudio.net/img/2023/05/24/646e30e301bc0.jpg)

这里以ColorOS 12.1为例（其他系统操作略有出入）

---

### 开启开发者模式

1. 打开设置

![](https://image.hestudio.net/img/2023/05/24/646e3396619f3.jpg)

2. 打开“关于手机”

![](https://image.hestudio.net/img/2023/05/25/646e37335a059.jpg)

3. 打开“版本设置”

![](https://image.hestudio.net/img/2023/05/25/646e37b13add7.jpg)

4. 连续点击5次“版本号”

![](https://image.hestudio.net/img/2023/05/25/646e37e23d65f.jpg)

5. 输入密码（如果有）开启开发者模式。

---

### 打开Termux

1. 打开Termux

![](https://image.hestudio.net/img/2023/05/25/646e390076c17.jpg)

没有Termux?[点击这里安装](https://gitlab.com/heStudio/res/-/raw/main/Termux_0.118.0.apk?inline=false)

2. 安装Android Tools

```sh
pkg install android-tools
```

![](https://image.hestudio.net/img/2023/05/25/646e39bb37b29.jpg)

3. 浮窗Termux

利用Android 12的功能，使Termux处于浮窗状态。

![](https://image.hestudio.net/img/2023/05/25/646e3a72db6b3.jpg)

---

### 配置无线调试
1. 转到设置 --> 系统设置 --> 开发者设置

![](https://image.hestudio.net/img/2023/05/25/646e3b2ac5102.jpg)

2. 打开无线调试

![](https://image.hestudio.net/img/2023/05/25/646e3bdbe0e18.jpg)

![](https://image.hestudio.net/img/2023/05/25/646e3bfb9f918.jpg)

3. 记住显示的IP地址和端口，并在浮窗下的Termux内输入

![](https://image.hestudio.net/img/2023/05/25/646e3d6fc00e7.jpg)

例如我的IP地址是`192.168.0.103:45367`那么我应该输入
```sh
adb pair 192.168.0.103:45367
```

当显示`Enter pairing code：`时，输入配对码链接。

4. 链接到adb
复制IP地址，以留备用。

![](https://image.hestudio.net/img/2023/05/25/646e3e90bdf03.jpg)

比如我的IP地址是`192.168.0.103:41249`，我应该输入

```sh
adb connect 192.168.0.103:41249
```

当输出
```text
* daemon not running; starting now at tcp:5037
* daemon started successfully
connected to 192.168.0.103:41249
```
时，即代表已经链接成功。

![](https://image.hestudio.net/img/2023/05/25/646e3fb231205.jpg)

5. 设置最大子进程是`65536`

```sh
adb shell device_config set_sync_disabled_for_tests persistent 
adb shell device_config put activity_manager max_phantom_processes 65536
```

![](https://image.hestudio.net/img/2023/05/25/646e401558f04.jpg)


