import { createRouter, createWebHistory } from 'vue-router'
import  {useUserStore}  from '@/store/UserStore'

const routes = [
  {
    path: '/',
    name: 'Home',
    component:  () => import('../views/HomeView.vue'),
  },
  {
    path: '/lektion',
    name: 'Lektion',
    component: () => import('../views/LektionView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/RegisterView.vue')
  },
   {
    path: '/lectures',
    name: 'Test',
    component: () => import('../components/CodeWithConsole.vue'),
   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {

  const isLoggedIn = useUserStore().isLoggedIn;
  if(to.path === '/login' && isLoggedIn){
    next('/lektion')
    return;
  }

  if(to.path === '/register' && isLoggedIn){
    next('/lektion')
    return;
  }
  next();
})

export default router
