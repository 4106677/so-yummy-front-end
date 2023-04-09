import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-tooltip/dist/react-tooltip.css';

import {
  CardWrapper,
  CategoryItem,
  CategoryList,
  Title,
} from './CategoriesList.styled';
import { getCategoryList, getAllRecipesByCategory } from '../../../redux/mainRecipes/operations';
import { getFullCategoryList, getAllRecipes } from '../../../redux/mainRecipes/selectors';
import { Link } from 'react-router-dom';
import { CardImg, CardTitle, CardWrap } from '../RecipeList/RecipeList.styled';
import NoImage from '../../../images/default.jpg';



export function CategoriesList() {
  const categories = useSelector(getFullCategoryList);
  console.log(categories);
  const meals = useSelector(getAllRecipes);
  console.log(meals);
    const dispatch = useDispatch();
    
  useEffect(() => {
      
    dispatch(getCategoryList());
    
  }, [dispatch]);
  
  useEffect(() => {
      const category = 'beef';
    dispatch(getAllRecipesByCategory(category));
    
 }, [dispatch]);
   

  const numCard = 8;
    
  return (
       <CategoryList>
        {categories.map(({ idx, name }) => (
          <CategoryItem key={idx}>
            <Title>{name}</Title>
            <CardWrapper>
              {meals.slice(0, numCard).map(({ _id, title, preview }) => (
                <CardWrap key={_id}>
                  <Link to={`/recipes/byId/${_id}`}>
                    <CardImg
                      src={preview ? preview : NoImage }
                      alt={title}
                    />
                    <CardTitle>{title}</CardTitle>
                  </Link>
                </CardWrap>
              ))}
            </CardWrapper>
            
          </CategoryItem>
        ))}
      </CategoryList>
    );
}



