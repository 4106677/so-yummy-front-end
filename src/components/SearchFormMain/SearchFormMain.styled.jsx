import { ButtonSkewStyle } from 'components/ButtonSkew/buttonSkew.styled';
import styled from 'styled-components';

export const SearchBlock = styled.div`
  width: 295px;
  height: 52px;
  background-color: '1px solid #F0F0F0';

  border-top-left-radius: 30px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 30px;
  margin: 0 16px 83px;
  border: '1px solid #F0F0F0';
  color: '#BDBDBD';
  
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  position: relative;

  @media (min-width: 768px) {
    width: 369px;
    height: 59px;
    font-size: 16px;
    line-height: 24px;
    margin: 0 16px 195px;
  }

  @media (min-width: 1440px) {
    width: 510px;
    height: 71px;
    font-size: 16px;
    line-height: 24px;
  }

  ${ButtonSkewStyle} {
    width: 113px;
    height: 52px;
    position: absolute;
    top: -0.5px;
    right: -0.5px;
  }

  @media (min-width: 768px) {
    ${ButtonSkewStyle} {
      width: 161px;
      height: 59px;
    }
  }

  @media (min-width: 1440px) {
    ${ButtonSkewStyle} {
      width: 161px;
      height: 70px;
    }
  }
`;


export const SearchIn = styled.form`
  display: flex;
  justify-content: flex-end;
  border-radius: 30px, 80px;
  height: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 80px;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 30px;
  border: 1px solid #f0f0f0;
  background-color: #fafafa;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  padding-left: 32px;
  color: rgb(189, 189, 189);
  @media (min-width: 768px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &:hover {
    border: none;
    outline: none;
  }
  &:active {
    border: none;
    outline: none;
  }
  &:focus {
    border: none;
    outline: none;
  }

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: '#BDBDBD';
  }
`;
