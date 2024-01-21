import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../services/axiosInstance';
import {useAuth} from "./authContext.jsx";

function PrivateRoute({ children }) {
    const { isAuthenticated, login } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            const token = localStorage.getItem('token');
            if (token) {
                    axiosInstance.get('http://localhost:8888/api/v1/auth')
                        .then(response => {
                            login(token);
                        }).catch(error => {
                        navigate('/');
                    });

            } else {
                navigate('/');
            }
        }
    }, [isAuthenticated, login, navigate]);

    return children;
}

export default PrivateRoute;