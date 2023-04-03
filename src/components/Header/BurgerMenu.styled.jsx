import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import BurgerMenuBackground from '../../images/Header/burgermenubackground.png';

export const BurgerMenuStyles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '24px',
    height: '16px',
    right: '33px',
    top: '32px',
  },
  bmBurgerBars: {
    background: 'black',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
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
    position: 'fixed',
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
    backgroundImage: `url(${BurgerMenuBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 0 bottom 0'
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
  @media (min-width: 478px) {
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 40px;
  }
  &:last-child {
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
