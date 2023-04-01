import {
  Wrapper,
  H1,
  Container,
  Btn,
  BtnFill,
  BCover,
  Logo,
} from './WellcomPage.styled';
import LogoSVG from '../../images/Logo/logo.svg';

export const WellcomePage = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Logo src={LogoSVG} alt="Logo" />
          <H1>Welcome to the app!</H1>
          <p>
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </p>
          <Btn type="button">Registration</Btn>

          <BtnFill type="button">Sign in</BtnFill>
        </Container>
      </Wrapper>
    </>
  );
};
