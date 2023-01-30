---
title: Linux设置自启动和显示文字
date: 2022-10-18 14:33:22
tag: 
    - Termux
    - Linux
category: Linux
---


有的小伙伴们每次打开Linux终端时都得重新配置之前的开发环境，非常麻烦，很容易把我们累s；有的小伙伴每次打开Linux终端都只能看到枯燥的终端，也很容易把我们气s。看完这篇文章，就可以改变上面的的两种现状了。

这里以Termux为例，同时也适用与其他Linux版本

本篇教程都是以`~/.bashrc`(bash)或`~/.zshrc`(zsh)为基础的（小白可读），所以要学会编辑文件。

由于不同的终端对应不同的文件，所以需要查看你的终端类型。

<!-- more -->

```
echo $0
```
使用这个命令查看终端类型

![输出结果](https://image.hestudio.org/img/2022/12/11/6395a23825ef2.jpg)

例如，我这个终端就是zsh

然后使用下面的其中之一编辑对应的文件
```
vim ~/.bashrc
```
或
```
vim ~/.zshrc
```

::: info
vim基础使用方法
| 操作 | 对应的命令 |
|---|---|
| :q! | 退出而不保存 |
| :w! | 保存而不退出 |
| :wq | 保存并退出 |

查看其它用法，请浏览 [Vim 备忘清单](https://quickref.hestudio.org/docs/vim.html)
:::

### 每次打开终端时自动执行某命令
1. 先打开前言的提到文件，然后按 i 键编辑
2. 添加你要执行的命令，像写sh脚本一样，就像这样
```
sshd
```
3. 按下esc，然后输入`:wq`退出vim

![开机自动启动 sshd ](https://image.hestudio.org/img/2022/12/11/6395a23ade90b.jpg)

4. 重启终端

### 每次打开终端显示几段文字
1. 先打开前言的提到文件，然后按 i 键编辑
2. 添加你要显示的文字，就像这样
```
echo 'Hello heStudio!'
```
3. 按下esc，然后输入`:wq`退出vim
4. 重启终端

运行效果如下

![Hello heStudio!](https://image.hestudio.org/img/2022/12/11/6395a23ca4cb0.jpg)

### ~/.bash_profile 和 ~/.bashrc文件区别
#### ~/.bash_profile
为当前用户设置专属的环境信息和启动程序，当用户登录时该文件执行一次。默认情况下，它用于设置环境变量，并执行当前用户的 .bashrc 文件。理念类似于 /etc/profile，只不过只对当前用户有效，也需要重启才能生效。(注意：Centos7系统命名为.bash_profile，其他系统可能是.bash_login或.profile

#### ~/.bashrc
为当前用户设置专属的 bash 信息，当每次打开新的shell时，该文件被执行。理念类似于/etc/bashrc，只不过只对当前用户有效，不需要重启只需要打开新的shell即可生效。
