
export const routes = [
    {
        name:'home',
        path:'/',
        component: () => import('../modules/auth/views/AuthView.vue')
    }

]