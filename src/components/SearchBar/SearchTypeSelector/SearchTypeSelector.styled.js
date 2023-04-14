import styled from "styled-components";


export const Label = styled.label`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  @media (min-width: 768px) {
    font-weight: 500;
    font-size: 14px;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const SelectWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  gap: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  @media (min-width: 1440px) {
    margin-top: 1.75rem;
  }
  @media (min-width: 1440px) {
    margin-top: 1.69rem;
    gap: 1.125rem;
  }
`;
/*export const SelectForm = styled.select`
  background-color: #ececec;
  outline: none;
  border-radius: 6px 6px 6px 6px;
  padding-left: 0.875rem;
  padding-right: 0.9375rem;

  font-family: 'Poppins';
  height: 2rem;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;

  width: 146px;

  @media (min-width: 768px) {
    width: 10.9375rem;
    height: 2.31rem;
    background-color: #d9d9d9;
  }
  @media (min-width: 1440px) {
    width: 12.375rem;
    height: 3.06rem;
  }
`;

export const Option = styled.option`
  font-family: 'Poppins';
  font-style: normal;

  background: #fafafa;
  border-radius: 6px 6px 6px 6px;
  color: #000000;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;*/
