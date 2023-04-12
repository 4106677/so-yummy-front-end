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
import { useSelector, useDispatch } from 'react-redux';
import { getFavorites } from 'redux/favorite/selectors';
import { useEffect } from 'react';
import {
  fetchFavoriteRecipe,
  deleteFavoriteRecipe,
} from '../../redux/favorite/operations';

export const FavoriteList = () => {
  const navigate = useNavigate();
  const favorite = useSelector(getFavorites);
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isDesktop = useMediaQuery('(min-width: 1440px)');

  console.log(favorite);

   let items =
    favorite.length > 4 ? favorite.slice(0, 4) : favorite;
  
      const dispatch = useDispatch();

      useEffect(() => {
        dispatch(fetchFavoriteRecipe());
      }, [dispatch]);


  const handleClick = _id => {
    setTimeout(() => {
      navigate(`/recipe/${_id}`)}, 500);
  };

  const elementsMob = items.map(
    function ({ _id, title, preview, description, time }) {
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
  }
  );

  const elementsDesktop = favorite.map(
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
