import styled from "styled-components";

export const RecipeCardContainer = styled.div`
width: 343px;
height: 152px;
background: #FFFFFF;
border-radius: 8px;

@media screen and (min-width: 768px) {
width: 704px;
height: 288px;
  }
@media screen and (min-width: 1440px) {
width: 1240px;
height: 404px;
  }

`;

export const Image = styled.img`
width: 124px;
height: 124px;

@media screen and (min-width: 768px) {
width: 228px;
height: 232px;
  }
@media screen and (min-width: 1440px) {
width: 318px;
height: 324px;
  }

`;

export const Title = styled.h3`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 1;
color: #3E4462;

@media screen and (min-width: 768px) {
font-size: 24px;
  }
`;

export const Text = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 8px;
line-height: 1.25;
color: #23262A;

@media screen and (min-width: 768px) {
font-size: 14px;
line-height: 1.29;
  }
@media screen and (min-width: 1440px) {
font-size: 18px;
line-height: 1.33;
  }
`;