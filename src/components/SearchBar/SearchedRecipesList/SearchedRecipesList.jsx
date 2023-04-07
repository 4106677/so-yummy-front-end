  import {
    ListWrap,
    NotFoundPhoto,
    NotFoundWrap,
    NotFoundText,
    Image,
    RecipeTitle,
    RecipeWrap
} from './SearchedRecipesList.styled';
  import defaultPic from "../../../images/SearchPage/defaultPic.png"

export const SearchedRecipesList = ({ items = [] }) => {
  console.log(items);
  const recipeCreator = items.map(({ _id, preview, title }) => (
    <RecipeWrap key={_id}>
      <a href={preview}>
        <Image src={preview ? preview : defaultPic} alt="dish" />
      </a>
      <RecipeTitle>{title}</RecipeTitle>
    </RecipeWrap>
  ));
    
  return (
    <div>
      {(items.length !== 0) ? (<ListWrap>{recipeCreator}</ListWrap>) :  (
      <NotFoundWrap>
        <NotFoundPhoto></NotFoundPhoto>
        <NotFoundText>Try looking for something else...</NotFoundText>
      </NotFoundWrap>
    )}      
    </div>);

}