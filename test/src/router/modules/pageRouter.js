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
            component: () => import("@/views/Books.vue"), // () => : 화살표 함수, Arrow function
        },
        ...withPrefix("/book", [ // ... : 전개 연산자 spread operator
            {
                path: "/",
                component: () => import("@/views/Books.vue"),
            },
            {
                path: "/:tabId",
                component: () => import("@/views/Books.vue"),
            },
        ]),
        {
            path: "/reference", // 자료실
            name: "reference",
            component: () => import("@/views/reference.vue"),
        },
        {
            path: "/movieclass", // 동영상 강의
            name: "movieclass",
            component: () => import("@/views/movieclass.vue"),
        },
        {
            path: "/classsample", // 교재 샘플
            name: "classsample",
            component: () => import("@/views/classsample.vue"),
        },
        {
            path: "/company", // 회사 소개
            name: "company",
            component: () => import("@/views/company.vue"),
        },
    ],
};
export default pageRouter;
// Nested Router : 부모-자식 관계로 구성