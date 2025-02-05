//need to update the auth and the token system for now its just a dummy to navigate to auth.
import { useEffect } from "react";
import {Navigate} from "react-router-dom";
const ProtectedRoute = ({children}) => {
    const token = localStorage.getItem('token');
    useEffect(() => console.log(token));
    return token? <Navigate to={'/auth'} /> : children;

}

export default ProtectedRoute;