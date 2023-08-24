---
title: 在Android手机上安装kali Linux 的 Q&A
icon: install
article: false
---

## 安装脚本
```sh
termux-setup-storage && curl -O --url https://res.hestudio.net/kali_for_android/install.sh && chmod +x install.sh && ./install.sh
```

## 教程
https://www.hestudio.net/posts/install-kali-on-android-renew.html

## Q&A
### 一些命令
这里只说明我的教程涉及到的命令，查看其他博主教程的命令请转到对应博主的文档里查看，查看系统命令用法请访问 https://www.kali.org/tools/

#### 开启命令
每次进入Termux可以通过 `startkali` 进入kali Linux终端。

当然，你也可以使用 `startkali -r` 直接以`root`身份进入。

#### VNCServer 命令
本系统包预装[TigerVNCServer](https://tigervnc.org/)，如果使用不习惯请自行更换。如果你向我咨询该问题，我们默认你使用`TigerVNCServer`。

它的常用命令如下：

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

##### 链接到vnc  <Badge text="热门" type="warning" vertical="middle" />
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


#### 我开启了vncserver但在VNC Viewer页面无法进入。 <Badge text="热门" type="warning" vertical="middle" />
由于vncserver和桌面环境对设备配置要求较高，所以部分设备会杀掉后台进程，有的经过手动设置实现墓碑机制的设备也无法使用，因为后台被冻结了（可以使用白名单保证termux不被冻结）。这个问题无法根治，部分支持软件悬浮窗的手机可以尝试使用悬浮窗使Termux前台运行。

如果你的设备性能较低，那无论怎么设置也解决不了这个问题，请更换设备或者尝试使用[官方的App](https://www.kali.org/get-kali/#kali-mobile)（需要Root或者刷机）

部分配置比较高的手机因为它的系统版本往往是最高的，而Termux并未对其进行适配，所以会导致Termux突然崩溃。

::: danger 兼容性问题
有关Termux的兼容性问题请浏览 https://github.com/termux/termux-packages/wiki/Termux-and-Android-10 和 https://developer.android.google.cn/about/versions/10/behavior-changes-10?hl=zh-cn#execute-permission
:::

由于Termux未适配Harmony OS，所以使用搭载有Harmony OS的华为或荣耀用户可能无法使用。在实际测试和用户反馈中，Harmony OS 2.0机型（测试设备为荣耀9x）可以使用除vnc之外的功能，Harmony OS 3.0机型（测试设备为华为MatePad Pro）由于安装脚本无法识别导致无法安装。**请Harmony OS 3.0及以上版本的用户不要咨询该问题**

如果你使用Android 12或以上Android版本，并出现`[Process completed (signal 9) - press Enter]`，请浏览[解决安卓12限制32个线程](/posts/Solve-32-restrictions-of-Android-12-restrictions.html)

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


### Termux提示`Failed to fetch`
::: details 示例

![](https://image.hestudio.net/img/2023/02/27/63fcca9e7d274.jpg)

:::

当出现此提示的时候，请输入

```sh
termux-change-repo
```

然后参照下一条操作。

### Termux选择源的时候怎么选  <Badge text="热门" type="warning" vertical="middle" />

![termux-change-repo](https://image.hestudio.net/img/2022/12/16/639c696754b56.jpg)


如果出现这个页面，建议在中国大陆的用户使用清华源（倒数第四个）或者北京外国语大学源（倒数第三个）。且最好使用触摸选择（不是底下的软键盘），点击对应的文字。

如果你使用的是自己配置的源，可以点击Cancel关闭这个窗口

::: tip 如何寻找Termux的源
这个是Termux官方提供的文档：https://github.com/termux/termux-packages/wiki/Mirrors#mirrors-hosted-in-china
:::

### 报错`[Process completed (signal 9) - press Enter]`  <Badge text="热门" type="warning" vertical="middle" />

详见 [解决安卓12限制32个线程](/posts/Solve-32-restrictions-of-Android-12-restrictions.html)

### 安装中文语言 <Badge text="2.0" type="tip" vertical="middle" />

在运行之前加入该环境变量
```sh
export LANG=zh_CN.UTF-8
```
也可以实现自动添加并启动，详见 [Linux设置自启动和显示文字](/posts/Setting-up-Linux-self-starting-and-displaying-text.html)

### 报错 `Errors were encountered while processing: /var/cache/apt/archives/postgresql-15_15.3-0+deb12u1_arm64.deb`

如果在执行`sudo apt upgrade`出现类似以下报错：
```text
Preparing to unpack …/postgresql-15_15.3-0+deb12u1_arm64.deb …
invoke-rc.d: could not determine current runlevel
Stopping PostgreSQL 15 database server: mainError: Data directory /var/lib/postgresql/15/main must not be owned by root … failed!
failed!
invoke-rc.d: initscript postgresql, action “stop” failed.
dpkg: warning: old postgresql-15 package pre-removal script subprocess returned error exit status 1
dpkg: trying script from the new package instead …
invoke-rc.d: could not determine current runlevel
Stopping PostgreSQL 15 database server: mainError: Data directory /var/lib/postgresql/15/main must not be owned by root … failed!
failed!
invoke-rc.d: initscript postgresql, action “stop” failed.
dpkg: error processing archive /var/cache/apt/archives/postgresql-15_15.3-0+deb12u1_arm64.deb (–unpack):
new postgresql-15 package pre-removal script subprocess returned error exit status 1
Errors were encountered while processing:
/var/cache/apt/archives/postgresql-15_15.3-0+deb12u1_arm64.deb
E: Sub-process /usr/bin/dpkg returned an error code (1)
```

解决方案参考 https://forums.kali.org/showthread.php?59108-Kali-Android-Rootless-upgrade-issues

以下命令依次执行：
```sh
rm -rf /var/lib/dpkg/info/postgresql* && dpkg --configure -a
sudo apt update && sudo apt full-upgrade -y
```

## 高级用法
::: danger Linux 小白慎入
当你阅读本部分内容时，我们将认为你对Linux基础知识有一定了解。如果你是一位Linux小白，你应当阅读上面的内容。如果你误执行其中的命令导致你的设备无法正常使用，我们不承担任何责任。我们不希望你针对此部分内容的Linux基础知识向我们提问。
:::

### 在打开Termux的时候自动启动kali
如果想在进入Termux时默认进入kali Linux终端，请浏览 [Linux设置自启动和显示文字](/posts/Setting-up-Linux-self-starting-and-displaying-text.html) 文章。

### 修改kali容器的启动命令
#### 修改启动名称
在默认情况下，我们使用`startkali`启动kali容器。你可以通过修改`${PREFIX}/bin/startkali`的文件名称使得启动名称发生改变。

在文档的其他部分，我们将认为你仍然使用默认启动名称

如，原来的修改名称是`startkali`，需要将其修改为`kalistart`，可以使用以下命令：

```sh
mv ${PREFIX}/bin/startkali ${PREFIX}/bin/kalistart
```

#### 修改启动配置
你可以通过修改`${PREFIX}/bin/startkali`的内容使得配置文件发生改变。

如果你使用vim，则应当使用以下命令编辑：

```sh
vim ${PREFIX}/bin/startkali
```

如果你误修改配置文件导致容器无法启动，请通过安装[KA_INSTALL_PATCH_230608](https://www.hestudio.net/posts/ka_install_patch_230608.html)覆盖掉修改的配置文件。

#### 更换默认语言 <Badge text="2.0" type="tip" vertical="middle" />

我们通过读取`LANG`环境变量值判断你的默认语言，通过修改该变量可以修改你的容器语言。
```sh
# 中文（简体）
export LANG=zh_CN.UTF-8
```
如果需要修改成其他语言，请自行查阅资料。

也可以实现自动添加并启动，详见 [Linux设置自启动和显示文字](/posts/Setting-up-Linux-self-starting-and-displaying-text.html)

### 备份与恢复
#### 备份
你可以通过打包`~/kali-arm*`文件夹以备份已经安装好的容器系统源文件。

#### 恢复
::: warning
应当保持备份和恢复的是同一设备，否则可能会出现兼容性问题。
:::

请按照以下步骤恢复：

1. 重新运行安装脚本
2. 将你备份的`kali-arm*`恢复到用户目录`~/`


### 删除
运行以下命令以删除该容器

```sh
rm -rf ~/ka_install ~/kali-arm* ${PREFIX}/bin/startkali 
```


