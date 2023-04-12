import {
  RecipeHeroWrapper,
  RecipeTitle,
  RecipeDescription,
  RecipeAddToFavotite,
  RecipeTimer,
  RecipeTime,
} from './RecipePageHero.styled';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { addFavoriteRecipe } from 'redux/favorite/operations';
import { useDispatch } from 'react-redux';

export const RecipePageHero = ({ heroData, recipeId }) => {
  const dispatch = useDispatch();
  // console.log(recipeId);
  const { description, time, title } = heroData;
  return (
    <RecipeHeroWrapper>
      <div>
        <RecipeTitle>{title}</RecipeTitle>
        <RecipeDescription>{description}</RecipeDescription>
        <RecipeAddToFavotite
          onClick={() => dispatch(addFavoriteRecipe(recipeId))}
        >
          Add to favorite recipes
        </RecipeAddToFavotite>
        <RecipeTimer>
          <AiOutlineClockCircle color="black" />
          <RecipeTime>{time} min</RecipeTime>
        </RecipeTimer>
      </div>
    </RecipeHeroWrapper>
  );
};
