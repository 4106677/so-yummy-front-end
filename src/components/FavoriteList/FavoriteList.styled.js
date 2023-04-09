import styled from 'styled-components';
import { ReactComponent as Basket } from "images/Favorite/basket.svg"

export const FavoriteItems = styled.ul`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(1, 1fr);
  gap: 1.125rem;
  margin-bottom: 11.9375rem;
`;

export const FavoriteCard = styled.li`
  height: 152px;
  display: flex;
  background: #ffffff;
  border-radius: 8px;
  padding: 14px;
`;

export const FavoriteImage = styled.img`
  width: 124px;
  height: 124px;

  margin-right: 14px;

  border-radius: 8px;
`;

export const FavoriteTitle = styled.p`
  margin-bottom: 14px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  color: #3e4462;
`;

export const FavoriteDescription = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 1.25;

  color: #23262a;
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
  width: 10px;
  height: 11px;
`;

export const BasketWrap = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  background: #ebf3d4;
  border-radius: 4px;
  text-align: center;
  line-height: 24px;
  bottom: 0;
  right: 0;
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
`;

