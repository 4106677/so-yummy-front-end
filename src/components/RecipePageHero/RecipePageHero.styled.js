import styled from 'styled-components';
import HeroImgMob from '../../images/RecipePage/recipePageHeroImgMob.jpg';
import HeroImgTab from '../../images/RecipePage/recipePageHeroImgTab.jpg';
import HeroImg from '../../images/RecipePage/recipePageHeroImg.jpg';

export const RecipeHeroWrapper = styled.div`
  text-align: center;
  background-image: url(${HeroImgMob});
  padding: 144px 0 90px 0;
  background-size: cover;
  background-position: center;
  @media screen and (min-width: 768px) {
    background-image: url(${HeroImgTab});
    padding: 136px 0 32px 0;
  }

  @media screen and (min-width: 1440px) {
    padding: 164px 0 32px 0;
    background-image: url(${HeroImg});
  }
  div {
    max-width: 303px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: 768px) {
      max-width: 506px;
    }
    @media screen and (min-width: 1440px) {
      max-width: 656px;
    }
  }
`;

export const RecipeTitle = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #8baa36;
  margin-bottom: 18px;
  @media screen and (min-width: 768px) {
    font-size: 44px;
    margin-bottom: 24px;
  }
`;

export const RecipeDescription = styled.p`
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: #22252a;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
  }
`;
export const RecipeAddToFavotite = styled.button`
  display: inline-block;
  min-width: 150px;
  background-color: transparent;
  color: #23262a;
  border-radius: 24px 44px;
  border: 1px solid #8baa36;
  margin-bottom: 42px;
  padding: 10px 18px;
  font-size: 10px;
  line-height: 1.5;
  color: #22252a;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #8baa36;
    cursor: pointer;
    color: white;
  }
  @media screen and (min-width: 768px) {
    width: 278px;
    padding: 18px 44px;
    margin-bottom: 78px;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    width: 278px;
    margin-bottom: 48px;
  }
`;

export const RecipeTimer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 14px;
    margin-right: 4px;
    @media screen and (min-width: 768px) {
      font-size: 20px;
      margin-right: 8px;
    }
  }
`;

export const RecipeTime = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.24px;
  color: #23262a;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
