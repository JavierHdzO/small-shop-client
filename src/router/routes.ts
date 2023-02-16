
export const routes = [
    {
        name:'home',
        path:'/auth',
        component: () => import('../modules/auth/layouts/AuthLayout.vue'),
        children:[
            {
                path:'',
                name:'login',
                component: () => import('../modules/auth/views/LoginView.vue')
            }
        ]
    }

]