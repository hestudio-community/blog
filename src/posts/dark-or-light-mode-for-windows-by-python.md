---
title: 在Python内实现Windows的深浅色切换
tag: 
    - Python
    - Windows
category: Python
---
众所周知，我们的Windows的开发者非常擅长“Touch Fish”。一个简简单单的自动切换深浅色和快速切换深浅色的功能它竟然没有给大家提供，有不少开发者做出了这类功能。这里，我将用Python代码讲解这一功能的实现过程。

<!-- more -->

::: info 
这里只讲解它的原理，图形方案交给你们设计。
:::


### 深浅色切换实现
通过查阅资料可知，切换电脑深浅色可以通过修改注册表实现，这里提供两串代码

- 切换深色模式
```batch
reg.exe add HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize /v SystemUsesLightTheme /t REG_DWORD /d 0 /f
reg.exe add HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize /v AppsUseLightTheme /t REG_DWORD /d 0 /f
```

- 切换浅色模式
```batch
reg.exe add HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize /v SystemUsesLightTheme /t REG_DWORD /d 1 /f
reg.exe add HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize /v AppsUseLightTheme /t REG_DWORD /d 1 /f
```

因为从 Windows 10 v1903 开始，深色主题分为 Windows 模式（每个代码块上半部分）和应用模式（每个代码块下半部分），这时我们就需要判断Windows版本号。

我们打开`cmd.exe`,通过执行`ver`命令可以获取版本号。
```text
C:\Users\hestudio>ver

Microsoft Windows [版本 10.0.22621.819]

```
我们需要的是`22621`这部分内容，所以我们需要获取这部分内容，代码是
```python
import os
os.popen("ver").read()[28:33]
```
通过查阅资料可知，Windows 10 v1903 的版本号是`10.0.18362.xxx`,所以我们可以通过以下代码判断
```python
ver = int(os.popen("ver").read()[28:33]) >= 18362
```
如果返回结果为`True`那么就执行两个指令，否则执行一个指令。

那么，这部分的完整代码为
```python
import os

# 定义深浅色命令
DARK_SYSTEM = "reg.exe add HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize /v SystemUsesLightTheme /t REG_DWORD /d 0 /f"
DARK_APPS = "reg.exe add HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize /v AppsUseLightTheme /t REG_DWORD /d 0 /f"
LIGHT_SYSTEM = "reg.exe add HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize /v SystemUsesLightTheme /t REG_DWORD /d 1 /f"
LIGHT_APPS = "reg.exe add HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize /v AppsUseLightTheme /t REG_DWORD /d 1 /f"

# 检查版本
ver = int(os.popen("ver").read()[28:33]) >= 18362

# 深色切换函数
def dark():
    os.system(DARK_SYSTEM)
    if ver:
        os.system(DARK_APPS)
    return 0

# 浅色切换函数
def light():
    os.system(LIGHT_SYSTEM)
    if ver:
        os.system(LIGHT_APPS)
    return 0
```

### 实现自动切换
实现自动切换可以通过计划任务控制。为了方便展示原理，我这里直接用函数表示，在实际运用中，这里通常是可以变化的。

首先我们需要实时获取现在的时间
```python
import time
import threading

def time_get():
    global now_time
    while True:
        now_time = time.strftime('%H:%M', time.localtime())

get_time = threading.thread(target=time_get)
get_time.start()
```
通过获取预设直接调用函数
```python
while True:
    if now_time == '6:00':
        light()
    elif now_time == '20:00'
        dark()
```
当然，这里也可以实现自动切换壁纸，只需要在`if`内的`light()`或者`dark()`的底下利用`os.system()`执行对应的命令即可。有关切换壁纸的cmd命令，你可以在百度中查找。

最后将上面的代码总结一下
```python
import os
import time
import threading

# 定义深浅色命令
DARK_SYSTEM = "reg.exe add HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize /v SystemUsesLightTheme /t REG_DWORD /d 0 /f"
DARK_APPS = "reg.exe add HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize /v AppsUseLightTheme /t REG_DWORD /d 0 /f"
LIGHT_SYSTEM = "reg.exe add HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize /v SystemUsesLightTheme /t REG_DWORD /d 1 /f"
LIGHT_APPS = "reg.exe add HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize /v AppsUseLightTheme /t REG_DWORD /d 1 /f"

# 检查版本
ver = int(os.popen("ver").read()[28:33]) >= 18362

# 深色切换函数
def dark():
    os.system(DARK_SYSTEM)
    if ver:
        os.system(DARK_APPS)
    return 0

# 浅色切换函数
def light():
    os.system(LIGHT_SYSTEM)
    if ver:
        os.system(LIGHT_APPS)
    return 0
    
# 实时获取时间函数
def time_get():
    global now_time
    while True:
        now_time = time.strftime('%H:%M', time.localtime())

# 计划程序
if __name__ == "__main__":
    get_time = threading.thread(target=time_get)
    get_time.start()
    while True:
        if now_time == '6:00':
            light()
        elif now_time == '20:00'
            dark()
```

### 快速切换
你可以自主设计一个前端，通过调用`dark()`和`light()`切换对应的模式。

> 而且，**听说**Windows11在后续的更新中要加入快速切换的按钮。

<Share colorful />
