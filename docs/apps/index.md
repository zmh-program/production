---
title: 内嵌式应用程序
---
# 内嵌式应用程序
[[TOC]]
---
## 什么是内嵌式应用程序
**内嵌式应用程序,** 即**Embedding Applications** *(缩写emapps)*, 是**Zh-Website**的核心功能与核心思想

所有功能的开发都或多或少和**内嵌式应用程序**有关联, 例如文件管理系统是为了深度强化学习的模型管理，博客系统数据可视化Markdown扩展是为了将模型数据(Reward, Episode)更直观

所有内嵌式应用程序源码目录位于*applications*目录，有效app将自动识别 (区别于Django的INSTALL_APPS手动增减)

有了内嵌式应用程序系统, 深度强化学习项目可以更快更好的迁移到**Zh-Website**中, 仅需完成一点封装即可, 并且更好的集成项目功能, 更好的筛选(如*登录限制*, *权限限制*, *请求节流*, *用户数据库增改*以及更多*utils*目录下的功能)

## 应用程序系统结构
(此为*jetbrains*图表自动生成)
![结构](/apps/application.png)

1. #### `SyncApplication` <Badge type="info" text="1" />
   将创建一个线程同步运行app, 适用于任务阻塞时间长的app类型
   - ##### `IntervalSyncApplication` <Badge type="info" text="2" />
      将创建一个线程并同步定时运行app
<br><br>
2. #### `AsyncApplication` <Badge type="info" text="3" />
    将由**Manager**管理异步运行app, 适用于任务阻塞时间短的app类型
    - ##### `IntervalSyncApplication` <Badge type="info" text="4" />
        将**Manager**管理异步定时运行app
<br><br>
3. #### `ProcessApplication` <Badge type="info" text="5" />
   将创建一个进程运行app, 适用于中型app项目
<br><br>
4. #### 🔥 `SiteApplication` <Badge type="info" text="6" />
    一对多C/S架构, 后端仅运行一个app实例, 区别于上方Application类型, 启动时多个Django WSGI Server对应一个app实例
   > e.g.
   > 
   > 服务器(v)CPU核数为2, *gunicorn*启动5个线程/进程运行*WSGI Server*, 那么5个*WSGIServer*实例将被创建
   > <br><br>
   > 如果一个app继承了 `SyncApplication`, 那么每个Django WSGI Server将会创建一个Application实例, 即最终5个app实例, 互不干扰
   > <br><br>
   > 如果一个app继承了 `SiteApplication`, 那么最先启动的Django WSGI Server将会在内网8001端口(指定固定端口)建立一个Websocket服务器,
   > 其他WSGI Server检测的端口占用，Application实例不会被创建，转而作为客户端类型通讯, 即最终创建1个app实例
   
   适用于大型项目, 或者内存/IO/CPU/GPU/TPU 使用量大且对*Zh-Website*依赖较少的项目