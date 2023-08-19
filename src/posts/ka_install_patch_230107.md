---
title: 软件补丁 | KA_INSTALL_PATCH_230107
tag: 
    - Termux
    - Android
    - Kali Linux
    - Linux
category: 软件补丁
---

### 补丁基础信息
- 版本：KA_INSTALL_PATCH_230107
- 原因：修复默认的DNS设置，仅适用于在2022年12月5日之后安装的用户。

### 注意事项
如果你修改过DNS设置，请**不要**进行安装，**该补丁会覆盖DNS服务器设置**。

### 如何安装
1. 打开Termux，并进入kali系统。
2. 运行以下命令

```bash
wget https://res.hestudio.net/kali_for_android/patch/ka_install_patch_230107 && bash ka_install_patch_230107
```


