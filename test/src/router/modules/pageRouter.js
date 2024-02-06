const pageRouter = {
    path: "/",  // 홈화면
    name: "layout",
    component: () => import("@/layout/index.vue"),
    children: [
        {
            path: "/main", // 메인 영역이 보임.
            name: "main",
            component: () => import("@/views/main.vue"),
        },
    ],
};
export default pageRouter;
// Nested Router : 부모-자식 관계로 구성