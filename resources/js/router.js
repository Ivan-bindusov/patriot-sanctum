import { createRouter, createWebHistory } from 'vue-router'
import Get from '@/Components/Get.vue'
import Login from '@/Components/Login.vue'
import Registration from '@/Components/Registration.vue'

let routes = [
    {
        path: '/',
        component: Get,
        name: 'get.index'
    },
    {
        path: '/user/login',
        component: Login,
        name: 'user.login'
    },
    {
        path: '/user/registration',
        component: Registration,
        name: 'user.registration'
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router
