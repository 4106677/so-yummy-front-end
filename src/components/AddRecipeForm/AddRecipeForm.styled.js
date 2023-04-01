import styled, { css } from 'styled-components';

export const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 6.25rem;
  }

  ${({ row }) =>
    row &&
    css`
      flex-direction: row;
    `}
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-grow: 2;

  gap: ${({ gap }) => gap ?? '1rem'};
  margin-left: ${({ ml }) => ml ?? '2rem'};
`;
