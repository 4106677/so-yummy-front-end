import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { GlobalStyle } from './GlobalStyles';

// import { Signin } from 'pages/Signin/Signin';
import { SearchPage } from 'pages/SearchPage/SearchPage';
import { RegisterPage } from 'pages/Register/Register';
import { SigninPage } from 'pages/Signin/Signin';
import { MainPage } from 'pages/MainPage/MainPage';
import { WellcomePage } from 'pages/WellcomePage/WellcomePage';
import { AddRecipePage } from 'pages/AddRecipe/AddRecipePage';
import { RecipePage } from 'pages/RecipePage/RecipePage';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { Layout } from 'components/Layout/Layout';

import { ToastContainer } from 'react-toastify';

import PrivateRoute from '../components/PrivateRoute.js';
import RestrictedRoute from '../components/RestrictedRoute.js';

import { useDispatch } from 'react-redux';
import { current } from '../redux/auth/operations';
import { useAuth } from '../components/Hooks/useAuth';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, token, isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn && token) {
      dispatch(current());
    }
  }, [dispatch, isLoggedIn, token]);

  return isRefreshing ? (
    'Refreshing user ...'
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
        <Route path="/" element={<Layout />}>
          <Route
            path="main"
            index
            element={<PrivateRoute component={<MainPage />} />}
          />
          <Route path="search" element={<SearchPage />} />
          <Route path="recipe/:recipeId" element={<RecipePage />} />
          <Route path="add-recipe" element={<AddRecipePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      {/* //work */}
      {/* <Routes>
        <Route path="/" element={<WellcomePage />} />
        <Route
          path="/register"
          redirectTo="/login"
          element={<RestrictedRoute component={<RegisterPage />} />}
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/main" component={<SigninPage />} />
          }
        />
        <Route
          path="/main"
          element={
            <PrivateRoute redirectTo="/login" component={<MainPage />} />
          }
        />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/recipe/:recipeId" element={<RecipePage />} />
        <Route path="/add-recipe" element={<AddRecipePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes> */}
      {/* <Routes>
        <Route path="/" element={<WellcomePage />} />
        <Route element={<RestrictedRoute />}>
          <Route
            path="/register"
            component={<RegisterPage />}
            redirectTo="/main"
          />
          <Route path="/login" component={<SigninPage />} redirectTo="/main" />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/recipe/:recipeId" element={<RecipePage />} />
          <Route path="/add-recipe" element={<AddRecipePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes> */}
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </>
  );
};
