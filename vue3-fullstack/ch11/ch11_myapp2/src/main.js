import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import './main.css'
import router from "./router"

createApp(App).use(router).use(store).mount('#app')
