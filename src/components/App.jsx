import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { GlobalStyle } from './GlobalStyles';
import { Layout } from './Layout/Layout';
import { Signin } from 'pages/Signin/Signin';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />}></Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
