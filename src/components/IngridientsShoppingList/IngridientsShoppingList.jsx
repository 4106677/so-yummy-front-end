import {
  ShopWrapper,
  ShopWrap,
  ShopTitle,
} from './IngridientsShoppingList.styled';
import { ReactComponent as Default } from "../../images/ShoppingList/default.svg"

  export const IngridientsShoppingList = ({items, onClick }) => {

    const elements = items.map(
      (
        { _id, thb, ttl, time } //добавить thb c картинкой
      ) => (
        <li key={_id}>
         { thb ? (<a href={thb}>
           <img src={thb} alt="dish" />
          </a>) : <Default/>}
          <div>{ttl}</div>
          <div>{time}</div>
          <button type="button" onClick={() => onClick(_id)}>
            X
          </button>
        </li>
      )
    ); 
  


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
