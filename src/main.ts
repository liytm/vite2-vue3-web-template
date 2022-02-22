import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import './assets/styles/index.scss'
import App from './App.vue'

createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app')
