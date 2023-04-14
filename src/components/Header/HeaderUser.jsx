import { useState, useCallback } from 'react';
import {
  HeaderStyledUser,
  HeaderStyledUserText,
  HeaderStyledUserImg,
} from './Header.styled';
import { FaUserCircle } from 'react-icons/fa';
import { HeaderUserModal } from './HeaderUserModal';
import { HeaderEditModal } from './HeaderEditModal';
import { HeaderLogoutModal } from './HeaderLogoutModal';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

export const HeaderUser = () => {
  const [showUserModal, setShowUserModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const { name, avatar } = useSelector(selectUser);

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
        {avatar ? (
          <HeaderStyledUserImg src={avatar} alt="user-avatar" />
        ) : (
          <FaUserCircle />
        )}

        <HeaderStyledUserText>{name}</HeaderStyledUserText>
      </HeaderStyledUser>
      {showUserModal && (
        <HeaderUserModal
          onClose={togleUserModal}
          editOpen={openEditModal}
          logOutOpen={openLogoutModal}
        />
      )}
      {showLogoutModal && <HeaderLogoutModal onClose={togleLogoutModal} />}
      {showEditModal && (
        <HeaderEditModal user={name} avatar={avatar} onClose={togleEditModal} />
      )}
    </>
  );
};
