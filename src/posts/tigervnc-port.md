---
title: TigerVNC 怎么在某个特定的端口启动
tag: 
    - Linux
    - VNC
    - TigerVNC
category: Linux
---

前几天看到有人问我 TigerVNCServer 的端口总是变怎么办。这篇文章就讲解一下怎么设定某个特定的端口。

![](https://image.hestudio.net/img/2023/03/24/641db8c731a86.jpg)

TigerVNC默认是以`5900+X`作为版本号的。在重启后会继续向下一位分配版本号，这就意味着我们会经常修改vnc显示器的端口号。

如果我们在运行的时候指定一个端口，那么实际上这个端口就固定了。

```shell
vncserver :1
```

在这种情况下vnc服务就会在`5901`端口运行。如果你想要在其他端口运行，那么可以将1改成其他数值。

如果需要固定一个简便的方法，那么我们可以尝试创建一个脚本并通过脚本快速通过固定的端口启动。

```shell
echo "vncserver :1" >> /usr/share/vncserver-start
chmod +x /usr/share/vncserver-shart
```
 
其中`:1`应当改为你需要的数值，`vncserver-start`应当改为你想要的脚本名称（需要是非中文或特殊字符且不要和系统原有指令冲突）。然后以后可以通过脚本快速通过固定端口启动。

如果需要使其开机自启动，请浏览 [Linux设置自启动和显示文字](/posts/Setting-up-Linux-self-starting-and-displaying-text.html)


