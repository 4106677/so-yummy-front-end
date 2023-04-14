import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LogoFooterLink = styled(NavLink)`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 0.015em;
    color: #FAFAFA;
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    width: 143px;
    &:hover{
      color: #8BAA36;
    }
    @media (min-width: 768px){
        margin-left: 0px;
        margin-right: 0px;
    }
    
`
export const LogoLinkSpan = styled.span`
    margin-left: 8px;
`
export const AboutList = styled.ul`
    display: none;
    @media (min-width: 768px) {
        display: block;
        width: 378px;
        list-style: inside;
        margin-left: auto;
        margin-right: auto;
        margin-top: 24px;
        margin-right: 175px;
  }
  @media (min-width: 1440px) {
     margin-right: 159px;
     width: 418px;
  }
`

export const AboutItem = styled.li`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #FAFAFA;
  margin-bottom: 10px;
  &:last-child{
    margin-bottom: 0;
  }
  @media (min-width: 1440px){
    font-size: 18px;
    line-height: 24px;
  }
`

export const WrapperLogoAboutNav = styled.div`
  display: contents;
  @media screen and (min-width:768px) and (max-width: 1439px){
    margin-left: auto;
    margin-right: auto;
    width: 704px;
    display: flex;
    flex-wrap: wrap;
  }
`

export const WrapperLogoNavSub = styled.div`
display: contents;
@media (min-width: 1440px){
    display: flex;
    
}
`