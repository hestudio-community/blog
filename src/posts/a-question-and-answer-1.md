---
title: 一期回答粉丝问题的稿子（1）
date: 2023-03-05 23:35:12
tag: 
    - kali
    - Python
    - 工具
    - 博客
    - Android
author: 
    - 醉、倾城
    - 沈浪
    - 登真
    - 404 not found
    - yms
    - AE86
    - 晚风
    - 酷小呵
category: Q&A
---

好多天都没更新了，~~怎么也得水一期~~，所以我们挑选了一些感觉到有价值（部分是搞笑价值）的粉丝提问。


### @沈浪 来自QQ
![](https://image.hestudio.net/img/2023/03/05/6404ad00314bc.jpg)

::: tip 回复
酷
:::

### @登真 来自微信
![](https://image.hestudio.net/img/2023/03/05/6404adcca4a4e.jpg)

::: tip 回复
UNetbootin
:::

### @404 not found 来自QQ
![](https://image.hestudio.net/img/2023/03/05/6404aeec1eba8.jpg)

::: tip 我的回复
被调用以创建一个新的 cls 类的实例。__new__() 是一个静态方法 (特殊情况下，所以你不需要把它声明为静态方法)，它把请求实例的类作为它的第一个参数。其余的参数是传递给对象构造函数表达式的参数（对类的调用）。__new__() 的返回值应该是新的对象实例（通常是 cls 的一个实例）。

典型的实现是通过调用超类的 __new__() 方法来创建一个新的类的实例，使用 super().__new__(cls[, ...]) 并带有适当的参数，然后在返回之前对新创建的实例进行必要的修改。

如果 __new__() 在对象构造过程中被调用，并且返回 cls 的一个实例，那么新实例的 __init__() 方法将被调用，就像 __init__(self[, ...]) ，其中 self 是新实例，其余参数与传递给对象构造函数的参数相同。

如果 __new__() 没有返回 cls 的一个实例，那么新实例的 __init__() 方法将不会被调用。

__new__() 主要是为了允许不可变类型的子类 (像 int, str, 或 tuple) 定制实例的创建。它也通常在自定义元类中被重写，以便自定义类的创建。

> 翻译自 [Python Docs](https://docs.python.org/3/reference/datamodel.html?highlight=__new__#object.__new__)

:::

::: info @yms 的回复
@404 Not Found 在 Python 中，不可变类型（如整数、字符串、元组等）的实例在创建后是无法修改的。这是因为 Python 的实现方式，它们的值被存储在对象中，并且对象的标识符在创建后不能更改。

当一个类继承一个不可变类型时，它的实例也应该是不可变的。因此，如果不重新定义 `__new__` 方法，那么这个类继承的不可变类型的 `__new__` 方法会返回一个不可变的实例，而这个实例无法修改。

为了解决这个问题，我们可以通过重新定义 `__new__` 方法来创建一个可变的实例。在 `__new__` 方法中，我们可以调用父类的 `__new__` 方法来创建一个不可变的实例，然后将其转换为可变类型的实例并返回。

以下是一个简单的例子，演示了如何继承 Python 中的不可变类型并重新定义 `__new__` 方法来创建可变实例：

```python
class MutableTuple(tuple):
    def __new__(cls, *args):
        obj = super().__new__(cls, args)
        obj = list(obj)
        return obj

t = MutableTuple(1, 2, 3)
t.append(4)
print(t)  # 输出 [1, 2, 3, 4]
```

在这个例子中，我们创建了一个 `MutableTuple` 类，它继承自不可变类型 `tuple`。在 `__new__` 方法中，我们先调用了父类 `tuple` 的 `__new__` 方法来创建一个不可变的实例 `obj`，然后将其转换为一个可变的列表，并返回这个列表。这样，我们就可以使用 `MutableTuple` 类来创建可变的元组了。

需要注意的是，虽然这种方法可以让我们创建可变的实例，但这些实例仍然具有不可变类型的特性，即一旦创建后，它们的值就不能被修改。因此，在继承不可变类型时，我们仍然需要遵循不可变类型的规则来使用它们。
:::

### @AE86 来自QQ
![](https://image.hestudio.net/img/2023/03/05/6404b02f69313.jpg)

::: tip 回复
@AE86 我又不知道你下载哪里了，不会自己看吗，自己在这里问问题不了解一点基本知识吗，这种Linux基础百度都能找到的，在群里发牢骚不是咨询问题的好方法，尤其是这种问题。
:::

### @晚风 来自QQ

![](https://image.hestudio.net/img/2023/03/05/6404b0cf35ec8.jpg)

![](https://image.hestudio.net/img/2023/03/05/6404b0d144003.jpg)

::: tip 回复
termux配合mt管理器
:::

### @酷小呵 来自博客
![](https://image.hestudio.net/img/2023/03/05/6404b26b48057.jpg)

::: tip 回复
@酷小呵: 这个是 vuepress-theme-hope

本站用的所有开源软件合集： https://www.hestudio.net/docs/opensource.html
:::

<Share colorful />
