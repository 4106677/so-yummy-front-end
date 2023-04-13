import {
  RecipeHeroWrapper,
  RecipeTitle,
  RecipeDescription,
  RecipeAddToFavotite,
  RecipeTimer,
  RecipeTime,
} from './RecipePageHero.styled';
import { AiOutlineClockCircle } from 'react-icons/ai';
import {
  addFavoriteRecipe,
  deleteFavoriteRecipe,
} from 'redux/favorite/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

export const RecipePageHero = ({ heroData, recipeId }) => {
  const { favorite } = useSelector(selectUser);
  const dispatch = useDispatch();
  const { description, time, title } = heroData;
  const isFavorite = favorite.some(item => item === recipeId);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(deleteFavoriteRecipe(recipeId));
    } else {
      dispatch(addFavoriteRecipe(recipeId));
    }
  };

  return (
    <RecipeHeroWrapper>
      <div>
        <RecipeTitle>{title}</RecipeTitle>
        <RecipeDescription>{description}</RecipeDescription>
        <RecipeAddToFavotite onClick={handleFavoriteClick}>
          {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        </RecipeAddToFavotite>
        <RecipeTimer>
          <AiOutlineClockCircle color="black" />
          <RecipeTime>{time} min</RecipeTime>
        </RecipeTimer>
      </div>
    </RecipeHeroWrapper>
  );
};
