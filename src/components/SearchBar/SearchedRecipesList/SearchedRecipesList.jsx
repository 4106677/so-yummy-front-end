  import {
  ListWrap,
  NotFoundPhoto,
  NotFoundWrap,
  NotFoundText,
} from './SearchedRecipesList.styled';

  export const SearchedRecipesList = ({ items = [] }) => {
  console.log(items);
    const recipeCreator = items.map(({ _id, preview, title, ingredients }) => {
      <li key={_id}>
      <a href={preview} alt="dish"></a>
      <p>{title}</p>
      <p>{ingredients}</p>
    </li>
    });
    
  return (
    <div>
      {items ? (
        <NotFoundWrap>
          <NotFoundPhoto></NotFoundPhoto>
          <NotFoundText>Try looking for something else...</NotFoundText>
        </NotFoundWrap>
      ) : (
        <ListWrap>
              {recipeCreator}
        </ListWrap>
      )}
    </div>
  );
}; 