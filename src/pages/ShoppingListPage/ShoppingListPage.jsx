import { IngridientsShoppingList } from "components/IngridientsShoppingList/IngridientsShoppingList";
import { MainConteiner } from "components/Container/Container.styled";
import { ShopListTitle } from "./ShoppingListPage.styled";
import {
  getAllShoppingList,
  deleteShoppingList,
} from '../../services/shoppingListAPI';
import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';

export const ShoppingListPage = () => {
  const [ingredients, setIngredients] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      setIsLoading(true);
      const fetchIngridients = async () => {
        try {
          const data = await getAllShoppingList();
          setIngredients(data);
          setIsLoading(false);
        } catch ({ response }) {
          console.log(response.data.message);
          setIsLoading(false);
        }
      };
      fetchIngridients();
    }, []);

    useEffect(() => {
      const fetchDeleteShoppingList = async () => {
        try {
          await deleteShoppingList(deleteId);
          setIngredients(prevIngredients =>
            prevIngredients.filter(({ id }) => id !== deleteId)
          );
        } catch ({ response }) {
          console.log(response.data.message);
        }
      };
      if (deleteId) {
        fetchDeleteShoppingList();
      }
    }, [deleteId]);
  
  return (
    <div>
      <MainConteiner>
        <ShopListTitle>Shopping list</ShopListTitle>
        {isLoading && <Loader/>}
        <IngridientsShoppingList items={ ingredients} onClick={setDeleteId} />
      </MainConteiner>
    </div>
  );
};