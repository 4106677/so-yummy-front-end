import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

const errorRootEl = document.querySelector('#error-root');

const ErrorComponent = styled.strong`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  font-weight: 400;
  font-size: 0.85rem;
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;

  background-color: rgb(237 17 17);
  color: #ffffff;
`;

export function Error({ errorMsg, hideAfter = 4000 }) {
  const [showError, setShowError] = React.useState(true);

  React.useEffect(() => {
    const timeoutID = setTimeout(() => setShowError(false), hideAfter);

    return () => {
      clearInterval(timeoutID);
    };
  }, [hideAfter]);

  return showError ? createPortal(<ErrorComponent>{errorMsg}</ErrorComponent>, errorRootEl) : null;
}

Error.propTypes = {
  errorMsg: PropTypes.string.isRequired,
  hideAfter: PropTypes.number
};
