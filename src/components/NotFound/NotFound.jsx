import { NFtitle, NFText, NFImg, NFDivWrap } from './NotFound.styled';

export const NotFound = () => {
  return (
    <>
      <NFDivWrap>
        <NFImg />
        <NFtitle>We are sorry,</NFtitle>
        <NFText>but the page you were looking for can’t be found..</NFText>
      </NFDivWrap>
    </>
  );
};
