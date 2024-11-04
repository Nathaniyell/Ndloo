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

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: null,
    user: null,
    isAuthenticated: false
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
      this.token = data.token;
      this.user = {
        id: data.user.id,
        firstname: data.user.firstname,
        lastname: data.user.lastname,
        email: data.user.email,
        username: data.user.username,
        phone: data.user.phone,
        age: data.user.age,
        gender: data.user.gender,
        avatar: data.user.avatar,
        active: data.user.active,
        is_admin: data.user.is_admin,
        status: data.user.status,
        credits: data.user.credits,
        wallet: data.user.wallet,
        language: data.user.language,
        pushNotice: data.user.pushNotice,
        latitude: data.user.latitude,
        longitude: data.user.longitude,
        country_id: data.user.country_id,
        country: data.user.country,
        images: data.user.images,
        subscriptions: data.user.subscriptions,
        blockList: data.user.blockList,
        myLikes: data.user.myLikes,
        my_likes: data.user.my_likes,
        profile: data.user.profile,
        created_at: data.user.created_at,
        updated_at: data.user.updated_at,
        deleted_at: data.user.deleted_at,
        dob: data.user.dob
      };
      this.isAuthenticated = true;
    },

    clearUserData() {
      this.token = null;
      this.user = null;
      this.isAuthenticated = false;
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

  persist: true
}); 