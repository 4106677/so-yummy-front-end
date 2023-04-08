import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';
import { Container } from 'components/Container/Container';
import {
  MainPageBg,
  MainPageDiv,
  MainPageH1,
  MainPageText,
  SpanGr,
  ColorWrap,
} from './MainPage.styled';
import { СhooseYourBreakfast } from '../../components/СhooseYourBreakfast/СhooseYourBreakfast';
import { ButtonOthCtgWrap } from 'components/ButtonOthCtg/ButtonOthCtg.styled';
import { ButtonSkew } from 'components/ButtonSkew/ButtonSkew';
import { toastWarnEmptyField } from '../../services/toasts';
import { PreviewCategories } from '../../components/PreviewCategories/PreviewCategories';

import { SearchForm } from '../../components/SearchFormMain/SearchFormMain';
import { Footer } from 'components/Footer/Footer';
import {
  getPopular,
  getFullCategoryList,
} from '../../redux/mainRecipes/selectors';
import {
  getPopularRecipes,
  getCategoryList,
} from 'redux/mainRecipes/operations';

export const MainPage = () => {
  const popularRecipes = useSelector(getPopular);
  console.log(popularRecipes);
  const categories = useSelector(getFullCategoryList);
   console.log(categories);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClick = e => {
    navigate('/categories');
  };

  const handleOnSubmit = (query, type) => {
    if (query === '') {
      return toastWarnEmptyField(query);
    } else {
      navigate(`/search?query=${query}&type=${type}`);
    }
  };

  useEffect(() => {
    
      dispatch(getPopularRecipes());
    
  }, [dispatch]);

 useEffect(() => {
   dispatch(getCategoryList());
 }, [dispatch]);


  return (
    <>
      <ColorWrap>
        <MainPageBg>
          <Container>
            <MainPageDiv>
              <MainPageH1>
                <SpanGr>So</SpanGr>Yummy
              </MainPageH1>
              <MainPageText>
                "What to cook?" is not only a recipe app, it is, in fact, your
                cookbook. You can add your own recipes to save them for the
                future.
              </MainPageText>
              <СhooseYourBreakfast />
              <SearchForm styled={'black'} handleOnSubmit={handleOnSubmit} />
            </MainPageDiv>
          </Container>
        </MainPageBg>
        <Container>
          <PreviewCategories />
          <ButtonOthCtgWrap>
            <Link
              to="/byCategory/beef"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <ButtonSkew
                type={'button'}
                fn={onClick}
                styled={'other'}
                text={'Other categories'}
              />
            </Link>
          </ButtonOthCtgWrap>
        </Container>
      </ColorWrap>
      <Footer />
    </>
  );
};
