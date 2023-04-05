// import { RecipeCard } from '../FavoritePage/RecipeCard';
import { MyRecipesContainer, Title } from './MyRecipesList.styled';
import { Header } from '../Header/Header';

export function MyRecipesList({ recipes, onDelete }) {
  return (
    <MyRecipesContainer>
      <Header/>
      <Title>My recipes</Title>
      {/* <div>
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} onDelete={onDelete} />
        ))}
      </div> */}
    </MyRecipesContainer>
  );
}