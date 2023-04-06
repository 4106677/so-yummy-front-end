import { Route, Routes } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyles';

// import { Signin } from 'pages/Signin/Signin';
import { SearchPage } from 'pages/SearchPage/SearchPage';
import { RegisterPage } from 'pages/Register/Register';
import { SigninPage } from 'pages/Signin/Signin';
import { MainPage } from 'pages/MainPage/MainPage';
import { WellcomePage } from 'pages/WellcomePage/WellcomePage';
import { AddRecipePage } from 'pages/AddRecipe/AddRecipePage';
import { RecipePage } from 'pages/RecipePage/RecipePage';
import { ShoppingListPage } from 'pages/ShoppingListPage/ShoppingListPage';

import { ToastContainer } from 'react-toastify';

import { MyRecipePage } from 'pages/MyRecipesPage/MyRecipesPage';
// import { CategoriesPage } from '../components/CategoriesPage/CategoriesPage';
// import { FavoriteRecipeList } from "../components/FavoritePage/FavoriteRecipeList";
// import { MyRecipesList } from '../components/MyRecipesPage/MyRecipesList';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WellcomePage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/signin" element={<SigninPage />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/recipe/:recipeId" element={<RecipePage />}></Route>
        <Route path="/shopping-list" element={<ShoppingListPage />}></Route>
        <Route path="/add-recipe" element={<AddRecipePage />}></Route>
        <Route path="/my" element={<MyRecipePage />}></Route>
        {/* <Route path="/categories/:categoryName" element={<CategoriesPage />}></Route>
        <Route path="/favorite" element={<FavoriteRecipeList />}></Route>
        <Route path="/my" element={<MyRecipesList />}></Route> */}
      </Routes>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </>
  );
};


