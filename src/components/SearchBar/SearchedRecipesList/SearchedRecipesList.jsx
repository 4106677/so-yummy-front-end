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
 
 
    
  return (
    <SearchListWrap>
      {items.length !== 0 ? (
        <ListWrap>{items.map(({ _id, preview, title }) => (
    
    <RecipeWrap key={_id} >
      <Link to={`/recipe/${_id}`} onClick={() => {window.scrollTo(0, 0);}}>
        <Image src={preview ? preview : defaultPic} alt="dish" />
      </Link>
      <RecipeTitle>{title}</RecipeTitle>
    </RecipeWrap>
    
  ))}</ListWrap>
      ) : (
        <NotFoundWrap>
          <NotFoundPhoto></NotFoundPhoto>
          <NotFoundText>Try looking for something else...</NotFoundText>
        </NotFoundWrap>
      )}
    </SearchListWrap>
  );

}