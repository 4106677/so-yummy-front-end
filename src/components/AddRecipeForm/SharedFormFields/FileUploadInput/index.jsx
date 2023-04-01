import PropTypes from 'prop-types';
import { useField } from 'formik';

import * as Styled from './FileUploadInput.styled';

export function FileUploadInput({ name, mb = '0', ...restProps }) {
  const [, { touched, error }, { setValue }] = useField(name);

  function onFileSelect(event) {
    const [file] = event.currentTarget.files;
    const formData = new FormData();

    formData.append(file.name, file);
    setValue(formData);
  }

  return (
    <Styled.Wrapper mb={mb} {...restProps}>
      <Styled.FileInput type="file" onChange={onFileSelect} />
      <Styled.FileUploadIcon />

      {touched && error && <Styled.Error>{error}</Styled.Error>}
    </Styled.Wrapper>
  );
}

FileUploadInput.propTypes = {
  name: PropTypes.string.isRequired,
  mb: PropTypes.string
};
