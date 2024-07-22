import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8088/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

const getAuthHeaders = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    return token ? { Authorization: `Bearer ${token}` } : {};
};

api.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        ...getAuthHeaders(),
    };
    return config;
}, error => Promise.reject(error));

export default api;
