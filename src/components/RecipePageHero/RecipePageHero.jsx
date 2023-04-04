import {
  RecipeHeroWrapper,
  RecipeTitle,
  RecipeDescription,
  RecipeAddToFavotite,
  RecipeTimer,
  RecipeTime,
} from './RecipePageHero.styled';
import { AiOutlineClockCircle } from 'react-icons/ai';

export const RecipePageHero = () => {
  return (
    <RecipeHeroWrapper>
      <div>
        <RecipeTitle>Salmon Avocado Salad</RecipeTitle>
        <RecipeDescription>
          Is a healthy salad recipe that’s big on nutrients and flavor. A moist,
          pan seared salmon is layered on top of spinach, avocado, tomatoes, and
          red onions. Then drizzled with a homemade lemon vinaigrette.
        </RecipeDescription>
        <RecipeAddToFavotite>Add to favorite recipes</RecipeAddToFavotite>
        <RecipeTimer>
          <AiOutlineClockCircle color="black" />
          <RecipeTime>20min</RecipeTime>
        </RecipeTimer>
      </div>
    </RecipeHeroWrapper>
  );
};
