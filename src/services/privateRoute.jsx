import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuth} from "../auth/authContext.jsx";
import axiosInstance from '../services/axiosInstance';

function PrivateRoute({ children }) {
    const { isAuthenticated, login } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    axiosInstance.get('http://localhost:8888/api/v1/auth')
                    login(token); // Set authenticated state if valid
                } catch (error) {
                    navigate('/');
                }
            } else {
                navigate('/');
            }
        }
    }, [isAuthenticated, login, navigate]);

    return children;
}

export default PrivateRoute;