import styled from 'styled-components';
import bgrImageMob from '../../images/mainpage1x_mob.png';
import bgrImageTab from '../../images/mainpage1x_tab.png';
import bgrImageDesk from '../../images/mainpage1x_desk.png';
import bgrImageMob2 from '../../images/mainpage2x_mob.png';
import bgrImageTab2 from '../../images/mainpage2x_tab.png';
import bgrImageDesk2 from '../../images/mainpage2x_desk.png';

export const MainPage = styled.h1`
  margin: 132px 12px 0px 12px;
  color: '#22252A';
  font-family: 'Poppins, sans-serif';
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 60px;
  display: flex;
  text-align: center;
  letter-spacing: -0.005em;

  @media (min-width: 768px) {
    margin: 204px 12px 0px 12px;
    font-size: 72px;
    line-height: 72px;
  }

  @media (min-width: 1440px) {
    font-size: 100px;
    line-height: 100px;
  }
`;

export const ColorWrap = styled.div`
  background-color: '#FAFAFA';
`;

export const SpanGr = styled.span`
  color: '#8BAA36';
  font-family: 'Poppins, sans-serif';
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 60px;
  text-align: center;
  letter-spacing: -0.005em;
  @media (min-width: 768px) {
    font-size: 72px;
    line-height: 72px;
  }

  @media (min-width: 1440px) {
    font-size: 100px;
    line-height: 100px;
  }
`;

export const MainPageText = styled.p`
  margin: 14px 40px 157px 40px;
  color: '#23262A';
  font-family: 'Poppins, sans-serif';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: '-0.02em';

  @media (min-width: 768px) {
    margin: 24px 40px 32px 40px;
    font-size: 14px;
    line-height: 18px;
  }

  @media (min-width: 1440px) {
    margin: 14px 55px 50px 24px;
    font-size: 18px;
    line-height: 24px;
    text-align: left;
  }
`;

export const MainPageBg = styled.div`
  background-image: url(${bgrImageMob});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: '#FAFAFA';
  display: flex;
  height: 777px;
  margin-bottom: 60px;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${bgrImageMob2});
  }
  @media (min-width: 768px) {
    background-image: url(${bgrImageTab});
    height: 640px;
    margin-bottom: 72px;
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bgrImageTab2});
    }
  }

  @media (min-width: 1440px) {
    background-image: url(${bgrImageDesk});
    height: 800px;
    margin-bottom: 100px;
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bgrImageDesk2});
    }
  }
`;
export const MainPageDiv = styled.div`
  @media (min-width: 768px) {
    display: flex;
    margin-right: 368px;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  @media (min-width: 1440px) {
    margin-right: 830px;
  }
`;
