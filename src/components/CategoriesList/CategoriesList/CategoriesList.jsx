
import {
  CategoryItem,
  CategoryList,
  Title,
} from './CategoriesList.styled';

export function CategoriesList({ categories = [] }) {
  console.log(categories);

const categoryCreator = categories.map(({ name, idx }) => (
   <CategoryItem key={idx}>
      <Title>{name}</Title>
    </CategoryItem>
  ));
  
  return (
       <CategoryList>{categoryCreator}</CategoryList>
    );
};



