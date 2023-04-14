import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import imageCompression from 'browser-image-compression';

import { fileService } from 'services/FileService';
import * as Styled from './FileUploadInput.styled';

export function FileUploadInput({ name, mb = '0', ...restProps }) {
  const [image, setImage] = React.useState();
  const [field, { touched, error }, { setValue }] = useField(name);
  const isBase64 = fileService.isBase64(field.value);

  React.useEffect(() => {
    if (isBase64) {
      fileService.base64ToBlob(field.value).then((blb) => {
        const imageUrl = fileService.convertToImageUrl(blb);
        setImage(imageUrl);
      });
    }
  }, [field.value, isBase64]);

  async function onFileSelect(event) {
    const [file] = event.currentTarget.files;

    const options = {
      maxSizeMB: 0.05,
      maxWidthOrHeight: 600
    };
    let compressedFile;
    try {
      compressedFile = await imageCompression(file, options);
    } catch (error) {
      console.log(error);
    }

    const base64img = await fileService.convertToBase64(compressedFile);
    console.log('base64img -->', base64img);
    setValue(base64img);
  }

  return (
    <Styled.Wrapper
      mb={mb}
      {...restProps}
      hasImage={image}
      style={{ backgroundImage: `url('${image}')` }}
    >
      <Styled.FileInput type="file" accept="image/*" onChange={onFileSelect} />
      {!image ? <Styled.FileUploadIcon /> : null}
      {touched && error && <Styled.Error>{error}</Styled.Error>}
    </Styled.Wrapper>
  );
}

FileUploadInput.propTypes = {
  name: PropTypes.string.isRequired,
  mb: PropTypes.string
};
