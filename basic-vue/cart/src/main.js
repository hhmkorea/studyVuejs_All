import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from "@/router/index.js";

const app = createApp(App);
const pinia = createPinia(); // pinia 인스턴스 생성
app.use(router);
app.use(pinia); // pinia 인스턴스 등록
app.mount('#app');
