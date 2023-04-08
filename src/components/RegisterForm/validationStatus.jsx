import {
  ErrorText,
  SuccessText,
  // WarningText
} from './validationStatus.styled';

const ValigationStatus = ({
  name = '',
  error = '',
  success = '',
  // warning = '',
}) => {
  if (name && error) {
    return <ErrorText> {error} </ErrorText>;
  } else if (name && !error) {
    return <SuccessText>{success}</SuccessText>;
  }
  // else if (!error) {
  //   return <WarningText>{warning}</WarningText>;
  // }
  else return <></>;
};

export default ValigationStatus;
