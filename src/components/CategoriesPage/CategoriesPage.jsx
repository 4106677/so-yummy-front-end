import { useState } from 'react';
import { CategoriesList } from './CategoriesList/CategoriesList';
import { RecipeList } from './RecipeList/RecipeList';
import { PageContainer, Title } from 'styled-components';


export function CategoriesPage({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = category => {
    setSelectedCategory(category.id);
  };

  return (
    <PageContainer>
      <Title>Categories</Title>
      <div>
        <CategoriesList categories={categories} onCategoryClick={handleCategoryClick} />
      </div>
      <div>
        <RecipeList category={selectedCategory} />
      </div>
    </PageContainer>
  );
};