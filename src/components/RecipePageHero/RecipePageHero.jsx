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
import { getFavorites } from 'redux/favorite/selectors';

export const RecipePageHero = ({ heroData, recipeId }) => {
  const favorite = useSelector(getFavorites);
  const dispatch = useDispatch();
  const { description, time, title } = heroData;
  const isFavorite = favorite.some(item => item._id === recipeId);

  const addFavorite = () => {
    dispatch(addFavoriteRecipe(recipeId));
  };

  const deleteFavorite = () => {
    const { _id } = favorite.find(item => item._id === recipeId);
    dispatch(deleteFavoriteRecipe(_id));
  };

  return (
    <RecipeHeroWrapper>
      <div>
        <RecipeTitle>{title}</RecipeTitle>
        <RecipeDescription>{description}</RecipeDescription>
        <RecipeAddToFavotite
          onClick={isFavorite ? deleteFavorite : addFavorite}
        >
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
