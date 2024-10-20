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
        const response = await axios.post(`${BASE_URL}/details/login`, loginData, {
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
