---
title: Python输入与输出
date: 2023-03-27 12:30:57
tag: Python
category: Python
---

::: tip
首次发布于 2022年10月21日
:::

### 输入
我之所以先讲输入，而不是向其他教程一样先讲输出，是有一定用意的。

如下所示
```python
a = input("提示的内容：")
print(a) # 后面会讲这里
```
这段代码的意思是将你输入的内容输入到a变量里储存
运行后如下图所示：

![运行结果](https://image.hestudio.org/img/2023/03/27/64218ec53f696.jpeg)

### 输出
#### 基本的输出
在Python中使用`print()`函数进行输出操作。

例如
```python
print("Hello heStudio!")
```
输出结果为

![运行结果](https://image.hestudio.org/img/2022/12/11/63959dc895591.jpg)

当然，我们也可以用单引号，并不会影响输出结果。

#### 输出变量
那如果我想输出变量里的发生变化的值怎么办？此时我们就需要变量输出。
像这样
```python
a = "jntm"
print(a)
```
此时，输出结果为

![运行结果](https://image.hestudio.org/img/2022/12/11/63959dd5ba727.jpg)

#### 分清变量和字符串的区别

```python
>>> a = jntm
>>> print(a)
jntm
```

```python
>>> print("a")
a

```

#### 将`print()`里的多项连接
##### 使用`, `连接
```python
time = "两年半"
print("我是练习时长", time, "的练习生")
```
运行结果如下

![运行结果](https://image.hestudio.org/img/2022/12/11/63959de461c35.jpg)

##### 使用`+`连接
```python
c = "只因"
print(c+"你太美")
```
运行结果如下

![运行结果](https://image.hestudio.org/img/2022/12/11/63959de4dfdf8.jpg)

##### 或者混合使用
```python
print("唱"+"跳","rap","篮球")
```
运行结果如下


![运行结果](https://image.hestudio.org/img/2022/12/11/63959de683268.jpg)

### 输出多行文字

当你需要输出多行文字时，你必须打出三个引号，这里的三个引号需要注意，它与你需要输出的行数无任何关系。

```python
print("""
1
2
3
""")
```
运行结果如下
![运行结果](https://image.hestudio.org/img/2022/12/11/63959dea520e4.jpg)

#### 简单的数据类型转换

先看表格
| 代码 | 对应的数据类型 |
|---|---|
| `int()` | 整型 |
| `float()` | 浮点型 |
| `str()` | 字符串 | 
| `repr()` | 字符串 | 

::: info 
`str()` 与 `repr()` 的区别
`str()`主要用来为终端用户输出一些信息，而`repr()`主要用来调试

同时后者的目标是为了消除一些歧义（例如浮点数的精度问题），前者主要为了可读。

前者可读性更好，后者打印出来了类型和值，更适合调试
:::

```python
a = int("1")
b = int("2")
print(a+b)
```
运行结果如下

![运行结果](https://image.hestudio.org/img/2022/12/11/63959de7753a4.jpg)

#### 转义符号
| 转义符号 | 对应的操作 |
|---|---|
| `\\` | 输出反斜杠 |
| `\'` | 输出单引号 |
| `\"` | 输出双引号 |
| `\n` | 换行 |
| `\t` | 水平制表符[^1] | 
| `\r` | 光标回到首位 |
| `\b` | 退格 |

> 这里后续会细讲

[^1]: 一个制表符的作用就是重新开一个新的制表位，一个制表位的长度为4个字符。如果之前的字符占满了上一个制表位，就重开一个，若果没有，则是把之前的一个制表位给填充满。

::: warning 
若不希望字符串中的转义字符起作用，在字符串前加r或者R

像这样：
```python
print(r"Hello\nWorld")
```

运行结果如下

![运行结果](https://image.hestudio.org/img/2022/12/11/63959de96719b.jpg)


:::

### 学以致用
#### 简单加法计算器
```python
a = float(input("请输入第一个加数："))
b = float(input("请输入第二个加数："))
print(str(a),"+",str(b),"=",float(a+b),"\n计算完毕！")
```
运行结果如下

![运行结果](https://image.hestudio.org/img/2022/12/11/63959de863af2.jpg)

<Share colorful />
