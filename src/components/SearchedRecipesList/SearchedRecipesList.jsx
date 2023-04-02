import {
  ListWrap,
  NotFoundPhoto,
  NotFoundWrap,
  NotFoundText,
} from './SearchedRecipesList.styled';

export const SearchedRecipesList = ({ items = []}) => {
console.log(items);
  
  return (
    <div>
      {items.length === 0 ? (
        <NotFoundWrap>
          <NotFoundPhoto></NotFoundPhoto>
          <NotFoundText>Try looking for something else...</NotFoundText>
        </NotFoundWrap>
      ) : (
        <ListWrap>
          {items.map(item => (
            <li key={item.id}>
              <img src={items.photo} alt={items.titles}></img>
              <p>{item.titles}</p>
            </li>
          ))}
        </ListWrap>
      )}
    </div>
  );
}