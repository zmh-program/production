---
title: 创建内嵌式应用程序
---
# 创建内嵌式应用程序
[[TOC]]
---

## 初始化Application
:::tip buildapp
**buildapp**命令由v1版本的[**startapp.py**](https://github.com/zmh-program/Zh-Website/blob/7877431096e3a5014c501590e38d31fe97b7ead2/startapp.py)迁移而来

程序会检测应用是否存在，并提出警告是否覆盖
:::

```commandline
python3 manage.py buildapp
```
![create](/apps/create.png)
---
![create2](/apps/create2.png)

| 参数名                 | 参数说明                                      | 条件     | 
|---------------------|-------------------------------------------|--------|
| Application Name    | 应用程序名称                                    | **严格** |
| Author              | 应用程序作者                                    | **必填** |
| Application Profile | 应用程序简介(可以为html)                           | _选填_   |
| Repository Address  | 应用程序仓库地址                                  | _选填_   |
| Repository Info     | 仓库信息挂件([shields.io](https://shields.io/)) | _选填_   |
| Image Url           | 应用程序logo的url地址, 可以是 */static/images/...*  | _选填_   |
| Configure Url Route | 是否为应用程序配置HTTP/WS路由, 默认为 **True**          | _选填_   |

创建好的app目录位于 *applications/\<app name\>/* 目录下, *Manager*将自动识别和解析app
app核心文件位于**application.py**, 配置文件在*config.json*(就是你刚刚配置的参数)


## 注册Application
:::warning
Snake app 已经创建，请取其他有效名称
:::

假设创建了一个Snake的app, 将可以这样设置类型为 `SiteApplication` :

:::tip *applications/Snake/application.py*
```python
from applications.application import *


class SnakeServer(SiteServer):
    async def run(self):
        pass


class SnakeClient(SiteClient):
    async def receiveEvent(self, obj: Any):
        pass


@appManager.register
class Application(SiteApplication):
    server_type = SnakeServer
    client_type = SnakeClient
    port = 8001
```
:::

那么路由访问路由将*include*在 `/applications/Snake/` *(如果UrlRoute=True)*
