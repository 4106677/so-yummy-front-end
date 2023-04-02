

export function CategoriesList({ categories, onCategoryClick }) {
   const handleClick = category => {
    onCategoryClick(category);
  };

  const categoryItems = categories.map(category => (
    <li key={category.id} onClick={() => handleClick(category)}>
      {category.name}
    </li>
  ));

  return <ul>{categoryItems}</ul>;
}