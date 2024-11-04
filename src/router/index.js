import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import SignUpView from '@/views/SignUpView.vue';
import LoginView from '@/views/LoginView.vue';
import LoginWithOTP from '@/views/LoginWithOTP.vue';
import OTPView from '@/views/OTPView.vue';
import ForgottenPasswordView from '@/views/ForgottenPasswordView.vue';
import Dashboard from '@/views/DashboardView.vue'
import Messages from '@/views/MessagesView.vue'
import Matches from '@/views/MatchesView.vue'
import Likes from '@/views/LikesView.vue'
import Dislikes from '@/views/DislikesView.vue'
import Profile from '@/views/ProfileView.vue'
import Settings from '@/views/SettingsView.vue'
import Blocked from '@/views/BlockedView.vue'
import WhoLikesMe from '@/views/WhoLikesMeView.vue'
import BoostProfile from '@/views/BoostProfileView.vue'
import NotFoundView from '@/views/NotFoundView.vue';
import WalletView from '@/views/WalletView.vue';
import ResetPasswordView from '@/views/ResetPasswordView.vue';


// Auth guard function
const requireAuth = (to, from, next) => {
  const token = localStorage.getItem('token')
  if (!token) {
    next('/login')
  } else {
    next()
  }
}

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
      props: (route) => ({ type: route.query.type }),
      meta: { showNavbarAndFooter: false },
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgottenPasswordView,
      meta: { showNavbarAndFooter: false },
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: ResetPasswordView,
      meta: { showNavbarAndFooter: false },
    },
    {
      path: '/dashboard',
      component: Dashboard,
      beforeEnter: requireAuth,
      children: [
        {
          path: '',
          component: Matches
        },
        {
          path: 'likes',
          component: Likes
        },
        {
          path: 'wallet',
          component: WalletView
        },
        {
          path: 'who-likes-me',
          component: WhoLikesMe
        },
        {
          path: 'dislikes',
          component: Dislikes
        },
        {
          path: 'boost-profile',
          component: BoostProfile
        },
        {
          path: 'blocked',
          component: Blocked
        },
        {
          path: 'messages',
          component: Messages
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
    },

    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
});

// Move the beforeEach after router creation
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    console.log("requiresAuth")
    requireAuth(to, from, next)
  } else {
    next()
  }
})

export default router;
