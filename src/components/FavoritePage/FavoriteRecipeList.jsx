// import { RecipeCard } from './RecipeCard';
import { FavoriteContainer, Title } from './FavoriteRecipeList.styled';
import { Header } from '../Header/Header';

export function FavoriteRecipeList({ recipes, onDelete }) {
  return (
    <FavoriteContainer>
      <Header/>
      <Title>Favorites</Title>
      {/* <div>
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} onDelete={onDelete} />
        ))}
      </div> */}
    </FavoriteContainer>
  );
};