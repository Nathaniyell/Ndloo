const BASE_URL = import.meta.env.VITE_BASE_BASE_URL;

// Function to handle the POST request for registration
export const registerUser = async (userData) => {
    try {
        const response = await fetch(`${BASE_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            const errorData = await response.text();
            throw new Error(errorData.message || "Registration failed");
        }

        return await response.json(); // Return response data if successful
    } catch (error) {
        console.error("Error during registration:", error);
        throw error;
    }
};

// Function to handle the POST request for login
export const loginUser = async (loginData) => {
    try {
        const response = await fetch(`${BASE_URL}/details/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Login failed");
        }

        return await response.json(); // Return response data if successful
    } catch (error) {
        console.error("Error during login:", error);
        throw error;
    }
};
export const getCountries = async () => {
    try {
        const response = await fetch(`${BASE_URL}/countries`)
        const data = await response.json()
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Login failed");
        }

        return data; // Return response data if successful
    } catch (error) {
        console.error("Error during login:", error);
        throw error;
    }
};

