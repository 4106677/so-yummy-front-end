import styled from "styled-components";
import notFoundSearchMob from "../../../images/SearchPage/search_not_found_mob_1x.png"
import notFoundSearchMobRetina from "../../../images/SearchPage/search_not_found_mob_2x.png"
import notFoundSearchTab from '../../../images/SearchPage/search_not_found_tab_1x.png';
import notFoundSearchTabRetina from '../../../images/SearchPage/search_not_found_tab_2x.png';
import notFoundSearchDesk from '../../../images/SearchPage/search_not_found_desk_1x.png';
import notFoundSearchDeskRetina from '../../../images/SearchPage/search_not_found_desk_2x.png';

export const ListWrap = styled.ul`
text-align: center;`

export const NotFoundPhoto = styled.div`
  background-size: cover;
  display: inline-block;
  height: 133px;
  width: 208px;
  background-repeat: no-repeat;
  background-image: url(${notFoundSearchMob});
  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${notFoundSearchMobRetina});
  }

  @media screen and (min-width: 768px) {
    height: 225px;
    width: 350px;
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