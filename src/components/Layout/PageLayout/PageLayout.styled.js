import styled from 'styled-components';

import bgMobileWebpx1 from '../../../images/PageLayout/page-layout-bg-mobil-x1.webp';
import bgMobileWebpx2 from '../../../images/PageLayout/page-layout-bg-mobil-x2.webp';

import bgTabletWebpx1 from '../../../images/PageLayout/page-layout-bg-tablet-x1.webp';
import bgTabletWebpx2 from '../../../images/PageLayout/page-layout-bg-tablet-x2.webp';

import bgDesktopWebpx1 from '../../../images/PageLayout/page-layout-bg-desktop-x1.webp';
import bgDesktopWebpx2 from '../../../images/PageLayout/page-layout-bg-desktop-x2.webp';

import bgMobilePngx1 from '../../../images/PageLayout/page-layout-bg-mobil-x1.png';
import bgMobilePngx2 from '../../../images/PageLayout/page-layout-bg-mobil-x2.png';

import bgTabletPngx1 from '../../../images/PageLayout/page-layout-bg-tablet-x1.png';
import bgTabletPngx2 from '../../../images/PageLayout/page-layout-bg-tablet-x2.png';

import bgDesktopPngx1 from '../../../images/PageLayout/page-layout-bg-desktop-x1.png';
import bgDesktopPngx2 from '../../../images/PageLayout/page-layout-bg-desktop-x2.png';

export const Section = styled.section`
  position: relative;

  padding-top: 4.625rem;
  padding-bottom: 6.25rem;
  background-repeat: no-repeat;
  background-size: 256px 392px;
  background-position-x: 0;
  background-position-y: 111.5%;
  min-height: 100dvh;
  margin-top: 3rem;

  @media screen and (min-width: 768px) {
    padding-bottom: 12.5rem;
  }

  &.webp {
    background-image: url(${bgMobileWebpx1});
  }
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    &.webp {
      background-image: url(${bgMobileWebpx2});
    }
  }

  &.no-webp {
    background-image: url(${bgMobilePngx1});
  }
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    &.no-webp {
      background-image: url(${bgMobilePngx2});
    }
  }

  @media screen and (min-width: 768px) {
    & {
      background-size: 423px 646px;
      background-position-y: 131.5%;
    }

    &.webp {
      background-image: url(${bgTabletWebpx1});
    }
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      &.webp {
        background-image: url(${bgTabletWebpx2});
      }
    }

    &.no-webp {
      background-image: url(${bgTabletPngx1});
    }
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      &.no-webp {
        background-image: url(${bgTabletPngx2});
      }
    }
  }

  @media screen and (min-width: 1024px) {
    & {
      background-size: 558px 852px;
      background-position-y: 149.5%;
    }

    &.webp {
      background-image: url(${bgDesktopWebpx1});
    }
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      &.webp {
        background-image: url(${bgDesktopWebpx2});
      }
    }

    &.no-webp {
      background-image: url(${bgDesktopPngx1});
    }
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      &.no-webp {
        background-image: url(${bgDesktopPngx2});
      }
    }
  }
`;

export const Heading = styled.h1`
  margin-bottom: 6.25rem;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  line-height: 1;

  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;

  color: rgb(1, 67, 97);
`;

export const DecorativeSquare = styled.div`
  position: absolute;
  width: 0.5rem;
  height: 0.5rem;

  aspect-ratio: 1 / 1;
  border-radius: 3px;
  background-color: ${({ color }) => color ?? '#22252A'};
  transform: rotate(-25deg);

  &[data-1] {
    top: 0.555%;
    left: 36%;
  }

  &[data-2] {
    top: 5%;
    left: 67%;
    width: 0.35rem;
    height: 0.35rem;
  }

  &[data-3] {
    top: 3.6%;
    right: 5%;
  }

  @media screen and (min-width: 768px) {
    width: 0.875rem;
    height: 0.875rem;

    &[data-1] {
      top: 1.555%;
      left: 30%;
    }

    &[data-2] {
      width: 0.65rem;
      height: 0.65rem;

      top: 6%;
      left: 57%;
    }
  }

  @media screen and (min-width: 1240px) {
    width: 0.875rem;
    height: 0.875rem;

    &[data-1] {
      top: 2.555%;
      left: 18%;
    }

    &[data-2] {
      width: 0.65rem;
      height: 0.65rem;

      top: 7.5%;
      left: 57%;
    }

    &[data-3] {
      right: 10%;
    }
  }
`;
