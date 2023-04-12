
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getCategories, getCategoryRecipes } from "redux/categories/operations";
import { selectCategories } from "redux/categories/selectors";
import {
  CatigoryHeader,
  DecorativeSquare,
} from "./CategoriesPage.styled";
import { Container } from "components/Container/Container";
import { CategoriesList } from "components/CategoriesList/CategoriesList/CategoriesList";
import { SearchRecipesList } from "components/CategoriesList/CategoryList";
import { getIsLoading } from "../../redux/shoppingList/selectors";

export function CategoriesPage() {
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const { recipeCategories, error } =
    useSelector(selectCategories);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getCategoryRecipes(categoryName));
  }, [dispatch, categoryName]);

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
        <SearchRecipesList
          array={recipeCategories}
         isLoading={isLoading}
          error={error}
        />
      </Container>
    </>
  );
};




















// import { useState } from 'react';
// import { useEffect } from 'react';

// import { getAllRecipesByCategoryAPI } from "../../services/TheMealAPI";
// import { Container } from "components/Container/Container";
// import { CategoriesList } from "components/CategoriesList/CategoriesList/CategoriesList";
// import { RecipeList } from "components/CategoriesList/RecipeList/RecipeList";

// import {
//   PageContainer,
//   CatigoryHeader,
//   DecorativeSquare,
// } from "./CategoriesPage.styled";


// export function CategoriesPage() {
//   ;
//   const [meals, setMeals] = useState([]);
  
  
//  useEffect(() => {
//    const fetchRecipes = async () => {
//       try {
//         const data = await getAllRecipesByCategoryAPI();
//         console.log(data);
//         setMeals(data);
//       } catch (err) {
//         console.log(err.message);
//       };
//     }
//    fetchRecipes();

//   }, []);

//     return (  
//       <>
//        <Container>
//         <PageContainer>
//             <DecorativeSquare
//           data-1
//           color="#8BAA36"
//           top="3.375rem"
//           left="14.75rem"
//         />
//         <DecorativeSquare data-2 top="8.5rem" left="44.125rem" />
//         <DecorativeSquare
//           data-3
//           color="#8BAA36"
//           top="4.125rem"
//           right="4.5rem"
//         />
        
//           <CatigoryHeader>Categories</CatigoryHeader>
//           <CategoriesList />
//           <RecipeList items={meals} />
//       </PageContainer>
//       </Container>    
//       </>
//     );
// };





