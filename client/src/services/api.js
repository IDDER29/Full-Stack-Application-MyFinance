import axios from 'axios';

// Create an instance of axios
const api = axios.create({
    baseURL: 'http://localhost:8088/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Function to get authorization headers
const getAuthHeaders = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    return token ? { Authorization: `Bearer ${token}` } : {};
};

// Add interceptors to include auth headers for requests
api.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        ...getAuthHeaders(),
    };
    return config;
}, error => Promise.reject(error));

export default api;
