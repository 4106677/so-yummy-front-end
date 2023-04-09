import { warningPasswordValidation } from '../../validation/inputsValidationSchema';
import { ErrorText, SuccessText } from './validationStatus.styled';
import { ErrorIcon, SuccessIcon, WarningIcon } from './validationStatus.styled';

const ValigationStatus = ({ name = '', error = '', success = '' }) => {
  if (name && error) {
    return <ErrorText> {error} </ErrorText>;
  } else if (name && !error) {
    return <SuccessText>{success}</SuccessText>;
  } else return <></>;
};

const SwitchStatusIcon = (erorr, touched, value, name = '') => {
  if (
    !erorr &&
    touched &&
    value &&
    !warningPasswordValidation(value) &&
    name === 'password'
  ) {
    return <WarningIcon />;
  } else if (erorr && touched) {
    return <ErrorIcon />;
  } else if (!erorr && touched) {
    return <SuccessIcon />;
  }
  return <></>;
};

export { ValigationStatus, SwitchStatusIcon };

// const switchColor = (
//   erorr,
//   value,
//   type,
//   formInputUserMenu,
//   formInputFooterForm,
//   userInitName
// ) => {
//   if (!erorr && value && !warningValidation(value) && type === 'password') {
//     return `${css.formInput} ${css.formInputInsecure}`;
//   } else if (erorr && value) {
//     return `${css.formInput} ${css.formInputInvalid} `;
//   } else if (!erorr && value && value !== userInitName) {
//     return `${css.formInput} ${css.formInputValid} `;
//   } else if (formInputUserMenu) {
//     return `${formInputUserMenu}`;
//   } else if (formInputFooterForm) {
//     return `${css.formInput} ${formInputFooterForm}`;
//   } else {
//     return `${css.formInput}`;
//   }
// };
