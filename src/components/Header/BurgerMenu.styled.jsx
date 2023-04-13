import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import BurgerMenuBackground320 from '../../images/Header/burgermenubackground320.png';
import BurgerMenuBackground320X2 from '../../images/Header/burgermenubackground320x2.png';
import BurgerMenuBackground480 from '../../images/Header/burgermenubackground480.png';
import BurgerMenuBackground480X2 from '../../images/Header/burgermenubackground480x2.png';

export const BurgerMenuStyles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '24px',
    height: '16px',
    right: '33px',
    top: '32px',
  },
  bmBurgerBars: {
    background: '#22252A',
  },
  bmCrossButton: {
    height: '14px',
    width: '14px',
    top: '32px',
    right: '32px',
  },
  bmCross: {
    background: '#22252A',
  },
  bmMenuWrap: {
    height: '100%',
    width: '100%',
  },
  bmMenu: {
    background: '#EBF3D4',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: '184px',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

export const BurgerMenuContainer = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
`;

export const BurgerMenuBackgroundContainer = styled.div`
  background-image: url(${BurgerMenuBackground320});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right 0 bottom 0;
  position: absolute;
  width: 321px;
  height: 190px;
  bottom: 0;
  right: 0;
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${BurgerMenuBackground320X2});
  }

  @media (min-width: 478px) {
    background-image: url(${BurgerMenuBackground480});
    width: 591px;
    height: 190px;
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${BurgerMenuBackground480X2});
    }
  }
`;

export const BurgerMenuLogoLink = styled(Link)`
  position: absolute;
  top: 18px;
  left: 32px;
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
    width: 44px;
    height: 44px;
  }
`;

export const BurgerMenuStyledNavLink = styled(NavLink)`
  position: relative;
  z-index: 1;
  font-family: 'Poppins';
  text-decoration: none;
  margin-bottom: 32px;
  line-height: 1.6;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #22252a;
  transition-property: color;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #8baa36;
  }
  @media (min-width: 478px) {
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 40px;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
  &.active {
    color: #8baa36;
  }
  svg {
    width: 18px;
    height: 18px;
    margin-right: 8px;
    @media (min-width: 478px) {
      width: 21px;
      height: 21px;
    }
  }
`;
