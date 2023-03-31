import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 18px;
  left: 50px;
  right: 50px;
  z-index: 3;
`;

export const HeaderStyledLogoLink = styled(Link)`
margin-right: 194px;
  display: flex;
  align-items: center;
  transition-property: transform;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.06);
  }
`;
