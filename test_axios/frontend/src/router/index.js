import { createWebHistory, createRouter } from 'vue-router';
import TestList from '@/components/TestList.vue';
import MovieLIst from '@/components/MovieIndexPage.vue';
import Show from '@/components/MovieDetailPage.vue';
import Weather from '@/components/CurrentWeather.vue';

const routes = [
  {
    path: '/',
    name: 'testList',
    component: TestList,
  },
  {
    path: '/movieList',
    name: 'movieList',
    component: MovieLIst,
  },
  {
    path: '/movieList/:id',
    name: 'show',
    component: Show,
  },
  {
    path: '/weather',
    name: 'weather',
    component: Weather,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
