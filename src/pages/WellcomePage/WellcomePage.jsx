import {
  Wrapper,
  H1,
  Container,
  Btn,
  BtnTransp,
  Logo,
  P,
} from './WellcomPage.styled';
import LogoSVG from '../../images/Logo/logo.svg';

const handleClick = () => {
  console.log('Click');
};

export const WellcomePage = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Logo src={LogoSVG} alt="Logo" />
          <H1>Welcome to the app!</H1>
          <P>
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </P>
          <div>
            <Btn type="button" onClick={handleClick}>
              Registration
            </Btn>

            <BtnTransp type="button" onClick={handleClick}>
              Sign in
            </BtnTransp>
          </div>
        </Container>
      </Wrapper>
    </>
  );
};
