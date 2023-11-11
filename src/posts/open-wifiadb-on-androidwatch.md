---
title: OPPO Watch纯手机开启远程ADB调试
tag: 
    - Android
    - adb
    - 手表
category: Android
---

Wear OS手表中，我们可以直接在开发者设置中打开WiFi调试。但是这在OPPO等魔改Android系统中不再奏效。

![按照手机逻辑处理](https://image.hestudio.net/i/2023/11/12/654fa6d986e99.png)

---

#### 需要什么？？
- 手表一台
- 手机一个
- OTG转接头一个
- 手表充电器一个

#### 演示设备
- 手机： OPPO Find X
- 手表： OPPO Watch 1代 41mm

#### 需要的软件
- Chrome
- 用于连接adb的工具，比如说Termux或者Wear OS工具箱

---

#### USB调试
首先，我们需要连接WiFi，连接WiFi就不用我说了吧。然后我们需要记住你的设备的IP地址，一会我们可以查到。

然后我们打开开发者设置，这对于日常搞机的一般问题不大（我小学五年级的表弟都会）。那不会也没关系，官方在文档里面已经给了详细的教程。

![](https://image.hestudio.net/i/2023/11/12/654facea67d15.png)

然后我们打开USB调试。

![](https://image.hestudio.net/i/2023/11/12/654fae8dd502f.png)

### 打开WiFi调试

这就需要用到[Web ADB](https://github.com/webadb/webadb.js)技术了。该项目已经停止更新。

我们可以使用 https://adb.wearosbox.com/ 开启，该项目由FlyFish开发。隶属于[Wear OS工具箱](https://help.wearosbox.com/)

首先我们需要打开手机上面的OTG开关（如果有），将OTG线与手机连接。用Chrome打开这个网页。

> 亲测部分手机（我的手机）在电量低于20％的时候无法连接OTG


![](https://image.hestudio.net/i/2023/11/12/654fbd90bdb9b.png)

![](https://image.hestudio.net/i/2023/11/12/654fbdb346a44.png)

![](https://image.hestudio.net/i/2023/11/12/654fbdd48c636.png)

需要用户在手表端授权允许使用ADB调试！！

这样就打开了WiFi调试，默认端口是`5555`

#### 获取IP地址

在刚才那个页面切换到IP查询，然后按照过程操作即可。

![](https://image.hestudio.net/i/2023/11/12/654fbe7946649.png)

#### 练手项目：使用ADB安装唯趣应用商店

这里我使用Termux进行演示，你可以使用自己喜欢的工具。

打开Termux，使用该命令安装ADB工具包。

```sh
pkg install android-tools
```

![我已经安装了](https://image.hestudio.net/i/2023/11/12/654fc0262eccc.png)

打开[官网](http://etralab.top/etralab_appstore/html/select_install_method_android.html)，下载安卓版本，复制下载路径。

刚才已经查看了IP地址，现在直接连接即可。

```sh
adb connect 192.168.0.101
```

![照例允许一下](https://image.hestudio.net/i/2023/11/12/654fc373e28c0.png)

```sh
adb install /storage/emulated/0/Download/EtralabAppstore-android-0.17.0-16.apk
```

![](https://image.hestudio.net/i/2023/11/12/654fc3cc98499.png)

大功告成！！
