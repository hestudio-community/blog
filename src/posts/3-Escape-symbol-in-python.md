---
title: 3-Python中的转义符号
date: 2022-10-21 15:48:38
tag: Python
category: Python
---

### 转义符号
| 转义符号 | 对应的操作 |
|---|---|
| `\\` | 输出反斜杠 |
| `\'` | 输出单引号 |
| `\"` | 输出双引号 |
| `\n` | 换行 |
| `\t` | 水平制表符 |
| `\r` | 光标回到首位 |
| `\b` | 退格 |

#### 输出反斜杠
```python
print("hello\\heStudio")
```
运行结果为
```text
hello\heStudio
```

#### 输出单引号
```python
print("hello\'heStudio")
```
运行结果为
```text
hello'heStudio
```

#### 输出双引号
```python
print("hello\"heStudio")
```
运行结果为
```text
hello"heStudio
```

#### 换行
```python
print("hello\nheStudio")
```
运行结果为
```text
hello
heStudio
```

#### 水平制表符
一个制表符的作用就是重新开一个新的制表位，一个制表位的长度为4个字符。如果之前的字符占满了上一个制表位，就重开一个，若果没有，则是把之前的一个制表位给填充满。

```python
print("hello\theStudio")
```
运行结果为
```
hello   heStudio
```

#### 光标回到首位
```python
print("hello\rheStudio")
```
运行结果为
```text
heStudio
```

#### 退格
```python
print("hello\bheStudio")
```
运行结果为
```text
hellheStudio
```

### 使转义符号不起作用
若不希望字符串中的转义字符起作用，在字符串前加r或者R
像这样
```python
print(r"Hello\nWorld")
```
运行结果为
```text
Hello\nWorld
```

### 学以致用
#### 只因你太美[^1]歌词片段

[^1]:  2016年12月2日歌曲介绍2016年12月2日，SWIN-S首张迷你专辑《New World》第三支单曲《只因你太美》全网上线，极具中毒性的时尚电音旋律融合Hi phop，SWIN-S的大男孩们更是集体强势告白，声线魅惑以歌撩人，整首歌洋溢着蠢蠢欲动的青春荷尔蒙气息。

```python
print("\t只因你太美")
print("\n只因你太美\tbaby"*2)
print("只因你实在是太美\tbaby\n只因你太美\tbaby")
print("迎面走来的你让我如此蠢蠢欲动")
print("""Cause I got a crush on you who you
你是我的我是你的谁""")
print("再多一眼看一眼就会爆炸\n再多一眼看一眼就会爆炸\r再近一点靠近点快被融化")
print("想要把你占为己有有\bbaby bae")
print("不管走到哪里都会想起的人是你"+"\tyou"*2)
```
运行结果为
![只因你太美歌词片段](https://hestudio-server-image.oss-cn-hongkong.aliyuncs.com/2022/12/11/63959ea96002c.jpg)

