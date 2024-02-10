import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';

const app = createApp(App);
const axios = require('axios').default;

app.config.globalProperties.$axios = axios;

app.use(router);
app.mount('#app');
