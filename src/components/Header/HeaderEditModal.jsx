import {
    HeaderEditModalOverlayStyled,
  HeaderEditModalBodyStyled,
  HeaderEditModalContainerStyled,
    HeaderEditModalCloseButtonStyled
} from "./HeaderModals.styled"
import { useEffect } from "react";
import { CrossIcon } from './HeaderIcons';


export const HeaderEditModal = ({ onClose }) => {
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
      <HeaderEditModalOverlayStyled onClick={handleOverlayClick}>
        <HeaderEditModalBodyStyled>
          <HeaderEditModalContainerStyled>
            <HeaderEditModalCloseButtonStyled
              onClick={() => {
                onClose();
              }}
            >
              <CrossIcon />
            </HeaderEditModalCloseButtonStyled>
            Hello
          </HeaderEditModalContainerStyled>
        </HeaderEditModalBodyStyled>
      </HeaderEditModalOverlayStyled>
    );
}