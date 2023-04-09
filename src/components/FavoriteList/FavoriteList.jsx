import {
  FavoriteCard,
  FavoriteImage,
  FavoriteTitle,
  FavoriteDescription,
  FavoriteItems,
  FavoriteTimeWrap,
  BasketSvg,
  BasketWrap,
  Time,
  FavoriteTextPartWrap,
} from './FavoriteList.styled';
import useMediaQuery from 'components/Hooks/useMediaQuery';

export const FavoriteList = ({ items, onClick }) => {

  const isMobile = useMediaQuery('(max-width: 767px)');
  
 const elementsMob = items.map(({ _id, title, preview, description, time }) => (
   <FavoriteCard key={_id}>
     <FavoriteImage src={preview} alt="dish" />
     <FavoriteTextPartWrap>
       <FavoriteTitle>{title}</FavoriteTitle>
       <FavoriteDescription>{description}</FavoriteDescription>
       <FavoriteTimeWrap>
         <Time>{time} min</Time>
         <BasketWrap>
           <BasketSvg />
         </BasketWrap>
       </FavoriteTimeWrap>
     </FavoriteTextPartWrap>
   </FavoriteCard>
 )); 
  
   const elementsDesktop = items.map(
     ({ _id, title, preview, description, time }) => (
       <FavoriteCard key={_id}>
         <FavoriteImage src={preview} alt="dish" />
         <div>
           <div>
             <FavoriteTitle>{title}</FavoriteTitle>
             <img src="" alt="" />
           </div>
           <FavoriteDescription>{description}</FavoriteDescription>
           <FavoriteTimeWrap>
             <div>{time} min</div>
             <button type="button" onClick={() => onClick(_id)}></button>
           </FavoriteTimeWrap>
         </div>
       </FavoriteCard>
     )
   ); 

  return (
    <>
      <FavoriteItems>{isMobile ? elementsMob : elementsDesktop}</FavoriteItems>
    </>
  );
};
