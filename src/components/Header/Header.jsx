import {
  HeaderStyled,
  HeaderStyledLogoLink,
  HeaderStyledNav,
  HeaderStyledNavLink,
} from './Header.styled';
import { HeaderLogo } from './HeaderIcons';
import { RiSearchLine } from 'react-icons/ri';
import { BurgerMenu } from './BurgerMenu';
import { HeaderUser } from './HeaderUser';

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <HeaderStyledLogoLink to={'/'}>
          <HeaderLogo />
        </HeaderStyledLogoLink>
        <HeaderStyledNav>
          <HeaderStyledNavLink to={'categories'} >
            Categories
          </HeaderStyledNavLink>
          <HeaderStyledNavLink to={'add-recipe'}>
            Add recipes
          </HeaderStyledNavLink>
          <HeaderStyledNavLink to={'my'}>My recipes</HeaderStyledNavLink>
          <HeaderStyledNavLink to={'favorite'}>Favorites</HeaderStyledNavLink>
          <HeaderStyledNavLink to={'shopping-list'}>
            Shopping list
          </HeaderStyledNavLink>
          <HeaderStyledNavLink to={'search'}>
            <RiSearchLine />
          </HeaderStyledNavLink>
        </HeaderStyledNav>
        <HeaderUser />
      </HeaderStyled>
      <BurgerMenu />
    </>
  );
};
