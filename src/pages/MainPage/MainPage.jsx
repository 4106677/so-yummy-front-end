import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

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
import { ChooseYourBreakfast } from '../../components/ChooseYourBreakfast/ChooseYourBreakfast';
import { ButtonOthCtgWrap } from 'components/ButtonOthCtg/ButtonOthCtg.styled';
import { ButtonSkew } from 'components/ButtonSkew/ButtonSkew';

import { PreviewCategories } from '../../components/PreviewCategories/PreviewCategories';

import { SearchForm } from '../../components/SearchFormMain/SearchFormMain';



export const MainPage = () => {
  
  const navigate = useNavigate();
  

  const onClick = e => {
    navigate('/categories');
  };

 
  

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
              <ChooseYourBreakfast />
              <SearchForm styled={'black'}  />
            </MainPageDiv>
          </Container>
        </MainPageBg>
        <Container>
          <PreviewCategories />
          <ButtonOthCtgWrap>
            <Link
              to="/categories/beef"
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
    </>
  );
};
