import { RecipeCard } from '../FavoritePage/RecipeCard';

export function MyRecipesList({ recipes, onDelete }) {
  return (
    <div>
      <h1>My recipes</h1>
      <div>
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}