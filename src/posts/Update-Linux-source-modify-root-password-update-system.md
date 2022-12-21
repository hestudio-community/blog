---
title: Linux更新源/修改root密码/更新系统
date: 2022-10-19 14:45:25
tagy: Linux
category: Linux
---

### 前言
Linux 安装完成之后，第一步优化是设置root密码，第二步是更换掉官方的源地址，因为官方源下载速度只有10几“kb”，第三步更新系统工具，保持系统工具是最新的。最基本的优化有以上三连。

### 修改root密码
使用以下命令修改root密码
```
sudo passwd root
```

![修改密码](https://hestudio-server-image.oss-cn-hongkong.aliyuncs.com/2022/12/11/6395a315edcac.jpg)

> 在Linux输入密码时不会显示，即使你已经输入完了。

### 配置网络源
#### 1. 使用vim打开'sources.list'
```
vim /etc/apt/sources.list
```
#### 2. 粘贴镜像源代码
> 这里以kali为例
> 其他linux系统的镜像源请自行百度。

1. 先将官方的镜像源码注释
2. 粘贴镜像源代码
```
#阿里源
deb http://mirrors.aliyun.com/kali kali-rolling main non-free contrib
deb-src http://mirrors.aliyun.com/kali kali-rolling main non-free contrib
```
```
#清华源
deb http://mirrors.tuna.tsinghua.edu.cn/kali kali-rolling main contrib non-free
deb-src https://mirrors.tuna.tsinghua.edu.cn/kali kali-rolling main contrib non-free
```
```
#中科大
deb http://mirrors.ustc.edu.cn/kali kali-rolling main non-free contrib
deb-src http://mirrors.ustc.edu.cn/kali kali-rolling main non-free contrib
```

把两条源地址添加在sources.list文件末尾，默认官方源是开启的只需要在“官方源”前面加【#】号就可以关闭。

### 更新索引
以Debian[^1]系linux为例

[^1]: 基于Debian的Linux发行版，一般使用`apt`作为软件包管理器，安装`.deb`格式的软件包。

```
sudo apt-get update
```

### 更新软件
以Debian系linux为例
```
sudo apt-get upgrade
```

### 更新系统
以Debian系linux为例
```
sudo apt-get dist-upgrade
```

