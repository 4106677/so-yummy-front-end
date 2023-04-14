import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const FooterNav = styled.nav`
  width: 89px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  @media (min-width: 768px) {
    margin: 0;
    justify-content: flex-start;
  }
  @media (min-width: 1440px) {
    margin-right: 235px;
  }
`;
export const FooterNaviLink = styled(NavLink)`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: white;
    &:hover{
      color: #8baa36;
    }
    &:target{
      color: #8baa36;
    }
    margin-bottom 14px;
      &:last-child{
    margin-bottom: 0;
  }
    @media(min-width: 768px){
  }
  @media(min-width: 768px){
    margin: 0;
  }
`;
