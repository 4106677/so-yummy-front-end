import styled from "styled-components";

export const ShopWrapper = styled.div`
  padding: 10px;
  margin-top: 3.125rem;

  display: flex;
  justify-content: space-between;

  background-color: #8baa36;

  border-radius: 8px;
  @media (min-width: 768px) {
    padding: 16px 20px;
  }
  @media (min-width: 1440px) {
    padding: 17px 40px;
  }
`;

export const ShopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;

  @media (min-width: 768px) {
    gap: 4.875rem;
  }
  @media (min-width: 1440px) {
    gap: 8.875rem;
  }
`;

export const ShopTitle = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;

  color: #fafafa;

  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    line-height: 1.44;
  }
`;