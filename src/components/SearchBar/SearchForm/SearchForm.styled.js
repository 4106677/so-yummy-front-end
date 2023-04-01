import styled from "styled-components";
import {Form, Field} from "formik"

export const FormWrap = styled(Form)`
  padding-top: 0;
  width: 295px;
  position: relative;
  align-item: center;
  justify-content: center;
  flex-wrap: nowrap;
  margin: 0 auto;
`;

export const Input = styled(Field)`
  padding: 50px 42px;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  clip-path: inset(25% 0 25% round 15% 35% 15% 30%); 
`; 


export const BtnSearch = styled.button`
  width: 113px;
  padding: 50px 42px;
  font-weight: 16px;
  clip-path: inset(25% 0 25% round 15% 35% 15% 30%);
  border: none;
  outline: none;
  width: 113px;
  background-color: #8baa36;
  text-align: center;
  justify-content: center;
  position: absolute;
  right: 0;

  &:hover {
    background-color: #22252a;
    color: #fafafa;
  }
`;

