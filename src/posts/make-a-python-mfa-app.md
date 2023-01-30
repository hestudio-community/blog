---
title: 通过Python制作一个MFA验证器
date: 2022-12-31 08:10:10
tag: 
    - Python
    - MFA
category: Python
---
我们经常会遇到一些需要验证动态密码的页面，这个时候在手机上有很多此类的MFA应用，比如Microsoft Authenticator，Duo Mobile，谷歌验证器。

那么其实我们也可以自己做一个MFA验证器。本着只要网上有，绝不自己做的原则，我们将使用开源模块拼凑而成。

![](https://image.hestudio.org/img/2022/12/28/63abc608bb033.png)

<!-- more -->

::: info 
这里只讲解它的原理，图形方案交给你们设计。
:::

---
### 环境准备
首先我们需要安装`pyotp`(获取动态口令)和`heframework`(简化开发过程)，这两个模块均可以通过`pip`安装。上述模块需要在Python 3.6及以上版本才可以运行。

### 规划方案
它首先可以获取动态口令，这是它最直接的功能。获取动态密码需要对应的Secure，所以它也需要管理Secure的功能。管理面板需要包含添加，删除这些基本操作。

所以我们计划使用`json`文本交换格式作为Secure的存储介质，使用`list`分别存储Secure及其对应的名称。

![](https://image.hestudio.org/img/2022/12/31/63afb45c9805d.jpeg)

--- 

### 大纲代码
我们首先需要根据主程序图写出一个大纲，以准备后续填充代码。这里需要参考一下[heframework](https://pypi.org/project/heframework/)的[`choose`模块用法](https://gitee.com/hestudio-framework/main-windows/blob/master/docs/choose.md)

```python
import heframework
import sys


# 获取令牌
def get():
    pass


# 管理令牌
def console():
    pass


# main
def main():
    while True:
        main = heframework.choose(
            mode="list", name=["获取令牌", "管理令牌", "退出"], return_text=[1, 2, 3], info=">>>")
        if main == 1:
            get()
        elif main == 2:
            console()
        elif main == 3:
            sys.exit()
        else:
            print("Err")


if __name__ == "__main__":
    main()

```

### 管理令牌
#### 大纲
根据上面的内容，我们可以写出管理界面的选择器。
```python
# 添加
def add():
    pass


# 删除
def delete():
    pass


# 大纲
def console():
    while True:
        main = heframework.choose(
            mode="list", name=["添加令牌", "删除令牌", "退出"], return_text=[1, 2, 3], info=">>>")
        if main == 1:
            add()
        elif main == 2:
            delete()
        elif main == 3:
            break
        else:
            print("Err")
```

#### 添加令牌
在这里就涉及到了`json`的操作和文件的读写操作。我们还是继续使用`heframework`作代码的简化。

这里代码执行的是顺序操作。首先需要用户录入令牌的名称和Secure。需要检验是否存在`token.json`文件，如果不存在则新建一个。如果该文件存在则读取该文件，并确保不存在重复的值。

如果以上判断返回的值为`true`，先将`name`和`secure`对应的`list`读取到内存，将新增的值通过`append()`写入，再将内存中的值重新写入`json`文件中。

```python
import json
import os
import time


def add():
    name = input("令牌名称：")
    secure = input("令牌Secure：")
    if not os.path.exists("token.json"):
        file = open("token.json", "w")
        dicts = {"name": [name], "return_text": [secure]}
        file.write(json.dumps(dicts))
        time.sleep(1)
        file.close()
        print("Successfully!")
    else:
        read_only_file = open("token.json")
        dicts = json.load(read_only_file)
        read_only_file.close()
        if name in dicts["name"]:
            print("Existed!")
        else:
            if secure in dicts["return_text"]:
                print("Existed!")
            else:
                file_after = open("token.json", "w")
                names = dicts["name"]
                secures = dicts["return_text"]
                names.append(name)
                secures.append(secure)
                dict_after = {"name": names, "return_text": secures}
                file_after.write(json.dumps(dict_after))
                time.sleep(1)
                file_after.close()
                print("Successfully!")
```

#### 删除令牌
这里依旧使用顺序结构。将`token.json`读取后，遍历列表。当用户选择后，通过`del`对应的选项实现删除操作。

```python
import json
import os
import time

def delete():
    if not os.path.exists("token.json"):
        print("No file!")
    else:
        read_only_file = open("token.json")
        dicts = json.load(read_only_file)
        read_only_file.close()
        if not dicts["name"]:
            print("No Token!")
        else:
            num = 0
            for i in dicts["name"]:
                num += 1
                print(num, ": ", i)
            choose = int(input("请输入你要删除的项目："))
            if choose >= 1 and choose <= num:
                names = dicts["name"]
                secures = dicts["return_text"]
                del names[int(choose-1)]
                del secures[int(choose-1)]
                print("Successfully!")
                file_after = open("token.json", "w")
                dict_after = {"name": names, "return_text": secures}
                file_after.write(json.dumps(dict_after))
                time.sleep(1)
                file_after.close()
            else:
                print("Err")
```

### 获取令牌
当然，最重要的东西要留在最后，这部分内容是这个程序最重要的部分。

我们使用`pyotp`作token的运算，如果想了解这部分内容可以去搜索一下`TOTP`

`pyotp`输出的6位数临时密码通常是几秒变化一次，通过我们的了解，其他同类软件的变化周期通常是30s

![](https://image.hestudio.org/img/2022/12/31/63afdb2b5f077.jpg)

根据这些我们就可以写出一个动态密码显示器。

```python
import heframework
import sys
import json
import os
import time
import pyotp


def get():
    if not os.path.exists("token.json"):
        print("No File")
    else:
        read_only_file = open("token.json")
        dicts = json.load(read_only_file)
        read_only_file.close()
        if not dicts["name"]:
            print("No Token!")
        else:
            secure = heframework.choose(
                mode="json", json_file="token.json", info="选择令牌：")
            storage = pyotp.TOTP(str(secure))
            win = heframework.refresh_show(title="令牌", geometry="200x100")
            while True:
                t = 30
                token_now = storage.now()
                for i in range(30):
                    code = win.refresh(str(token_now+"\n剩余时间"+str(t)+"秒"))
                    t -= 1
                    time.sleep(1)
                    if code == 21099:
                        sys.exit()
                    elif code == 20000:
                        pass
                    else:
                        sys.exit()
```

### 代码汇总和测试
总结代码如下

::: details 完整代码

```python
import heframework
import sys
import json
import os
import time
import pyotp


# 获取令牌
def get():
    if not os.path.exists("token.json"):
        print("No File")
    else:
        read_only_file = open("token.json")
        dicts = json.load(read_only_file)
        read_only_file.close()
        if not dicts["name"]:
            print("No Token!")
        else:
            secure = heframework.choose(
                mode="json", json_file="token.json", info="选择令牌：")
            storage = pyotp.TOTP(str(secure))
            win = heframework.refresh_show(title="令牌", geometry="200x100")
            while True:
                t = 30
                token_now = storage.now()
                for i in range(30):
                    code = win.refresh(str(token_now+"\n剩余时间"+str(t)+"秒"))
                    t -= 1
                    time.sleep(1)
                    if code == 21099:
                        sys.exit()
                    elif code == 20000:
                        pass
                    else:
                        sys.exit()


# 管理令牌

# 添加
def add():
    name = input("令牌名称：")
    secure = input("令牌Secure：")
    if not os.path.exists("token.json"):
        file = open("token.json", "w")
        dicts = {"name": [name], "return_text": [secure]}
        file.write(json.dumps(dicts))
        time.sleep(1)
        file.close()
        print("Successfully!")
    else:
        read_only_file = open("token.json")
        dicts = json.load(read_only_file)
        read_only_file.close()
        if name in dicts["name"]:
            print("Existed!")
        else:
            if secure in dicts["return_text"]:
                print("Existed!")
            else:
                file_after = open("token.json", "w")
                names = dicts["name"]
                secures = dicts["return_text"]
                names.append(name)
                secures.append(secure)
                dict_after = {"name": names, "return_text": secures}
                file_after.write(json.dumps(dict_after))
                time.sleep(1)
                file_after.close()
                print("Successfully!")


# 删除
def delete():
    if not os.path.exists("token.json"):
        print("No file!")
    else:
        read_only_file = open("token.json")
        dicts = json.load(read_only_file)
        read_only_file.close()
        if not dicts["name"]:
            print("No Token!")
        else:
            num = 0
            for i in dicts["name"]:
                num += 1
                print(num, ": ", i)
            choose = int(input("请输入你要删除的项目："))
            if choose >= 1 and choose <= num:
                names = dicts["name"]
                secures = dicts["return_text"]
                del names[int(choose-1)]
                del secures[int(choose-1)]
                print("Successfully!")
                file_after = open("token.json", "w")
                dict_after = {"name": names, "return_text": secures}
                file_after.write(json.dumps(dict_after))
                time.sleep(1)
                file_after.close()
            else:
                print("Err")


# 大纲
def console():
    while True:
        main = heframework.choose(
            mode="list", name=["添加令牌", "删除令牌", "退出"], return_text=[1, 2, 3], info=">>>")
        if main == 1:
            add()
        elif main == 2:
            delete()
        elif main == 3:
            break
        else:
            print("Err")


# main
def main():
    while True:
        main = heframework.choose(
            mode="list", name=["获取令牌", "管理令牌", "退出"], return_text=[1, 2, 3], info=">>>")
        if main == 1:
            get()
        elif main == 2:
            console()
        elif main == 3:
            sys.exit()
        else:
            print("Err")


if __name__ == "__main__":
    main()

```

:::

![运行界面](https://image.hestudio.org/img/2022/12/31/63afe382abec2.png)
