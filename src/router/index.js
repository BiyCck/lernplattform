import { createRouter, createWebHistory } from 'vue-router'
import  {useUserStore}  from '@/store/UserStore'
import LectureView from '../views/LectureView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component:  () => import('../views/HomeView.vue'),
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
    path: '/lecture/:id',
    name: 'Lecture',
    component: LectureView,
    props: true
   },
   {
    path: '/lecture',
    name: 'LectureOverview',
    component: () => import('../views/LectureOverview.vue')
   },
   {
    path: '/logout',
    name: 'Logout',
    component: () => import('../views/LogoutView.vue')
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
