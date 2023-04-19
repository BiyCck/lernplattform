import { createRouter, createWebHistory } from 'vue-router'
// import { auth } from '@/firebase'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/*
router.beforeEach((to, from, next) => {

  const currentUser = auth.currentUser;
  if(to.path === '/login' && currentUser){
    next('/lektion')
    return;
  }

  if(to.path === '/register' && currentUser){
    next('/lektion')
    return;
  }
  if(to.matched.some(record => record.meta.requiresAuth) && !currentUser){
    next('/login')
    return;
  }

  next();
})
*/
export default router
