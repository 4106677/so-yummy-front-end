import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

import * as Styled from './Input.styled';

export const Input = ({
  name = 'dummy',
  label,
  gapFromLabel,
  variant,
  withDatalist = false,
  dataListOptions,
  asFieldGroup = false,
  fieldGroupHandlers = {},
  ...restProps
}) => {
  const wrapperRef = React.useRef(null);
  const [field, { touched, error }, { setValue }] = useField(name);
  const { value, onBlur, onChange, ...restField } = field;
  const { inputValue, onInputChange } = fieldGroupHandlers;

  // handlers
  function handleInputChange(event) {
    const inputValue = event.currentTarget.value;
    if (!inputValue) hideDropdown();

    onChange(event);
  }
  function handleBlur() {
    hideDropdown();
  }
  function handleOptionSelect(option) {
    hideDropdown();
    setValue(option);
  }
  // helper
  function hideDropdown() {
    wrapperRef.current.classList.remove('is-active');
  }

  return (
    <Styled.Wrapper className={value ? 'is-active' : null} ref={wrapperRef}>
      {label && <Styled.Label htmlFor={name}>{label}</Styled.Label>}

      {!asFieldGroup ? (
        <Styled.Input
          id={name}
          gapFromLabel={gapFromLabel}
          variant={variant}
          value={value}
          onChange={handleInputChange}
          onBlur={handleBlur}
          {...restField}
          {...restProps}
        />
      ) : (
        <Styled.Input
          gapFromLabel={gapFromLabel}
          variant={variant}
          value={inputValue}
          onChange={({ currentTarget }) => onInputChange(currentTarget.value)}
          {...restProps}
        />
      )}

      {withDatalist ? (
        <Styled.DropdownList>
          {dataListOptions.map((option, idx) => (
            <Styled.Option key={option + idx} onClick={handleOptionSelect.bind(null, option)}>
              {option}
            </Styled.Option>
          ))}
        </Styled.DropdownList>
      ) : null}

      {touched && error && <Styled.Error>{error}</Styled.Error>}
    </Styled.Wrapper>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  gapFromLabel: PropTypes.string,
  withSelect: PropTypes.bool,
  variant: PropTypes.oneOf(['filled', 'outlined']).isRequired,
  withDatalist: PropTypes.bool,
  dataListOptions: PropTypes.array,
  asFieldGroup: PropTypes.bool,
  fieldGroupHandlers: PropTypes.object
};
