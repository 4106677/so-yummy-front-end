import { MyRecipesContainer, RecipeList } from './MyRecipesList.styled';
import {
  DeleteMyRecipeById,
  getAllRecipesSearch,
} from '../../services/myRecipes';
import { useEffect, useState } from 'react';

import { RecipeCard } from './RecipeCard';

export function MyRecipesList() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchRecipeList = async () => {
      try {
        const data = await getAllRecipesSearch();
        if (data === undefined) {
          setRecipes([]);
          return;
        }
        setRecipes(data);
      } catch ({ response }) {
        setError(response.data.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRecipeList();
  }, []);

  const handleDeleteRecipe = async recipeId => {
    await DeleteMyRecipeById(recipeId);
    setRecipes(recipes.filter(recipe => recipe._id !== recipeId));
  };

  return (
    <>
      {isLoading ? (
        '...loading'
      ) : error ? (
        <h2>Data processing error. Try reloading the page.</h2>
      ) : (
        <MyRecipesContainer>
          <RecipeList>
            {recipes.map(recipe => (
              <RecipeCard
                key={recipe._id}
                recipe={recipe}
                onDelete={() => handleDeleteRecipe(recipe._id)}
              />
            ))}
          </RecipeList>
        </MyRecipesContainer>
      )}
    </>
  );
}
