import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({ // 라우트 구성 객체
    history: createWebHistory(),
    routes: [
        {
            path: '',
            name: 'home',
            component: HomeView,
            meta: { // meta 속성 정의
                title: 'Home',
            },
            alias: '/home',
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue'),
            beforeEnter: (to, from, next) => {
                if(true) {
                    next(); // 라우트 전환 허용
                    console.log("true");
                } else {
                    next(false); // 라우트 전환 불허
                    console.log("false");
                }
            },
        },
        {
            path: '/user/:id',
            name: 'user-id',
            component: () => import('../views/UserDetail.vue'),
            alias: ['/:id', '/u/:id'],
            props: true,
        },
    ],
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) return savedPosition;
      // 스크롤 위치가 같기 때문에 behavior 옵션 필요없음, behavior: 'smooth' 는 부드럽게 이동
      else if (to.hash) return { el: to.hash, behavior: 'smooth' }; // 앵커(#)가 있다면 해당 위치로 이동
      else return new Promise((resolve, reject) => {
          // 500ms 기다린 후 스크롤
          setTimeout(() => {
            resolve({ left: 0, top: 0, behavior: 'smooth' }); // 스크롤 부드럽게 맨 위로 이동
          }, 500);
      });
    },
});

export default router;