import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuth} from "./authContext.jsx";
import createAxiosInstance from "../services/axiosInstance";

function PrivateRoute({ children }) {
    const { isAuthenticated, login } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            const token = localStorage.getItem('token');
            if (token) {
                console.log(token);
                const axiosInstance = createAxiosInstance(true);
                    axiosInstance.get('/auth')
                        .then(() => {
                            login(token);
                        }).catch(() => {
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