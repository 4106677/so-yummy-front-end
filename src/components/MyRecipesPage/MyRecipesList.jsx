import {
  MyRecipesContainer,
  Title,
  RecipeList,
  Error,
} from './MyRecipesList.styled';
import {
  DeleteMyRecipeById,
  getAllRecipesSearch,
} from '../../services/myRecipes';
import { useEffect, useState } from 'react';

import { RecipeCard } from '../FavoritePage/RecipeCard';
// import { Header } from '../../components/Header/Header';

export function MyRecipesList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchIngridients = async () => {
      try {
        const data = await getAllRecipesSearch();
        if (data === undefined) {
          setRecipes([]);
          return;
        }
        setRecipes(data);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchIngridients();
  }, []);

  const handleDeleteRecipe = async recipeId => {
    await DeleteMyRecipeById(recipeId);
    const updatedRecipes = await getAllRecipesSearch();
    setRecipes(updatedRecipes);
  };

  return (
    <MyRecipesContainer>
      <Title>My recipes</Title>
      {recipes.length > 0 && (
        <RecipeList>
          {recipes.map(recipe => (
            <RecipeCard
              key={recipe._id}
              recipe={recipe}
              onDelete={() => handleDeleteRecipe(recipe._id)}
            />
          ))}
        </RecipeList>
      )}
      {recipes.length <= 0 && <Error>Here empty!</Error>}
    </MyRecipesContainer>
  );
}
