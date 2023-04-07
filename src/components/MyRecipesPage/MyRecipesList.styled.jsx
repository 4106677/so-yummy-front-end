import styled from 'styled-components';

const darckMode = true;

const objectColors = {
  bgrDarkMode: '#1E1F28',
  bgrCardDarkMode: '#2A2C36',
  bgrBtnDelDarkMode: '#1E1F28',
  colorGreen: '#8BAA36',
  colorWhite: '#FAFAFA',
  colorBlack: '#22252A',
  colorTextDarkMode: 'rgba(250, 250, 250, 0.6)',
  darkColorTitel: '#001833',
  darkColorTitelCard: '#3e4462',
  darkColorTextCard: '#23262a',
};

export const Error = styled.h3`
  color: ${darckMode ? objectColors.colorWhite : objectColors.darkColorTitel};
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 1;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-left: 32px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 44px;
    line-height: 1;
  }
`;
export const RecipeList = styled.ul`
  position: relative;
  z-index: 1;
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  > li:last-child {
    margin-bottom: 0px;
  }
`;

export const MyRecipesContainer = styled.div`
  padding-top: 114px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    padding-top: 136px;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 164px;
  }
`;

export const Title = styled.h2`
  color: ${darckMode ? objectColors.colorWhite : objectColors.darkColorTitel};

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  margin-bottom: 50px;
  margin-left: 16px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-left: 32px;
    margin-bottom: 100px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 44px;
    line-height: 1;

    margin-left: 100px;
  }
`;
