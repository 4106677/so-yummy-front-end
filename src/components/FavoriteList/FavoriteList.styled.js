import styled from 'styled-components';
import { ReactComponent as Basket } from "images/Favorite/basket.svg"
import { ReactComponent as BasketWhite } from 'images/Favorite/basketWhite.svg';
import notFoundSearchMob from '../../images/SearchPage/search_not_found_mob_1x.png';
import notFoundSearchMobRetina from '../../images/SearchPage/search_not_found_mob_2x.png';
import notFoundSearchTab from '../../images/SearchPage/search_not_found_tab_1x.png';
import notFoundSearchTabRetina from '../../images/SearchPage/search_not_found_tab_2x.png';
import notFoundSearchDesk from '../../images/SearchPage/search_not_found_desk_1x.png';
import notFoundSearchDeskRetina from '../../images/SearchPage/search_not_found_desk_2x.png';

export const FavoriteListWrap = styled.div`
  padding-bottom: 0;
  @media screen and (min-width: 768px) {
    padding-bottom: 0;
  }
`;


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
  width: 100%;
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


export const ListWrap = styled.ul`
  text-align: center;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(1, 1fr);
  gap: 1.6875rem;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  @media screen and (min-width: 1440px) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(4, 1fr);
    gap: 0.875rem;
  }
`;

export const NotFoundPhoto = styled.div`
  background-size: cover;
  display: inline-block;
  height: 8.3125rem;
  width: 13rem;
  background-repeat: no-repeat;
  background-image: url(${notFoundSearchMob});
  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${notFoundSearchMobRetina});
  }

  @media screen and (min-width: 768px) {
    height: 14.0625rem;
    width: 21.875rem;
    background-image: url(${notFoundSearchTab});
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${notFoundSearchTabRetina});
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${notFoundSearchDesk});
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${notFoundSearchDeskRetina});
    }
  }
`;

export const NotFoundWrap = styled.div`
  text-align: center;
  margin-top: 3.125rem;
`;

export const NotFoundText = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #000000;
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
