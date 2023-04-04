import { Route, Routes } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyles';

// import { Signin } from 'pages/Signin/Signin';
import { SearchPage } from 'pages/SearchPage/SearchPage';
import { RegisterPage } from 'pages/Register/Register';
import { SigninPage } from 'pages/Signin/Signin';
import { MainPage } from 'pages/MainPage/MainPage';
import { WellcomePage } from 'pages/WellcomePage/WellcomePage';
import { ShoppingListPage } from 'pages/ShoppingListPage/ShoppingListPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WellcomePage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/signin" element={<SigninPage />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/shopping-list" element={<ShoppingListPage />}></Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
