import { Route, Routes } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyles';

import { Signin } from 'pages/Signin/Signin';
import { AddRecipePage } from 'pages/AddRecipe/AddRecipePage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />}></Route>
        <Route path="/add-recipe" element={<AddRecipePage />}></Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
