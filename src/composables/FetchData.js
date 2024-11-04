import axios from "axios";
import router from "@/router";
import { useUserStore } from '@/stores/user'

const BASE_URL = import.meta.env.VITE_BASE_BASE_URL;

// Create axios instance with default config
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

// Token management
const getToken = () => {
    const userStore = useUserStore()
    return userStore.token || localStorage.getItem('token')
}

const setToken = (token) => {
    if (!token) {
        console.error('Attempted to set null/undefined token');
        return;
    }
    const userStore = useUserStore()
    userStore.token = token
    console.log('Token set successfully:', token);
};

const removeToken = () => {
    const userStore = useUserStore()
    userStore.clearUserData()
};

// Axios interceptor for adding auth token
api.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Axios interceptor for handling unauthorized responses
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 403 || error.response?.status === 401) {
            handleLogout();
        }
        if (error.response?.status === 401) {
            const userStore = useUserStore();
            userStore.clearUserData();
            // Redirect to login if needed
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

// Logout handler
export const handleLogout = () => {
    removeToken();
    router.push('/login');
};

// Authentication functions
export const registerUser = async (userData) => {
    try {
        const response = await api.post('/register', userData);
        if (response.data.token) {
            setToken(response.data.token);
        }
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Registration failed");
    }
};

export const loginUser = async (loginData) => {
    try {
        console.log('Making login request to:', `${BASE_URL}/login`);
        const response = await api.post('/login', loginData);
        console.log('Server response:', response.data);

        if (response.data?.data?.token) {
            const userStore = useUserStore();
            userStore.setUserData(response.data);
        } else {
            throw new Error("No token received from server");
        }
        return response.data;
    } catch (error) {
        console.error('Login error:', error);
        throw new Error(error.response?.data?.message || "Login failed");
    }
};

export const userLoginWithOtp = async (email) => {
    try {
        const response = await api.post('/otp/login', { email });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "OTP login failed");
    }
};

export const verifyEmailOtp = async (otpData) => {
    try {
        const response = await api.post('/email/verify', otpData);
        if (response.data.token) {
            setToken(response.data.token);
        }
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "OTP verification failed");
    }
};

export const verifyLoginOtp = async (otpData) => {
    try {
        const response = await api.post('/otp/verify', otpData);
        if (response.data.token) {
            setToken(response.data.token);
        }
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "OTP verification failed");
    }
};

// Protected routes (requiring authentication)
export const getCountries = async () => {
    try {
        const response = await api.get('/countries');
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Fetching countries failed");
    }
};

export const passwordChange = async (passwordData) => {
    try {
        const response = await api.post('/account/password/change', passwordData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Changing password failed");
    }
};

export const emailChange = async (emailData) => {
    try {
        const response = await api.post('/account/email/change', emailData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Changing email failed");
    }
};

export const toggleNotification = async () => {
    try {
        const response = await api.get('/account/notifications/toggle');
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Toggling notifications failed");
    }
};

export const getMatches = async () => {
    try {
        const response = await api.get('/matches');
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Fetching matches failed");
    }
};

// Image upload function for signup
export const uploadImages = async (images) => {
    try {
        const formData = new FormData();
        images.forEach((image, index) => {
            formData.append(`image${index + 1}`, image);
        });

        const response = await api.post('/upload-images', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Image upload failed");
    }
};

export const forgotPassword = async (emailData) => {
    try {
        const response = await api.post('/account/recover', {
            email: emailData.email
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Password recovery request failed");
    }
};

export const verifyRecoverOtp = async (otpData) => {
    try {
        const response = await api.post('/account/recover/code', {
            email: otpData.email,
            token: otpData.token
        });
        if (response.data.token) {
            setToken(response.data.token);
        }
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Recovery code verification failed");
    }
};