import { FavoriteContainer, Title } from './FavoriteRecipeList.styled';
import { Header } from '../Header/Header';

export function FavoriteRecipeList({ recipes, onDelete }) {
  return (
    <FavoriteContainer>
      <Header />
      <Title>Favorites</Title>
    </FavoriteContainer>
  );
}
