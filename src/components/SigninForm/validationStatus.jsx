import { ErrorText, SuccessText } from './validationStatus.styled';

export const ValigationStatus = ({ name = '', error = '', success = '' }) => {
  if (name && error) {
    return <ErrorText> {error} </ErrorText>;
  } else if (name && !error) {
    return <SuccessText>{success}</SuccessText>;
  } else return <></>;
};
