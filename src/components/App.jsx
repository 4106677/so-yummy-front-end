import { Route, Routes } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyles';
import { Signin } from 'pages/Signin/Signin';
import {SearchPage} from 'pages/SearchPage/SearchPage';
import { MainPage } from 'pages/MainPage/MainPage';



export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
