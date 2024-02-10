const withPrefix = (prefix, routes) =>
    routes.map((route) => {
        route.path = prefix + route.path;
        return route;
    });

const pageRouter = {
    path: "/",  // 홈
    name: "layout",
    component: () => import("@/layout/index.vue"),
    children: [
        {
            path: "/main", // 메인
            name: "main",
            component: () => import("@/views/main.vue"),
        },
        {
            path: "/book", // 도서 소개
            name: "book",
            component: () => import("@/views/Books.vue"),
        },
        ...withPrefix("/book", [
            {
                path: "/",
                component: () => import("@/views/Books.vue"),
            },
            {
                path: "/:tabId",
                component: () => import("@/views/Books.vue"),
            },
        ]),
    ],
};
export default pageRouter;
// Nested Router : 부모-자식 관계로 구성