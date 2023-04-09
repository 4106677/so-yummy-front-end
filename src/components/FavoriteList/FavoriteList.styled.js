import styled from 'styled-components';
import { ReactComponent as Basket } from "images/Favorite/basket.svg"
import { ReactComponent as BasketWhite } from 'images/Favorite/basketWhite.svg';


export const FavoriteItems = styled.ul`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(1, 1fr);
  gap: 1.125rem;
  margin-bottom: 11.9375rem;

  @media (min-width: 768px) {
    margin-bottom: 6.25rem;
    gap: 2.5rem;
  }
  @media (min-width: 1440px) {
    gap: 3.125rem;
  }
`;


export const FavoriteCard = styled.li`
  height: 152px;
  display: flex;
  background: #ffffff;
  border-radius: 8px;
  padding: 14px;

  @media (min-width: 768px) {
    height: 284px;
    padding: 28px 24px;
  }
  @media (min-width: 1440px) {
    height: 404px;
    padding: 40px;
  }
`;

export const FavoriteImage = styled.img`
  width: 124px;
  height: 124px;

  margin-right: 14px;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 228px;
    height: 232px;
    margin-right: 24px;
  }
  @media (min-width: 1440px) {
    width: 318px;
    height: 324px;
  }
`;

export const FavoriteTitle = styled.p`
  margin-bottom: 14px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  color: #3e4462;

  @media (min-width: 768px) {
    width: 350px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 24px;
  }
  @media (min-width: 1440px) {
    width: 680px;
  }
`;

export const FavoriteDescription = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 1.25;

  color: #23262a;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.3;
    margin-right: 51px;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 1.33;
    margin-right: 123px;
  }
`;
export const FavoriteTextPartWrap = styled.div`
  position: relative;
`;

export const FavoriteTimeWrap = styled.div`
  display: flex;
  justify-content: space-between;
  bottom: 0;
`;


export const BasketSvg = styled(Basket)`
  @media (max-width: 767px) {
    width: 10px;
    height: 11px;
  }
  @media (min-width: 1440px) {
    width: 18px;
    height: 20px;
  }
`;

export const BasketSvgWhite = styled(BasketWhite)`
  @media (min-width: 768px && max-width: 1439px) {
    width: 16px;
    height: 18px;
  }
`;

export const BasketWrap = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  background: #ebf3d4;
  border-radius: 4px;
  text-align: center;
  line-height: 24px;
  right: 0;
  @media (max-width: 767px) {
    bottom: 0;
  }
  @media (min-width: 768px) {
    width: 38px;
    height: 38px;
    background: #8baa36;
    border-radius: 4px;
    line-height: 38px;
    top: 0;
  }
  @media (min-width: 1440px) {
    width: 44px;
    height: 44px;
    background: #ebf3d4;
    border-radius: 4px;
    line-height: 44px;
    top: 0;
  }
`;

export const Time = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;

  color: #3e4462;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.43;
  }

`;

export const FavoriteInstraction = styled.div`
  @media (min-width: 768px) {
    width: 350px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    margin-top: 14px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;

    color: #3e4462;
    @media (min-width: 1440px) {
      font-size: 18px;
      line-height: 1.33;
      width: 680px;
      color: #23262a;
    }
  }
`;

export const FavoriteBtn = styled.button`
  @media (min-width: 768px) {
    &:hover {
      background-color: #22252a;
      color: #fafafa;
    }

    color: rgb(255, 255, 255);
    background-color: #8baa36;

    border: none;
    font-family: 'Poppins';
    border-radius: 24px 44px;

    position: absolute;
    right: 0;
    bottom: 0;

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;

    height: 2.8125rem;
    width: 8.625rem;
  }
  @media (min-width: 1440px) {
    height: 3.375rem;
    width: 10rem;
    background-color: #22252a;
    color: #fafafa;

    &:hover {
      color: rgb(255, 255, 255);
      background-color: #8baa36;
    }
  }
`;

