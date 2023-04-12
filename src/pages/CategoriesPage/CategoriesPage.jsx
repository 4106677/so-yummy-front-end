// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { CategoriesList } from "components/CategoriesList/CategoriesList/CategoriesList";

import {
  CatigoryHeader,
  DecorativeSquare,
} from "./CategoriesPage.styled";
import { Container } from "components/Container/Container";
import { Loader } from "components/Loader/Loader";
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';


// import {
//   getFullCategoryList,
//   getAllRecipes,
// } from "redux/mainRecipes/selectors";
// import {
//   getCategoryList,
//   getAllRecipesByCategory,
// } from "redux/mainRecipes/operations";

 export function CategoriesPage() {

//   const categories = useSelector(getFullCategoryList);
//   console.log(categories);
//   const categoryRecipes = useSelector(getAllRecipes);
//   console.log(categoryRecipes);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();  

//   const onClick = e => {
//     navigate('/categories');
//   };
  
// useEffect(() => {
    
//       dispatch(getCategoryList());
    
//   }, [dispatch]);

//   useEffect(() => {
//     const category = 'beef';
//    dispatch(getAllRecipesByCategory(category));
//  }, [dispatch]);




    return (
      <>
        <Container>
          <DecorativeSquare
            data-1
            color="#8BAA36"
            top="3.375rem"
            left="14.75rem"
          />
          <DecorativeSquare data-2 top="8.5rem" left="44.125rem" />
          <DecorativeSquare
            data-3
            color="#8BAA36"
            top="4.125rem"
            right="4.5rem"
          />
          <CatigoryHeader>Categories</CatigoryHeader>
          <CategoriesList />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </>
    );
};





