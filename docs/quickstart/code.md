---
title: 拉取代码
---
# 选择仓库
[[TOC]]
---
> 1. [Github](https://github.com/zmh-program/Zh-Website) (支持最好)
> 2. [Gitee](https://gitee.com/zmh-program/Zh-Website) (镜像仓库)

:::tip
如果无法进入`GitHub`, 请考虑使用`fastgithub`, `dev-sidecar`或虚拟专用网络VPN
:::

接下来的教程以 **腾讯云 Lighthouse (宝塔linux版)**, **dnspod** 为例, 已经假设你有基本工具

## 🎃 拉取仓库

```commandline
git init
git pull https://github.com/zmh-program/Zh-Website.git
```
或
```
git pull https://gitee.com/zmh-program/Zh-Website.git
```

---
成功结果:
```commandline
remote: Enumerating objects: 2164, done.
remote: Counting objects: 100% (2164/2164), done.
remote: Compressing objects: 100% (1450/1450), done.
remote: Total 2164 (delta 1251), reused 1541 (delta 628), pack-reused 0
Receiving objects: 100% (2164/2164), 99.07 MiB | 43.95 MiB/s, done.
Resolving deltas: 100% (1251/1251), done.
From https://gitee.com/zmh-program/Zh-Website
 * branch            HEAD       -> FETCH_HEAD
```

## 🛠 安装
```commandline
pip3 install -r requirements.txt
```
![install](/quickstart/install.png)
![install2](/quickstart/install2.png)

