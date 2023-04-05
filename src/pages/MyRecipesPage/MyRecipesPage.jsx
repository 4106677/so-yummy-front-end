import { RecipeContainer } from './MyRecipePage.styled';
import { MyRecipesList } from 'components/MyRecipesPage/MyRecipesList';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';

export const MyRecipePage = () => {
  return (
    <RecipeContainer>
      <Header />
      <MyRecipesList />
      <Footer />
    </RecipeContainer>
  );
};
