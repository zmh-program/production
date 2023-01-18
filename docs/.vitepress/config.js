import { defineConfig } from 'vitepress'

module.exports = defineConfig({
  title: 'Zh-Website',
  description: 'an Open Source Deep Reinforcement Learning training platform, and we can experience the charm and fun of deep reinforcement learning.' ,
  appearance: 'dark',
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    logo: "@/assets/logo.png"
  },
  themeConfig: {
    nav: [
      {text : "Index", link: "/"},
      {text : "Github", link : "https://github.com/zmh-program/Zh-Website"},
      {text : "Gitee", link : "https://gitee.com/zmh-program/Zh-Website"},
      {text : "Edit", link : "https://github.com/zmh-program/production"}
    ]
  }
})
