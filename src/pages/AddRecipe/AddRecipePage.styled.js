import styled from 'styled-components';

export const Section = styled.section`
  // temp
  padding-top: 4.625rem;
`;

export const Container = styled.div`
  max-width: 1440px;
  padding: 0 1rem;

  @media screen and (min-width: 768px) {
    padding: 0 2rem;
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
