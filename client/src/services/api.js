import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8088/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to include the token in every request
api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token'); // Assuming you store your token in localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default api;
