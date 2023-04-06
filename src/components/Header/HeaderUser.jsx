import { useState, useCallback } from 'react';
import { HeaderStyledUser, HeaderStyledUserText } from './Header.styled';
import { FaUserCircle } from 'react-icons/fa';
import { HeaderUserModal } from './HeaderUserModal';
import { HeaderEditModal } from './HeaderEditModal';
import { HeaderLogoutModal } from './HeaderLogoutModal';

export const HeaderUser = () => {
  const [showUserModal, setShowUserModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const openUserModal = e => {
    togleUserModal();
  };

  const openEditModal = e => {
    togleEditModal();
  };

  const openLogoutModal = e => {
    togleLogoutModal();
  };

  const togleUserModal = useCallback(() => {
    setShowUserModal(!showUserModal);
  }, [showUserModal]);

  const togleEditModal = useCallback(() => {
    setShowEditModal(!showEditModal);
  }, [showEditModal]);

  const togleLogoutModal = useCallback(() => {
    setShowLogoutModal(!showLogoutModal);
  }, [showLogoutModal]);

  return (
    <>
      <HeaderStyledUser onClick={openUserModal}>
        {/* {
          ? <HeaderStyledUserImg alt="user-avatar" />
          : 
          } */}
        <FaUserCircle />
        <HeaderStyledUserText>User-name</HeaderStyledUserText>
      </HeaderStyledUser>
      {showUserModal && (
        <HeaderUserModal
          onClose={togleUserModal}
          editOpen={openEditModal}
          logOutOpen={openLogoutModal}
        />
      )}
      {showLogoutModal && <HeaderLogoutModal onClose={togleLogoutModal} />}
      {showEditModal && <HeaderEditModal onClose={togleEditModal} />}
    </>
  );
};
