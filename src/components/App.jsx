import { Route, Routes } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyles';

import { Signin } from 'pages/Signin/Signin';
import { SearchPage } from 'pages/SearchPage/SearchPage';
import { RecipePage } from 'pages/RecipePage/RecipePage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />}></Route>
        <Route path="/SearchPage" element={<SearchPage />}></Route>
        <Route path="/recipe/:recipeId" element={<RecipePage />}></Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
