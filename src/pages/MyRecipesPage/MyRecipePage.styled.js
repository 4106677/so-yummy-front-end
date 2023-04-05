import styled from 'styled-components';

export const BagImageLeft = styled.img`
  position: absolute;
  bottom: 267px;
  width: 256px;
  height: 392px;
  z-index: 0;

  @media screen and (min-width: 768px) {
    bottom: 137px;
    width: 423px;
    height: 646px;
  }

  @media screen and (min-width: 1440px) {
    width: 558px;
    height: 852px;
  }
`;
export const BagImageRight = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 160px;
  height: 172px;

  z-index: 0;
  @media screen and (min-width: 768px) {
        width: 313px;
    height: 290px;

  @media screen and (min-width: 1440px) {
    width: 438px;
    height: 474px;
  }
`;
export const RectangleGreenOne = styled.img`
  position: absolute;
  top: 141px;
  left: 247px;
  z-index: 0;
  @media screen and (min-width: 768px) {
    top: 155px;
    left: 437px;
  }
  @media screen and (min-width: 1440px) {
    top: 199px;
    left: 807px;
  }
`;
export const RectangleBlack = styled.img`
  position: absolute;
  top: 76px;
  left: 120px;
  z-index: 0;
  @media screen and (min-width: 768px) {
    top: 85px;
    left: 219px;
  }
  @media screen and (min-width: 1440px) {
    top: 116px;
    left: 328px;
  }
`;
export const RectangleGreenTwo = styled.img`
  position: absolute;
  top: 108px;
  right: 15px;
  z-index: 0;
  @media screen and (min-width: 768px) {
    top: 98px;
    right: 23px;
  }
  @media screen and (min-width: 1440px) {
    top: 129px;
    right: 171px;
  }
`;

export const RecipeContainer = styled.div`
  position: relative;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  /* padding-left: 16px;
  padding-right: 16px; */

  @media screen and (min-width 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;
