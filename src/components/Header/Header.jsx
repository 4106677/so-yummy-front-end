import {
  HeaderStyled,
  HeaderStyledLogoLink,
  HeaderStyledNav,
  HeaderStyledNavLink,
  HeaderStyledUser,
  HeaderStyledUserText,
} from './Header.styled';
import { HeaderLogo } from './HeaderIcons';
import { RiSearchLine } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import { BurgerMenu } from './BurgerMenu';

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <HeaderStyledLogoLink to={'/'}>
          <HeaderLogo />
        </HeaderStyledLogoLink>
    <HeaderStyledNav>
          <HeaderStyledNavLink to={'categories'}>
            Categories
          </HeaderStyledNavLink>
          <HeaderStyledNavLink to={'add'}>Add recipes</HeaderStyledNavLink>
          <HeaderStyledNavLink to={'my'}>My recipes</HeaderStyledNavLink>
          <HeaderStyledNavLink to={'favorite'}>Favorites</HeaderStyledNavLink>
          <HeaderStyledNavLink to={'shopping-list'}>
            Shopping list
          </HeaderStyledNavLink>
          <HeaderStyledNavLink to={'search'}>
            <RiSearchLine />
          </HeaderStyledNavLink>
        </HeaderStyledNav>
        <HeaderStyledUser>
          <FaUserCircle />
          <HeaderStyledUserText>User-Name</HeaderStyledUserText>
        </HeaderStyledUser>
      </HeaderStyled>
      <BurgerMenu />
    </>
  );
};
