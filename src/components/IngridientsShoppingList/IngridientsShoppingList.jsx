import { useState, useEffect } from "react";
import {
  ShopWrapper,
  ShopWrap,
  ShopTitle,
} from './IngridientsShoppingList.styled';
import {
  getAllShoppingList,
  deleteShoppingList,
} from '../../services/shoppingListAPI';
import { Loader } from "components/Loader/Loader";
import { ReactComponent as Default } from "../../images/ShoppingList/default.svg"

  export const IngridientsShoppingList = () => {
  const [ingridients, setIngridients] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log(ingridients);

    const elements = ingridients.map(
      (
        { _id, thb, ttl, time } //добавить thb c картинкой
      ) => (
        <li key={_id}>
         { thb ? (<a href={thb}>
           <img src={thb} alt="dish" />
          </a>) : <Default/>}
          <div>{ttl}</div>
          <div>{time}</div>
          <button type="button" onClick={() => setDeleteId(_id)}>
            X
          </button>
        </li>
      )
    ); 
  
  useEffect(() => {
    setIsLoading(true);
    const fetchIngridients = async () => {
      try { 
        const data = await getAllShoppingList();
        setIngridients(data);
        setIsLoading(false);
      }
      catch ({ response }) {
        console.log(response.data.message);
        setIsLoading(false);
      }
    }
    fetchIngridients();
  }, [])
  
    useEffect(() => {
      const fetchDeleteShoppingList = async () => {
        try {
          await deleteShoppingList(deleteId);
         setIngridients(prevIngridients => prevIngridients.filter(({id}) => id !== deleteId));
        } catch ({ response }) {
          console.log(response.data.message);
        }
      };
      if (deleteId) {
          fetchDeleteShoppingList();
      }
    }, [deleteId]);
  

  return (
    <>
      <ShopWrapper>
        <ShopTitle>Product</ShopTitle>
        <ShopWrap>
          <ShopTitle>Number</ShopTitle>
          <ShopTitle>Remove</ShopTitle>
        </ShopWrap>
      </ShopWrapper>
      {isLoading && <Loader />}
      <ul>{elements}</ul>
    </>
  ); 
}; 
