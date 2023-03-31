import { Route, Routes } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyles';

import { Signin } from 'pages/Signin/Signin';

import {MainPage} from 'pages/MainPage/MainPage'

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
      <GlobalStyle />
    </>
  );
};
