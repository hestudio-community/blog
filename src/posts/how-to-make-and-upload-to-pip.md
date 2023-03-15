---
title: 如何构建Python软件包并上传到Pypi
date: 2022-12-17 22:05:59
tag: 
    - Python
    - Pypi
category: Python
---
因为最近在做Python包，所以也了解了一下这个。这里我把我自己的学习经验写出来，如果哪里写的不好也请大家提出来。本文的内容大多数都来自[ Packaging Python Projects - Pypi ](https://packaging.python.org/en/latest/tutorials/packaging-projects/)，我根据我的理解进行描述一下。


<!-- more -->

![Pypi的文档截图](https://image.hestudio.org/img/2022/12/17/639db6293266c.png)

---
### 演示配置
- 操作系统：Windows 10 22H2
- Python环境：Python 3.11.1
- pip版本：22.3.1

### 配置环境
需要的工具：build（构建），twine（上传）

#### build 的安装方法
```powershell
py -m pip install --upgrade build
```

#### twine的安装方法
```powershell
py -m pip install --upgrade twine
```

### 写配置文件
#### readme.md
这个可以是任意内容，但必须要遵守[Markdown格式](https://quickref.hestudio.org/docs/markdown.html)，这个文件实际在pypi显示出来的效果是这样的。

![](https://image.hestudio.org/img/2022/12/17/639dbe096bdeb.png)

#### pyproject.toml
这个文件用于告诉pip这个包的一些相关信息，如作者，描述文件等。

官方文档给出的示例是这样的
```toml
[project]
name = "example_package_YOUR_USERNAME_HERE"
version = "0.0.1"
authors = [
  { name="Example Author", email="author@example.com" },
]
description = "A small example package"
readme = "README.md"
requires-python = ">=3.7"
classifiers = [
    "Programming Language :: Python :: 3",
    "License :: OSI Approved :: MIT License",
    "Operating System :: OS Independent",
]

[project.urls]
"Homepage" = "https://github.com/pypa/sampleproject"
"Bug Tracker" = "https://github.com/pypa/sampleproject/issues"
```

或者你可以参考一下我的项目中的是怎么写的。

![](https://image.hestudio.org/img/2022/12/17/639db9b02c6dd.png)

这里 ~~翻译~~ 讲解一下各项的意义
- `name`是包的分发名称。这可以是任何名称。
- `version`是包版本。有关版本的更多详细信息，请参阅[版本说明符规范](https://packaging.python.org/en/latest/specifications/version-specifiers/#version-specifiers)。一些构建后端允许指定它使用另一种方式，例如从文件或 git 标签。
- `authors`用于标识包的作者。您指定一个名称，以及每位作者的电子邮件。
- `description`是包的简短、一句话的摘要。
- `readme`是显示在 PyPI 上的包详细信息页面上的描述文件。[项目元数据规范](https://packaging.python.org/en/latest/specifications/declaring-project-metadata/#declaring-project-metadata)中还描述了更高级的表形式。
- `requires-python`提供您的项目支持的 Python 版本。像 pip 这样的安装程序会回顾旧版本的包，直到找到具有匹配 Python 版本的包。
- `classifiers`为索引和点提供一些额外的元数据 关于您的包裹。在官方示例的这种情况下，该包仅兼容 Python 3，根据 MIT 许可证获得许可，并且独立于操作系统。你应该始终至少包括您的软件包适用于哪个版本的 Python， 您的软件包在哪个许可证下可用，以及哪些操作系统可以让您的软件包正常工作。有关classifiers的完整列表，请参阅 https://pypi.org/classifiers/。
- `urls`允许您列出任意数量的额外链接以在 PyPI 上显示。 通常，这可能是针对源，文档，问题跟踪器等。

![pyproject.toml文件的方法](https://image.hestudio.org/img/2022/12/17/639db7f155d7b.png)

它在pypi上是这样显示的。

![](https://image.hestudio.org/img/2022/12/17/639dc052cb2ba.png)

#### setup.py(可选)
如果你的项目包含多个文件夹，你可以使用它进行配置。这个是我的项目的文件，我提供出来作为示例。

```python
#!/usr/bin/env python

from distutils.core import setup

setup(name='heframework',
      version='0.2.10',
      description='本次更新：修复list模块对中文的支持',
      author='heStudio',
      author_email='hestudio@hestudio.org',
      url='https://gitee.com/hestudio-framework/main-windows/',
      packages=['src',""],
     )


```
其中，`name`, `version`, `description`, `author`, `author_email`与`pyproject.toml`一致，`url`为你的项目的主页。

`packages`用元组表示你的项目所包含的文件夹，在我的示例中，我所包含的文件夹从左到右依次是`src`文件夹和项目根目录。在这个文件中，我们用空白项（如我的示例中的`packages`的第二个）表示根目录。

### 构建项目
我们已经在前面安装过了工具和写了配置文件，这个时候就可以开始构建项目了。

使用以下命令构建。
```powershell
py -m build
```
当出现 Successfully 的时候，就代表项目构建成功。此时，你的项目文件夹内会生成`dist`文件夹，这个文件夹内就是你构建的文件。

![](https://image.hestudio.org/img/2022/12/17/639dc62cc904d.png)

### 上传项目
#### 上传到testpypi测试
你需要在 https://test.pypi.org/account/register/ 注册一个账号用于测试你的安装包。你需要验证你的邮箱。然后上传进行测试。这里我已经尝试过了，如果你需要看具体如何操作，请阅读正式上传的部分（在下面）

```powershell
py -m twine upload --repository testpypi dist\*
```

然后通过以下命令进行安装
```powershell
py -m pip install -i https://test.pypi.org/simple/  example
```
其中`example`是你的项目的名称，它应该为上文的`name`的值。

#### 正式上传到pypi
是的，也就是通过我们熟知的`pip`安装。

首先你需要注册一个[pypi](https://pypi.org)账号，并验证你的邮箱。pypi账号和testpipy账号是截然不同的两个体系。
然后通过以下命令上传。
```powershell
py -m twine upload dist\*
```
![](https://image.hestudio.org/img/2022/12/17/639dcb8eb3135.png)

最后，我们直接安装就可以。
```powershell
pip install example
```
其中`example`是你的项目的名称，它应该为上文的`name`的值。

<Share colorful />
