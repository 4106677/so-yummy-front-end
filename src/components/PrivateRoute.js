import { Navigate } from 'react-router-dom';
import { useAuth } from '../components/Hooks/useAuth';

export const PrivateRoute = ({
  component: Component,
  restricted = false,
  redirectTo = '/',
}) => {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} replace /> : Component;
};

export default PrivateRoute;
