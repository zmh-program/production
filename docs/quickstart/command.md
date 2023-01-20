---
title: 扩展命令
---
# 扩展命令
[[TOC]]
---
:::danger 警告
Django原生命令 **createsuperuser** 在本项目已经弃用, 因为**Profile**数据库模型实例将不会创建

请使用 **buildsuperuser** 创建超级用户
:::
## 创建超级用户
:::tip **buildsuperuser**
**buildsuperuser** 和 **createsuperuser** 用法相同

**buildsuperuser** 将创建超级用户 ( `is_staff=True, is_superuser=True, identity=3` ), 即 **服主** 级别, 拥有最高权限
:::
```commandline
python3 manage.py buildsuperuser
```

## 创建管理员
:::tip **buildadmin**
**buildadmin** 和 **createsuperuser** 用法相同

**buildadmin** 将创建管理员 ( `is_staff=True, is_superuser=False, identity=2` ), 即 **管理员** 级别, 拥有基本管理员权限, 可以访问管理站点
:::

```commandline
python3 manage.py buildadmin
```

## 重置migrations文件
:::warning resetmigrations
**此操作将清除所有(*INSTALL_APPS*中)的迁移文件, 然后重新调用*makemigrations*命令**

此命令不会影响数据库migrate记录, 仅可用于测试版本, 不可在正式版本中使用

- *此命令将保留 .../migrations/\_\_init\_\_.py*
:::
```commandline
python3 manage.py buildsuperuser
```

## 运行celery分布式消息列队
:::tip celery
由于`django-celery`版本依赖问题, 所以抛弃使用`djcelery`, 转而使用celery原生版本

此命令同下
```commandline
celery -A DjangoWebsite worker --loglevel=INFO -P eventlet
```
:::

```commandline
python3 manage.py celery
```

## 创建内嵌式应用程序 *(Embedding Applications)*
```commandline
python manage.py buildapp
```
更多**buildapp**相关请参阅下一章节[[内嵌式应用程序](/apps/)]