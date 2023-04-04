import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-tooltip/dist/react-tooltip.css';
import { useMediaQuery } from 'react-responsive';
import { CardMeal } from 'components/CardMeal/CardMeal';
import {
  BtnCategories,
  CardWrapper,
  CategoryItem,
  CategoryList,
  TitlePrew,
} from './PreviewCategories.styled';

import { getMainCategories } from '../../redux/mainRecipes/operations';

import { selectCatogories } from '../../redux/mainRecipes/selectors';


export const PreviewCategories = () => {
    const mainCategories = useSelector(selectCatogories);
    console.log(mainCategories);
    const dispatch = useDispatch();
    const isDesktop = useMediaQuery({ minWidth: 1440 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });

    useEffect(() => {
      if (mainCategories !== null) return;
      dispatch(getMainCategories());
    }, [dispatch, mainCategories]);

    let numCard;
    if (isDesktop) {
      numCard = 4; // Десктоп
    } else if (isTablet) {
      numCard = 2; // Планшет
    } else {
      numCard = 1; // Мобильный
    };

    return (
      <CategoryList>
        {mainCategories &&
          Object.entries(mainCategories).map(([category, meals]) => (
            <CategoryItem key={category}>
              <TitlePrew>{category}</TitlePrew>
              <CardWrapper>
                {meals.slice(0, numCard).map(meal => (
                  
                  <CardMeal key={meal._id} meal={meal} />
                  
                ))}
              </CardWrapper>
              <BtnCategories to={`/categories/${category}`}>
                See all
              </BtnCategories>
            </CategoryItem>
          ))}
      </CategoryList>
    );
}