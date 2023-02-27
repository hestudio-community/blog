---
title: 在Android手机上安装kali Linux 的 Q&A
icon: install
article: false
---

### 教程
https://www.hestudio.org/posts/install-kali-on-android-renew.html

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
本脚本内置vncserver[^6]服务，但是还是需要自己稍微设置一下。

> 部分机型可能报错，如出现这种情况，请浏览 https://www.hestudio.org/docs/kali_for_android.html#%E6%88%91%E5%BC%80%E5%90%AF%E4%BA%86vncserver%E4%BD%86%E5%9C%A8vnc-viewer%E9%A1%B5%E9%9D%A2%E6%97%A0%E6%B3%95%E8%BF%9B%E5%85%A5%E3%80%82 或者到[QQ频道](https://pd.qq.com/s/uakgta)求助

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

![VNC Viewer](https://image.hestudio.org/img/2022/12/11/6395a119a4602.jpg)

2. 一路`Next`
3. 点击+号
4. 设置链接地址
port后面的4位数字为端口号，像这样
```
localhost:5901
```

![port后面的4位数字为端口号](https://image.hestudio.org/img/2022/12/11/6395a11b5c6c4.jpg)

5. 最后保存即可

### 我开启了vncserver但在VNC Viewer页面无法进入。
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

![支持什么功能](https://image.hestudio.org/img/2022/12/11/6395a1cbdba87.jpg)

### 安装时显示文件损坏

安装时请**不要**锁屏或切换后台！如因为以上操作导致安装失败，请**自行清理数据**再次安装


::: info 
如不是因为以上原因导致的报错，请访问 https://pd.qq.com/s/rvk1vn?shareSource=5 或者到[QQ频道](https://pd.qq.com/s/uakgta)求助
:::

### Termux提示`Failed to fetch`
![](https://image.hestudio.org/img/2023/02/27/63fcca9e7d274.jpg)

当出现此提示的时候，请输入

```shell
termux-change-repo
```

然后参照下一条操作。

### Termux选择源的时候怎么选
![termux-change-repo](https://image.hestudio.org/img/2022/12/16/639c696754b56.jpg)

如果出现这个页面，我建议在中国大陆的用户使用清华源（倒数第四个）或者北京外国语大学源（倒数第三个）。且最好使用触摸选择（不是底下的软键盘），点击对应的文字。

如果你使用的是自己配置的源，可以点击Cancel关闭这个窗口

::: tip 如何寻找Termux的源
这个是Termux官方提供的文档：https://github.com/termux/termux-packages/wiki/Mirrors#mirrors-hosted-in-china
:::

### 出现 `curl: (28) SSL connection timeout` 报错
这种现象在我的所有测试设备中总是无法复现，部分用户也表示使用该同一版本的脚本时从未出现这种情况。这种情况的出现可能由以下几大原因造成的：

- 服务器正在维护
- 你使用的DNS未包含我的CDN所对应的IP地址

我们可以使用ping来验证网站的状态，请尝试在终端内运行

```bash
ping res.hestudio.org
```

如果在ping的时候返回了IP地址，则说明网站正在维护，请过一会在尝试。如果还是不能访问，请[联系我](https://www.hestudio.org/about/)。出现第一种情况的可能性基本为零，因为所有的外置资源全部部署到阿里云的CDN中，且我们存在作为备用源的对象存储（不是存你的对象的）。所以即使遇到我们的服务器正在维护，你也可以从CDN的缓存或者备用对象存储（俗称备胎）获取你需要的资源。

![](https://image.hestudio.org/img/2023/01/05/63b6b0158d42d.png)


所以基本上出现第二种情况的可能性最大，当在上一步未ping到IP地址，则适用于这一条。出现第二种情况既不是你的错，当然也不是我的错。当你遇到第二种情况时，请尝试修改你的设备中的DNS。我们推荐使用阿里云的DNS（地址是`223.5.5.5`和`223.6.6.6`）以更方便的访问我们的服务，当然你也可以选择其他常见的公共DNS。如果你的设备使用的是私人DNS，请你暂时关闭它。如果没有遇到这种情况，请忽略这一条的全部信息。

> 最后一次更新 2023.01.05
