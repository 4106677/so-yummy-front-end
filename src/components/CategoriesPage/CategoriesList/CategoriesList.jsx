import { useState } from "react";
import { CategoryListItem, CategoryListContainer } from 'styled-components';

export function CategoriesList ({ categories, onCategoryClick }) {
  const [activeCategory, setActiveCategory] = useState('');

  const handleClick = category => {
    setActiveCategory(category.name);
    onCategoryClick(category);
  };

  const categoryItems = categories.map(category => (
    <CategoryListItem
      key={category.id}
      onClick={() => handleClick(category)}
      active={activeCategory === category.name}
    >
      {category.name}
    </CategoryListItem>
  ));

  return <CategoryListContainer>{categoryItems}</CategoryListContainer>;
};