export default {
  title: 'Zh-Website',
  description: 'an Open Source Deep Reinforcement Learning training platform, and we can experience the charm and fun of deep reinforcement learning.' ,
  appearance: 'dark',
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
  },
  lang: "cn-ZH",
  themeConfig: {
    logo: "/favicon.ico",
    nav: [
      {text : "Github", link : "https://github.com/zmh-program/Zh-Website"},
      {text : "Gitee", link : "https://gitee.com/zmh-program/Zh-Website"},
    ],
    sidebar: [
      {
        text: '关于 Zh-Website',
        items: [
          { text: '简介', link: '/profile' },
        ]
      },
      {
        text: '生产/部署',
        items: [
          { text: '快速开始', link: '/quickstart/' },
          { text: '拉取代码', link: '/quickstart/code' },
          { text: '配置', link: '/quickstart/config' },
        ]
      }
    ],
    socialLinks: [
        { icon: 'github', link: 'https://github.com/zmh-program/production'}
    ],
  }
}
