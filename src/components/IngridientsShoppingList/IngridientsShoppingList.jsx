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
import { ReactComponent as Default } from "../../images/ShoppingList/default.svg"

  export const IngridientsShoppingList = ({items, onClick }) => {

    const elements = items.map((
        { _id, thb, ttl, t } //добавить thb c картинкой
      ) => (
        <ShopItem key={_id}>
          {thb ? (
            <a href={thb}>
              <ShopImg src={thb} alt="dish" />
            </a>
          ) : (
            <Default />
          )}
          <ShopName>{ttl}</ShopName>
            <ShopQuantity>{t ? t : 1}</ShopQuantity>
          <ShopBtn type="button" onClick={() => onClick(_id)}>
            X
          </ShopBtn>
        </ShopItem>
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
      <ShopListWrap>{elements}</ShopListWrap>
    </>
  ); 
}; 
