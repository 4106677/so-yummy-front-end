import { Route, Routes } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyles';

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
