import { RecipeCard } from '../FavoritePage/RecipeCard';
import {
  MyRecipesContainer,
  Title,
  RecipeList,
  Error,
} from './MyRecipesList.styled';
// import { GetAllMayRecipes } from '../../services/myRecipes';
import { useEffect, useState } from 'react';
import axios from 'axios';

const recipesInstance = axios.create({
  baseURL: 'https://recipes-becend-49lg.onrender.com',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmM2NDAwMTBjNWU1MjY2MzZlYWNlNiIsImlhdCI6MTY4MDY0MDEyMiwiZXhwIjoxNjgwNzI2NTIyfQ.rQbSxN4P3P8xqUmsTTSeuv-_8ItDfFajBprHAxQqTr0',
  },
});

export function MyRecipesList({ onDelete }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      const response = await recipesInstance.get(
        '/recipes/ownRecipes/getRecipes'
      );
      const data = response.data.result;
      setRecipes(data);
    }

    fetchRecipes();
  }, []);

  return (
    <MyRecipesContainer>
      <Title>My recipes</Title>
      {recipes.length > 0 && (
        <RecipeList>
          {recipes.map(recipe => (
            <RecipeCard key={recipe._id} recipe={recipe} onDelete={onDelete} />
          ))}
        </RecipeList>
      )}
      {recipes.length <= 0 && <Error>Here empty!</Error>}
    </MyRecipesContainer>
  );
}
