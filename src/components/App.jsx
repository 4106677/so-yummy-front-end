import { Route, Routes } from 'react-router-dom';

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

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WellcomePage />} />
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
      </Routes>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </>
  );
};
