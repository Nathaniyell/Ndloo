import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '@/stores/user'



const DashboardView = () => import('@/views/DashboardView.vue');
const HomeView = () => import('@/views/HomeView.vue');
const SignUpView = () => import('@/views/SignUpView.vue');
const LoginView = () => import('@/views/LoginView.vue');
const LoginWithOTP = () => import('@/views/LoginWithOTP.vue');
const OTPView = () => import('@/views/OTPView.vue');
const ForgottenPasswordView = () => import('@/views/ForgottenPasswordView.vue');
const Messages = () => import('@/views/MessagesView.vue')
const Matches = () => import('@/views/MatchesView.vue')
const Likes = () => import('@/views/LikesView.vue')
const Dislikes = () => import('@/views/DislikesView.vue')
const Profile = () => import('@/views/ProfileView.vue')
const Settings = () => import('@/views/SettingsView.vue')
const Blocked = () => import('@/views/BlockedView.vue')
const WhoLikesMe = () => import('@/views/WhoLikesMeView.vue')
const BoostProfile = () => import('@/views/BoostProfileView.vue')
const NotFoundView = () => import('@/views/NotFoundView.vue');
const WalletView = () => import('@/views/WalletView.vue');
const ResetPasswordView = () => import('@/views/ResetPasswordView.vue');


// Auth guard function
const requireAuth = (to, from, next) => {
  const userStore = useUserStore()

  if (!userStore.isAuthenticated) {
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
      component: DashboardView,
      meta: { requiresAuth: true },
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
  const userStore = useUserStore()

  if (to.meta.requiresAuth) {
    if (!userStore.isAuthenticated) {
      // Check localStorage for token
      if (!userStore.checkAuth()) {
        next('/login')
        return
      }
    }
  }
  next()
})

export default router;
