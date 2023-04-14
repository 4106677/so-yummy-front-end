import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-tooltip/dist/react-tooltip.css';
import { useMediaQuery } from 'react-responsive';

import {
  BtnCategories,
  CardWrapper,
  CategoryItem,
  CategoryList,
  TitlePrew,
} from './PreviewCategories.styled';

import { getMainCategories } from '../../redux/mainRecipes/operations';

import { getContentForMain } from '../../redux/mainRecipes/selectors';
import { Link } from 'react-router-dom';

import {
  CardImg,
  CardTitle,
  CardDish,
} from '../../components/CardMeal/CardMeal.styled';
import NoImage from '../../images/default.jpg';

export const PreviewCategories = () => {
  const categories = useSelector(getContentForMain);
  
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });

  useEffect(() => {
    dispatch(getMainCategories());
  }, [dispatch]);

  let numCard;
  if (isDesktop) {
    numCard = 4; // Десктоп
  } else if (isTablet) {
    numCard = 2; // Планшет
  } else {
    numCard = 1; // Мобильный
  }

  return (
    <CategoryList>
      {categories.length !== 0 &&
        categories.map(({ _id, meals }) => (
          <CategoryItem key={_id}>
            <TitlePrew>{_id}</TitlePrew>
            <CardWrapper>
              {meals.slice(0, numCard).map(({ _id, title, preview }) => (
                <CardDish key={_id}>
                  <Link to={`/recipe/${_id}`}>
                    <CardImg src={preview ? preview : NoImage} alt={title} />
                    <CardTitle>{title}</CardTitle>
                  </Link>
                </CardDish>
              ))}
            </CardWrapper>
            <BtnCategories to={`/categories/${_id}`}>See all</BtnCategories>
          </CategoryItem>
        ))}
    </CategoryList>
  );
};
