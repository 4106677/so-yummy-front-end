import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 5.25rem;
  }
`;
export const SubWrapper1 = styled.div`
  max-width: 50rem;
  width: 100%;
  margin-bottom: 4.5rem;

  @media screen and (min-width: 768px) {
    margin-bottom: 6.25rem;
  }
`;
export const SubWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.25rem;
`;
