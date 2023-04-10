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
    
  
    const elements = shoppingList.map(
      ({ _id, ingredientInfo, t }) => {
        const picture = ingredientInfo.find(photo => photo.type === 'thb');
        
        return (
          <ShopItem key={_id}>
            {picture ? (
              <a href={picture}>
                <ShopImg src={picture} alt="dish" />
              </a>
            ) : (
              <Default />
            )}
            <ShopName>{ingredientInfo.map(ttl => ttl)}</ShopName>
            <ShopQuantity>{t ? t : 1}</ShopQuantity>
            <ShopBtn
              type="button"
              onClick={() => dispatch(deleteShoppingList(_id))}
            >
              X
            </ShopBtn>
          </ShopItem>
        );
      }); 
  


  return (
    <>
      <ShopWrapper>
        <ShopTitle>Product</ShopTitle>
        <ShopWrap>
          <ShopTitle>Number</ShopTitle>
          <ShopTitle>Remove</ShopTitle>
        </ShopWrap>
      </ShopWrapper>
      <ShopListWrap>{elements}</ShopListWrap>
    </>
  ); 
}; 
