import styled from "styled-components";
import notFoundSearchMob from '../../images/SearchPage/search_not_found_mob_1x.png';
import notFoundSearchMobRetina from '../../images/SearchPage/search_not_found_mob_2x.png';
import notFoundSearchTab from '../../images/SearchPage/search_not_found_tab_1x.png';
import notFoundSearchTabRetina from '../../images/SearchPage/search_not_found_tab_2x.png';
import notFoundSearchDesk from '../../images/SearchPage/search_not_found_desk_1x.png';
import notFoundSearchDeskRetina from '../../images/SearchPage/search_not_found_desk_2x.png';

export const IngredientShoppingListWrap = styled.div`
  padding-bottom: 0;
  @media screen and (min-width: 768px) {
    padding-bottom: 0;
  }
`;


export const ShopWrapper = styled.div`
  padding: 0.625rem;
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
  margin-top: 2rem;
  margin-bottom: 6.25rem;
  text-align: center;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(1, 1fr);
  gap: 3.0625rem;

  @media screen and (min-width: 768px) {
    margin-top: 51px;
    gap: 5.44rem;
    margin-bottom: 12.5rem;
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
  width: 3.75rem;
  height: 3.75rem;
  background: #ebf3d4;
  border-radius: 6px;
  padding: 6px;
  margin-right: 0;
  margin-left: 8px;

  @media screen and (min-width: 768px) {
    width: 5.8125rem;
    height: 6.0625rem;
    border-radius: 8px;
    padding: 8px 6px;
    margin-left: 0px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 2.5rem;
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
    margin-left: 1rem;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const ShopQuantity = styled.div`
  width: 2.3125rem;
  height: 1.4375rem;
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
    width: 4.25rem;
    height: 2.1875rem;
    font-size: 18px;
    line-height: 35px;
  }

`;

export const ShopBtn = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 1.875rem;
  margin-left: 3.125rem;

  @media screen and (min-width: 768px) {
    width: 0.75rem;
    height: 0.75rem;
    margin-top: 0;
    margin-right: 3.125rem;
    margin-left: 7.1875rem;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 4.5625rem;
    margin-left: 11.1875rem;
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
