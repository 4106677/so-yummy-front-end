import { IngridientsShoppingList } from "components/IngridientsShoppingList/IngridientsShoppingList";
import { MainConteiner } from "components/Container/Container.styled";
import {ShopListTitle} from "./ShoppingListPage.styled"

export const ShoppingListPage = () => {
  return (
    <div>
      <MainConteiner>
        <ShopListTitle>Shopping list</ShopListTitle>
        <IngridientsShoppingList />
      </MainConteiner>
    </div>
  );
};