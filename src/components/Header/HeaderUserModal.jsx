import {
  HeaderUserModalOverlayStyled,
  HeaderUserModalBodyStyled,
  HeaderUserModalContainerStyled,
  HeaderUserModalEditButton,
  HeaderUserModalLogoutButton
} from './HeaderModals.styled';
import { useEffect } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { AiOutlineArrowRight } from 'react-icons/ai';

export const HeaderUserModal = ({ onClose, logOutOpen }) => {
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
          <HeaderUserModalEditButton>
            Edit profile
            <FiEdit2></FiEdit2>
          </HeaderUserModalEditButton>
          <HeaderUserModalLogoutButton
            onClick={() => {
              onClose();
              logOutOpen();
            }}
          >
            Log-out
            <AiOutlineArrowRight />
          </HeaderUserModalLogoutButton>
        </HeaderUserModalContainerStyled>
      </HeaderUserModalBodyStyled>
    </HeaderUserModalOverlayStyled>
  );
};
