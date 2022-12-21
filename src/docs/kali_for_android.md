---
title: 在Android手机上安装kali Linux 的 Q&A
icon: read
article: false
---
### 我开启了vncserver但在VNC Viewer页面无法进入。
由于vncserver和桌面环境对设备配置要求较高，所以部分设备会杀掉后台进程，有的经过手动设置实现墓碑机制的设备也无法使用，因为后台被冻结了（可以使用白名单保证termux不被冻结）。这个问题无法根治，部分支持软件悬浮窗的手机可以尝试使用悬浮窗使Termux前台运行。

部分配置比较高的手机因为它的系统版本往往是最高的，而Termux并未对其进行适配，所以会导致Termux突然崩溃。

由于Termux未适配Harmony OS，所以使用搭载有Harmony OS的华为或荣耀用户可能无法使用。在实际测试和用户反馈中，Harmony OS 2.0机型（测试设备为荣耀9x）可以使用除vnc之外的功能，Harmony OS 3.0机型（测试设备为华为MatePad Pro）由于安装脚本无法识别导致无法安装。

### 不显示网卡信息，怎么联网等
由于手机设备等问题，导致Termux无法获取你的网卡信息，也无法使用一些基于硬件的功能。

### 自带的Firefox不能用
这个属于官方的bug，之前没有这个问题，属于kali官方管辖的范围，与我无关。

### 这个到底怎么玩？
详见 https://www.kali.org/tools/

### 它支持什么功能
详见这张图片

![支持什么功能](https://hestudio-server-image.oss-cn-hongkong.aliyuncs.com/2022/12/11/6395a1cbdba87.jpg)

### 安装时显示文件损坏

安装时请**不要**锁屏或切换后台！如因为以上操作导致安装失败，请**自行清理数据**再次安装


::: info 
如不是因为以上原因导致的报错，请访问 https://pd.qq.com/s/rvk1vn?shareSource=5 或者到[QQ频道](https://pd.qq.com/s/uakgta)求助
:::

### Termux选择源的时候怎么选
![termux-change-repo](https://hestudio-server-image.oss-cn-hongkong.aliyuncs.com/2022/12/16/639c696754b56.jpg)

如果出现这个页面，我建议在中国大陆的用户使用清华源（倒数第四个）或者北京外国语大学源（倒数第三个）。且最好使用触摸选择（不是底下的软键盘），点击对应的文字。

如果你使用的是自己配置的源，可以点击Cancel关闭这个窗口

> 最后一次更新 2022.12.16