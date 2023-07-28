---
title: 如何使用KMS
tag: 
    - Windows
    - Office
    - KMS
category: Windows
---
### 本站KMS服务地址

::: tip

了解如何自己搭建一个KMS服务器请访问： https://www.hestudio.net/posts/build-a-kms-server-yourself.html

:::

```text
kms.hestudio.net
```

### 使用方法
#### 激活Windows/Windows Server
- 设置KMS地址为heStudio的KMS服务


```batch
slmgr.vbs /skms kms.hestudio.net
```


- 设置GVLK代码


```batch
slmgr.vbs /ipk xxxxx-xxxxx-xxxxx-xxxxx-xxxxx
```


::: info 
Windows和Windows Server的GVLK代码可以在这里获取：https://docs.microsoft.com/zh-cn/windows-server/get-started/kms-client-activation-keys
:::

- 激活Windows/Windows Server


```batch
slmgr.vbs /ato
```


#### 激活Office
::: warning 
这里的教程仅适用于Office 2016以后的版本，早于此版本的Office仍然可以使用这个KMS服务，但是这里不提供相关资料，需要自行摸索。
:::
- 首先先找到ospp.vbs，如果你是32位的电脑系统或者安装了64位版本的64位计算机，那么ospp.vbs就在`C:\Program Files\Microsoft Office\Office16\`文件夹内；如果是64位的计算机安装了32位的系统，那么它应该在`C:\Program Files (x86)\\Microsoft Office\Office16\`
- 设置KMS地址为heStudio的KMS服务


```batch
cscript ospp.vbs /sethst:kms.hestudio.net
```


- 设置GVLK代码


```batch
cscript ospp.vbs /inpkey:xxxxx-xxxxx-xxxxx-xxxxx-xxxxx
```


::: info 
Office的GVLK代码可以在这里获取：https://docs.microsoft.com/zh-cn/deployoffice/vlactivation/gvlks
:::
- 激活Office


```batch
cscript ospp.vbs /act
```

<Share colorful />
