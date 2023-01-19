---
title: 配置
---
# 配置
[View Config on Github Repo](https://github.com/zmh-program/Zh-Website/blob/main/config.json)
:::tip 配置文件
配置文件于2.x版本独立，固定于项目根目录的**config.json**文件<br>
   :::warning 在版本3.x中，因为涉及更加秘密的密钥，因此在原有基础上增加规则
   &nbsp;在如果项目目录的父目录中存在**config.json**文件，会首先读取，否则读取项目根目录下的文件
   :::


## 🎫 验证码申请 <Badge type="tip" text="3.x" /> <Badge type="tip" text="2.x" />
验证码在*2.1*版本已经出现，最早使用**simple-captcha**作为校验, 后来于*2.4*和*2.10*相继加入**hCaptcha**和**Turnstile**

因为验证的时间问题，每次显式校验需要耗费过多时间, 所以在接下来的版本中使用 **Turnstile**和**hCaptcha**共同校验，
**Turnstile**耗时较短，可以设为用户登录后的操作验证, 
**hCaptcha**耗时较长，可以设为用户注册时的验证

具体原因即申请流程可以查看我的文章 - [《django 人机校验我是人类-使用hCaptcha或Turnstile代替simple-captcha》](https://blog.csdn.net/m0_60394896/article/details/128429693?spm=1001.2014.3001.5501)

:::details 修改配置
申请成功后在**config.json**修改下方配置即可
```json
{
    "TURNSTILE_SITEKEY": "",
    "TURNSTILE_SECRET": "",

    "HCAPTCHA_SITEKEY": "",
    "HCAPTCHA_SECRET": ""
}
```
:::

## 🥁 OAuth应用申请 <Badge type="tip" text="3.x" /> <Badge type="tip" text="2.x" />
:::tip
Gitee的OAuth App申请回调地址和落地页不可以写回环地址 *(ipv4 - 127.0.0.1, ipv6 - ::1)* 以及 *localhost*， 必须填写合规域名

如果没有域名或者Development阶段? 修改本机HOSTS地址，使域名在本机被解析成127.0.0.1等等即可
:::

:::details 修改配置
申请成功后在**config.json**修改下方配置即可
```json
{
   "OAUTH": {
      "GitHub": {
         "SITEKEY": "05b353c81e2c15bf148d",
         "SECRET": "69e7f754938df94ae9ba9743a48c76a831e9e7cd"
      },
      "Gitee": {
         "SITEKEY": "a0fa985b1e26127f188285d69de2b66b3de8ed03a50e11866acb1a1d595c92fd",
         "SECRET": "3786a2b1f9d6b77e6ba3079613ac4e76ff388b32d98f2d110fa845f1d0eaedc6"
      }
   }
}
```
:::

1. ### Github
   1. 找到 右上角头像 > 下拉菜单 > Settings设置页面
      ![ghset](/quickstart/ghset.png)
   2. Developer Settings > OAuth Apps
      ![ghset2](/quickstart/ghset2.png)
   3. OAuth Apps > New OAuth App
      ![ghset3](/quickstart/ghset3.png)
   4. OAuth App参数类似于
      ![ghset4](/quickstart/ghset4.png)
   5. **生成密钥**, 将Client ID替换到Github的`SITEKEY`参数, Client Secrets替换到`SECRET` 参数
<br>
2. ### Gitee
   1. 同上，找到头像下的**账号设置**, 下拉找到**第三方应用**
   2. 右上角 **+ 创建应用**
      ![ghset4](/quickstart/geset.png)
   3. 将Client ID替换到Gitee的`SITEKEY`参数, Client Secret替换到`SECRET` 参数


<br>

## 📫 SMTP邮箱服务器 <Badge type="tip" text="3.x" />
smtp服务器可以自行申请**第三方**smtp邮箱服务器(如qq, 腾讯企业邮箱，阿里, google, 新浪等)，或者自行搭建**postfix域名邮箱**

:::details 修改配置
按照申请得到的参数自行配置**config.json**

```json
{
   "EMAIL_HOST": "",
   "EMAIL_USE_TLS": false,
   "EMAIL_PORT": 0,
   "EMAIL_USER": "",
   "EMAIL_PASSWORD": ""
}
```

:::


| 参数       | 参数说明      | 参数类型    |
|----------|-----------|---------|
| HOST     | 服务商主机     | String  |
| USE_TLS  | 是否使用TLS   | Boolean |
| PORT     | 端口，基本上为25 | Integer |
| USER     | 用户名       | String  |
| PASSWORD | 密码或生成的密钥  | String  |

> 使用宝塔为例搭建域名证书 [宝塔邮局，让你瞬间拥有无限个域名邮箱! vps上搭建你的私人邮件服务器](https://www.xujiahua.com/8844.html)
> :::warning 宝塔邮箱管理局安装异常
> 1. 更换宝塔通讯节点 (如广州等)
> 2. 终端运行
> ```commandline
>   sed -i "/bt.cn/d" /etc/hosts
>   echo "128.1.164.196 www.bt.cn download.bt.cn api.bt.cn dg1.bt.cn dg2.bt.cn" >> /etc/hosts
> ```
> <br>[参见宝塔博客地址](https://www.bt.cn/bbs/thread-87257-1-1.html)<br>
> [参见宝塔论坛地址](https://www.bt.cn/bbs/forum.php?mod=viewthread&tid=105912&page=1#pid441294)
> :::
>![dnspod](/quickstart/dnspod.png)
<br>

## MySQL 配置 <Badge type="tip" text="3.x" /> <Badge type="info" text="2.x" /> <Badge type="tip" text="1.x" />
默认数据库为: `django-database`

:::tip 版本
2.x版本默认使用**SQLite3**作为SQL数据库, 不必拥有MySQL外部环境

3.x/1.x版本同样可以使用SQLite3数据库，自行配置即可
:::

>创建数据库:
>```sql
>CREATE DATABASE `django-database`;
>```

:::details 修改配置
在 [**DjangoWebsite/settings.py**](https://github.com/zmh-program/Zh-Website/blob/cb1ae7fe4fbd21868878ab4481e89b0eef077a22/DjangoWebsite/settings.py#L137-L147) 修改下方配置
```python
DATABASES = {
    'default':
        {
            'ENGINE': 'django.db.backends.mysql',  # module
            'NAME': 'django-database',  # database name
            'HOST': MYSQL_HOST,
            'PORT': 3306,
            'USER': 'root',
            'PASSWORD': 'zmh200904',
        }
}
```
:::

<br>

## Redis 配置 <Badge type="tip" text="3.x" /> <Badge type="info" text="2.x" /> <Badge type="tip" text="1.x" />

:::tip v2+ 版本
2.x版本默认使用**LocMem**和**Memcached**作为NoSQL缓存数据库, 不必拥有Redis外部环境

3.x版本同样可以使用LocMem等缓存数据库，自行配置即可
:::
:::warning v1 版本
1.x版本的**Django Channels**异步ASGI HTTP/**WS** Server依赖于Redis数据库 *(layer)*
:::

:::details 修改配置
在 [**DjangoWebsite/settings.py**](https://github.com/zmh-program/Zh-Website/blob/cb1ae7fe4fbd21868878ab4481e89b0eef077a22/DjangoWebsite/settings.py#L150-L158) 修改下方配置
```python
CACHES = {
    "default": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": f"redis://{REDIS_HOST}:6379/",
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
        }
    }
}
```
:::

<br>

## RabbitMQ 配置 <Badge type="tip" text="3.x" />

:::warning Celery
v3版本 Celery(分布式消息列队) 依赖 RabbitMQ
:::

:::details 修改配置
在 [**DjangoWebsite/settings.py**](https://github.com/zmh-program/Zh-Website/blob/cb1ae7fe4fbd21868878ab4481e89b0eef077a22/DjangoWebsite/settings.py#L160-L168) 修改下方配置
```python
CELERIES = {
    "broker": {
        "HOST": RABBITMQ_HOST,
        "PORT": 5672,
        "USER": "zmh-program",
        "PASSWORD": "zmh200904",
    },
    "backend": "rpc://",
}
```
:::


## 更多配置
```python
# from DjangoWebsite/config.py

# Haystack & Blog Settings
HAYSTACK_CONNECTIONS = {
    'default': {
        'ENGINE': 'blog.backend.jieba_whoosh_backend.WhooshEngine',
        'PATH': os.path.join(BASE_DIR, 'whoosh_index'),
    }
}
HAYSTACK_SIGNAL_PROCESSOR = 'haystack.signals.RealtimeSignalProcessor'
HAYSTACK_SEARCH_RESULTS_PER_PAGE = BLOG_PAGINATION = 8

#  File Settings
FILE_DATABASE_DIR = os.path.join(BASE_DIR, "files", "database")
MAX_FILE_NAME_LENGTH = 30
FILE_CACHE_CAPABILITY = 50
FILE_PAGINATION = 10  # nums per page
FILE_PERMISSION_LEVEL = 2
SIZE_UNIT = 1024
MAX_FILE_SIZE = (1024 ** 2) * 10  # 10 MiB

# GeoIP Settings
GEOIP_RELEASE_INTERVAL = 60 * 60 * 6  # 6 hours
GEOIP_DATABASE_FILE = os.path.join(BASE_DIR, "geoip", "database", "geolite.mmdb")

# JWT Settings
TOKEN_VALID_TIME = 60 * 3  # unit: seconds

# Monitor Settings
MONITOR_INTERVAL = 1  # 1 second

# OAuth:
OAUTH_CONFIG = _config["OAUTH"]


DEFAULT_HOST = "127.0.0.1"
DEFAULT_PORT = 8000
```
```json
// from config.json

{
   "SECRET_KEY": "django-insecure-#l#3ps7+(*+7f#0cz=aj-sp!6$-waaf6h=*+=5h*(5njj_^)@8",
   "ALLOWED_HOSTS": ["*"]
}
```