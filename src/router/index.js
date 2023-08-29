// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import PageHome from "@/views/Login.vue";
import PageBlog from "@/views/PageHome.vue";

const routes = [
    {
        path : '/',
        name : 'PageBlog',
        component: PageBlog
    },
    {
        path: '/blog',
        name: 'PageHome',
        component: PageHome
    }
];
const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;
