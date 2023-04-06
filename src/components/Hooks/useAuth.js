import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectToken,
  // selectIsRefreshing,
  selectUser,
} from '../../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);
  // const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  // return { isLoggedIn, isRefreshing, user };
  return { isLoggedIn, user, token };
};
