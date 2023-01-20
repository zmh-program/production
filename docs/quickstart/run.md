---
title: 初始化与运行
---
# 初始化与运行
[[TOC]]
---
## 初始化数据库
```commandline
python3 manage.py makemigrations
python3 manage.py migrate
```

## 初始化Haystack与Jieba
:::tip 重置索引
默认搜索引擎: **whoosh**

默认建立索引目录: **whoosh_index**

更多haystack配置参阅[[配置](/quickstart/config#更多配置)]

*(您可以无需运行以下命令，因为命令将会在django运行前的初始化时建立)*
:::
```commandline
python3 manage.py rebuild_index
```

## 运行
:::tip runserver
默认使用 **127.0.0.1:8000**, (如果默认*localhost*解析到*127.0.0.1*的话)您也可以在**localhost:8000**访问

更改默认主机端口配置参阅[[配置](/quickstart/config#更多配置)]最下方 或者直接调用
```commandline
python manage.py runserver 0.0.0.0:80
```
:::

```commandline
python3 manage.py
```