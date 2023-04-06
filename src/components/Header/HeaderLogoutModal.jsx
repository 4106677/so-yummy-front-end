import {
  HeaderLogoutModalOverlayStyled,
  HeaderLogoutModalBodyStyled,
  HeaderLogoutModalContainerStyled,
  HeaderLogoutModalTextStyled,
  HeaderLogoutModalCloseButtonStyled,
  HeaderLogoutModalButtonsContainerStyled,
  HeaderLogoutModalLogoutButtonStyled,
  HeaderLogoutModalCancelButtonStyled,
} from './HeaderModals.styled';
import { CrossIcon } from './HeaderIcons';
import { useEffect } from 'react';

export const HeaderLogoutModal = ({ onClose }) => {
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
    <HeaderLogoutModalOverlayStyled onClick={handleOverlayClick}>
      <HeaderLogoutModalBodyStyled>
        <HeaderLogoutModalContainerStyled>
          <HeaderLogoutModalCloseButtonStyled
            onClick={() => {
              onClose();
            }}
          >
            <CrossIcon />
          </HeaderLogoutModalCloseButtonStyled>
          <HeaderLogoutModalTextStyled>
            Are you sure you want to log out?
          </HeaderLogoutModalTextStyled>
          <HeaderLogoutModalButtonsContainerStyled>
            <HeaderLogoutModalLogoutButtonStyled>
              Log out
            </HeaderLogoutModalLogoutButtonStyled>
            <HeaderLogoutModalCancelButtonStyled
              onClick={() => {
                onClose();
              }}
            >
              Cancel
            </HeaderLogoutModalCancelButtonStyled>
          </HeaderLogoutModalButtonsContainerStyled>
        </HeaderLogoutModalContainerStyled>
      </HeaderLogoutModalBodyStyled>
    </HeaderLogoutModalOverlayStyled>
  );
};
