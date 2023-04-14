import styled from 'styled-components';

export const Wrapper = styled.aside`
  width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 20rem;
  }
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1;

  letter-spacing: -0.015rem;
  color: #3e4462;

  margin-bottom: ${({ titleGap }) => titleGap};
`;

export const ListItem = styled.li`
  display: block;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    flex-shrink: 0;
    width: 50%;
  }
`;

export const RecipeList = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: row;
    overflow-x: auto;

    scroll-snap-type: x mandatory;
    scroll-snap-align: start;

    &::-webkit-scrollbar {
      width: 0 !important;
    }
  }
`;
