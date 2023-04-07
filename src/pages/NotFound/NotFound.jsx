import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';

import { NFtitle, NFText, NFImg, NFDivWrap } from './NotFound.styled';
import { DecorativeSquare } from '../MyRecipesPage/MyRecipePage.styled';

export const NotFound = () => {
  return (
    <>
      <Header />
      <DecorativeSquare data-1 color="#8BAA36" top="3.375rem" left="14.75rem" />
      <DecorativeSquare data-2 top="8.5rem" left="44.125rem" />
      <DecorativeSquare data-3 color="#8BAA36" top="4.125rem" right="4.5rem" />
      <NFDivWrap>
        <NFImg />
        <NFtitle>We are sorry,</NFtitle>
        <NFText>but the page you were looking for can’t be found..</NFText>
      </NFDivWrap>
      <Footer />
    </>
  );
};
