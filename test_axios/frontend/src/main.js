import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';

import axios from 'axios'; // axios import 글로벌 전역 설정

const app = createApp(App);

app.config.globalProperties.$axios = axios; // axios http 통신

app.use(router);
app.mount('#app');
