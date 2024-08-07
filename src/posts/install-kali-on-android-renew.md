---
title: 【重制版】在Android手机上安装kali Linux
tag:
  - Termux
  - Android
  - Kali Linux
category: Android
---

最近有很多反馈，都是一些正常界面，截图反馈给我问我有什么问题（原版是英文的）。而且原文（指 CSDN 上的[^1]）用的是富文本，不方便后期修改和同步，所以我更新了这个版本（以后不出意外的话都在这里更新）。

下面的教程基于[原文教程](https://www.hestudio.net/posts/install-kali-on-android.html)做了一些修改。

[^1]: https://blog.csdn.net/a18845594188/article/details/123163279

### 前言

由于 kali 官方的 Nethunter[^2]的安装代码因为...无法访问，手头又没有一些受支持的机器[^3]，所以做了这个脚本，供大家使用。

[^2]: 官方文档： https://www.kali.org/docs/nethunter/nethunter-rootless/
[^3]: 受支持的机器列表具有时效性，详见 https://www.kali.org/get-kali/#kali-mobile

<!-- more -->

### 工具

1. 搭载基于 Android 的手机
2. Termux
3. VNC Viewer (可选)

### 安装软件(如已安装请忽略)

关注[微信公众号 heStudio Community](/about/weixin.html)回复 kali 获取下载链接。

### 安装基本系统

1. 打开 Termux

![Termux](https://image.hestudio.net/img/2022/12/11/6395a11208dde.jpg)

2. 输入以下指令

```
curl -O --url https://res.hestudio.net/kali_for_android/install.sh && chmod +x install.sh && ./install.sh
```

3. 在弹出窗口的界面点击允许

![系统权限请求](https://image.hestudio.net/img/2022/12/11/6395a11370b9d.jpg)

4. 系统会陆续执行程序，此过程需要很长时间，如遇输入，睁眼[^4]按 y

::: warning
安装时请**不要**锁屏或切换后台，如因为以上操作导致安装失败，请不要浪费我以及群友的时间，请**自行清理数据**再次安装
:::

::: info
如不是因为以上原因导致的报错，请访问 https://pd.qq.com/s/rvk1vn?shareSource=5 或者到[QQ 群：806312062](https://qm.qq.com/cgi-bin/qm/qr?k=4n1uhUrvOtudkpynl_Pf9T6fja1rV04N&jump_from=webapi&authKey=yxfsjLe/w5hhJtQETdZmWUatNI4ocPjagH6R9ZZqJyICYv5cQ9PwAFWNz169PgZd)求助
:::

![感谢群友贡献的截图](https://image.hestudio.net/img/2022/12/11/6395a115191d3.jpg)

[^4]: 我之前在 CSDN 里写的是闭眼，结果真有人闭眼按了。

5. 当看到以下界面时，代表基本系统安装完毕

![kali终端](https://image.hestudio.net/img/2022/12/11/6395a1175482f.jpg)

::: info
后续启动 kali linux 需要使用`startkali`指令
:::

### 后续操作

#### 更新本地索引

说人话就是你需要让 kali 知道自己有什么。

```
sudo apt-get update
```

::: warning
kali 输入密码时**不显示密码**，即使你已经输入(其他的 Linux 系统也一样)
:::

::: info
kali Linux 的默认密码是`kali`
:::

#### 更新软件

```
sudo apt-get upgrade
```

::: info
第一次更新软件需要**几个小时**，建议睡觉时插充电器进行。

注意更新过程中**不要切后台或返回桌面**；配置低的手机或杀后台严重的手机**不要锁屏**；建议临时将手机息屏时间设置为最长。
:::

#### 开启 vnc

##### 初始化 vncserver

本脚本内置 vncserver[^6]服务，但是还是需要自己稍微设置一下。

<InternalJumpCard text="部分机型可能报错，如出现这种情况，请参阅这里。" buttontext="我开启了vncserver但在VNC Viewer页面无法进入。" link="/docs/kali_for_android.html#%E6%88%91%E5%BC%80%E5%90%AF%E4%BA%86vncserver%E4%BD%86%E5%9C%A8vnc-viewer%E9%A1%B5%E9%9D%A2%E6%97%A0%E6%B3%95%E8%BF%9B%E5%85%A5%E3%80%82" />

::: info
查看更多 vncserver 操作，请到 https://tigervnc.org/
:::

[^6]: 本脚本内置[TigerVNC](https://tigervnc.org/)

先修改 vnc 密码，不然连不上！

```
vncpasswd
```

##### 运行 vncserver

```
vncserver
```

##### 杀死 vncserver

```
vncserver -kill
```

##### 链接到 vnc

1. 打开 VNC Viewer

![VNC Viewer](https://image.hestudio.net/img/2022/12/11/6395a119a4602.jpg)

2. 一路`Next`
3. 点击+号
4. 设置链接地址
   port 后面的 4 位数字为端口号，像这样

```
localhost:5901
```

![port后面的4位数字为端口号](https://image.hestudio.net/img/2022/12/11/6395a11b5c6c4.jpg)

5. 最后保存即可

#### 设置 kali linux 和 vncserver 自启动

::: danger
此操作不适用于小白
:::

<InternalJumpCard header="Linux设置自启动和显示文字" buttontext="去了解如何设置自启动" link="/posts/Setting-up-Linux-self-starting-and-displaying-text.html" />

---

<InternalJumpCard header="文档" buttontext="查看文档" link="/docs/kali_for_android.html" />
