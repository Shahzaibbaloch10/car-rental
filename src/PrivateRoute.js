import { Navigate, Outlet } from "react-router-dom";
// import { useEffect, useState } from "react";
import useAuth from './hooks/useAuth';
const PrivateRoute = () => {
    const {isauth} = useAuth();

    if (isauth === null) return <h1>Loading...</h1>; 

    return isauth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
