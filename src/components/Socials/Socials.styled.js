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

  gap: 1.25rem;
`;
export const ListItem = styled.li``;

export const Link = styled.a`
  display: block;
  transition: transform 200ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.15);
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
  width: 1.625rem;
  height: 1.625rem;

  fill: ${({ theme }) => (theme === 'light' ? '#8BAA36' : '#ffffff')};
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
