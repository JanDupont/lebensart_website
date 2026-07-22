import { createRouter, createWebHistory } from 'vue-router';

import LebensArt from '../views/LebensArt.vue';

const routes = [
    {
        path: '/',
        name: 'LebensArt',
        component: LebensArt,
    },
    {
        path: '/impressum',
        name: 'Impressum',
        component: () => import('../views/Impressum.vue'),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
