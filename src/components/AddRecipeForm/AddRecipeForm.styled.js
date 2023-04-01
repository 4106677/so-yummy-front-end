import styled from 'styled-components';
import { Form } from 'formik';

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 2.75rem;

  @media screen and (min-width: 768px) {
    gap: 6.25rem;
  }
`;

export const SubmitFormButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-width: 8.125rem;
  width: max-content;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;

  font-family: inherit;
  font-size: 1rem;
  line-height: 1.5;

  color: #fafafa;
  background-color: #22252a;
  border: none;
  border-radius: 16px 44px;
`;
