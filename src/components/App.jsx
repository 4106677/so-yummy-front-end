import { Route, Routes } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyles';

// import { Signin } from 'pages/Signin/Signin';
import { SearchPage } from 'pages/SearchPage/SearchPage';

// import {MainPage} from 'pages/MainPage/MainPage'
import { WellcomePage } from 'pages/WellcomePage/WellcomePage';
import { AddRecipePage } from 'pages/AddRecipe/AddRecipePage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WellcomePage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/add-recipe" element={<AddRecipePage />}></Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
