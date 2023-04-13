import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  position: absolute;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 18px;
  z-index: 3;
  right: 0;
  left: 0;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  @media (max-width: 375px) {
    max-width: 343px;
  }
  @media (max-width: 768px) {
    max-width: 704px;
  }
`;

export const HeaderStyledLogoLink = styled(Link)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  transition-property: transform;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.06);
  }
  @media (min-width: 768px) {
    margin-right: 20px;
    width: 44px;
    height: 44px;
  }
  @media (min-width: 1000px) {
    margin-right: 194px;
  }
`;

export const HeaderStyledNav = styled.nav`
  display: none;
  align-items: center;
  margin-right: auto;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const HeaderStyledNavLink = styled(NavLink)`
  font-family: 'Poppins';
  text-decoration: none;
  margin-right: 30px;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.6;
  color: #23262a;
  transition-property: color;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #8baa36;
  }
  &:last-child {
    margin-right: 0;
  }
  &.active {
    color: #8baa36;
  }
  svg {
    width: 24px;
    height: 24px;
  }
  @media (max-width: 830px) {
    margin-right: 9px;
  }
`;

export const HeaderStyledUser = styled.div`
  margin-right: 82px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition-property: color;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.06);
  }
  @media (min-width: 768px) {
    margin-right: 0px;
  }
  @media (max-width: 477px) {
    margin-right: 52px;
  }
  svg {
    width: 44px;
    height: 44px;
    margin-right: 14px;
    fill: #9c9c9c;
    @media (max-width: 477px) {
      width: 34px;
      height: 34px;
    }
  }
`;

export const HeaderStyledUserImg = styled.img`
  border-radius: 50px;
  width: 44px;
  height: 44px;
  margin-right: 14px;

  @media (max-width: 477px) {
    width: 34px;
    height: 34px;
  }
`;

export const HeaderStyledUserText = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  color: #22252a;
  margin: 0;
  @media (min-width: 478px) {
    font-size: 14px;
    line-height: 1.7;
  }
`;
