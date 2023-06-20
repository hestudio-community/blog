---
title: 修复在VSCode调试Python时的timeout问题
date: 2022-11-05 09:10:06
tag: 
    - Windows
    - VSCode
---

前几天我正在写一个新项目，但是在调试时弹出了“由于目标计算机积极拒绝，无法连接”的提示，我思考了许久，查阅了相关资料，现总结经验如下。

<!-- more -->

![由于目标计算机积极拒绝，无法连接](https://image.hestudio.net/img/2022/12/11/6395a0a055837.png)

### 一. 修改`launch.json`文件
1. 打开VSCode`.vscode/launch.json`文件
2. 更改`console`为`externalTerminal`
```json
"console": "externalTerminal"
```

![launch.json](https://image.hestudio.net/img/2022/12/11/6395a0a6bb468.png)

### 二. 关闭“自动检测设置”
此步适用于Windows10/11，这里以Windows11为例
1. 打开设置，打开“网络和Internet”

![设置](https://image.hestudio.net/img/2022/12/11/6395a0a20573c.png)

2. 打开“代理”选项

![“代理”选项](https://image.hestudio.net/img/2022/12/11/6395a0a3abb45.png)

3. 关闭“自动检测设置”

![关闭“自动检测设置”](https://image.hestudio.net/img/2022/12/11/6395a0a542201.png)

<Share colorful />
