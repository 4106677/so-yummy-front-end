import { IngridientsShoppingList } from 'components/IngridientsShoppingList/IngridientsShoppingList';
import { Container } from 'components/Container/Container';
import {
  ShopListTitle,
  DecorativeSquare,
  ShoppinlListWrapper,
} from './ShoppingListPage.styled';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { getIsLoading } from '../../redux/shoppingList/selectors';

const ShoppingListPage = () => {
  const isLoading = useSelector(getIsLoading);

  return (
    <ShoppinlListWrapper>
      <Container>
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
      </Container>
    </ShoppinlListWrapper>
  );
};

export default ShoppingListPage;
