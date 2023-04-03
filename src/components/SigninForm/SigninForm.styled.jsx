import { Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import imageMobile from '../../images/startPage/bgMobile@1x.png';
import imageMobileRetina from '../../images/startPage/bgMobile@2x.png';
import imageTablet from '../../images/startPage/bgTablet@1x.png';
import imageTabletRetina from '../../images/startPage/bgTablet@2x.png';
import imageDesktop from '../../images/startPage/bgDesktop@1x.png';
import imageDesktopRetina from '../../images/startPage/bgDesktop@2x.png';

import { ReactComponent as SvgAuthBlack } from '../../images/startPage/Order-food-pana.svg';
import { ReactComponent as SvgAuthWhite } from '../../images/startPage/Order-food-pana-white.svg';

import { ReactComponent as GoogleLogo } from '../../images/startPage/logo-google-icon.svg';

export const Container = styled.div`
  box-sizing: border-box;
  padding: 0 20px 118px;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  @media screen and (min-width: 768px) {
    padding: 0 134px 120px;
  }
  @media screen and (min-width: 1440px) {
    ${'' /* padding: 0 20px 122px; */}
    padding: 0 20px 153px;
  }
`;
export const MainWrapper = styled.div`
  box-sizing: border-box;
`;

export const AuthFormBox = styled.div`
  box-sizing: border-box;
`;

export const GoogleAuth = styled(GoogleLogo)`
  position: absolute;
  width: 60px;
  height: 60px;
  top: 17px;
  left: 252px;
  animation: pulse 1s infinite;
  @keyframes pulse {
    from {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }

    50% {
      -webkit-transform: scale3d(1.2, 1.2, 1.2);
      transform: scale3d(1.2, 1.2, 1.2);
    }

    to {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  @media screen and (min-width: 768px) {
    width: 80px;
    height: 80px;
    top: 18px;
    left: 379px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const FormSvgBlack = styled(SvgAuthBlack)`
  position: absolute;
  top: -222px;
  z-index: -1;
  width: 285px;
  height: 250px;
  box-sizing: border-box;
  @media screen and (min-width: 768px) {
    width: 409px;
    height: 359px;
    top: -350px;
  }
`;

export const FormSvgWhite = styled(SvgAuthWhite)`
  @media screen and (min-width: 1440px) {
    position: absolute;
    z-index: -1;
    width: 532px;
    height: 468px;
    left: -612px;
    ${'' /* bottom: 9px; */}

    bottom: -19px;
  }
`;

export const BackgroundImage = styled.div`
  background-position: 50% 0;
  background-size: cover;
  bottom: 0;
  display: inline-block;
  height: 490px;
  position: absolute;
  background-repeat: no-repeat;
  width: 100%;
  z-index: -1;
  background-image: url(${imageMobile});
  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${imageMobileRetina});
  }
  @media screen and (min-width: 768px) {
    height: 606px;
    background-image: url(${imageTablet});
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${imageTabletRetina});
    }
  }
  @media screen and (min-width: 1440px) {
    height: 42vh;
    background-image: url(${imageDesktop});
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${imageDesktopRetina});
    }
  }
`;

export const InnerBox = styled.div`
  display: block;
  box-sizing: border-box;
  position: relative;
  padding: 32px 28px 40px 28px;
  background-color: #2a2c36;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  width: 335px;
  ${'' /* max-height: 350px; */}
  max-height: 315px;
  background-color: #2a2c36;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  @media screen and (min-width: 768px) {
    padding: 44px 50px;
    width: 500px;
    ${'' /* max-height: 481px; */}
    max-height: 419px;
  }
  @media screen and (min-width: 1440px) {
    width: 500px;
    max-height: 419px;

    margin-left: 615px;
  }
`;

export const Title = styled.h2`
  ${'' /* margin: 0 0 18px 0; */}
    margin: 0 0 40px 0;
    fornt-family: 'Poppins',
  font-weight: 600;
  font-size: 24px;
  color: #fafafa;
  line-height: 1.16;
  letter-spacing: -0.02em;
  @media screen and (min-width: 768px) {
    ${'' /* margin: 0 0 32px 0; */}
        margin: 0 0 50px 0;
        font-size: 28px;
    line-height: 1.07;
  }
  @media screen and (min-width: 1440px) {
  font-size: 30px;
  }
`;

export const FormBox = styled(Form)``;
export const InputFormBox = styled.div`
  display: grid;
  gap: 12px;
  margin-bottom: 35px;
  width: 100%;
  @media screen and (min-width: 768px) {
    gap: 24px;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 30px;
  }
`;

export const InputBox = styled.div``;

export const Input = styled(Field)`
  box-sizing: border-box;
  background-color: initial;
  padding: 12px 16px 12px 40px;
  width: 100%;
  height: 45px;
  border: 1px solid hsla(0, 0%, 100%, 0.3);
  border-opacity: 0.3;
  border-radius: 6px;
  fornt-family: 'Poppins',
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  opacity: 0.8;
  outline: none;

  letter-spacing: -0.02em;
  color: #fafafa;

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :-webkit-autofill,
  :-webkit-autofill:focus {
      transition: background-color 600000s 0s, color 600000s 0s;
  }
  [data-autocompleted] {
      background-color: transparent !important;
  }
  :hover,
  :focus {
    border: 1px solid #ffffff;
    border-radius: 6px;
  }
  ::placeholder {
    color: #ffffff;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  width: 100%;
  height: 45px;
  border: none;
  border-radius: 6px;
  background-color: #8baa36;
  cursor: pointer;
  fornt-family: 'Poppins',
  font-weight: 400;
  font-size: 16px;
  line-height: 1.12;
  color: #fafafa;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #22252A;
  }
  @media screen and (min-width: 768px) {
    height: 56px;
  }
  @media screen and (min-width: 1440px) {
    height: 59px;
  }
`;

export const LinkStyled = styled(Link)`
  margin: 18px 0 0 0;
  fornt-family: 'Poppins',
  font-size: 14px;
  line-height: 1.5;
  color: #fafafa;
  text-align: center;
  display: block;
  cursor: pointer;
  text-decoration: underline;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 619px;
  }
`;
