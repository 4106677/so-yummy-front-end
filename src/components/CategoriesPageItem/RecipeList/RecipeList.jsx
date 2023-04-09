import {
    ListWrap,
    NotFoundPhoto,
    NotFoundWrap,
    NotFoundText,
    Image,
    RecipeTitle,
    RecipeWrap
} from './RecipeList.styled';
  // import defaultPic from "../../../images/SearchPage/defaultPic.png"

export const RecipeList = ({ items = [] }) => {
  console.log(items);
  const recipeCreator = items.map(({ _id, preview, title }) => (
    <RecipeWrap key={_id}>
      <a href={preview}>
        <Image src={preview} alt="dish" />
      </a>
      <RecipeTitle>{title}</RecipeTitle>
    </RecipeWrap>
  ));
    
  return (
    <div>
      {items ? (
        <ListWrap>{recipeCreator}</ListWrap>
      ) : (
        <NotFoundWrap>
          <NotFoundPhoto></NotFoundPhoto>
          <NotFoundText>Try looking for something else...</NotFoundText>
        </NotFoundWrap>)}
    </div>);

}







