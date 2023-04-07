import {
  HeaderEditModalOverlayStyled,
  HeaderEditModalBodyStyled,
  HeaderEditModalContainerStyled,
  HeaderEditModalCloseButtonStyled,
  HeaderEditModalStyledImg,
  HeaderEditModalStyledImgContainer,
  HeaderEditModalForm,
  HeaderEditModalFileInput,
  HeaderEditModalFileLabel,
  HeaderEditModalNameLabel,
  HeaderEditModalNameInput,
  HeaderEditModalSubmitButton
} from './HeaderModals.styled';
import { useEffect, useState } from 'react';
import { CrossIcon } from './HeaderIcons';
import { FaUserCircle } from 'react-icons/fa';
import { AddPhotoIcon } from './HeaderIcons';
import { BiUser } from 'react-icons/bi';
import { FiEdit2 } from 'react-icons/fi';


export const HeaderEditModal = ({ onClose, avatar, user }) => {
  const [image, setImage] = useState(avatar);
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

  const previewOnChangeImg = e => {
    const [file] = e.target.files;
    if (file) {
      setImage(URL.createObjectURL(file));
    }

    const handleSubmit = e => {
      const files = e.target.elements.files;
      const data = { avatar: files[0], name: '' };
    };
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
          <HeaderEditModalStyledImgContainer>
            {image ? (
              <HeaderEditModalStyledImg src={image} />
            ) : (
              <FaUserCircle />
            )}
          </HeaderEditModalStyledImgContainer>
          <HeaderEditModalForm>
            <HeaderEditModalFileLabel>
              <HeaderEditModalFileInput
                type={'file'}
                accept={'image/jpeg,image/png,image/gif'}
                onChange={previewOnChangeImg}
              />
              <AddPhotoIcon />
            </HeaderEditModalFileLabel>
            <HeaderEditModalNameLabel>
              <HeaderEditModalNameInput/>
              <BiUser />
           <FiEdit2/>
            </HeaderEditModalNameLabel>
            <HeaderEditModalSubmitButton>
              Save changes
            </HeaderEditModalSubmitButton>
          </HeaderEditModalForm>
        </HeaderEditModalContainerStyled>
      </HeaderEditModalBodyStyled>
    </HeaderEditModalOverlayStyled>
  );
};
