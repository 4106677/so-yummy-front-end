import styled, { css } from 'styled-components';
import { ReactComponent as FileUploadSvgIcon } from '../../../../images/icons/picture-load.svg';

export const Wrapper = styled.label`
  display: block;
  position: relative;

  min-width: 17.5rem;
  max-width: 22.375rem;
  min-height: 16.75rem;
  max-height: 21.5rem;
  width: 100%;
  height: 100%;
  margin-bottom: ${({ mb }) => mb};

  border-radius: 8px;
  background-color: ${({ hasImage }) => (hasImage ? 'transtapent' : '#8baa36')};
  isolation: isolate;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const sharedStyles = css`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

export const FileInput = styled.input`
  appearance: none;
  opacity: 0;

  width: 4rem;
  height: 4rem;
  z-index: 1;

  ${sharedStyles}
`;

export const FileUploadIcon = styled(FileUploadSvgIcon)`
  ${sharedStyles}

  z-index: 2;
  transition: transform 200ms;

  &:hover {
    cursor: pointer;
    transform: translate(-50%, -50%) scale(1.05);
  }
`;

export const Error = styled.strong`
  display: block;
  text-align: center;
`;