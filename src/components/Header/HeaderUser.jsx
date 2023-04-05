import { useState, useCallback } from 'react';
import { HeaderStyledUser, HeaderStyledUserText } from './Header.styled';
import { FaUserCircle } from 'react-icons/fa';
import { HeaderUserModal } from './HeaderUserModal';

export const HeaderUser = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = e => {
    togleModal();
  };

  const togleModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

    return (
      <>
        <HeaderStyledUser onClick={openModal}>
          <FaUserCircle />
          <HeaderStyledUserText>User-Name</HeaderStyledUserText>
        </HeaderStyledUser>
        {showModal && <HeaderUserModal onClose={togleModal} />}
      </>
    );
};
