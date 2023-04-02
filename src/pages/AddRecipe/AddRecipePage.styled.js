import styled from 'styled-components';

export const Section = styled.section`
  // temp
  padding-top: 4.625rem;
  padding-bottom: 6.25rem;

  @media screen and (min-width: 768px) {
    padding-bottom: 12.5rem;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 6.25rem;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 1;

  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;

  color: #001833;
`;

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
