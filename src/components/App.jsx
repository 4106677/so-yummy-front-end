import { Route, Routes } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyles';

import { Header } from './Header/Header';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header/>}></Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
