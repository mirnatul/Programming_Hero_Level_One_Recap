import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContext);
    const location = useLocation();
    console.log(location.pathname);


    if (loading) {
        return <h1>Loading...</h1>
    }

    // problem is when we reload the user is null at that point so it take us to the login page. so use loading state
    if (!user) {
        return <Navigate state={location?.pathname} to="/login"></Navigate>
    }
    return children;
};

export default PrivateRoute;