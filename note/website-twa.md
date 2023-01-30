---
title: 让你的网站变成一个Android应用
date: 2022-10-19 14:45:25
tagy: 
    - PWA
    - TWA
    - Android
    - Android Studio
category: Android
---

TWA (Trusted Web Activity 可信任的网络应用）即: 基于Chrome Custom Tabs，利用谷歌浏览器提供的api，实现强大功能的桌面应用技术。我们可以通过这个把你的网站变成应用。

但是在这之前，你需要准备一些东西，包括
- 一个支持[PWA](https://learn.microsoft.com/zh-cn/microsoft-edge/progressive-web-apps-chromium/)的网站
- [Android Studio](https://developer.android.google.cn/studio/)

本文参照 [TWA踩坑记-从零到一让你的博客变成app并上架商店](https://tellyouwhat.cn/p/twa-you-blog-can-become-an-app/#toc-heading-1) 编写，由于版本更迭的原因，原教程的方法已经不再完全可用。感谢 [Harbor Zeng](https://tellyouwhat.cn/) 老师的思路。

### 创建项目
1. 打开 Android Studio
2. 创建项目
3. 选择 No Activity，稍后引入的库会包含一个activity。

![](https://image.hestudio.org/img/2023/01/30/63d7d7edcd6c9.png)

4. 填写信息，并注意API需要大于19

![](https://image.hestudio.org/img/2023/01/30/63d7d87ed4e75.png)