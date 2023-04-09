import {
  FavoriteCard,
  FavoriteImage,
  FavoriteTitle,
  FavoriteDescription,
  FavoriteItems,
  FavoriteTimeWrap,
} from './FavoriteList.styled';

export const FavoriteList = ({ items, onClick }) => {
 const elements = items.map(({ _id, title, preview, description, time }) => (
   <FavoriteCard key={_id}>
     <FavoriteImage src={preview} alt="dish" />
     <div>
       <FavoriteTitle>{title}</FavoriteTitle>
       <FavoriteDescription>{description}</FavoriteDescription>
       <FavoriteTimeWrap>
         <div>{time} min</div>
         <img src="" alt="" />
       </FavoriteTimeWrap>
     </div>
   </FavoriteCard>
 )); 

  return (
    <>
      <FavoriteItems>{elements}</FavoriteItems>
    </>
  );
};
