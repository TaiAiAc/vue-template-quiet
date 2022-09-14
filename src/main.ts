import 'uno.css'
// import 'virtual:windi.css'
// 通用字体
import './styles/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import naive from 'naive-ui'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia()).use(router)
app.use(naive)

app.mount('#app')
