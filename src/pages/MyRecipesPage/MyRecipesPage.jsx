import {
  RecipeContainer,
  DecorativeSquare,
  Section,
} from './MyRecipePage.styled';
// import * as Styled from '../../components/Layout/PageLayout/PageLayout.styled';
import React from 'react';
import { MyRecipesList } from 'components/MyRecipesPage/MyRecipesList';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { checkWebpSupport } from 'components/Utils/checkWebpSupport';
import { DeleteMyRecipeById } from '../../services/myRecipes';

export const MyRecipePage = () => {
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    checkWebpSupport()
      .then(isWebpSupported =>
        sectionRef.current.classList.add(isWebpSupported ? 'webp' : 'no-webp')
      )
      .catch(err => err);
  }, []);
  return (
    <RecipeContainer>
      <Header />

      <Section ref={sectionRef}>
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
