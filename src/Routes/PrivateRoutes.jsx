import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Loader';

const PrivateRoutes = ({children}) => {
    const location = useLocation()
    const {user, loading} = useContext(AuthContext)

    if(loading) {
        return <Loader type='ballTriangle'></Loader>
    }

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace={true}></Navigate>
    }else {
        return children
    }
   
};

export default PrivateRoutes;