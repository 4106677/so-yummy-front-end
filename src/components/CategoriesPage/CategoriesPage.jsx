import { useState } from 'react';
import { CategoriesList } from './CategoriesList/CategoriesList';
import { RecipeList } from './RecipeList/RecipeList';

export function CategoriesPage({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = category => {
    setSelectedCategory(category.id);
  };

  return (
    <div>
      <h1>Categories</h1>
      <div>
        <CategoriesList categories={categories} onCategoryClick={handleCategoryClick} />
      </div>
      <div>
        <RecipeList category={selectedCategory} />
      </div>
    </div>
  );
};