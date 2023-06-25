---
title: heStudio Talking 文档
icon: community
article: false
---

### heStudio Talking 是什么？
heStudio Talking 是一个在heStudio博客内置的一个疑难解答的平台。

### 怎么使用它？
你只需要填写你的电子邮箱和昵称用于接收回复。

::: warning 
目前，由于接口问题，登录用户当前仅支持 邮箱 和 Github 登录。
:::

### 为什么评论后看不到自己的评论内容
依据 [中华人民共和国公共安全行业标准(GA 1277.5—2020) - 互联网交互式服务安全管理要求 第5部分：论坛服务](https://res.hestudio.net/res/互联网交互式服务安全管理要求  第5部分 论坛服务.doc)要求，对评论内容先审后发。

![](https://image.hestudio.net/i/2023/06/26/6498878708cf5.jpg)

### 注册的时候出现密钥已过期怎么处理
如果出现这种情况，你可以尝试重新操作注册流程。


### 隐私问题
他人可见的内容：昵称，头像，你的评论内容，IP属地，浏览器版本号，系统版本号。

::: danger 
请不要发表涉及隐私的内容。
:::

### 邮箱验证
注册后系统会向你的邮箱发送一封确认邮件，你需要点击邮件内的链接才可以完成注册。

::: warning 
在部分邮箱，邮件可能会在垃圾邮件或者垃圾桶里面，请仔细查找。
:::

### 登录后没有跳转到评论页面
由于该系统使用的是弹出式登录页面，所以对于一些软件内置的WebView不兼容，无法正常跳转到正确页面。请使用系统自带浏览器或者Chrome，Edge，Firefox等浏览器（针对于移动端用户）。对于桌面端用户，请不要使用Internet Explorer浏览器访问。

### 怎么上传图片
由于[一些原因](https://github.com/orgs/walinejs/discussions/1771)，图床无法配置，所以我直接扔出图床链接供大家上传图片进行反馈。
 
如果你可以开发在这个位置的嵌入式上传按钮，请联系我，如果可行，我将在heStudio Talking永久的署上你的名字。

1. 点击上传按钮
2. 进入上传页面，上传文件后，复制Markdown选项的代码
3. 返回[heStudio Talking](/talking/)，粘贴刚才复制的代码

### 怎么更换头像
1. 通过上面的教程上传图片并拿到图片的URL
2. 访问 https://comment.hestudio.net/ui/profile?lng=zh-CN 
3. 在登录账号后点击你的头像，会提示输入URL

![](https://image.hestudio.net/img/2023/01/29/63d54bb8b83f1.jpg)

4. 粘贴在图床获得的URL
5. 修改完成

### 怎么注销账号

::: danger
注销账号是一个有风险的操作，请三思而后行！
:::

#### 邮箱注册用户
如果需要注销账号，请复制以下内容并用需要注销的账号的注册邮箱以`注销账号`为标题发送到 [hestudio@hestudio.net](mailto:hestudio@hestudio.net)

```text
我是 #你的昵称#，我的邮箱是 #你的邮箱# ，我需要注销账号并放弃注册用户的支持和服务。

#你的昵称#
```

#### Github注册用户
请使用对应Github账号向 [heStudio-Network](https://github.com/hestudio-network) 发送以下内容的私信

```text
我是 #你的昵称#，我需要注销账号并放弃注册用户的支持和服务。
```

### 更换邮箱
你需要使用旧的邮箱向 [hestudio@hestudio.net](mailto:hestudio@hestudio.net) 发送一下内容。
```text
我是 #你的昵称#，我需要将邮箱重新绑定到 #新的邮箱#

#你的昵称#
```

当你发送后，请等待回复。在回复后请使用新的邮箱找回密码进行重新绑定。

::: warning
为了你的账号安全，我们会将你的密码进行清空。
:::

<Share colorful />
