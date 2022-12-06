import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("@/components/Layouts/DefaultLayout.vue"),
        children: [
            {
                path: "/",
                name: "Home",
                component: () => import("@/pages/Home/Home.vue"),
            },
            {
                path: "home/test",
                name: "Test",
                component: () => import("@/views/Test.vue"),
            },
        ]
    },
    {
        path: "/auth",
        component: () => import("@/components/Layouts/AuthLayout.vue"),
        children: [
            {
                path: "login",
                name: "Login",
                component: () => import("@/pages/Auth/Login.vue"),
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;