import { HeaderStyled, HeaderStyledLogoLink } from './Header.styled';
import { HeaderLogo } from './HeaderLogo';

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderStyledLogoLink to={'/'}>
        <HeaderLogo />
      </HeaderStyledLogoLink>
    </HeaderStyled>
  );
};
