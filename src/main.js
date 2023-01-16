import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './assets/main.css'

const app = createApp(App);

AOS.init({
  duration: 1000,
  easing:"ease-in-out-back"
});

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(ElementPlus)
  .use(createPinia())
  .use(router)
  .mount('#app')
