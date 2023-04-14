import styled from 'styled-components';

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.65rem;

  width: 6.25rem;
  border: 1px solid rgba(51, 51, 51, 0.3);
  border-radius: 18px;

  @media screen and (min-width: 768px) {
    padding: 0.25rem 1rem;
    width: 7.25rem;
  }
`;

export const CounterButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;

  & .plus {
    opacity: 0.3;
  }

  & path {
    transition: stroke 200ms;
  }

  &:active path {
    stroke: #8baa36;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const Quantity = styled.strong`
  font-family: Inter;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.5;
  color: #333333;
`;
