import styled from "styled-components";
import notFoundSearchMob from "../../../images/SearchPage/search_not_found_mob_1x.png"
import notFoundSearchMobRetina from "../../../images/SearchPage/search_not_found_mob_2x.png"
import notFoundSearchTab from '../../../images/SearchPage/search_not_found_tab_1x.png';
import notFoundSearchTabRetina from '../../../images/SearchPage/search_not_found_tab_2x.png';
import notFoundSearchDesk from '../../../images/SearchPage/search_not_found_desk_1x.png';
import notFoundSearchDeskRetina from '../../../images/SearchPage/search_not_found_desk_2x.png';

export const SearchListWrap = styled.div`
  padding-bottom: 6.25rem;
  @media screen and (min-width: 768px) {
  padding-bottom: 12.5rem;
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
`

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

export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    width: calc(100% - 96px) / 2;
  }
  @media screen and (min-width: 1440px) {
    width: calc(100% - 240px) / 4;
  }
`;

export const RecipeTitle = styled.p`
  position: absolute;
  margin: 0 auto;
  top: auto;
  left: 1.125rem;
  right: 1.125rem;
  bottom: 1.625rem;
  z-index: 1;
  text-align: start;
  padding-left: 1rem;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #3e4462;
  line-height: 1.25;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  background-color: #ffffff;
  border-radius: 8px;

  height: 3.25rem;
  width: 19.19rem;
  line-height: 3.25rem;
  @media screen and (min-width: 768px) {
    width: 18.75rem;
  }
  @media screen and (min-width: 1440px) {
    width: 16.75rem;
  }
`;

export const RecipeWrap = styled.li`
  position: relative;
`;

