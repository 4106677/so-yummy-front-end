import { useNavigate } from 'react-router-dom';
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
import { SearchForm } from '../../components/SearchFormMain/SearchFormMain'
import { toastWarnEmptyField } from '../../services/toasts'
import { PreviewCategories } from '../../components/PreviewCategories/PreviewCategories';

export const MainPage = () => {
    const navigate = useNavigate();

    const handleOnSubmit = (query, type) => {
        if (query === '') {
        return toastWarnEmptyField(query)
        } else {
        navigate(`/search?query=${query}&type=${type}`);
    }
  
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
              <СhooseYourBreakfast />
              <SearchForm styled={'black'} handleOnSubmit={handleOnSubmit} />
            </MainPageDiv>
          </Container>
        </MainPageBg>
        <Container>
          <PreviewCategories />
        </Container>
      </ColorWrap>
    </>
  );
};
