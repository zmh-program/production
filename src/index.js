import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './assets/main.css'


export default {
  enhanceApp({ app }) {
    AOS.init({
      duration: 1000,
      easing:"ease-in-out-back"
    });

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.parentElement.classList.add('dark');
    }
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }

    app.use(ElementPlus)
  }
}