import { RecipeCard } from './RecipeCard';

export function FavoriteRecipeList({ recipes, onDelete }) {
  return (
    <div>
      <h1>Favorites</h1>
      <div>
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}