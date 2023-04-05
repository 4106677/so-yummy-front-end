import { useState, useEffect } from "react";
import { CategoryListContainer, CategoryListItem } from "./CategoriesList.styled";


export function CategoriesList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/recipes/category-list') 
      .then(response => response.json())
      .then(data => setCategories(data)); 
  }, []);

  return (
    <CategoryListContainer>
      {categories.map(category => (
        <CategoryListItem key={category.id}>{category.name}</CategoryListItem>
      ))}
    </CategoryListContainer>
  );
}


// export function CategoriesList ({ categories, onCategoryClick }) {
//   const [activeCategory, setActiveCategory] = useState('');

//   const handleClick = category => {
//     setActiveCategory(category.name);
//     onCategoryClick(category);
//   };

//   const categoryItems = categories.map(category => (
//     <CategoryListItem
//       key={category.id}
//       onClick={() => handleClick(category)}
//       active={activeCategory === category.name}
//     >
//       {category.name}
//     </CategoryListItem>
//   ));

//   return <CategoryListContainer>{categoryItems}</CategoryListContainer>;
// };