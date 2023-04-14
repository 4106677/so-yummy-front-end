import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginWithGoogle } from '../../redux/auth/slice';
import { setAuthHeader } from '../../redux/auth/operations';
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

export const WellcomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const updToken = params.token;
    if (updToken) {
      setAuthHeader(updToken);
      dispatch(loginWithGoogle(updToken));
    }
  }, [dispatch]);

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
            <StyledLink type="button" to="/register">
              Registration
            </StyledLink>

            <StyledLinkTransp type="button" to="/login">
              Sign in
            </StyledLinkTransp>
          </div>
        </Container>
      </Wrapper>
    </>
  );
};
