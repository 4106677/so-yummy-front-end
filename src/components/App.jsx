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

import { ToastContainer } from 'react-toastify';

import PrivateRoute from '../components/PrivateRoute.js';
import RestrictedRoute from '../components/RestrictedRoute.js';

import { useDispatch } from 'react-redux';
import { current } from '../redux/auth/operations';
import { useAuth } from '../components/Hooks/useAuth';

export const App = () => {
  const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  useEffect(
    function () {
      dispatch(current());
    },
    [dispatch]
  );
  // return isRefreshing ? (
  //   'Refreshing user ...'
  // ) : (
  return (
    <>
      <Routes>
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
        <Route path="*" element={<NotFoundPage />} />

        {/* <Route path="/" element={<WellcomePage />} />
        <Route element={<RestrictedRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<SigninPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/recipe/:recipeId" element={<RecipePage />} />
          <Route path="/add-recipe" element={<AddRecipePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </>
  );
};
