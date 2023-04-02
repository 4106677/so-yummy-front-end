import { RecipeCard } from './RecipeCard';
import { FavoriteContainer, Title } from 'styled-components';

export function FavoriteRecipeList({ recipes, onDelete }) {
  return (
    <FavoriteContainer>
      <Title>Favorites</Title>
      <div>
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} onDelete={onDelete} />
        ))}
      </div>
    </FavoriteContainer>
  );
}