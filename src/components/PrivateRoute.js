import { Navigate } from 'react-router-dom';
import { useAuth } from '../components/Hooks/useAuth';

const PrivateRoute = ({ component: Component, redirecTo = '/login' }) => {
  const { isLoggedIn } = useAuth();

  const shouldRedirect = !isLoggedIn;
  return shouldRedirect ? <Navigate to={redirecTo} /> : Component;
};

export default PrivateRoute;
