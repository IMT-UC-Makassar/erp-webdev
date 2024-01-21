import axios from 'axios';

const createAxiosInstance = (isAuthenticated) => {
    const instance = axios.create({
        baseURL: 'http://localhost:8888/api/v1',
    });

    instance.interceptors.request.use(
        (config) => {
            if (isAuthenticated) {
                const token = localStorage.getItem('token');
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    instance.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response && error.response.status === 403) {
                localStorage.removeItem('token');
            }
            return Promise.reject(error);
        }
    );

    return instance;
};

export default createAxiosInstance;
