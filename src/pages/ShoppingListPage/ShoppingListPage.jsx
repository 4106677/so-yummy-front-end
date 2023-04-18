import { IngridientsShoppingList } from 'components/IngridientsShoppingList/IngridientsShoppingList';
import {
  ShopListTitle,
  DecorativeSquare,
  ShoppinlListWrapper,
} from './ShoppingListPage.styled';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { getIsLoading } from '../../redux/shoppingList/selectors';
import { Section } from 'pages/MyRecipesPage/MyRecipePage.styled.js';
import React from 'react';

const ShoppingListPage = () => {
  const isLoading = useSelector(getIsLoading);
  const sectionRef = React.useRef(null);

  return (
    <ShoppinlListWrapper>
      <Section ref={sectionRef}>
        <DecorativeSquare
          data-1
          color="#8BAA36"
          top="3.375rem"
          left="14.75rem"
        />
        <DecorativeSquare data-2 top="8.5rem" left="44.125rem" />
        <DecorativeSquare
          data-3
          color="#8BAA36"
          top="4.125rem"
          right="4.5rem"
        />
        <ShopListTitle>Shopping list</ShopListTitle>
        {isLoading && <Loader />}
        <IngridientsShoppingList />
      </Section>
    </ShoppinlListWrapper>
  );
};

export default ShoppingListPage;
