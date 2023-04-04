// import { useNavigate } from 'react-router-dom';
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
import {SearchForm} from '../../components/SearchFormMain/SearchFormMain'
import { Footer } from 'components/Footer/Footer';

export const MainPage = () => {
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
              <SearchForm styled={'black'}  />
            </MainPageDiv>
          </Container>
        </MainPageBg>
      </ColorWrap>
      <Footer/>
    </>
  );
};
