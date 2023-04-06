import {
  RecipeContainer,
  DecorativeSquare,
  Section,
  // BagImageLeft,
  // BagImageRight,
  // RectangleBlack,
  // RectangleGreenOne,
  // RectangleGreenTwo,
} from './MyRecipePage.styled';
import * as Styled from '../../components/Layout/PageLayout/PageLayout.styled';

import { MyRecipesList } from 'components/MyRecipesPage/MyRecipesList';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { DeleteMyRecipeById } from '../../services/myRecipes';

export const MyRecipePage = () => {
  return (
    <RecipeContainer>
      <Header />
      <Section>
        <DecorativeSquare
          data-1
          color="#8BAA36"
          top="3.375rem"
          left="14.75rem"
        />
        <DecorativeSquare data-2 top="8.5rem" left="44.125rem" />
        <DecorativeSquare
          data-3
          color="#8BAA36"
          top="4.125rem"
          right="4.5rem"
        />

        <MyRecipesList onDelete={DeleteMyRecipeById} />
      </Section>
      <Footer />
    </RecipeContainer>
  );
};
