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
    dataListOptions?.filter(({ ingredient } = {}) => {
      return ingredient?.toLowerCase().includes(inputValue?.toLowerCase());
    }) ?? [];

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
    const product = dataListOptions.find(
      ({ ingredient }) => ingredient.toLowerCase() === value.toLowerCase()
    );

    onInputChange(value, datalist.length === 0, product?.id);
  }

  function handleBlur() {
    hideDropdown();
  }
  function handleOptionSelect(value, id) {
    hideDropdown();
    asFieldGroup ? onInputChange(value, null, id) : setValue(value);
  }

  function onInputAsGroupBlur() {
    if (isFirstFocus.current) setIsGroupInputTouched(true);
    isFirstFocus.current = false;
  }

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
          {datalist.map((option) => (
            <Styled.Option
              key={option?.id}
              onClick={handleOptionSelect.bind(null, option?.ingredient, option?.id)}
            >
              {option?.ingredient}
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
