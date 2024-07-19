import React,{useState} from 'react'
import {Navigate} from 'react-router-dom'

const PrivateRoute = ({Component}) => {
    const [isAuth,setIsAuth] = useState(false)
    return isAuth?<Component/>: <Navigate to="/login" />
};

export default PrivateRoute;
