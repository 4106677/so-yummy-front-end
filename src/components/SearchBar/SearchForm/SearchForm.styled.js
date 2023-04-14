import styled from "styled-components";
import { Form, Field } from "formik";

export const FormWrap = styled(Form)`
  width: 18.4375rem;
  position: relative;
  align-item: center;
  justify-content: center;
  flex-wrap: nowrap;
  display: flex;
  margin: 0 auto;
  border-radius: 24px 44px;
  @media (min-width: 768px) {
    width: 22.625rem;
  }
  @media (min-width: 1440px) {
    width: 31.875rem;
  }
`;

 export const BtnSearch = styled.button`
   &:hover {
     background-color: #22252a;
     color: #fafafa;
   }

   color: rgb(255, 255, 255);

   border: none;
   font-family: 'Poppins';
   background-color: #8baa36;
   border-radius: 24px 44px;

   position: absolute;
   right: 0;

   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 1.5;
   height:3.3125rem;
   width: 7.0625rem;
   @media (min-width: 768px) {
     height: 3.5625rem;
     width: 10.0625rem;
   }
   @media (min-width: 1440px) {
     height: 4.375rem;
   }
 `;

export const Input = styled(Field)`
  border: 1px solid #f0f0f0;
  outline: none;
  border-radius: 24px 44px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;

  background: #fafafa;

  padding: 0 0 0 32px;
  height: 3.3125rem;
  width: 16.4375rem;

  &::placeholder {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    height: 3.5625rem;
    width: 20.25rem;
    padding: 0 0 0 38px;
    font-size: 14px;

  }

  @media (min-width: 1440px) {
    height: 4.375rem;
    width: 28.875rem;
    padding: 0 0 0 48px;
    font-size: 16px;

    &::placeholder {
      font-size: 20px;
    }
  }
`;