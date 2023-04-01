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

  const datalist =
    dataListOptions?.filter((option) => option.toLowerCase().includes(inputValue.toLowerCase())) ??
    [];

  // handlers
  function handleInputChange(event) {
    const inputValue = event.currentTarget.value;

    if (!inputValue) {
      hideDropdown();
    } else {
      if (!getIsDropdownActive()) showDropdown();
    }

    onChange(event);
  }

  function handleInputWithDatalistChange(event) {
    const { value } = event.currentTarget;

    if (!value) {
      hideDropdown();
    } else {
      if (!getIsDropdownActive()) showDropdown();
    }

    onInputChange(value);
  }

  function handleBlur() {
    hideDropdown();
  }
  function handleOptionSelect(option) {
    hideDropdown();
    asFieldGroup ? onInputChange(option) : setValue(option);
  }

  // helpers
  function hideDropdown() {
    wrapperRef.current.classList.remove('is-active');
  }
  function showDropdown() {
    wrapperRef.current.classList.add('is-active');
  }
  function getIsDropdownActive() {
    wrapperRef.current.classList.contains('is-active');
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
          onChange={handleInputWithDatalistChange}
          {...restProps}
        />
      )}

      {withDatalist && datalist.length ? (
        <Styled.DropdownList>
          {datalist.map((option, idx) => (
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
