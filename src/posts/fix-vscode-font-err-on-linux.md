--- 
title: VSCode 在部分 Linux 设备上终端和文本编辑器显示文本不正常的解决方法
tag:  
    - VSCode 
    - Linux 
category: Linux 
---

部分Linux设备上运行VSCode时，发现文本编辑器的缩放不明显，终端字体间距过大等。

![](https://image.hestudio.net/i/2023/09/16/6504994ccf087.png)

这里以Kali Linux为例，其他Linux发行版请选择对应的系统内置的**等宽字体**

我们依次打开 设置 -> 外观 -> 字体

![](https://image.hestudio.net/i/2023/09/16/65049a672f45e.png)

这里我们可以发现，Kali Linux默认等宽字体系列是`'Fira Code'`，后续我们需要在VSCode内将字体改为`'Fira Code'`

---

打开VSCode，打开设置，搜索`font`关键字。

![](https://image.hestudio.net/i/2023/09/16/65049b337f3f4.png)

将 `Terminal: Font Family`留空，将`Editor: Font Family`改为对应的等宽字体。
![Screenshot_2023-09-16-01-41-55-75.png](https://image.hestudio.net/i/2023/09/16/65049b7003013.png)
![Screenshot_2023-09-16-01-41-30-95.png](https://image.hestudio.net/i/2023/09/16/65049b72239a4.png)

再次使用就可以发现，终端和文本编辑器的字体已经恢复正常了。

