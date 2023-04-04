import styled from 'styled-components';

export const ErrorText = styled.p`
   {
    color: #e74a3b;
    font-size: 10px;
    line-height: 1.7;
    top: -3px;
    left: 5px;
    position: relative;
    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const SuccessText = styled.p`
  color: #3cbc81;
  font-size: 10px;
  line-height: 1.7;
  top: -3px;
  left: 5px;
  position: relative;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const WarningText = styled.p`
  color: #f6c23e;
  font-size: 10px;
  line-height: 1.7;
  top: -3px;
  left: 5px;
  position: relative;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
