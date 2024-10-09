import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import SignUpView from '@/views/SignUpView.vue';
import LoginView from '@/views/LoginView.vue';
import LoginWithOTP from '@/views/LoginWithOTP.vue';
import OTPView from '@/views/OTPView.vue';
import ForgottenPasswordView from '@/views/ForgottenPasswordView.vue';
import Dashboard from '@/views/DashboardView.vue'
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
      path: '/otp-login',
      name: 'otp-login',
      component: LoginWithOTP,
      meta: { showNavbarAndFooter: false },
    },
    {
      path: '/otp',
      name: 'otp',
      component: OTPView,
      meta: { showNavbarAndFooter: false  },
      // meta: { showNavbarAndFooter: false, requiresAuth: true  },
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgottenPasswordView,
      meta: { showNavbarAndFooter: false},
    },
    {
      path: '/dashboard',
      component: Dashboard,
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'profile',
          component: Profile
        },
        {
          path: 'settings',
          component: Settings
        }
      ]
    }

    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
});

async function authenticateUser(next) {
  next("/login")
  //write logic to redirect the user to the login page if the user is not authenticated
}

router.beforeEach((to,from,next)=>{
  if(to.meta.requiresAuth){
    console.log("requiresAuth")
    authenticateUser(next)
  }else{
    next()
  }
})


export default router;
