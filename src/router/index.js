// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import PostDetail from "@/views/PostDetail.vue";
import PageHome from "@/views/PageHome.vue";
import PageWrite from "@/views/PageWrite.vue";
import PageUpdate from "@/views/PageUpdate.vue";

const routes = [
    {
        path : '/',
        name : 'PageHome',
        component: PageHome
    },
    {
        path: '/post',
        name: 'PostDetail',
        component: PostDetail
    },
    {
        path: '/write',
        name: 'PageWrite',
        component: PageWrite
    },
    {
        path: '/update/:id',
        name: 'PageUpdate',
        component: PageUpdate
    },
];
const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;
