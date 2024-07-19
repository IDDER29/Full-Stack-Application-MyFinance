import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = ({ Component }) => {
    const [isAuth, setIsAuth] = useState(false);
    const location = useLocation(); // Get the current location

    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem('token');
            if (token) {
                setIsAuth(true);
            }
            else {
                setIsAuth(false);
            }
        }
        setLoading(false);
        checkAuth();
    }, [location]); // Re-run the effect whenever the location changes
    
    return isAuth ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
