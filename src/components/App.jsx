import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { GlobalStyle } from './GlobalStyles';
import { RegisterPage } from 'pages/Register/Register';
import { SigninPage } from 'pages/Signin/Signin';
import { WellcomePage } from 'pages/WellcomePage/WellcomePage';
import { Layout } from 'components/Layout/Layout';
import { Loader } from './Loader/Loader';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PrivateRoute from '../components/PrivateRoute.js';
import RestrictedRoute from '../components/RestrictedRoute.js';

import { current } from '../redux/auth/operations';
import { useAuth } from '../components/Hooks/useAuth';

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const SearchPage = lazy(() => import('pages/SearchPage/SearchPage'));
const AddRecipePage = lazy(() => import('pages/AddRecipe/AddRecipePage'));
const RecipePage = lazy(() => import('pages/RecipePage/RecipePage'));
const ShoppingListPage = lazy(() =>
  import('pages/ShoppingListPage/ShoppingListPage')
);
const FavoritePage = lazy(() => import('pages/FavoritePage/FavoritePage'));
const CategoriesPage = lazy(() =>
  import('pages/CategoriesPage/CategoriesPage')
);
const MyRecipePage = lazy(() => import('pages/MyRecipesPage/MyRecipesPage'));
const RecipeList = lazy(() =>
  import('../components/CategoriesList/RecipeList/RecipeList')
);
const NotFoundPage = lazy(() => import('pages/NotFound/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, token, isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn && token) {
      dispatch(current());
    }
  }, [dispatch, isLoggedIn, token]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RestrictedRoute
              component={<WellcomePage />}
              restricted
              redirectTo="/main"
            />
          }
        />
        <Route
          path="register"
          element={<RestrictedRoute component={<RegisterPage />} restricted />}
        />
        <Route
          path="login"
          element={
            <RestrictedRoute
              component={<SigninPage />}
              restricted
              redirectTo="/main"
            />
          }
        />
        <Route
          path="/"
          element={<PrivateRoute component={<Layout />} redirectTo="/" />}
        >
          <Route path="main" index element={<MainPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="recipe/:recipeId" element={<RecipePage />} />
          <Route path="add-recipe" element={<AddRecipePage />} />
          <Route path="shopping-list" element={<ShoppingListPage />} />
          <Route path="/categories" element={<CategoriesPage />}>
            <Route path=":categoryName" element={<RecipeList />} />
          </Route>
          <Route path="/favorite" element={<FavoritePage />}></Route>
          <Route path="my" element={<MyRecipePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <GlobalStyle />
      <ToastContainer autoClose={3000} limit={1} />
    </>
  );
};
