import styled from 'styled-components';

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
    max-width: 1440px;
  }
`;

export const ARRdiv = styled.div`
    width: 228px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 28px;
    margin-bottom: 28px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
`
export const ARR = styled.span`
 font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 10px;
letter-spacing: -0.01em;
color: #22252A;
opacity: 0.5;
`

export const ToS = styled.span`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 10px;
letter-spacing: -0.01em;
color: #22252A;
opacity: 0.5;
`
