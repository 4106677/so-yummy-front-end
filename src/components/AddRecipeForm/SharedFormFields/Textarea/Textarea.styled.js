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

  @media screen and (min-width: 768px) {
    width: 31.625rem;
  }
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Error = styled.p`
  position: absolute;
  bottom: -1.25rem;
  left: 0.25rem;
  font-size: 0.6rem;
  color: #f94b4b;
`;
