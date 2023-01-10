---
title: 软件补丁 | KA_INSTALL_PATCH_230110
date: 2023-01-10 14:12:59
tag: 
    - Termux
    - Android
    - Kali Linux
    - Linux
category: 软件补丁
---

### 补丁基础信息
- 版本：KA_INSTALL_PATCH_230110
- 原因：本补丁修复在安装出现问题导致 /etc/sudo.conf 出现问题的补丁，它仅适用于在2023年1月7日及以后安装的用户。详情可见 https://gitee.com/heStudio/ka_install/issues/I69UKZ

### 如何安装
1. 打开Termux
2. 运行以下命令

```bash
wget https://res.hestudio.org/kali_for_android/patch/ka_install_patch_230110 && bash ka_install_patch_230110