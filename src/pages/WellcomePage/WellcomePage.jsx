import {
  Wrapper,
  H1,
  Container,
  StyledLink,
  StyledLinkTransp,
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
            <StyledLink type="button" onClick={handleClick} to="/register">
              Registration
            </StyledLink>

            <StyledLinkTransp type="button" onClick={handleClick} to="/signin">
              Sign in
            </StyledLinkTransp>
          </div>
        </Container>
      </Wrapper>
    </>
  );
};
