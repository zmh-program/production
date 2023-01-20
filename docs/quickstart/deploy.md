---
title: 部署
---
# 部署
[[TOC]]
---
由于 `dwebsocket` 的缘故, WSGI Server 已从`uwsgi`切换为`gunicorn`

修改[**settings.py**](https://github.com/zmh-program/Zh-Website/blob/d10abc31ae7244d5705efd3dc42f945032c69ffe/DjangoWebsite/settings.py#L41)并运行*collectstatic*采集静态文件
```python
DEBUG = False
```
```commandline
python3 manage.py collectstatic
```

## 原生 部署 <Badge type="tip" text="3.x" /> <Badge type="tip" text="2.x" /> <Badge type="tip" text="1.x" />
- <Badge type="tip" text="3.x" /> <Badge type="tip" text="2.x" />
    ```commandline
    gunicorn -c gunicorn.conf.py DjangoWebsite.wsgi:application
    ```
- <Badge type="tip" text="1.x" />
    ```commandline
    daphne DjangoWebsite.asgi:application
    ```

### Nginx 模板 (升级为Websocket协议)
```nginx
events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    server {
        listen 80;
        server_name 127.0.0.1;

        location ~ ^/(\.user.ini|\.htaccess|\.git|\.svn|\.project|LICENSE|README.md)
        {
            return 404;
        }

        location / {
         proxy_pass http://127.0.0.1:8000;
         proxy_set_header Host $host;
         proxy_set_header X-Real-IP $remote_addr;
         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
         proxy_set_header X-Forwarded-Proto $scheme;
         proxy_set_header Upgrade $http_upgrade;
         proxy_set_header Connection "upgrade";
        }

          location /static {
            alias /static;
        }
        location /media {
            alias /static/media;
        }

        location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
        {
            expires      5d;
            error_log /dev/null;
            access_log /dev/null;
        }

        location ~ .*\.(js|css)?$
        {
            expires      1d;
            error_log /dev/null;
            access_log /dev/null;
        }
    }
}
```

## Docker 部署 <Badge type="tip" text="2.x" />
:::warning
v3版本纯python环境无法运行, 需要集成外部环境, 因此已弃用单容器环境
:::
```commandline
docker build -t zhweb .
docker run -p 8000:8000 -t zhweb
```

## Docker-Compose 集群部署 <Badge type="tip" text="3.x" /> <Badge type="tip" text="2.x" />
:::tip
v2版本需要设置[**settings.py**](https://github.com/zmh-program/Zh-Website/blob/aac95dbd5a1ae9a0b64a245063538e4567f07d72/DjangoWebsite/settings.py#L114)才能真正启用集群环境
```python
IS_CONTAINER = False
```
:::
```commandline
docker-compose up
```