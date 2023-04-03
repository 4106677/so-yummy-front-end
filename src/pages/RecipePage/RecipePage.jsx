import { useParams } from 'react-router-dom';
import { RecipeContainer } from './RecipePage.styled';
import { RecipePageHero } from 'components/RecipePageHero/RecipePageHero';
import { RecipeIngridientsList } from 'components/RecipeIngridientsList/RecipeIngridientsList';
import { RecipePreparation } from 'components/RecipePreparation/RecipePreparation';

export const RecipePage = () => {
  const { recipeId } = useParams();
  return (
    <RecipeContainer>
      <RecipePageHero />
      <RecipeIngridientsList />
      <RecipePreparation />
    </RecipeContainer>
  );
};
