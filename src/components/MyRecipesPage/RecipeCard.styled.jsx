import styled from 'styled-components';
import { Link } from 'react-router-dom';

const darkMode = false;

const objectColors = {
  bgrDarkMode: '#1E1F28',
  bgrCardDarkMode: '#2A2C36',
  bgrBtnDelDarkMode: '#1E1F28',
  colorGreen: '#8BAA36',
  colorWhite: '#FAFAFA',
  colorWhiteWhite: '#fff',
  colorBlack: '#22252A',
  colorTextDarkMode: 'rgba(250, 250, 250, 0.6)',
  darkColorTitel: '#001833',
  darkColorTitelCard: '#3e4462',
  darkColorTextCard: '#23262a',
};

export const Recipeitem = styled.li`
  width: 343px;
  height: 152px;
  background: ${darkMode
    ? objectColors.bgrCardDarkMode
    : objectColors.colorWhiteWhite};
  border-radius: 8px;
  margin-bottom: 18px;
  display: flex;
  flex-direction: row;
  padding: 14px 9px;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 288px;
    margin-bottom: 40px;
    padding: 28px 24px;
  }
  @media screen and (min-width: 1440px) {
    width: 1240px;
    height: 404px;
    margin-bottom: 50px;
    padding: 40px;
  }
`;
export const TopCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 14px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 20px;
  }
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.24px;

  color: ${darkMode
    ? objectColors.colorWhite
    : objectColors.darkColorTitelCard};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
  }
`;

export const Icon = styled.img`
  height: 26px;
  width: 26px;
  transform: translate(25%, 25%);

  @media (min-width: 768px) {
    height: 44px;
    width: 44px;
  }
`;

export const BtnRemove = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  border-radius: 4px;
  border: none;
  color: ${objectColors.colorWhite};
  background-color: ${objectColors.colorGreen};
  &:hover {
    background-color: ${darkMode
      ? objectColors.colorGreen
      : objectColors.colorBlack};
  }

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 768px) {
    height: 38px;
    width: 38px;
  }
  @media screen and (min-width: 1440px) {
    height: 44px;
    width: 44px;
  }
`;

export const BottomCard = styled.div`
  display: flex;
  margin-top: auto;
  justify-content: space-between;
  align-items: flex-end;
`;
export const Time = styled.p`
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.24px;

  color: ${darkMode
    ? objectColors.colorWhite
    : objectColors.darkColorTitelCard};

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.43;
  }
`;

export const SeeRecipe = styled(Link)`
  &:hover {
    background-color: ${objectColors.colorBlack};
  }

  color: rgb(255, 255, 255);
  border-radius: 24px 44px;

  border: none;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.5;

  background-color: ${objectColors.colorGreen};

  padding: 6px 14px;
  width: 87px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    width: 138px;

    padding: 12px 32px;
    font-size: 14px;
    line-height: 1.5;
  }

  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 1.5;
    width: 172px;
  } ;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 14px;
  @media (min-width: 768px) {
    margin-left: 24px;
  }

  @media (min-width: 1440px) {
    margin-left: 44px;
  } ;
`;

export const Image = styled.img`
  width: 124px;
  height: 124px;
  border-radius: 8px @media screen and (min-width: 768px) {
    width: 228px;
    height: 232px;
  }
  @media screen and (min-width: 1440px) {
    width: 318px;
    height: 324px;
  }
`;

export const Text = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 1.25;
  color: ${darkMode
    ? objectColors.colorTextDarkMode
    : objectColors.darkColorTextCard};

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;
