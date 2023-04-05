import {
  RecipeContainer,
  BagImageLeft,
  BagImageRight,
  RectangleBlack,
  RectangleGreenOne,
  RectangleGreenTwo,
} from './MyRecipePage.styled';
import { MyRecipesList } from 'components/MyRecipesPage/MyRecipesList';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { DeleteMyRecipeById } from '../../services/myRecipes';

import BgImgLeft from '../../images/MayRecipesPage/myrecipespagev1x1.png';
import BgImgRight from '../../images/MayRecipesPage/myrecipespagev2x1.png';
import Rectangle8 from '../../images/MayRecipesPage/Rectangle8.png';
import Rectangle9 from '../../images/MayRecipesPage/Rectangle9.png';
import Rectangle11 from '../../images/MayRecipesPage/Rectangle11.png';

export const MyRecipePage = () => {
  return (
    <RecipeContainer>
      <RectangleGreenOne src={Rectangle8} alt="Green leafs" />
      <RectangleBlack src={Rectangle9} alt="Green leafs" />
      <RectangleGreenTwo src={Rectangle11} alt="Green leafs" />

      <Header />
      <MyRecipesList onDelete={DeleteMyRecipeById} />
      <Footer />
      <BagImageLeft src={BgImgLeft} alt="Green leafs" />
      <BagImageRight src={BgImgRight} alt="Green leafs" />
    </RecipeContainer>
  );
};
