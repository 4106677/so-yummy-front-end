import styled from 'styled-components';
import BackgroundRecipe from '../../images/RecipePage/recipeBackground.png';
import BackgroundRecipeTab from '../../images/RecipePage/recipeBackgroundTab.png';
import BackgroundRecipeDesk from '../../images/RecipePage/recipeBackgroundTabDesk.png';
import RecipeImg from '../../images/RecipePage/recipeImg.jpg';
import RecipeImgTab from '../../images/RecipePage/recipeImgTab.jpg';

export const RecipePreparationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 16px 100px;
  background-image: url(${BackgroundRecipe});
  background-repeat: no-repeat;
  background-position: 10% 210%;

  @media screen and (min-width: 768px) {
    padding: 96px 32px 200px;
    background-image: url(${BackgroundRecipeTab});
    background-position: bottom -370px right 250px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    padding: 100px 100px 200px;
    background-image: url(${BackgroundRecipeDesk});
    background-position: bottom -450px right 780px;
  }

  h2 {
    margin: 0;
    margin-bottom: 28px;
    font-weight: 600;
    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.24px;
    color: #3e4462;
    @media screen and (min-width: 768px) {
      margin-bottom: 32px;
    }
  }
`;

export const RecipePreparationBlock = styled.div`
  @media screen and (min-width: 1440px) {
    max-width: 757px;
    margin-right: 50px;
  }
`;

export const CookingRecipe = styled.div`
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;
export const RecipeImageWrapper = styled.div`
  background-image: url(${RecipeImg});
  background-repeat: no-repeat;
  border-radius: 8px;
  width: 343px;
  height: 250px;
  @media screen and (min-width: 768px) {
    background-image: url(${RecipeImgTab});
    width: 433px;
    height: 332px;
  }
  @media screen and (min-width: 1440px) {
    width: 433px;
    height: 332px;
  }
`;
