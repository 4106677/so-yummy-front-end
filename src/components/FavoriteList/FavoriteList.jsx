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
  NotFoundPhoto,
  NotFoundWrap,
  NotFoundText,
  FavoriteListWrap,
} from './FavoriteList.styled';
import useMediaQuery from 'components/Hooks/useMediaQuery';
import { useSelector, useDispatch } from 'react-redux';
import { getFavorites } from 'redux/favorite/selectors';
import { useEffect } from 'react';
import {
  fetchFavoriteRecipe,
  deleteFavoriteRecipe,
} from '../../redux/favorite/operations';
import { Link } from "react-router-dom";

export const FavoriteList = () => {
  const favorite = useSelector(getFavorites);
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isDesktop = useMediaQuery('(min-width: 1440px)');
  
      const dispatch = useDispatch();

      useEffect(() => {
        dispatch(fetchFavoriteRecipe());
      }, [dispatch]);
  
    let items = favorite.length > 4 ? favorite.slice(0, 4) : favorite;


  const elementsMob = items.map(function ({
    _id,
    title,
    preview,
    description,
    time,
  }) {
    return (
      <FavoriteCard key={_id}>
        <FavoriteImage src={preview} alt="dish" />
        <FavoriteTextPartWrap>
          <FavoriteTitle>{title}</FavoriteTitle>
          <FavoriteDescription>{description}</FavoriteDescription>
          <FavoriteTimeWrap>
            <Time>{time ? time : 20} min</Time>
            <BasketWrap
              type="button"
              onClick={() => dispatch(deleteFavoriteRecipe(_id))}
            >
              <BasketSvg />
            </BasketWrap>
          </FavoriteTimeWrap>
        </FavoriteTextPartWrap>
      </FavoriteCard>
    );
  });

  const elementsDesktop = items.map(
    ({ _id, title, preview, description, time, instructions }) => (
      <FavoriteCard key={_id}>
        <FavoriteImage src={preview} alt="dish" />
        <FavoriteTextPartWrap>
          <div>
            <FavoriteTitle>{title}</FavoriteTitle>
            <BasketWrap
              type="button"
              onClick={() => dispatch(deleteFavoriteRecipe(_id))}
            >
              {isDesktop ? <BasketSvg /> : <BasketSvgWhite />}
            </BasketWrap>
          </div>
          <FavoriteDescription>{description}</FavoriteDescription>
          <FavoriteInstraction>{instructions}</FavoriteInstraction>
          <FavoriteTimeWrap>
            <Time>{time ? time : 20} min</Time>
            <Link
              to={`/recipe/${_id}`}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <FavoriteBtn>See recipe</FavoriteBtn>
            </Link>
          </FavoriteTimeWrap>
        </FavoriteTextPartWrap>
      </FavoriteCard>
    )
  );

  return (
    <FavoriteListWrap>
      {favorite.length !== 0 ? (
        <FavoriteItems>
          {isMobile ? elementsMob : elementsDesktop}
        </FavoriteItems>
      ) : (
        <NotFoundWrap>
          <NotFoundPhoto></NotFoundPhoto>
          <NotFoundText>You don't have favorite recipes...</NotFoundText>
        </NotFoundWrap>
      )}
    </FavoriteListWrap>
  );
};
