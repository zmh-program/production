import{_ as p,o,c,b as s,d as n,e as l,a as e,r as t}from"./app.99aaba7a.js";const W=JSON.parse('{"title":"部署","description":"","frontmatter":{"title":"部署"},"headers":[{"level":2,"title":"原生 部署","slug":"原生-部署","link":"#原生-部署","children":[{"level":3,"title":"Nginx 模板 (升级为Websocket协议)","slug":"nginx-模板-升级为websocket协议","link":"#nginx-模板-升级为websocket协议","children":[]}]},{"level":2,"title":"Docker 部署","slug":"docker-部署","link":"#docker-部署","children":[]},{"level":2,"title":"Docker-Compose 集群部署","slug":"docker-compose-集群部署","link":"#docker-compose-集群部署","children":[]}],"relativePath":"quickstart/deploy.md","lastUpdated":1674191530000}'),r={name:"quickstart/deploy.md"},i=s("h1",{id:"部署",tabindex:"-1"},[n("部署 "),s("a",{class:"header-anchor",href:"#部署","aria-hidden":"true"},"#")],-1),y={class:"table-of-contents"},d={href:"#原生-部署"},C=s("ul",null,[s("li",null,[s("a",{href:"#nginx-模板-升级为websocket协议"},"Nginx 模板 (升级为Websocket协议)")])],-1),D={href:"#docker-部署"},b={href:"#docker-compose-集群部署"},A=e(`<hr><p>由于 <code>dwebsocket</code> 的缘故, WSGI Server 已从<code>uwsgi</code>切换为<code>gunicorn</code></p><p>修改<a href="https://github.com/zmh-program/Zh-Website/blob/d10abc31ae7244d5705efd3dc42f945032c69ffe/DjangoWebsite/settings.py#L41" target="_blank" rel="noreferrer"><strong>settings.py</strong></a>并运行<em>collectstatic</em>采集静态文件</p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">DEBUG </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">False</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-commandline line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">commandline</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">python3 manage.py collectstatic</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,5),u={id:"原生-部署",tabindex:"-1"},m=s("a",{class:"header-anchor",href:"#原生-部署","aria-hidden":"true"},"#",-1),_=e(`<div class="language-commandline line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">commandline</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">gunicorn -c gunicorn.conf.py DjangoWebsite.wsgi:application</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,1),F=e(`<div class="language-commandline line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">commandline</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">daphne DjangoWebsite.asgi:application</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,1),h=e(`<h3 id="nginx-模板-升级为websocket协议" tabindex="-1">Nginx 模板 (升级为Websocket协议) <a class="header-anchor" href="#nginx-模板-升级为websocket协议" aria-hidden="true">#</a></h3><div class="language-nginx line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">events</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> worker_connections </span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1024</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">http</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> include </span><span style="color:#A6ACCD;">      mime.types</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> default_type </span><span style="color:#A6ACCD;"> application/octet-stream</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;">127.0.0.1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;"> ^/(\\.user.ini|\\.htaccess|\\.git|\\.svn|\\.project|LICENSE|README.md)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">404</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;"> proxy_pass </span><span style="color:#A6ACCD;">http://127.0.0.1:8000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">Host </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">X-Real-IP </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">remote_addr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">X-Forwarded-For </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">proxy_add_x_forwarded_for</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">X-Forwarded-Proto </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">scheme</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">Upgrade </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_upgrade</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">Connection </span><span style="color:#C3E88D;">&quot;upgrade&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/static </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;"> alias </span><span style="color:#A6ACCD;">/static</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/media </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;"> alias </span><span style="color:#A6ACCD;">/static/media</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;"> .*\\.(gif|jpg|jpeg|png|bmp|swf)$</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">{</span></span>
<span class="line"><span style="color:#F07178;">           </span><span style="color:#89DDFF;"> expires </span><span style="color:#F07178;">     </span><span style="color:#F78C6C;">5d</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">           </span><span style="color:#89DDFF;"> error_log </span><span style="color:#F07178;">/dev/null</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">           </span><span style="color:#89DDFF;"> access_log </span><span style="color:#F07178;">/dev/null</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;"> .*\\.(js|css)?$</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">{</span></span>
<span class="line"><span style="color:#F07178;">           </span><span style="color:#89DDFF;"> expires </span><span style="color:#F07178;">     </span><span style="color:#F78C6C;">1d</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">           </span><span style="color:#89DDFF;"> error_log </span><span style="color:#F07178;">/dev/null</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">           </span><span style="color:#89DDFF;"> access_log </span><span style="color:#F07178;">/dev/null</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div>`,2),g={id:"docker-部署",tabindex:"-1"},x=s("a",{class:"header-anchor",href:"#docker-部署","aria-hidden":"true"},"#",-1),v=e(`<div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>v3版本纯python环境无法运行, 需要集成外部环境, 因此已弃用单容器环境</p></div><div class="language-commandline line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">commandline</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker build -t zhweb .</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -p 8000:8000 -t zhweb</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,2),k={id:"docker-compose-集群部署",tabindex:"-1"},T=s("a",{class:"header-anchor",href:"#docker-compose-集群部署","aria-hidden":"true"},"#",-1),f=e(`<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>v2版本需要设置<a href="https://github.com/zmh-program/Zh-Website/blob/aac95dbd5a1ae9a0b64a245063538e4567f07d72/DjangoWebsite/settings.py#L114" target="_blank" rel="noreferrer"><strong>settings.py</strong></a>才能真正启用集群环境</p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">IS_CONTAINER </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">False</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><div class="language-commandline line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">commandline</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker-compose up</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,2);function w(S,E,I,N,P,V){const a=t("Badge");return o(),c("div",null,[i,s("nav",y,[s("ul",null,[s("li",null,[s("a",d,[n("原生 部署 "),l(a,{type:"tip",text:"3.x"}),n(),l(a,{type:"tip",text:"2.x"}),n(),l(a,{type:"tip",text:"1.x"})]),C]),s("li",null,[s("a",D,[n("Docker 部署 "),l(a,{type:"tip",text:"2.x"})])]),s("li",null,[s("a",b,[n("Docker-Compose 集群部署 "),l(a,{type:"tip",text:"3.x"}),n(),l(a,{type:"tip",text:"2.x"})])])])]),A,s("h2",u,[n("原生 部署 "),l(a,{type:"tip",text:"3.x"}),n(),l(a,{type:"tip",text:"2.x"}),n(),l(a,{type:"tip",text:"1.x"}),n(),m]),s("ul",null,[s("li",null,[l(a,{type:"tip",text:"3.x"}),n(),l(a,{type:"tip",text:"2.x"}),_]),s("li",null,[l(a,{type:"tip",text:"1.x"}),F])]),h,s("h2",g,[n("Docker 部署 "),l(a,{type:"tip",text:"2.x"}),n(),x]),v,s("h2",k,[n("Docker-Compose 集群部署 "),l(a,{type:"tip",text:"3.x"}),n(),l(a,{type:"tip",text:"2.x"}),n(),T]),f])}const $=p(r,[["render",w]]);export{W as __pageData,$ as default};