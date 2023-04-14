import {
  DecorativeSquare,
  MyRecipeTitle,
  Section,
} from './MyRecipePage.styled';

import React from 'react';
import { MyRecipesList } from 'components/MyRecipesPage/MyRecipesList';

import { checkWebpSupport } from 'components/Utils/checkWebpSupport';
import { DeleteMyRecipeById } from '../../services/myRecipes';

const MyRecipePage = () => {
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    checkWebpSupport()
      .then(isWebpSupported =>
        sectionRef.current.classList.add(isWebpSupported ? 'webp' : 'no-webp')
      )
      .catch(err => err);
  }, []);
  return (
    <Section ref={sectionRef}>
      <DecorativeSquare data-1 color="#8BAA36" top="3.375rem" left="14.75rem" />
      <DecorativeSquare data-2 top="8.5rem" left="44.125rem" />
      <DecorativeSquare data-3 color="#8BAA36" top="4.125rem" right="4.5rem" />
      <MyRecipeTitle>My recipes</MyRecipeTitle>

      <MyRecipesList onDelete={DeleteMyRecipeById} />
    </Section>
  );
};

export default MyRecipePage;
