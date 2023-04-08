import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { GlobalStyle } from './GlobalStyles';

// import { Signin } from 'pages/Signin/Signin';
import { SearchPage } from 'pages/SearchPage/SearchPage';
import { RegisterPage } from 'pages/Register/Register';
import { SigninPage } from 'pages/Signin/Signin';
import { MainPage } from 'pages/MainPage/MainPage';
import { WellcomePage } from 'pages/WellcomePage/WellcomePage';
import { AddRecipePage } from 'pages/AddRecipe/AddRecipePage';
import { RecipePage } from 'pages/RecipePage/RecipePage';
import { ShoppingListPage } from 'pages/ShoppingListPage/ShoppingListPage';
import { NotFoundPage } from 'pages/NotFound/NotFound';
import {FavoritePage } from 'pages/FavoritePage/FavoritePage';
import { Layout } from 'components/Layout/Layout';

import { ToastContainer } from 'react-toastify';

import { CategoriesPage } from 'pages/CategoriesPage/CategoriesPage';
import { MyRecipePage } from 'pages/MyRecipesPage/MyRecipesPage';

import PrivateRoute from '../components/PrivateRoute.js';
import RestrictedRoute from '../components/RestrictedRoute.js';

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
          <Route path="shopping-list" element={<ShoppingListPage />} />
          <Route path="add-recipe" element={<AddRecipePage />} />
          <Route path="shopping-list" element={<ShoppingListPage />} />
          <Route path="add-recipe" element={<AddRecipePage />} />
          <Route path="categories/:categoryName" element={<CategoriesPage />} />
          <Route path="/favorite" element={<FavoritePage />}></Route>
          <Route path="my" element={<MyRecipePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      {/* //   <Routes>
    //     <Route path="/" element={<WellcomePage />}></Route>
    //     <Route path="/register" element={<RegisterPage />}></Route>
    //     <Route path="/signin" element={<SigninPage />}></Route>
    //     <Route path="/main" element={<MainPage />}></Route>
    //     <Route path="/search" element={<SearchPage />}></Route>
    //     <Route path="/recipe/:recipeId" element={<RecipePage />}></Route>
    //     <Route path="/shopping-list" element={<ShoppingListPage />}></Route>
    //     <Route path="/add-recipe" element={<AddRecipePage />}></Route>
    //     <Route */}
      {/* //       path="/categories/:categoryName"
    //       element={<CategoriesPage />} */}
      {/* //     ></Route>
    //     <Route path="/my" element={<MyRecipePage />}></Route>
    //     <Route path="*" element={<NotFoundPage />} /> */}
      {/* //   </Routes> */}
    </>
  );
};
