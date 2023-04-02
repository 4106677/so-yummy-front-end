import { fallDown as Menu } from 'react-burger-menu';
import { AppBarMobileNavStyles, AppBarMobileNavContainer } from './BurgerMenu.styled';
import { useState } from 'react';
import { BurgerIcon } from './HeaderLogo';


export const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  const handleStateChange = state => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <AppBarMobileNavContainer>
      <Menu
        customBurgerIcon={ <BurgerIcon/>} 
        right
        isOpen={menuOpen}
        onStateChange={state => handleStateChange(state)}
        styles={AppBarMobileNavStyles}
      ></Menu>
    </AppBarMobileNavContainer>
  );
};