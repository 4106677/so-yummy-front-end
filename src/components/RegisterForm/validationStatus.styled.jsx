import styled from 'styled-components';

//svg validation icons
import { ReactComponent as Success } from '../../images/startPage/icon-success.svg';
import { ReactComponent as Warning } from '../../images/startPage/icon-warning.svg';
import { ReactComponent as Error } from '../../images/startPage/icon-error.svg';

export const ErrorText = styled.p`
   {
    color: #e74a3b;
    font-size: 10px;
    line-height: 1.7;
    top: -3px;
    left: 5px;
    position: relative;
    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const SuccessText = styled.p`
  color: #3cbc81;
  font-size: 10px;
  line-height: 1.7;
  top: -3px;
  left: 5px;
  position: relative;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const WarningText = styled.p`
  color: #f6c23e;
  font-size: 10px;
  line-height: 1.7;
  top: -3px;
  left: 5px;
  position: relative;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const SuccessIcon = styled(Success)`
  width: 18px;
  height: 18px;
  top: 14px;
  right: 10px;
  position: absolute;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 10.5px;
    right: 10px;
  }
`;

export const WarningIcon = styled(Warning)`
  width: 18px;
  height: 18px;
  top: 14px;
  right: 10px;
  position: absolute;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 10.5px;
    right: 10px;
  }
`;

export const ErrorIcon = styled(Error)`
  width: 18px;
  height: 18px;
  top: 14px;
  right: 10px;
  position: absolute;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 10.5px;
    right: 10px;
  }
`;
