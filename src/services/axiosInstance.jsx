import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useAuth} from './authContext.jsx';

const useAxiosInstance = () => {
    const navigate = useNavigate();

    const instance = axios.create({
        baseURL: 'http://localhost:8888/',
    });

    instance.interceptors.request.use((config) => {
        const {isAuthenticated} = useAuth();
        if (isAuthenticated) {
            const token = localStorage.getItem('token');
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }, (error) => Promise.reject(error));

    instance.interceptors.response.use((response) => response, (error) => {
        if (error.response.status === 403) {
            localStorage.removeItem('token');
            navigate('/login');
        }
        return Promise.reject(error);
    });

    return instance;
};

export default useAxiosInstance;
