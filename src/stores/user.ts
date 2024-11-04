import { defineStore } from 'pinia'

interface Country {
  id: number;
  name: string;
  currency: string;
  iso: string;
  iso3: string;
  numcode: number;
  phonecode: number;
  deleted_at: string | null;
}

interface UserImage {
  id: string;
  user_id: string;
  image: string;
  created_at: string;
  updated_at: string;
}

interface Subscription {
  id: string;
  subscription_category_id: string;
  name: string;
  desc: string | null;
  price: number;
}

interface UserState {
  token: string | null;
  user: {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    username: string;
    phone: string;
    age: number;
    gender: string;
    avatar: string;
    active: boolean;
    is_admin: boolean;
    status: number;
    credits: number;
    wallet: number;
    language: string;
    pushNotice: boolean;
    latitude: string;
    longitude: string;
    country_id: number;
    country: Country;
    images: UserImage[];
    subscriptions: Subscription[];
    blockList: string[];
    myLikes: string[];
    my_likes: any[]; // You can create a specific interface for this if needed
    profile: any[];
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    dob: string | null;
  } | null;
  isAuthenticated: boolean;
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    token: localStorage.getItem('token'),
    user: null,
    isAuthenticated: !!localStorage.getItem('token')
  }),

  getters: {
    fullName: (state) => {
      if (!state.user) return '';
      return `${state.user.firstname} ${state.user.lastname}`;
    },
    userAvatar: (state) => {
      return state.user?.avatar || 'default-avatar-url';
    },
    userImages: (state) => {
      return state.user?.images || [];
    },
    userSubscriptions: (state) => {
      return state.user?.subscriptions || [];
    },
    userLikes: (state) => {
      return state.user?.myLikes || [];
    },
    isAdmin: (state) => {
      return state.user?.is_admin || false;
    },
    userCredits: (state) => {
      return state.user?.credits || 0;
    },
    userWallet: (state) => {
      return state.user?.wallet || 0;
    }
  },

  actions: {
    setUserData(data: any) {
      if (data.token) {
        localStorage.setItem('token', data.token);
        this.token = data.token;
      }

      if (data.data?.token) {
        localStorage.setItem('token', data.data.token);
        this.token = data.data.token;
      }

      const userData = data.user || data.data?.user;
      if (userData) {
        this.user = {
          id: userData.id,
          firstname: userData.firstname,
          lastname: userData.lastname,
          email: userData.email,
          username: userData.username,
          phone: userData.phone,
          age: userData.age,
          gender: userData.gender,
          avatar: userData.avatar,
          active: userData.active,
          is_admin: userData.is_admin,
          status: userData.status,
          credits: userData.credits,
          wallet: userData.wallet,
          language: userData.language,
          pushNotice: userData.pushNotice,
          latitude: userData.latitude,
          longitude: userData.longitude,
          country_id: userData.country_id,
          country: userData.country,
          images: userData.images,
          subscriptions: userData.subscriptions,
          blockList: userData.blockList,
          myLikes: userData.myLikes,
          my_likes: userData.my_likes,
          profile: userData.profile,
          created_at: userData.created_at,
          updated_at: userData.updated_at,
          deleted_at: userData.deleted_at,
          dob: userData.dob
        };
        this.isAuthenticated = true;
      }
    },

    clearUserData() {
      this.token = null;
      this.user = null;
      this.isAuthenticated = false;
      localStorage.removeItem('token');
    },

    checkAuth() {
      const token = localStorage.getItem('token');
      if (token) {
        this.token = token;
        this.isAuthenticated = true;
        return true;
      }
      return false;
    },

    updateUserProfile(profileData: Partial<UserState['user']>) {
      if (this.user) {
        this.user = { ...this.user, ...profileData };
      }
    },

    updateUserImages(images: UserImage[]) {
      if (this.user) {
        this.user.images = images;
      }
    },

    addToLikes(userId: string) {
      if (this.user && !this.user.myLikes.includes(userId)) {
        this.user.myLikes.push(userId);
      }
    },

    removeFromLikes(userId: string) {
      if (this.user) {
        this.user.myLikes = this.user.myLikes.filter(id => id !== userId);
      }
    }
  },

  persist: {
    key: 'user-store',
    storage: localStorage,
    paths: ['user', 'isAuthenticated']
  }
}); 