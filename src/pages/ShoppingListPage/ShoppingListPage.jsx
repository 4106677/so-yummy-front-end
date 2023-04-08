import { IngridientsShoppingList } from "components/IngridientsShoppingList/IngridientsShoppingList";
import { MainConteiner } from "components/Container/Container.styled";
import { ShopListTitle, DecorativeSquare } from "./ShoppingListPage.styled";
import {
  getAllShoppingList,
  deleteShoppingList,
} from '../../services/shoppingListAPI';
import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Header } from 'components/Header/Header';
import { Footer } from "components/Footer/Footer";

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
        <Header />
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
        <IngridientsShoppingList items={ingredients} onClick={setDeleteId} />
        <Footer />
      </MainConteiner>
    </div>
  );
};