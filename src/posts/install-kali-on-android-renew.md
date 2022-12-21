---
title: 【重制版】在Android手机上安装kali Linux
date: 2022-12-05 14:12:59
tag: 
    - Termux
    - Android
    - Kali Linux
category: Linux
---
最近有很多反馈，都是一些正常界面，截图反馈给我问我有什么问题（原版是英文的）。而且原文（指CSDN上的[^1]）用的是富文本，不方便后期修改和同步，所以我更新了这个版本（以后不出意外的话都在这里更新）。

下面的教程基于[原文教程](https://www.hestudio.org/2022/10/install-kali-on-android/)做了一些修改。

[^1]: https://blog.csdn.net/a18845594188/article/details/123163279

### 前言
由于kali官方的Nethunter[^2]的安装代码因为...无法访问，手头又没有一些受支持的机器[^3]，所以做了这个脚本，供大家使用。

[^2]: 官方文档： https://www.kali.org/docs/nethunter/nethunter-rootless/

[^3]: 受支持的机器列表具有时效性，详见 https://www.kali.org/get-kali/#kali-mobile

### 工具
1. 搭载基于Android的手机
2. [Termux](https://res.hestudio.org/kali_for_android/Termux_0.118.0.apk)
3. [VNC Viewer](https://res.hestudio.org/kali_for_android/VNC_Viewer_3.7.1.44443.apk) (可选)

### 安装必备软件(如已安装请忽略)

- [点我下载 Termux](https://res.hestudio.org/kali_for_android/Termux_0.118.0.apk)
- [点我下载 VNC Viewer](https://res.hestudio.org/kali_for_android/VNC_Viewer_3.7.1.44443.apk)

### 安装基本系统
1. 打开Termux

![Termux](https://hestudio-server-image.oss-cn-hongkong.aliyuncs.com/2022/12/11/6395a11208dde.jpg)

2. 输入以下指令
```
termux-setup-storage && curl -O --url https://res.hestudio.org/kali_for_android/install.sh && chmod +x install.sh && ./install.sh
```
3. 在弹出窗口的界面点击允许

![系统权限请求](https://hestudio-server-image.oss-cn-hongkong.aliyuncs.com/2022/12/11/6395a11370b9d.jpg)

4. 系统会陆续执行程序，此过程需要很长时间，如遇输入，睁眼[^4]按y

::: warning 
安装时请**不要**锁屏或切换后台，如因为以上操作导致安装失败，请不要浪费我以及群友的时间，请**自行清理数据**再次安装
:::

::: info 
如不是因为以上原因导致的报错，请访问 https://pd.qq.com/s/rvk1vn?shareSource=5 或者到[QQ频道](https://pd.qq.com/s/uakgta)求助
:::

![感谢群友贡献的截图](https://hestudio-server-image.oss-cn-hongkong.aliyuncs.com/2022/12/11/6395a115191d3.jpg)

[^4]: 我之前在CSDN里写的是闭眼，结果真有人闭眼按了。

5. 当看到以下界面时，代表基本系统安装完毕

![kali终端](https://hestudio-server-image.oss-cn-hongkong.aliyuncs.com/2022/12/11/6395a1175482f.jpg)

::: info 
后续启动kali linux需要使用`startkali`指令
:::

### 后续操作
#### 更新本地索引
说人话就是你需要让kali知道自己有什么。
```
sudo apt-get update
```
> kali输入密码[^5]时**不显示密码**，即使你已经输入(其他的Linux系统也一样)

[^5]: kali Linux的默认密码是`kali`

#### 更新软件
```
sudo apt-get upgrade
```
::: info 
第一次更新软件需要**几个小时**，建议睡觉时插充电器进行。

注意更新过程中**不要切后台或返回桌面**；配置低的手机或杀后台严重的手机**不要锁屏**；建议临时将手机息屏时间设置为最长。
:::

#### 开启vnc
##### 初始化vncserver
本脚本内置vncserver[^6]服务，但是还是需要自己稍微设置一下。

> 部分机型可能报错，如出现这种情况，请到[QQ频道](https://pd.qq.com/s/uakgta)求助

::: info 
查看更多vncserver操作，请到https://tigervnc.org/
:::

[^6]: 本脚本内置[TigerVNC](https://tigervnc.org/)

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
![VNC Viewer](https://hestudio-server-image.oss-cn-hongkong.aliyuncs.com/2022/12/11/6395a119a4602.jpg)

2. 一路`Next`
3. 点击+号
4. 设置链接地址
port后面的4位数字为端口号，像这样
```
localhost:5901
```

![port后面的4位数字为端口号](https://hestudio-server-image.oss-cn-hongkong.aliyuncs.com/2022/12/11/6395a11b5c6c4.jpg)

5. 最后保存即可

#### 设置kali linux和vncserver自启动
::: danger 
此操作不适用于小白
:::

详见[《Linux设置自启动和显示文字》](https://www.hestudio.org/2022/10/Setting-up-Linux-self-starting-and-displaying-text/)

### Question and Answer (Q&A)
#### 我开启了vncserver但在VNC Viewer页面无法进入。
由于vncserver和桌面环境对设备配置要求较高，所以部分设备会杀掉后台进程，有的经过手动设置实现墓碑机制的设备也无法使用，因为后台被冻结了（可以使用白名单保证termux不被冻结）。这个问题无法根治，部分支持软件悬浮窗的手机可以尝试使用悬浮窗使Termux前台运行。

部分配置比较高的手机因为它的系统版本往往是最高的，而Termux并未对其进行适配，所以会导致Termux突然崩溃。

由于Termux未适配Harmony OS，所以使用搭载有Harmony OS的华为或荣耀用户可能无法使用。在实际测试和用户反馈中，Harmony OS 2.0机型（测试设备为荣耀9x）可以使用除vnc之外的功能，Harmony OS 3.0机型（测试设备为华为MatePad Pro）由于安装脚本无法识别导致无法安装。

#### 不显示网卡信息，怎么联网等
由于手机设备等问题，导致Termux无法获取你的网卡信息，也无法使用一些基于硬件的功能。

#### 自带的Firefox不能用
这个属于官方的bug，之前没有这个问题，属于kali官方管辖的范围，与我无关。

#### 这个到底怎么玩？
详见 https://www.kali.org/tools/

#### 它支持什么功能
详见这张图片

![支持什么功能](https://hestudio-server-image.oss-cn-hongkong.aliyuncs.com/2022/12/11/6395a1cbdba87.jpg)

#### 安装时显示文件损坏

安装时请**不要**锁屏或切换后台！如因为以上操作导致安装失败，请**自行清理数据**再次安装


::: info 
如不是因为以上原因导致的报错，请访问 https://pd.qq.com/s/rvk1vn?shareSource=5 或者到[QQ频道](https://pd.qq.com/s/uakgta)求助
:::

#### Termux选择源的时候怎么选
![termux-change-repo](https://hestudio-server-image.oss-cn-hongkong.aliyuncs.com/2022/12/16/639c696754b56.jpg)

如果出现这个页面，我建议在中国大陆的用户使用清华源（倒数第四个）或者北京外国语大学源（倒数第三个）。且最好使用触摸选择（不是底下的软键盘），点击对应的文字。

如果你使用的是自己配置的源，可以点击Cancel关闭这个窗口

> 最后一次更新 2022.12.16

