import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import createAxiosInstance from "./axiosInstance.jsx";

function PublicRoute({ children }) {
    const { isAuthenticated, login } = useAuth();
    const navigate = useNavigate();

    if (!isAuthenticated) {
        const token = localStorage.getItem('token');
        if (token) {
            console.log(token);
            const axiosInstance = createAxiosInstance(isAuthenticated);
            axiosInstance.get('/auth')
                .then(() => {
                    login(token);
                    navigate('/home')
                }).catch(() => {
                navigate('/');
            });
        }
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/home');
        }
    }, [isAuthenticated, navigate]);

    return children;
}

export default PublicRoute;