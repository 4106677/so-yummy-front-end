import styled from 'styled-components';

export const FooterSection = styled.footer`
  max-width: 375px;
  height: 435px;
  margin-left: auto;
  margin-right: auto;
  background-color: #22252a;
  padding: 28px 86px 18px 86px;
  box-sizing: border-box;
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
`;

export const ARRdiv = styled.div`
    // position: relative;
    width: 228px;
    // height: 66px;
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
/* identical to box height, or 100% */

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
/* identical to box height, or 100% */

letter-spacing: -0.01em;

color: #22252A;

opacity: 0.5;
`
