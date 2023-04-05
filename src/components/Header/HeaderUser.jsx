import { useState, useCallback } from 'react';
import { HeaderStyledUser, HeaderStyledUserText } from './Header.styled';
import { FaUserCircle } from 'react-icons/fa';
import { HeaderUserModal } from './HeaderUserModal';
import { HeaderLogoutModal } from './HeaderLogoutModal';

export const HeaderUser = () => {
  const [showUserModal, setShowUserModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const openUserModal = e => {
    togleUserModal();
  };

  const openLogoutModal = e => {
    togleLogoutModal();
  };


  const togleUserModal = useCallback(() => {
    setShowUserModal(!showUserModal);
  }, [showUserModal]);

  const togleLogoutModal = useCallback(() => {
    setShowLogoutModal(!showLogoutModal);
  }, [showLogoutModal]);

    return (
      <>
        <HeaderStyledUser onClick={openUserModal}>
          <FaUserCircle />
          <HeaderStyledUserText>User-Name</HeaderStyledUserText>
        </HeaderStyledUser>
        {showUserModal && <HeaderUserModal onClose={togleUserModal} logOutOpen={openLogoutModal} />}
        {showLogoutModal && <HeaderLogoutModal onClose={togleLogoutModal} />}
      </>
    );
};
