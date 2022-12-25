---
title: 宝塔面板设置FTP的SSL
date: 2022-12-22 08:42:54
tag: 
    - 宝塔面板
    - Linux
    - FTP
    - SSL
category: Linux
---
我们在宝塔面板刚装上FTP的时候，宝塔面板内使用的是它的自签名证书，在连接的时候就会报错。我们需要将自签名SSL换成我们自己的SSL证书。

![证书不匹配](https://image.hestudio.org/img/2022/12/22/63a3fb74052dc.png)

我们需要准备PEM格式的证书文件。新建一个文档，将私钥放在上面，另起一行，在底下粘贴公钥部分。

在服务器上执行
```sh
# 备份文件
cp /etc/ssl/private/pure-ftpd.pem /etc/ssl/private/pure-ftpd.pem.bak

# 编辑证书文件
vim /etc/ssl/private/pure-ftpd.pem
```
将刚才连接好的证书粘贴在上面。`:wq`保存文件。登录宝塔面板，转到 软件商店 -> Pure-Ftpd 设置 -> 重启。

![操作步骤](https://image.hestudio.org/img/2022/12/22/63a4016c09911.png)

再次登录 FileZilla , 尝试连接后，报错消失了。

![](https://image.hestudio.org/img/2022/12/22/63a40228a6826.png)