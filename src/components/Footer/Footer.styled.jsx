import styled from 'styled-components';

export const Foo = styled.footer`
  width: 1440px;
  height: 414px;
  margin-left: auto;
  margin-right: auto;
  background-color: #22252a;
  padding: 64px 100px 52px 100px;
  box-sizing: border-box;
  @media (max-width: 375px) {
    max-width: 343px;
  }
  @media (max-width: 768px) {
    max-width: 704px;
  }
`;
