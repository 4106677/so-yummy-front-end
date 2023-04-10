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

export const ShopListWrap = styled.ul`
  margin: 0 auto;
  margin-top: 32px;
  text-align: center;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(1, 1fr);
  gap: 3.0625rem;

  @media screen and (min-width: 768px) {
    margin-top: 51px;
    gap: 5.44rem;
  }
`;

export const ShopItem = styled.li`
  display: flex;
  justify-content: space-between;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 100%;
    position: absolute;
    border-bottom: 1px solid #e0e0e0;
    bottom: -24px;
  }

  @media screen and (max-width: 767px) {
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    align-items: top;
    &::after {
      bottom: -42px;
    }
  }
`;

export const ShopImg = styled.img`
  width: 60px;
  height: 60px;
  background: #ebf3d4;
  border-radius: 6px;
  padding: 6px;
  margin-right: 0;
  margin-left: 8px;

  @media screen and (min-width: 768px) {
    width: 93px;
    height: 97px;
    border-radius: 8px;
    padding: 8px 6px;
    margin-left: 0px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 40px;
  }
`;

export const ShopName = styled.p`
  margin-left: 10px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;

  color: #3e4462;

  @media screen and (min-width: 768px) {
    margin-left: 16px;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const ShopQuantity = styled.div`
  width: 37px;
  height: 23px;
  margin-left: auto;
  background: #8baa36;
  border-radius: 4px;
  text-align: center;
  line-height: 23px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;

  text-align: center;

  color: #fafafa;

  @media screen and (min-width: 768px) {
    width: 68px;
    height: 35px;
    font-size: 18px;
    line-height: 35px;
  }

`;

export const ShopBtn = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 30px;
  margin-left: 50px;

  @media screen and (min-width: 768px) {
    width: 12px;
    height: 12px;
    margin-top: 0;
    margin-right: 50px;
    margin-left: 115px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 73px;
    margin-left: 179px;
  }
`;