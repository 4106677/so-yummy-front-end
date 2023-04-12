import styled from 'styled-components';
import BackgroundRecipe from '../../images/RecipePage/recipeBackground.png';
import BackgroundRecipeTab from '../../images/RecipePage/recipeBackgroundTab.png';
import BackgroundRecipeDesk from '../../images/RecipePage/recipeBackgroundTabDesk.png';
import RecipeImg from '../../images/RecipePage/recipeImg.jpg';
import RecipeImgTab from '../../images/RecipePage/recipeImgTab.jpg';

export const RecipePreparationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0 100px;
  /* background-image: url(${BackgroundRecipe});

  background-repeat: no-repeat;
  background-position: 10% 210%; */

  @media screen and (min-width: 768px) {
    padding: 96px 0 200px;
    /* background-image: url(${BackgroundRecipeTab});
    background-position: bottom -370px right 250px; */
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 100px 0 200px;
    /* background-image: url(${BackgroundRecipeDesk});
    background-position: bottom -450px right 780px; */
  }

  h2 {
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
  /* background-image: url(${RecipeImg}); */
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  width: 343px;
  height: 250px;
  @media screen and (min-width: 768px) {
    /* background-image: url(${RecipeImgTab}); */
    background-image: url(${props => props.img});
    width: 433px;
    height: 332px;
  }
  @media screen and (min-width: 1440px) {
    width: 433px;
    height: 332px;
  }
`;

export const CookingSteps = styled.ol`
  padding: 0;
  margin: 0;
  list-style: none;
  counter-reset: step;
`;

export const CookingStep = styled.li`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 14px;
    @media screen and (min-width: 768px) {
      margin-bottom: 18px;
    }
  }

  &::before {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    counter-increment: step;
    content: counter(step);
    margin-right: 14px;
    font-size: 14px;
    line-height: 1.5;
    font-weight: 600;
    color: #ffffff;
    background: #8baa36;
    width: 21px;
    height: 21px;
    border-radius: 50%;
  }

  p {
    flex: 1;
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: rgba(0, 0, 0, 0.8);
    @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 1.29;
    }
  }
`;
