import styled from 'styled-components';


export const Title = styled.p`
  font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 14px;
color: #E0E0E0;
cursor: pointer;

&:hover {
      color: #8baa36;
    },
    &:focus {
      color: #8baa36,
    },
    &:active {
      color:#8baa36,
    },


  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 18px;
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


