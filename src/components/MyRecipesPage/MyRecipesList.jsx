import { RecipeCard } from '../FavoritePage/RecipeCard';
import { MyRecipesContainer, Title } from 'styled-components';

export function MyRecipesList({ recipes, onDelete }) {
  return (
    <MyRecipesContainer>
      <Title>My recipes</Title>
      <div>
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} onDelete={onDelete} />
        ))}
      </div>
    </MyRecipesContainer>
  );
}