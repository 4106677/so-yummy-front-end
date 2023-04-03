import styled from 'styled-components';

const COLORS = {
  accent: '#8BAA36',
  border: '#E0E0E0',
  inputBg: '#ececec',
  focused: '#cecece',
  inputText: 'rgba(0, 0, 0, .5)'
};

export const FieldWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ gap }) => gap};
`;

export const InputsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

export const Input = styled.input`
  display: block;
  width: 100%;

  margin: 0;

  font-size: 1.125rem;
  border: none;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${COLORS.inputText};
  background-color: ${COLORS.inputBg};
  border-radius: 0.375rem;
  padding: 0.825rem 0 0.825rem 1.125rem;

  &:focus-within {
    outline: 1px solid ${COLORS.focused};
  }

  &:not(:focus-within) {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    padding: 1rem 0 1rem 1.125rem;
  }
`;

export const XCloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;

  border: none;
  background-color: transparent;
  transition: transform 200ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.15);
  }
`;
