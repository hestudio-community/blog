---
title: 在Android手机上安装kali Linux 的 Q&A
icon: install
article: false
---

### 教程
https://www.hestudio.net/posts/install-kali-on-android-renew.html

### 一些命令
这里只说明我的教程涉及到的命令，查看其他博主教程的命令请转到对应博主的文档里查看，查看系统命令用法请访问 https://www.kali.org/tools/

#### 开启命令
每次进入Termux可以通过 `startkali` 进入kali Linux终端。如果想在进入Termux时默认进入kali Linux终端，请浏览 [Linux设置自启动和显示文字](/posts/Setting-up-Linux-self-starting-and-displaying-text.html) 文章。

#### VNCServer 命令
本系统包预装[TigerVNCServer](https://tigervnc.org/)，如果使用不习惯请自行更换。它的常用命令如下：

##### 修改密码

```
vncpasswd
```

##### 运行vncserver

```
vncserver
```

##### 杀死vncserver

```
vncserver -kill
```

##### 其他命令
详见 https://tigervnc.org/

### VNCServer 教程
#### 开启vnc
##### 初始化vncserver
本脚本内置vncserver服务，但是还是需要自己稍微设置一下。

::: warning
部分机型可能报错，如出现这种情况，请浏览 [我开启了vncserver但在VNC Viewer页面无法进入。](https://www.hestudio.net/docs/kali_for_android.html#%E6%88%91%E5%BC%80%E5%90%AF%E4%BA%86vncserver%E4%BD%86%E5%9C%A8vnc-viewer%E9%A1%B5%E9%9D%A2%E6%97%A0%E6%B3%95%E8%BF%9B%E5%85%A5%E3%80%82) 或者到[QQ频道](https://pd.qq.com/s/uakgta)求助
:::

::: info 
查看更多vncserver操作，请到https://tigervnc.org/
:::

本脚本内置[TigerVNC](https://tigervnc.org/)

先修改vnc密码，不然连不上！
```
vncpasswd
```

##### 运行vncserver
```
vncserver
```

##### 杀死vncserver
```
vncserver -kill
```

##### 链接到vnc
1. 打开 VNC Viewer

![VNC Viewer](https://image.hestudio.net/img/2022/12/11/6395a119a4602.jpg)

2. 一路`Next`
3. 点击+号
4. 设置链接地址
port后面的4位数字为端口号，像这样
```
localhost:5901
```

![port后面的4位数字为端口号](https://image.hestudio.net/img/2022/12/11/6395a11b5c6c4.jpg)

5. 最后保存即可

#### vnc怎么更换端口
详见 [TigerVNC 怎么在某个特定的端口启动](/posts/tigervnc-port.html)


#### 我开启了vncserver但在VNC Viewer页面无法进入。
由于vncserver和桌面环境对设备配置要求较高，所以部分设备会杀掉后台进程，有的经过手动设置实现墓碑机制的设备也无法使用，因为后台被冻结了（可以使用白名单保证termux不被冻结）。这个问题无法根治，部分支持软件悬浮窗的手机可以尝试使用悬浮窗使Termux前台运行。

如果你的设备性能较低，那无论怎么设置也解决不了这个问题，请更换设备或者尝试使用[官方的App](https://www.kali.org/get-kali/#kali-mobile)（需要Root或者刷机）

部分配置比较高的手机因为它的系统版本往往是最高的，而Termux并未对其进行适配，所以会导致Termux突然崩溃。

::: danger 兼容性问题
有关Termux的兼容性问题请浏览 https://github.com/termux/termux-packages/wiki/Termux-and-Android-10 和 https://developer.android.google.cn/about/versions/10/behavior-changes-10?hl=zh-cn#execute-permission
:::

由于Termux未适配Harmony OS，所以使用搭载有Harmony OS的华为或荣耀用户可能无法使用。在实际测试和用户反馈中，Harmony OS 2.0机型（测试设备为荣耀9x）可以使用除vnc之外的功能，Harmony OS 3.0机型（测试设备为华为MatePad Pro）由于安装脚本无法识别导致无法安装。



### 不显示网卡信息，怎么联网等
由于手机设备等问题，导致Termux无法获取你的网卡信息，也无法使用一些基于硬件的功能。

### 自带的Firefox不能用
这个属于官方的bug，之前没有这个问题，属于kali官方管辖的范围，与我无关。

### 这个到底怎么玩？
详见 https://www.kali.org/tools/

### 它支持什么功能
详见这张图片

![支持什么功能](https://image.hestudio.net/img/2022/12/11/6395a1cbdba87.jpg)

### 安装时显示文件损坏

安装时请**不要**锁屏或切换后台！如因为以上操作导致安装失败，请**自行清理数据**再次安装


::: info 
如不是因为以上原因导致的报错，请访问 https://pd.qq.com/s/rvk1vn?shareSource=5 或者到[QQ频道](https://pd.qq.com/s/uakgta)求助
:::

### Termux提示`Failed to fetch`
![](https://image.hestudio.net/img/2023/02/27/63fcca9e7d274.jpg)

当出现此提示的时候，请输入

```shell
termux-change-repo
```

然后参照下一条操作。

### Termux选择源的时候怎么选
![termux-change-repo](https://image.hestudio.net/img/2022/12/16/639c696754b56.jpg)

如果出现这个页面，建议在中国大陆的用户使用清华源（倒数第四个）或者北京外国语大学源（倒数第三个）。且最好使用触摸选择（不是底下的软键盘），点击对应的文字。

如果你使用的是自己配置的源，可以点击Cancel关闭这个窗口

::: tip 如何寻找Termux的源
这个是Termux官方提供的文档：https://github.com/termux/termux-packages/wiki/Mirrors#mirrors-hosted-in-china
:::

### 报错`[Process completed (signal 9) - press Enter]`

Android 12及以上用户在使用Termux时，有时会显示`[Process completed (signal 9) - press Enter]`，这是因为Android 12的PhantomProcesskiller限制了应用的子进程，最大允许应用有32个子进程。

![](https://image.hestudio.net/img/2023/05/24/646e30e301bc0.jpg)q

这里以ColorOS 12.1为例（其他系统操作略有出入）


#### 开启开发者模式

1. 打开设置

![](https://image.hestudio.net/img/2023/05/24/646e3396619f3.jpg)

2. 打开“关于手机”

![](https://image.hestudio.net/img/2023/05/25/646e37335a059.jpg)

3. 打开“版本设置”

![](https://image.hestudio.net/img/2023/05/25/646e37b13add7.jpg)

4. 连续点击5次“版本号”

![](https://image.hestudio.net/img/2023/05/25/646e37e23d65f.jpg)

5. 输入密码（如果有）开启开发者模式。


#### 打开Termux

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


#### 配置无线调试
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

> 最后一次更新 2023.7.17

<Share colorful />
