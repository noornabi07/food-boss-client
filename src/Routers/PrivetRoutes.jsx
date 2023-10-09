import React, { useContext } from 'react';
import { UserContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoutes = ({ children }) => {
    const { user, loading } = useContext(UserContext);
    const location = useLocation();
    // if (loading) {
    //     return <button className="btn btn-square">
    //         <span className="loading loading-spinner"></span>
    //     </button>
    // }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivetRoutes;