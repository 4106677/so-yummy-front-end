import {
  ShopWrapper,
  ShopWrap,
  ShopTitle,
  ShopListWrap,
  ShopItem,
  ShopImg,
  ShopName,
  ShopQuantity,
  ShopBtn,
} from './IngridientsShoppingList.styled';
import { ReactComponent as Default } from "../../images/ShoppingList/default.svg";
import { getShoppingList } from 'redux/shoppingList/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { fetchShoppingList, deleteShoppingList } from "../../redux/shoppingList/operations";
import { useEffect } from 'react';

export const IngridientsShoppingList = () => {
  const shoppingList = useSelector(getShoppingList);
  const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchShoppingList());
    }, [dispatch]);
    
  console.log(shoppingList);
  
  let items = shoppingList.length > 5 ? shoppingList.slice(0, 5) : shoppingList;
  
 const elements = items.map(item => {
   const { _id, ingredientInfo, measure } = item;
     const thb =
       (ingredientInfo && ingredientInfo[0] && ingredientInfo[0].thb) || '';
     const ttl =
     (ingredientInfo && ingredientInfo[0] && ingredientInfo[0].ttl) || '';
   
   return (
     <ShopItem key={_id}>
       {thb ? (
         <a href={thb}>
           <ShopImg src={thb} alt="dish" />
         </a>
       ) : (
         <Default />
       )}
       <ShopName>{ttl}</ShopName>
       <ShopQuantity>{measure ? measure : 1}</ShopQuantity>
       <ShopBtn type="button" onClick={() => dispatch(deleteShoppingList(_id))}>
         X
       </ShopBtn>
     </ShopItem>
   );
 });
  
  console.log(elements);


  return (
    <>
      <ShopWrapper>
        <ShopTitle>Product</ShopTitle>
        <ShopWrap>
          <ShopTitle>Number</ShopTitle>
          <ShopTitle>Remove</ShopTitle>
        </ShopWrap>
      </ShopWrapper>
      <ShopListWrap>
        { elements}
      </ShopListWrap>
    </>
  ); 
}; 
