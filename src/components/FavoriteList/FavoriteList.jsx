

import {
  FavoriteCard,
  FavoriteImage,
  FavoriteTitle,
  FavoriteDescription,
  FavoriteItems,
  FavoriteTimeWrap,
  BasketSvg,
  BasketWrap,
  Time,
  FavoriteTextPartWrap,
  FavoriteInstraction,
  BasketSvgWhite,
  FavoriteBtn,
} from './FavoriteList.styled';
import useMediaQuery from 'components/Hooks/useMediaQuery';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getFavorites } from 'redux/favorite/selectors';

export const FavoriteList = ({ onClick }) => {
  const navigate = useNavigate();
  const favorites = useSelector(getFavorites);
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isDesktop = useMediaQuery('(min-width: 1440px)');

  const handleClick = _id => {
    setTimeout(() => {
      navigate(`/recipe/${_id}`)}, 500);
  };

  const elementsMob = favorites.map(
    ({ _id, title, preview, description, time }) => (
      <FavoriteCard key={_id}>
        <FavoriteImage src={preview} alt="dish" />
        <FavoriteTextPartWrap>
          <FavoriteTitle>{title}</FavoriteTitle>
          <FavoriteDescription>{description}</FavoriteDescription>
          <FavoriteTimeWrap>
            <Time>{time ? time : 20} min</Time>
            <BasketWrap type="button" onClick={() => onClick(_id)}>
              <BasketSvg />
            </BasketWrap>
          </FavoriteTimeWrap>
        </FavoriteTextPartWrap>
      </FavoriteCard>
    )
  );

  const elementsDesktop = favorites.map(
    ({ _id, title, preview, description, time, instructions }) => (
      <FavoriteCard key={_id}>
        <FavoriteImage src={preview} alt="dish" />
        <FavoriteTextPartWrap>
          <div>
            <FavoriteTitle>{title}</FavoriteTitle>
            <BasketWrap type="button" onClick={() => onClick(_id)}>
              {isDesktop ? <BasketSvg /> : <BasketSvgWhite />}
            </BasketWrap>
          </div>
          <FavoriteDescription>{description}</FavoriteDescription>
          <FavoriteInstraction>{instructions}</FavoriteInstraction>
          <FavoriteTimeWrap>
            <Time>{time ? time : 20} min</Time>
            <FavoriteBtn onClick={() => handleClick(_id)}>
              See recipe
            </FavoriteBtn>
          </FavoriteTimeWrap>
        </FavoriteTextPartWrap>
      </FavoriteCard>
    )
  );

  return (
    <>
      <FavoriteItems>{isMobile ? elementsMob : elementsDesktop}</FavoriteItems>
    </>
  );
};
