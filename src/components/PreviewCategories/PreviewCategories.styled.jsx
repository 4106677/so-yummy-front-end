import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const TitlePrew = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;
  letter-spacing: '-0.02em';
  color: '#001833';
  margin-bottom: 32px;
  text-transform: capitalize;
  @media (min-width: 768px) {
    font-size: 44px;
    line-height: 44px;
  }
  @media (min-width: 1440px) {
    font-size: 44px;
    line-height: 44px;
  }
`;

export const BtnCategories = styled(NavLink)`
  border-radius: 6px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: '#FAFAFA';
  padding: 10px 24px;
  background-color: '#8BAA36';
  cursor: pointer;
  float: right;
  transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)';
  &:hover {
    background-color: '#23262A';
  }
`;



export const CardWrapper = styled.ul`
 
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 0;
  @media (min-width: 768px) {
    gap: 32px;
  }
  @media (min-width: 1440px) {
    gap: 14px;
  }
`;
export const CategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export const CategoryItem = styled.li``;