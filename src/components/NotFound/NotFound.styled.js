import styled from 'styled-components';
import NFbgImgMobileX1 from 'images/PageLayout/page-layout-bg-mobil-x1.png';
import NFbgImgTabletX1 from 'images/PageLayout/page-layout-bg-tablet-x1.png';
import NFbgImgDesktopX1 from 'images/PageLayout/page-layout-bg-desktop-x1.png';

import NotFoundBGImageMobX1 from 'images/NotFound/NotFound-mobile-x1.png';
import NotFoundBGImageTabX1 from 'images/NotFound/NotFound-tablet-x1.png';
import NotFoundBGImageDeskX1 from 'images/NotFound/NotFound-desktop-x1.png';

export const NFDivWrap = styled.div`
  max-width: 768px;
  heigth: 512px;
  padding-top: 164px;
  padding-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
  background-image: url(${NFbgImgMobileX1});
  background-repeat: no-repeat;
  background-position: top 285px left 1px;
  @media (min-width: 768px) {
    background-image: url(${NFbgImgTabletX1});
    background-position: top 365px left 1px;
    max-width: 1440px;
    padding-bottom: 204px;
  }
  @media (min-width: 1440px) {
    background-image: url(${NFbgImgDesktopX1});
    background-position: top 265px left 1px;
  }
`;

export const NFtitle = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  margin-bottom: 8px;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: #000000;
  @media (min-width: 768px) {
    margin-bottom: 14px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const NFText = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: #000000;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 206px;
  @media (min-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const NFImg = styled.div`
  background-image: url(${NotFoundBGImageMobX1});
  width: 257px;
  height: 170px;
  margin-bottom: 14px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    background-image: url(${NotFoundBGImageTabX1});
    width: 498px;
    height: 327px;
    margin-bottom: 32px;
  }
  @media (min-width: 1440px) {
    background-image: url(${NotFoundBGImageDeskX1});
  }
`;
