import styled from 'styled-components';

export const Article = styled.article`
  display: flex;
  align-items: flex-start;

  padding-bottom: 0.875rem;
  padding-right: 0.875rem;

  border-bottom: 1px solid #7070702b;
`;
export const Wrapper = styled.div`
  margin-left: 0.625rem;
`;

export const Title = styled.h4`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.25;

  letter-spacing: -0.24px;
  color: #3e4462;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Description = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ linesToTruncate }) => linesToTruncate};
  overflow: hidden;

  font-size: 0.75rem;
  line-height: 1.33;
  letter-spacing: -0.015rem;

  color: #7e7e7e;
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;

  width: 6.5rem;
  height: 5.375rem;
  aspect-ratio: 1.223 / 1;

  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 6.375rem;
    aspect-ratio: 1.2 / 1;
  }

  @media screen and (min-width: 1024px) {
    width: 6.25rem;
    aspect-ratio: 1.14 / 1;
  }
`;
