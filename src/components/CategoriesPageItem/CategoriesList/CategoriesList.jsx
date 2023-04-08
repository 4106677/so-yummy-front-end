
import { CategoryListContainer, CategoryList, CategoryName } from "./CategoriesList.styled";


export function CategoriesList({ categories = [] }) {
  console.log(categories);

  const categoryItems = categories.map(({ title, idx }) => (
    <CategoryList key={idx}>
      <CategoryName>{title}</CategoryName>
    </CategoryList>
  ));

   return (
    <div>
<CategoryListContainer>{categoryItems}</CategoryListContainer>
     
          
    </div>);
}