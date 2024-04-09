---
title: 在 AOSP / Android 类原生系统上解决 Wifi 连接警告问题
tag: 
    - Android
    - AOSP
    - ADB
category: Android
---


自 Android 5.0 起，谷歌引入了`Captive Portal`的机制，用于检测 WiFi网络认证是否正常。由于众所周知的原因，我们在中国大陆并无法访问谷歌的网络，这在某些情况下会导致一些问题，例如：在中国大陆使用一些类原生的ROM时，会提示`Wifi连接正常，但无法访问互联网`。

<!--more-->

我们可以通过打开USB调试，并执行以下命令来修复这个问题。

```shell
adb shell settings put global captive_portal_http_url http://api.hestudio.net/generate_204
adb shell settings put global captive_portal_https_url https://api.hestudio.net/generate_204
```

详细解释：
我们通过替换`captive_portal_http_url`和`captive_portal_https_url`的值，来修复这个问题。我们将`captive_portal_http_url`和`captive_portal_https_url`更换为我们自己的API，当然你也可以更换成其他的服务。

```shell
# MIUI
adb shell settings put global captive_portal_http_url http://connect.rom.miui.com/generate_204
adb shell settings put global captive_portal_https_url https://connect.rom.miui.com/generate_204
```
