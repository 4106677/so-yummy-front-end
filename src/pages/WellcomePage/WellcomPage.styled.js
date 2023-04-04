import styled from 'styled-components';
import { Link } from 'react-router-dom';

import BgDesk from '../../images/WellcomePage/wellcome_desk.jpg';
import BgDesk2x from '../../images/WellcomePage/wellcome2x_desk.jpg';
import BgTab from '../../images/WellcomePage/wellcome_tab.jpg';
import BgTab2x from '../../images/WellcomePage/wellcome2x_tab.jpg';
import BgMob from '../../images/WellcomePage/wellcome_mob.jpg';
import BgMob2x from '../../images/WellcomePage/wellcome2x_mob.jpg';

export const Wrapper = styled.div`
  min-height: 100vh;
  background-image: url(${BgMob});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  /* max-width: 1600px; */

  text-align: center;
  align-content: 'center';

  color: #fafafa;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${BgMob2x});
  }

  @media (min-width: 768px) {
    background-image: url(${BgTab});
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${BgTab2x});
    }
  }

  @media (min-width: 1440px) {
    background-image: url(${BgDesk});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${BgDesk2x});
    }
  }
`;

export const Container = styled.div`
  padding-top: 275px;
  padding-bottom: 261px;
  width: 305px;

  margin: 0 auto;

  @media (min-width: 768px) {
    width: 505px;
    padding-top: 342px;
    padding-bottom: 342px;
  }

  @media (min-width: 1440px) {
    width: 540px;
    padding-top: 214px;
    padding-bottom: 216px;
  } ;
`;

export const Logo = styled.img`
  height: 54px;
  width: 54px;

  @media (min-width: 768px) {
    height: 68px;
    width: 68px;
  }
`;

export const H1 = styled.h1`
  padding-top: 24px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;

  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 28px;

    padding-top: 44px;
  }

  @media (min-width: 1440px) {
    font-size: 28px;
    line-height: 28px;
  } ;
`;

export const P = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  text-align: center;

  letter-spacing: -0.02em;
  margin-top: 14px;
  margin-bottom: 44px;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 40px;
  }

  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 24px;
  } ;
`;

export const StyledLink = styled(Link)`
  &:hover {
    background-color: #22252a;
  }

  color: rgb(255, 255, 255);
  border-radius: 24px 44px;

  border: none;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  background-color: #8baa36;

  ${'' /* height: 45px; */}
  padding: 12px 24px;
  width: 132px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    width: 184px;
    ${'' /* height: 67px; */}
    padding: 22px 44px;
    font-size: 16px;
    line-height: 24px;
  }

  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
    ${'' /* height: 67px; */}
    width: 184px;
  } ;
`;

export const StyledLinkTransp = styled(Link)`
  &:hover {
    border: 2px solid #8baa36;
    color: #8baa36;
  }
  margin-left: 12px;
  /* margin-left: 18px; */
  background-color: transparent;
  color: rgb(255, 255, 255);
  border-radius: 24px 44px;
  border: 2px solid rgb(250, 250, 250);

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  ${'' /* height: 45px; */}
  padding: 12px 24px;
  width: 132px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    width: 141px;
    ${'' /* height: 67px; */}
    padding: 22px 42px;

    font-size: 16px;
    line-height: 24px;

    margin-left: 18px;
  }

  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
    /* height: 67px; */

    width: 141px;
  } ;
`;
