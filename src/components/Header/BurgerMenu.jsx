import { fallDown as Menu } from 'react-burger-menu';
import {
  BurgerMenuStyles,
  BurgerMenuContainer,
  BurgerMenuLogoLink,
  BurgerMenuStyledNavLink,
  BurgerMenuBackgroundContainer,
} from './BurgerMenu.styled';
import { useState } from 'react';
import { BurgerIcon, HeaderLogo, CrossIcon } from './HeaderIcons';
import { RiSearchLine } from 'react-icons/ri';

export const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = state => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <BurgerMenuContainer>
      <Menu
        customBurgerIcon={<BurgerIcon />}
        customCrossIcon={<CrossIcon />}
        right
        isOpen={menuOpen}
        onStateChange={state => handleStateChange(state)}
        styles={BurgerMenuStyles}
      >
        <BurgerMenuLogoLink onClick={() => closeMenu()} to={'/'}>
          <HeaderLogo />
        </BurgerMenuLogoLink>
        <BurgerMenuStyledNavLink onClick={() => closeMenu()} to={'categories'}>
          Categories
        </BurgerMenuStyledNavLink>
        <BurgerMenuStyledNavLink onClick={() => closeMenu()} to={'add'}>
          Add recipes
        </BurgerMenuStyledNavLink>
        <BurgerMenuStyledNavLink onClick={() => closeMenu()} to={'my'}>
          My recipes
        </BurgerMenuStyledNavLink>
        <BurgerMenuStyledNavLink onClick={() => closeMenu()} to={'favorite'}>
          Favorites
        </BurgerMenuStyledNavLink>
        <BurgerMenuStyledNavLink
          onClick={() => closeMenu()}
          to={'shopping-list'}
        >
          Shopping list
        </BurgerMenuStyledNavLink>
        <BurgerMenuStyledNavLink onClick={() => closeMenu()} to={'search'}>
          <RiSearchLine />
          Search
        </BurgerMenuStyledNavLink>
        <BurgerMenuBackgroundContainer />
      </Menu>
    </BurgerMenuContainer>
  );
};
