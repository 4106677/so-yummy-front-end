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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 24px;
  gap: 8px;
  color: rgb(250, 250, 250);
  background: #8aa936;
  border-radius: 6px;
  cursor: pointer;
  float: right;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &:hover {
    background-color: rgb(35, 38, 42);
    border: 1px solid transparent;
    color: rgb(255, 255, 255);
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