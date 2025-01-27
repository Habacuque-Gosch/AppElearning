import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/user/home/index.vue'
import Login from '../views/user/login/login.vue'
import Register from '../views/user/register/register.vue'




const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    // {
    //     path: '/category',
    //     name: 'category',
    //     component: Category,
    //     children: [
    //         {
    //            path: 'subcategory',
    //            name: 'subCategory',
    //            component: ChildComponent,
    //         },
    //         // other nested routes
    //     ]
    // },
    {
        path: '/user/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/user/register',
        name: 'register',
        component: Register,
    },
    {
        path: '/index',
        name: 'index',
        component: () => import('../views/courses/index.vue'),
    },
    {
        path: '/course/details/:id',
        name: 'courses',
        component: () => import('../views/courses/details_course.vue'),
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router