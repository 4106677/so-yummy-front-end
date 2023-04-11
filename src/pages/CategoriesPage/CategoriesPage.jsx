// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from "react-router-dom";
//  import { CategoriesList } from "components/CategoriesList/CategoriesList/CategoriesList";
import { useState } from 'react';
import { useEffect } from 'react';

import { getAllCategoryListAPI, getRecipesByCategory } from "../../services/categoriesAPI";

import { CategoriesList } from "components/CategoriesList/CategoriesList/CategoriesList";
import { RecipeList } from "components/CategoriesList/RecipeList/RecipeList";

import {
  PageContainer,
  CatigoryHeader,
  DecorativeSquare,
} from "./CategoriesPage.styled";


export function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryIdx = categories[0]?.idx;
        const data = await getAllCategoryListAPI(categoryIdx);
        console.log(data);
        setCategories(data);
      } catch (err) {
        console.log(err.message);
      };
    }
    fetchCategories();
  }, [categories]);
  
 useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getRecipesByCategory();
        console.log(data);
        setMeals(data);
      } catch (err) {
        console.log(err.message);
      };
    }
    fetchRecipes();
  }, []);

    return (  
      <>
       
        <PageContainer>
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
          <CategoriesList items={categories} />
          <RecipeList items={meals} />
          </PageContainer>
          
      </>
    );
};





