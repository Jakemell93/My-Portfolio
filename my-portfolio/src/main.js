import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'

createApp(App).mount('#app')
createApp(App).use(router).mount('#app')