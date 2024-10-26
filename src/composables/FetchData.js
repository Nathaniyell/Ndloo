import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_BASE_URL;

// Function to handle the POST request for registration
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/register`, userData, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        return response.data; // Return response data if successful
    } catch (error) {
        console.error("Error during registration:", error.response?.data?.message || error.message);
        throw new Error(error.response?.data?.message || "Registration failed");
    }
};

// Function to handle the POST request for login
export const loginUser = async (loginData) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, loginData, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        return response.data; // Return response data if successful
    } catch (error) {
        console.error("Error during login:", error.response?.data?.message || error.message);
        throw new Error(error.response?.data?.message || "Login failed");
    }
};
export const userLoginWithOtp = async (email) => {
    try {
        const response = await axios.post(`${BASE_URL}/otp/login`, email, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        return response.data; // Return response data if successful
    } catch (error) {
        console.error("Error during login:", error.response?.data?.message || error.message);
        throw new Error(error.response?.data?.message || "Login failed");
    }
};
export const verifyEmailOtp = async (otpData) => {
    try {
        const response = await axios.post(`${BASE_URL}/email/verify`, otpData, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        return response.data; // Return response data if successful
    } catch (error) {
        console.error("Error during login:", error.response?.data?.message || error.message);
        throw new Error(error.response?.data?.message || "Login failed");
    }
};
export const verifyLoginOtp = async (otpData) => {
    try {
        const response = await axios.post(`${BASE_URL}/otp/verify`, otpData, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        return response.data; // Return response data if successful
    } catch (error) {
        console.error("Error during login:", error.response?.data?.message || error.message);
        throw new Error(error.response?.data?.message || "Login failed");
    }
};

// Function to handle the GET request for countries
export const getCountries = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/countries`);

        return response.data; // Return response data if successful
    } catch (error) {
        console.error("Error during fetching countries:", error.response?.data?.message || error.message);
        throw new Error(error.response?.data?.message || "Fetching countries failed");
    }
};

export const passwordChange = async () => {
    try {
        const response = await axios.post(`https://api.ndloo.com/api/account/password/change`);

        return response.data; // Return response data if successful
    } catch (error) {
        console.error("Error during fetching countries:", error.response?.data?.message || error.message);
        throw new Error(error.response?.data?.message || "Fetching countries failed");
    }
};
export const emailChange = async () => {
    try {
        const response = await axios.post(`${BASE_URL}/account/email/change`);

        return response.data; // Return response data if successful
    } catch (error) {
        console.error("Error during fetching countries:", error.response?.data?.message || error.message);
        throw new Error(error.response?.data?.message || "Fetching countries failed");
    }
};
export const toggleNotification = async () => {
    try {
        const response = await axios.post(`${BASE_URL}/account/notifications/toggle`);

        return response.data; // Return response data if successful
    } catch (error) {
        console.error("Error during fetching countries:", error.response?.data?.message || error.message);
        throw new Error(error.response?.data?.message || "Fetching countries failed");
    }
};