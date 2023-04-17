import { Container } from 'components/Container/Container';
import { DecorativeSquare, FavoritePageWrapper } from './FavoritePage.styled';
import 'react-toastify/dist/ReactToastify.css';
import { FavoriteList } from 'components/FavoriteList/FavoriteList';
import { FavoriteTitle } from './FavoritePage.styled';
import { Loader } from 'components/Loader/Loader';
import { getIsLoading } from '../../redux/favorite/selectors';
import { useSelector } from 'react-redux';
import React from 'react';
import { Section } from 'pages/MyRecipesPage/MyRecipePage.styled.js';

const FavoritePage = () => {
  const isLoading = useSelector(getIsLoading);
  const sectionRef = React.useRef(null);

  return (
    <Section ref={sectionRef}>
      <FavoritePageWrapper>
        <Container>
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
          <FavoriteTitle>Favorite</FavoriteTitle>
          {isLoading && <Loader />}
          <FavoriteList />
        </Container>
      </FavoritePageWrapper>
    </Section>
  );
};

export default FavoritePage;
