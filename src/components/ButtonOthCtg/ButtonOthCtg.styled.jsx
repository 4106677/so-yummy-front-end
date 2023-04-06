import { ButtonSkewStyle } from 'components/ButtonSkew/buttonSkew.styled';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const BtnOthCtg = styled(NavLink)`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  border-radius: 30px 80px;
  color: '#22252A';
  padding: 14px 32px;
  border: 'border: 1px solid rgb(139, 170, 54)';
  transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)';
  &:hover {
    color: '#FAFAFA';
    background-color: '#8BAA36';
  }
  @media (min-width: 768px) {
    padding: 20px 52px;
    font-size: 16px;
    line-height: 24px;
  }

  @media (min-width: 1440px) {
    padding: 20px 52px;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ButtonOthCtgWrap = styled.div`
  margin: 40px 0px 100px;
  display: flex;
  justify-content: center;

  ${ButtonSkewStyle} {
    border: 1px solid rgb(139, 170, 54);
    color: '#22252A';
    &:hover {
      color: '#FAFAFA';
    }
  }

  @media (min-width: 768px) {
    margin: 40px 0px 100px;
  }

  @media (min-width: 1440px) {
    margin: 14px 0px 118px;
  }
`;
