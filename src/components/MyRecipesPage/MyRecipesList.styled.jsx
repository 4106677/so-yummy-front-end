import styled from 'styled-components';

export const Error = styled.h3`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 1;
  color: #001833;
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
  background: #fafafa;
  padding-top: 142px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    padding-top: 168px;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 208px;
  }
`;

export const Title = styled.h2`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  color: #001833;
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
