---
title: 在ARM64的Kali Linux安装Chromium
tag:
  - Kali Linux
  - Chromium
  - Linux
category: Linux
---

Kali Linux默认预装Firefox-ESR，但是有时候不兼容一些网页，而且部分设备无法运行。

![](https://image.hestudio.net/i/2023/08/15/64dacfed1e1dd.png)

Chrome不支持Linux-arm64，这时候可以安装Chromium.

```sh
apt install chromium
```

部分root用户在安装后无法打开，是因为Chromium默认不允许在root用户状态下运行，可以通过一下方法修改。

```sh
vim /etc/chromium.d/default-flags
```

打开后在最后一行加上

```sh
export CHROMIUM_FLAGS="$CHROMIUM_FLAGS --password-store=detect --no-sandbox --user-data-dir"
```

最后保存，然后就可以在root下使用了。



