---
title: 在Android手机上安装kali Linux
tag:
  - Termux
  - Android
  - Kali Linux
category: Android
---

<InternalJumpCard text="" header="【重制版】在Android手机上安装kali Linux" link="/posts/install-kali-on-android-renew.html" buttontext="在这里查看最新版"  />

由于 kali 官方的 Nethunter[^1]的安装代码因为...无法访问，手头又没有一些受支持的机器[^2]，所以做了这个脚本供大家使用。

[^1]: 官方文档： https://www.kali.org/docs/nethunter/nethunter-rootless/
[^2]: 受支持的机器列表具有时效性，详见 https://www.kali.org/get-kali/#kali-mobile

<!-- more -->

### 工具

1. 搭载基于 Android 的手机
2. Termux
3. VNC Viewer(不一定需要)
4. 手（脚也可以）

### 安装必备软件(如已安装请忽略)

关注[微信公众号 heStudio Community](/about/weixin.html)回复 kali 获取下载链接。

### 安装基本系统

1. 打开 Termux

![Termux](https://image.hestudio.net/img/2022/12/11/6395a11208dde.jpg)

2. 输入以下指令

```
termux-setup-storage && curl -O --url https://res.hestudio.net/kali_for_android/install.sh && chmod +x install.sh && ./install.sh
```

3. 在弹出窗口的界面点击允许

![系统权限请求](https://image.hestudio.net/img/2022/12/11/6395a11370b9d.jpg)

4. 系统会陆续执行程序，此过程需要很长时间，如遇输入，睁眼[^3]按 y

::: warning
安装时请不要锁屏或切换后台，如因为以上操作导致安装失败，请不要浪费我以及群友的时间，请自行清理数据再次安装
:::

::: info
如不是因为以上原因导致的报错，请访问 https://pd.qq.com/s/rvk1vn?shareSource=5 或者到[QQ 群：806312062](https://qm.qq.com/cgi-bin/qm/qr?k=4n1uhUrvOtudkpynl_Pf9T6fja1rV04N&jump_from=webapi&authKey=yxfsjLe/w5hhJtQETdZmWUatNI4ocPjagH6R9ZZqJyICYv5cQ9PwAFWNz169PgZd)求助
:::

![感谢群友贡献的截图](https://image.hestudio.net/img/2022/12/11/6395a115191d3.jpg)

[^3]: 我之前在 CSDN 里写的是闭眼，结果真有人闭眼按了。

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

> Linux 输入密码[^4]时不显示密码，即使你已经输入

[^4]: kali Linux 的默认密码是`kali`

#### 更新软件

```
sudo apt-get upgrade
```

::: info
第一次更新软件需要几个小时，建议睡觉时插充电器进行。

注意更新过程中不要切后台或返回桌面；配置低的手机或杀后台严重的手机不要锁屏；建议临时将手机息屏时间设置为最长。
:::

#### 开启 vnc

##### 初始化 vncserver

本脚本内置 vnc[^5]服务，但是还是需要自己稍微设置一下。

> 部分机型可能报错，如出现这种情况，请到[QQ 群：806312062](https://qm.qq.com/cgi-bin/qm/qr?k=4n1uhUrvOtudkpynl_Pf9T6fja1rV04N&jump_from=webapi&authKey=yxfsjLe/w5hhJtQETdZmWUatNI4ocPjagH6R9ZZqJyICYv5cQ9PwAFWNz169PgZd)求助

::: secondary
查看更多 vnc 骚操作，请到https://tigervnc.org/
:::

[^5]: 本脚本内置[TigerVNC](https://tigervnc.org/)

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
