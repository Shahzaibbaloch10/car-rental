import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const PrivateRoute = () => {
    const [isAuth, setIsAuth] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch("http://localhost:8080/auth/verify", {
                    method: "GET",
                    credentials: "include", // Cookies send karne ke liye
                });
                const data = await response.json();
                setIsAuth(data.success); 
            } catch (error) {
                setIsAuth(false);
            }
        };

        checkAuth();
    }, []);

    // if (isAuth === null) return <h1>Loading...</h1>; 

    return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
