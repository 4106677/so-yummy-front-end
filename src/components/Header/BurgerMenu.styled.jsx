import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const AppBarMobileNavStyles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '24px',
    height: '16px',
    right: '36px',
    top: '32px',
  },
  bmBurgerBars: {
    background: 'black',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    width: '100%',
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

export const AppBarMobileNavContainer = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
`;
