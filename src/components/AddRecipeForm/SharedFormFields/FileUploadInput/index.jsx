import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

import { fileService } from 'services/FileService';
import * as Styled from './FileUploadInput.styled';

export function FileUploadInput({ name, mb = '0', ...restProps }) {
  const [image, setImage] = React.useState();
  const [field, { touched, error }, { setValue }] = useField(name);
  const isBase64 = fileService.isBase64(field.value);

  React.useEffect(() => {
    if (isBase64) {
      // once it's base64 convert it to Blob format
      fileService.base64ToBlob(field.value).then((blb) => {
        // once we've got Blob from image
        // convert it to imageUrl to be able to set it in img.src
        const imageUrl = fileService.convertToImageUrl(blb);

        // updating local state
        setImage(imageUrl);
      });
    }
  }, [field.value, isBase64]);

  async function onFileSelect(event) {
    const [file] = event.currentTarget.files;

    const base64img = await fileService.convertToBase64(file);
    setValue(base64img);
  }

  return (
    <Styled.Wrapper mb={mb} {...restProps} hasImage={image}>
      <Styled.FileInput type="file" accept="image/*" onChange={onFileSelect} />
      {!image ? <Styled.FileUploadIcon /> : null}

      {image ? <Styled.Image src={image} alt="Dish sample" /> : null}

      {touched && error && <Styled.Error>{error}</Styled.Error>}
    </Styled.Wrapper>
  );
}

FileUploadInput.propTypes = {
  name: PropTypes.string.isRequired,
  mb: PropTypes.string
};
