import styled from 'styled-components';
import Box from '@mui/material/Box';
import { Tabs } from '@mui/material';

export const CategoryList = styled(Box)`
  display: flex;
  list-style-type: none;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const CategoryItem = styled(Tabs)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  color: #e0e0e0;
  cursor: pointer;
`;

// export const Title = styled.p`

// &:hover {
//       color: #8baa36;
//     },
//     &:focus {
//       color: #8baa36,
//     },
//     &:active {
//       color:#8baa36,
//     },

//   @media (min-width: 768px) {
//     font-size: 18px;
//     line-height: 18px;
//   }
// `;
