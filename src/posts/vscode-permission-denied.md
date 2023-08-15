---
title: VSCode 报错 grep： /proc/version： 权限不够
tag: 
    - VSCode
    - Linux
category: Linux
---

部分用户在Linux上运行VSCode提示`grep: /proc/version: 权限不够`


grep: /proc/version: 权限不够

You are trying to start Visual Studio Code as a super user which isn't recommended. If this was intended, please add the argument `--no-sandbox` and specify an alternate user data directory using the `--user-data-dir` argument.


VSCode默认不支持root用户启动，如果需要使用root用户启动，需在启动命令中加上`--no-sandbox`

```sh
/usr/share/code/code --no-sandbox --unity-launch
```

<Share colorful />
