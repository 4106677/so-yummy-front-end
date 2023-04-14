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
  errorMsg,
  isSubmit,
  ...restProps
}) => {
  const [isGroupInputTouched, setIsGroupInputTouched] = React.useState(false);
  const isFirstFocus = React.useRef(true);

  const [field, { touched, error }, { setValue }] = useField(name);
  const { value, onBlur, onChange, ...restField } = field;
  const { inputValue, onInputChange } = fieldGroupHandlers;
  const wrapperRef = React.useRef(null);

  const datalist =
    dataListOptions?.filter((option) => {
      return option?.toLowerCase().includes(inputValue?.toLowerCase());
    }) ?? [];

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

    onInputChange(value, { error: datalist.length === 0 });
  }

  function handleBlur() {
    hideDropdown();
  }
  function handleOptionSelect(option) {
    hideDropdown();
    asFieldGroup ? onInputChange(option) : setValue(option);
  }

  function onInputAsGroupBlur() {
    if (isFirstFocus.current) setIsGroupInputTouched(true);
    isFirstFocus.current = false;
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
          asFieldGroup={asFieldGroup}
          onBlur={onInputAsGroupBlur}
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
      {withDatalist && inputValue && datalist.length === 0 ? (
        <Styled.Error asDataList>Please, select ingredients from the list only</Styled.Error>
      ) : null}

      {!asFieldGroup && touched && error ? <Styled.Error>{error}</Styled.Error> : null}

      {(asFieldGroup && isGroupInputTouched && errorMsg) ||
      (asFieldGroup && isSubmit && errorMsg) ? (
        <Styled.Error asFieldGroup={asFieldGroup}>{errorMsg}</Styled.Error>
      ) : null}
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
  fieldGroupHandlers: PropTypes.object,
  errorMsg: PropTypes.string,
  isSubmit: PropTypes.bool
};
