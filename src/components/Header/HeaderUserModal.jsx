import {
  HeaderUserModalOverlayStyled,
  HeaderUserModalBodyStyled,
  HeaderUserModalContainerStyled,
} from './HeaderModals.styled';
import { useEffect } from 'react';

export const HeaderUserModal = ({ onClose }) => {
    
 useEffect(() => {
   const handleKeyDown = e => {
     if (e.code === 'Escape') {
       onClose();
     }
   };
   window.addEventListener('keydown', handleKeyDown);
   return () => {
     window.removeEventListener('keydown', handleKeyDown);
   };
 }, [onClose]);

 const handleOverlayClick = e => {
   if (e.currentTarget === e.target) {
     onClose();
   }
 };


  return (
    <HeaderUserModalOverlayStyled onClick={handleOverlayClick}>
      <HeaderUserModalBodyStyled>
              <HeaderUserModalContainerStyled>
                  hello
        </HeaderUserModalContainerStyled>
      </HeaderUserModalBodyStyled>
    </HeaderUserModalOverlayStyled>
  );
};
