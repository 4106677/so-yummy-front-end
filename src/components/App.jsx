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

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WellcomePage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/signin" element={<SigninPage />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/recipe/:recipeId" element={<RecipePage />}></Route>
        <Route path="/add-recipe" element={<AddRecipePage />}></Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
