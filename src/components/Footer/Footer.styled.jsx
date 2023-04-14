import styled from 'styled-components';
import footerBgImage from 'images/Footer/footer-bg-image-desktop-x1.png';

export const FooterSection = styled.footer`
  max-width: 768px;
  height: 435px;
  margin-left: auto;
  margin-right: auto;
  background-color: #22252a;
  padding: 28px 86px 18px 86px;
  box-sizing: border-box;
  @media (min-width: 768px) {
    max-width: 1440px;
    padding: 50px 32px 24px 32px;
  }
  @media (min-width: 1440px) {
    min-width: 1440px;
    padding: 64px 100px 0px;
  }
`;

export const FooterWrap = styled.div`
  width: 100vw;
  background-color: #22252a;
`;

export const ARRdiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: 28px;
  padding-bottom: 28px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-image: url(${footerBgImage});
  background-position: bottom right;
  background-repeat: no-repeat;
`;
export const ARR = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: -0.01em;
  color: #22252a;
  opacity: 0.5;
  margin-right: 40px;
`;

export const ToS = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: -0.01em;
  color: #22252a;
  opacity: 0.5;
`;
