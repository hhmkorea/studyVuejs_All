import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import 'foundation-sites/dist/css/foundation.min.css';
import 'foundation-sites/dist/js/foundation.min.js';

createApp(App).use(store).use(router).mount('#app');
