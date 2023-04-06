import {
  RecipeHeroWrapper,
  RecipeTitle,
  RecipeDescription,
  RecipeAddToFavotite,
  RecipeTimer,
  RecipeTime,
} from './RecipePageHero.styled';
import { AiOutlineClockCircle } from 'react-icons/ai';

export const RecipePageHero = ({ heroData }) => {
  const { description, time, title } = heroData;
  return (
    <RecipeHeroWrapper>
      <div>
        <RecipeTitle>{title}</RecipeTitle>
        <RecipeDescription>{description}</RecipeDescription>
        <RecipeAddToFavotite>Add to favorite recipes</RecipeAddToFavotite>
        <RecipeTimer>
          <AiOutlineClockCircle color="black" />
          <RecipeTime>{time} min</RecipeTime>
        </RecipeTimer>
      </div>
    </RecipeHeroWrapper>
  );
};
