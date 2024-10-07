import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import SignUpView from '@/views/SignUpView.vue';
import LoginView from '@/views/LoginView.vue';
import NotFoundView from '@/views/NotFoundView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { showNavbarAndFooter: true },
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView,
         meta: { showNavbarAndFooter: false },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
         meta: { showNavbarAndFooter: false },
    },
   
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
});

export default router;
