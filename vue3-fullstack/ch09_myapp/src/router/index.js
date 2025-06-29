import { createRouter, createWebHistory } from 'vue-router'
import MainComp from "@/pages/MainComp.vue";

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainComp,
  },
  {
    path: '/boards',
    name: 'boards',
    component: () => import(/* webpackChunkName: "boards" */'@/pages/BoardList.vue'),
  },
  {
    path: '/boards/insert',
    name: 'boards-insert',
    component: () => import(/* webpackChunkName: "board-insert" */'@/pages/BoardInsert.vue'),
  },
  {
    path: '/boards/detail/:no',
    name: 'boards-detail',
    component: () => import(/* webpackChunkName: "board-detail" */'@/pages/BoardDetail.vue'), props: true,
  },
  {
    path: '/boards/edit/:no',
    name: 'boards-edit',
    component: () => import(/* webpackChunkName: "board-edit" */'@/pages/BoardEdit.vue'), props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
