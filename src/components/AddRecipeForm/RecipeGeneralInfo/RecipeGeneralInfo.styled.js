import styled from 'styled-components';

export const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .mobile {
    margin-bottom: 2rem;
    margin-inline: auto;
  }

  .general-info {
    font-size: 0.875rem;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;

    .general-info {
      font-size: 1rem;
    }
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-grow: 2;

  gap: ${({ gap }) => gap ?? '1rem'};

  @media screen and (min-width: 768px) {
    margin-left: ${({ ml }) => ml ?? '2rem'};
  }
`;
