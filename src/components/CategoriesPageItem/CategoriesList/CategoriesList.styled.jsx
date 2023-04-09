import styled from "styled-components";

export const CategoryListContainer = styled.div`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const CategoryList = styled.li`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 1;
color: #8BAA36;
  cursor: pointer;
  /* margin: 0 10px;
  border-bottom: ${({ active }) => (active ? '2px solid #8BAA36' : 'none')}; */
`;

export const CategoryName = styled.title``;

// export const CategoryItem = styled.ul``;