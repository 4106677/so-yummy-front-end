  import {
    ListWrap,
    NotFoundPhoto,
    NotFoundWrap,
    NotFoundText,
    Image,
    RecipeTitle,
    RecipeWrap,
    SearchListWrap,
  } from './SearchedRecipesList.styled';
import defaultPic from "../../../images/SearchPage/defaultPic.png"
import { Link } from 'react-router-dom';


export const SearchedRecipesList = ({ items = [] }) => {
  console.log(items);
  const recipeCreator = items.map(({ _id, preview, title }) => (
    <Link
              to={`/recipe/${_id}`}
              onClick={() => {
                window.scrollTo(0, 0);
              }}>
    <RecipeWrap key={_id} >
      <a href={preview}>
        <Image src={preview ? preview : defaultPic} alt="dish" />
      </a>
      <RecipeTitle>{title}</RecipeTitle>
    </RecipeWrap>
    </Link>
  ));
    
  return (
    <SearchListWrap>
      {items.length !== 0 ? (
        <ListWrap>{recipeCreator}</ListWrap>
      ) : (
        <NotFoundWrap>
          <NotFoundPhoto></NotFoundPhoto>
          <NotFoundText>Try looking for something else...</NotFoundText>
        </NotFoundWrap>
      )}
    </SearchListWrap>
  );

}