import React, { useContext } from 'react';
import { UserContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';

const AdminRoutes = ({ children }) => {
    const { user, loading } = useContext(UserContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if (loading || isAdminLoading) {
        return <button className="btn btn-square">
            <span className="loading loading-spinner"></span>
        </button>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoutes;