import { Route, Routes } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyles';

import { Signin } from 'pages/Signin/Signin';
import { SearchPage } from 'pages/SearchPage/SearchPage';
import { RegisterPage } from 'pages/Register/Register';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />}></Route>
        <Route path="/SearchPage" element={<SearchPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
