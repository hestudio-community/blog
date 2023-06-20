---
title: 如何在termux中启用ssh server
date: 2022-10-18 06:12:20
tag: 
    - Termux
    - Linux
    - SSH
category: Android
---

众所周知，Termux 是一个 Android 终端仿真应用程序，用于在 Android 手机上搭建一个完整的 Linux 环境。 Termux不是真实的Linux环境，但是Termux可以安装真实的Linux，而且不会损失性能！. 关键是还不需要root！

然而，在手机上敲代码总是有一些别扭，所以这篇文章就教你怎么远程链接，也就是用ssh连接。


<!-- more -->

### 在Termux上安装openssh服务
#### 安装
1. 打开Termux
2. 安装openssh
```
pkg install openssh -y
```
![安装openssh](https://image.hestudio.net/img/2023/03/24/641d5f31417e3.jpeg)

3. 安装好之后，我们需要手动启动sshd
```
sshd
```

4. 需要指出的是, sshd 监听的是8022端口而不是22号端口，因此可以使用下面命令来验证ssh服务是否开启
```
ssh localhost -p 8022
```
![验证是否开启ssh](https://image.hestudio.net/img/2023/03/24/641d5f795756f.jpeg)

如果出现图片上的画面，则已经开启ssh服务

#### 添加 Public key
Termux的sshd只能通过密钥登陆，因此你需要在客户端上生成密钥对。
```
ssh-keygen
```
![生成密钥对](https://image.hestudio.net/img/2023/03/24/641d5fb122600.png)

把客户端上的公钥加到Termux中的 .ssh/authorized_keys,这一步比较麻烦。因为你无法使用 ssh-copy-id,只能先把 id_rsa.pub 拷贝到手机上，再在手机上打开该文件，拷贝文件内容后在Termux中用 vi 打开 authorized_keys,并复制内容进去。

或者在电脑上将 id_rsa.pub 文件（是整个文件，不是复制文件内容）拖到文件传输助手中，在手机上用Termux打开，点击 EDIT ，然后打开termux
```
cat ~/downloads/id_rsa.pub >> ~/.ssh/authorized_keys
```

不过如果客户端上本身也开启了ssh服务的话，则会简单很多，可以在Termux上执行
```
ssh user@clinet "cat ~/.ssh/id_rsa.pub" >> ~/.ssh/authorized_keys
```
就行了，其中clinet为客户端的地址，user为登陆用户.

#### 客户端登陆
在客户端上执行
```
ssh 127.0.0.1 -p 8022
```
把 127.0.0.1换成手机ip
手机IP可以在 设置 --> WLAN --> 高级设置 里查看
![连接ssh](https://image.hestudio.net/img/2023/03/24/641d5ff99ba32.png)

> 最后一次更新：2022.11.1

<Share colorful />
