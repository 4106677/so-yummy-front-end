import { RecipeList } from "./RecipeList/RecipeList";
export function SearchRecipesList({ array, error }) {
  return (
    <div>
      {error}
     <RecipeList array={array} />
    </div>
  );
};