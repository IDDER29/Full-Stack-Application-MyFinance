import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = ({ Component }) => {
    const [isAuth, setIsAuth] = useState(true)
    const location = useLocation();

    useEffect(() => {
        const checkAuth = async () => {
            const token = JSON.parse(localStorage.getItem('token'));
            if (token) {
                try {
                    const response = await axios.get('http://localhost:8088/api/auth/protected', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    setIsAuth(true);
                } catch (error) {
                    console.error('Error validating token:', error.response ? error.response.status : error.message);
                    setIsAuth(false);
                }
            } else {
                setIsAuth(false);
            }
        };
        checkAuth();
    }, [location]);

    console.log(isAuth);

    return isAuth ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
