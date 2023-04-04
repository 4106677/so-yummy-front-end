import {
  ListWrap,
  NotFoundPhoto,
  NotFoundWrap,
  NotFoundText,
} from './SearchedRecipesList.styled';

export const SearchedRecipesList = ({ items = [] }) => {
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
            <li key={item._id}>
              <img src={item.preview} alt={item.title}></img>
              <p>{item.title}</p>
            </li>
          ))}
        </ListWrap>
      )}
    </div>
  );
};