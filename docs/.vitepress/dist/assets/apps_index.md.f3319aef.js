import{_ as o,o as s,c as l,b as e,d as t,e as a,a as i,r as p}from"./app.99aaba7a.js";const c="/apps/application.png",z=JSON.parse('{"title":"内嵌式应用程序简介","description":"","frontmatter":{"title":"内嵌式应用程序简介"},"headers":[{"level":2,"title":"什么是内嵌式应用程序","slug":"什么是内嵌式应用程序","link":"#什么是内嵌式应用程序","children":[]},{"level":2,"title":"应用程序系统结构","slug":"应用程序系统结构","link":"#应用程序系统结构","children":[]}],"relativePath":"apps/index.md","lastUpdated":1674210525000}'),r={name:"apps/index.md"},d=i('<h1 id="内嵌式应用程序" tabindex="-1">内嵌式应用程序 <a class="header-anchor" href="#内嵌式应用程序" aria-hidden="true">#</a></h1><nav class="table-of-contents"><ul><li><a href="#什么是内嵌式应用程序">什么是内嵌式应用程序</a></li><li><a href="#应用程序系统结构">应用程序系统结构</a></li></ul></nav><hr><h2 id="什么是内嵌式应用程序" tabindex="-1">什么是内嵌式应用程序 <a class="header-anchor" href="#什么是内嵌式应用程序" aria-hidden="true">#</a></h2><p><strong>内嵌式应用程序,</strong> 即<strong>Embedding Applications</strong> <em>(缩写emapps)</em>, 是<strong>Zh-Website</strong>的核心功能与核心思想</p><p>所有功能的开发都或多或少和<strong>内嵌式应用程序</strong>有关联, 例如文件管理系统是为了深度强化学习的模型管理，博客系统数据可视化Markdown扩展是为了将模型数据(Reward, Episode)更直观</p><p>所有内嵌式应用程序源码目录位于<em>applications</em>目录，有效app将自动识别 (区别于Django的INSTALL_APPS手动增减)</p><p>有了内嵌式应用程序系统, 深度强化学习项目可以更快更好的迁移到<strong>Zh-Website</strong>中, 仅需完成一点封装即可, 并且更好的集成项目功能, 更好的筛选(如<em>登录限制</em>, <em>权限限制</em>, <em>请求节流</em>, <em>用户数据库增改</em>以及更多<em>utils</em>目录下的功能)</p><h2 id="应用程序系统结构" tabindex="-1">应用程序系统结构 <a class="header-anchor" href="#应用程序系统结构" aria-hidden="true">#</a></h2><p>(此为<em>jetbrains</em>图表自动生成) <img src="'+c+'" alt="结构"></p>',10),_={id:"syncapplication",tabindex:"-1"},h=e("code",null,"SyncApplication",-1),u=e("a",{class:"header-anchor",href:"#syncapplication","aria-hidden":"true"},"#",-1),m=e("p",null,"将创建一个线程同步运行app, 适用于任务阻塞时间长的app类型",-1),b={id:"intervalsyncapplication",tabindex:"-1"},S=e("code",null,"IntervalSyncApplication",-1),g=e("a",{class:"header-anchor",href:"#intervalsyncapplication","aria-hidden":"true"},"#",-1),f=e("br",null,null,-1),x=e("br",null,null,-1),A={id:"asyncapplication",tabindex:"-1"},v=e("code",null,"AsyncApplication",-1),y=e("a",{class:"header-anchor",href:"#asyncapplication","aria-hidden":"true"},"#",-1),T=e("p",null,[t("将由"),e("strong",null,"Manager"),t("管理异步运行app, 适用于任务阻塞时间短的app类型")],-1),I={id:"intervalsyncapplication-1",tabindex:"-1"},P=e("code",null,"IntervalSyncApplication",-1),W=e("a",{class:"header-anchor",href:"#intervalsyncapplication-1","aria-hidden":"true"},"#",-1),k=e("strong",null,"Manager",-1),C=e("br",null,null,-1),N=e("br",null,null,-1),V={id:"processapplication",tabindex:"-1"},D=e("code",null,"ProcessApplication",-1),G=e("a",{class:"header-anchor",href:"#processapplication","aria-hidden":"true"},"#",-1),j=e("p",null,[t("将创建一个进程运行app, 适用于中型app项目 "),e("br"),e("br")],-1),B={id:"🔥-siteapplication",tabindex:"-1"},E=e("code",null,"SiteApplication",-1),U=e("a",{class:"header-anchor",href:"#🔥-siteapplication","aria-hidden":"true"},"#",-1),$=i("<p>一对多C/S架构, 后端仅运行一个app实例, 区别于上方Application类型, 启动时多个Django WSGI Server对应一个app实例</p><blockquote><p>e.g.</p><p>服务器(v)CPU核数为2, <em>gunicorn</em>启动5个线程/进程运行<em>WSGI Server</em>, 那么5个<em>WSGIServer</em>实例将被创建 <br><br> 如果一个app继承了 <code>SyncApplication</code>, 那么每个Django WSGI Server将会创建一个Application实例, 即最终5个app实例, 互不干扰 <br><br> 如果一个app继承了 <code>SiteApplication</code>, 那么最先启动的Django WSGI Server将会在内网8001端口(指定固定端口)建立一个Websocket服务器, 其他WSGI Server检测的端口占用，Application实例不会被创建，转而作为客户端类型通讯, 即最终创建1个app实例</p></blockquote><p>适用于大型项目, 或者内存/IO/CPU/GPU/TPU 使用量大且对<em>Zh-Website</em>依赖较少的项目</p>",3);function M(R,Z,q,w,L,O){const n=p("Badge");return s(),l("div",null,[d,e("ol",null,[e("li",null,[e("h4",_,[h,t(),a(n,{type:"info",text:"1"}),t(),u]),m,e("ul",null,[e("li",null,[e("h5",b,[S,t(),a(n,{type:"info",text:"2"}),t(),g]),t(" 将创建一个线程并同步定时运行app "),f,x])])]),e("li",null,[e("h4",A,[v,t(),a(n,{type:"info",text:"3"}),t(),y]),T,e("ul",null,[e("li",null,[e("h5",I,[P,t(),a(n,{type:"info",text:"4"}),t(),W]),t(" 将"),k,t("管理异步定时运行app "),C,N])])]),e("li",null,[e("h4",V,[D,t(),a(n,{type:"info",text:"5"}),t(),G]),j]),e("li",null,[e("h4",B,[t("🔥 "),E,t(),a(n,{type:"info",text:"6"}),t(),U]),$])])])}const F=o(r,[["render",M]]);export{z as __pageData,F as default};
