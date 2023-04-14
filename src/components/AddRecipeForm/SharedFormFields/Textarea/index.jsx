import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

import { useAutoResizeTextArea } from 'components/Hooks/useAutoResizeTextArea';
import * as Styled from './Textarea.styled';

export function Textarea({ name, withResize = false, ...restProps }) {
  const textareaRef = React.useRef(null);
  const [field, { touched, error }] = useField(name);

  useAutoResizeTextArea(textareaRef.current, field.value);

  return (
    <Styled.Wrapper>
      <Styled.Textarea ref={withResize ? textareaRef : null} {...field} {...restProps} />

      {touched && error ? <Styled.Error>{error}</Styled.Error> : null}
    </Styled.Wrapper>
  );
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  withResize: PropTypes.bool
};
