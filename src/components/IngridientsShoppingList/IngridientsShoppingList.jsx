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

export const IngridientsShoppingList = () => {
  const [ingridients, setIngridients] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  console.log(deleteId);

    const elements = ingridients.map(
      (
        { _id, preview, title, time } //сверить с названиями от бекенда
      ) => (
        <li key={_id}>
          <div>{preview}</div>
          <div>{title}</div>
          <div>{time}</div>
          <button type="button" onClick={()=> setDeleteId(_id)}>X</button>
        </li>
      )
  ); 
  
  useEffect(() => {
    const fetchIngridients = async () => {
      try { 
        const data = await getAllShoppingList();
        setIngridients(data);
      }
      catch ({ response }) {
        console.log(response.data.message);
      }
    }
    fetchIngridients();
  }, [])
  
    useEffect(() => {
      const fetchDeleteShoppingList = async () => {
        try {
          await deleteShoppingList(deleteId);
         setIngridients(prevIngridients => prevIngridients.filter(({_id}) => _id !== deleteId));
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
      <ul>{elements}</ul>
    </>
  );
};
