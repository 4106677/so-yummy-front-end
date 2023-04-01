import styled from "styled-components";

export const Label = styled.label`
font: "Poppins";
font-weight: 500;
font-size: 12px;
line-height: 1.3;`

export const SelectWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  gap: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Select = styled.select`
  width: 146px;
  background-color: #ececec;
  outline: none;
  border-radius: 6px 6px 6px 6px;
  height: 31px;
`;

export const Option = styled.option`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  background: #fafafa;
  border-radius: 6px 6px 6px 6px;
`;