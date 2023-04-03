import styled, { css } from 'styled-components';

// icons
import { ReactComponent as FacebookSvgIcon } from '../../images/icons/facebook.svg';
import { ReactComponent as YouTubeSvgIcon } from '../../images/icons/youtube.svg';
import { ReactComponent as TwitterSvgIcon } from '../../images/icons/twitter.svg';
import { ReactComponent as InstagramSvgIcon } from '../../images/icons/instagram.svg';

export const Wrapper = styled.div``;
export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 1rem;
  padding-bottom: 1rem;

  gap: 1.25rem;
  border-radius: 4px;
  transition: background-color 350ms;

  &:hover {
    background-color: #8baa36;

    & svg {
      color: #ffffff;
    }
  }
`;
export const ListItem = styled.li``;

export const Link = styled.a`
  display: block;
  transition: transform 200ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.25);
  }
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1;

  letter-spacing: -0.015rem;
  color: #3e4462;

  margin-bottom: ${({ titleGap }) => titleGap};
`;

const sharedIconStyles = css`
  display: block;
  width: 1.625rem;
  height: 1.625rem;

  /* color: ${({ theme }) => (theme === 'light' ? '#8BAA36' : '#ffffff')}; */
  color: #8baa36;
`;

const FacebookIcon = styled(FacebookSvgIcon)`
  ${sharedIconStyles}
`;
const YouTubeIcon = styled(YouTubeSvgIcon)`
  ${sharedIconStyles}
`;
const TwitterIcon = styled(TwitterSvgIcon)`
  ${sharedIconStyles}
`;
const InstagramIcon = styled(InstagramSvgIcon)`
  ${sharedIconStyles}
`;

export const defaultIconsSet = [FacebookIcon, YouTubeIcon, TwitterIcon, InstagramIcon];
