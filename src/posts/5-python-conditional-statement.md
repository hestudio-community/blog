---
title: Python条件语句
date: 2022-11-13 00:25:15
tas: Python
category: Python
---

先来看一下这节课要学的东西

1.  `if` 结构
2.  `if` - `else` 结构
3.  `if` - `elif` 结构
4.  `if` - `elif` - `else` 结构
5.  套娃式玩法

### if 结构
if语句的格式是
```python
if 条件:
    如果条件成立执行的操作
```
::: info 
Python中并没有C语言那样的 `{ }`，而是用缩进来实现C语言中类似 `{ }` 的功能，一般按下 键盘上的`Tab`键即可完成缩进（或者四个空格）。缩进对于Python来说十分重要，如果使用不当，可能会引发错误。上面学习的 if语句 就使用到了缩进。

当你遇到了`:`的时候，就代表着你下一行要缩进。
::: 

例如，现在我们要做一个输入年龄判断用户是否成年的Python组件，我们就可以这么做：

```python
age = int(input("你的年龄是: "))
if age >= 18:
    print("你已经成年")
```
或者可以这么写
```python
age = int(input("你的年龄是: "))
check = age >= 18
if check:
    print("你已经成年")
```

运行结果是：

![输出结果](https://image.hestudio.org/img/2022/12/11/6395a04c9b467.jpg)

### if - else 结构
继续上面的内容，如果我们的用户是未成年怎么办？一定要有一个响应。

这时，我们就可以用到 if - else 结构

```python
if 条件:
    如果条件成立执行的操作
else:
    如果条件不成立执行的操作
```
当然，也可以这样
```python
if not 条件:
    如果条件不成立执行的操作
else:
    如果条件成立执行的操作
```
所以上面的程序可以改写为：
```python
age = int(input("你的年龄是: "))
if age >= 18:
    print("你已经成年")
else:
    print("未成年")
```

运行结果是：

![输出结果](https://image.hestudio.org/img/2022/12/11/6395a04e5cf36.jpg)

### if - elif 结构
上面的代码还可以改写为if - elif 结构，if - elif 结构适合所有条件都确定的情况下使用。
```python
if 条件1:
    如果条件1成立执行的操作
elif 条件2:
    如果条件1不成立但是条件2成立执行的操作
```

所以上面小节的代码还可以改写为
```python
age = int(input("你的年龄是: "))
if age >= 18:
    print("你已经成年")
elif age <18:
    print("未成年")
```

### if - elif - else 结构
当然，有的用户很调皮，肯定不会按照套路来的，所以使用上面的两种结构就容易出现一些奇怪的场景。

![奇怪的场景](https://image.hestudio.org/img/2022/12/11/6395a04fc3624.jpg)

所以我们要避免这种情况，就需要if - elif - else 结构

```python
if 条件1:
    如果条件1成立执行的操作
elif 条件2:
    如果条件1不成立但是条件2成立执行的操作
else:
    如果条件不成立执行的操作
```
::: warning 
Python执行命令的顺序一般情况下是自上而下，所以条件1和条件2都满足的情况下会优先执行条件1，然后结束条件语句的线程。
::: 

所以，就有了以下操作
```python
age = int(input("你的年龄是: "))
if age in range(0,18):  # range区间的范围为左闭右开
    print("未成年")
elif age >= 18:
    print("成年")
else:
    print("数值有误")
```
::: warning 
`range` 区间的范围为左闭右开，如`range(0，19)`表示数学中的`[0,19)`

如果对此节内容有疑问，请访问 https://basic.smartedu.cn/syncClassroom/classActivity?activityId=af59d45b-7e70-4a36-84a5-d25a6c4221d9 或咨询你的老师
::: 

运行结果如图

运行结果是：

![输出结果](https://image.hestudio.org/img/2022/12/11/6395a0513213a.jpg)

### 套娃式玩法
上面的代码还可以改为这样的
```python
age = int(input("你的年龄是: "))
if age < 0:
    print("数值有误")
else:
    if age < 18:
        print("未成年")
    elif age >= 18:
        print("成年")
```

<Share colorful />
