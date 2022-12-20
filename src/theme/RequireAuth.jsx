import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks';

const RequireAuth = () => {
    const authCtx = useAuth();
    const location = useLocation();

    return authCtx.isLoggedIn ? <Outlet /> : <Navigate to='/' state={{ from: location }} replace />;
};

export default RequireAuth;
