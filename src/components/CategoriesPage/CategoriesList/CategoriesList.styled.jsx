import styled from "styled-components";

export const CategoryListContainer = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const CategoryListItem = styled.li`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 1;
color: #8BAA36;
  cursor: pointer;
  margin: 0 10px;
  border-bottom: ${({ active }) => (active ? '2px solid #8BAA36' : 'none')};
`;