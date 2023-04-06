import { Navigate } from 'react-router-dom';
import { useAuth } from '../components/Hooks/useAuth';

const RestrictedRoute = ({ component: Component, redirectTo = '/main' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
