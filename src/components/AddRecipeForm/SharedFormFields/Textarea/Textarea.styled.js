import styled from 'styled-components';

export const Textarea = styled.textarea`
  display: block;
  width: 100%;
  min-height: 9.625rem;
  height: 100%;
  padding: 0.625rem 1rem;

  border: none;
  border-radius: 6px;

  background-color: #ececec;
  resize: none;

  &:focus-within {
    outline: 1px solid #ececec;
  }
`;
