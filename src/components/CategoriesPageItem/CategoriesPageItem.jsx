import { CategoriesList } from './CategoriesList/CategoriesList';
import { RecipeList } from './RecipeList/RecipeList';

export function CategoriesPageItem({ items, categories }) {
    return (
    <div>
      <CategoriesList categories={categories} />
      <RecipeList items={items} />
    </div>
  );
}


  
