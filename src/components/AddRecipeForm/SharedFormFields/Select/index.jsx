import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

import * as Styled from './Select.styled';

export function Select({
  name = 'dummy',
  label,
  optionList,
  variant = 'outlined',
  optionAlign = 'left',
  optionGap = '0.25rem',
  selectedOptionFontSize = '0.85rem',
  selectWidth = 'max-content',
  selectHeight = '100%',
  chevronOffset = '1rem',
  selectedOptionAlign = 'center',
  asFieldGroup = false,
  fieldGroupHandlers = {},
  inputTextAlign = 'left',
  ...restProps
}) {
  // formik
  const [field, , { setValue }] = useField(name);
  const { selectValue, inputValue, onSelectChange, onInputChange } = fieldGroupHandlers;

  // consts
  const value = asFieldGroup ? selectValue : field.value;
  const updateValue = asFieldGroup ? onSelectChange : setValue;

  // conditions
  const isOutlined = variant === 'outlined';

  // event handlers
  function handleDropdownClick({ currentTarget }) {
    currentTarget.classList.toggle('is-active');
  }
  function selectOption({ currentTarget }) {
    updateValue(currentTarget.id);
  }
  function handleNumberInputChange({ currentTarget }) {
    let value = currentTarget.value;

    // prevent number form starting with 0, like 02
    if (value.length > 1 && Number.isInteger(+value) && /^0/.test(value)) {
      value = value.replace(/^0/, '');
    }

    onInputChange(value);
  }

  return (
    <Styled.OuterWrapper variant={variant} {...restProps}>
      {isOutlined ? (
        <Styled.Input inputTextAlign={inputTextAlign} defaultValue={label} readOnly={isOutlined} />
      ) : null}

      <Styled.Wrapper
        variant={variant}
        chevronOffset={chevronOffset}
        selectWidth={selectWidth}
        selectHeight={selectHeight}
        onClick={handleDropdownClick}
      >
        <Styled.SelectedOption
          selectedOptionFontSize={selectedOptionFontSize}
          selectedOptionAlign={selectedOptionAlign}
        >
          {!isOutlined && !asFieldGroup ? (
            <Styled.Input
              inputTextAlign={inputTextAlign}
              type="number"
              min="0"
              value={label}
              onChange={() => {}}
            />
          ) : null}
          {!isOutlined && asFieldGroup ? (
            <Styled.Input
              inputTextAlign={inputTextAlign}
              type="number"
              min="0"
              value={inputValue}
              onChange={handleNumberInputChange}
            />
          ) : null}

          {value}
        </Styled.SelectedOption>

        <Styled.DropdownList
          role="listbox"
          tabIndex="0"
          aria-labelledby={label}
          aria-activedescendant={value}
        >
          {optionList
            ? optionList.map((option, idx) => {
                const isSelected = value === option;

                return (
                  <Styled.Option
                    role="option"
                    onClick={selectOption}
                    aria-selected={isSelected}
                    key={option + idx}
                    id={option}
                    optionAlign={optionAlign}
                    optionGap={optionGap}
                    className={isSelected ? 'selected' : null}
                  >
                    {option}
                  </Styled.Option>
                );
              })
            : null}
        </Styled.DropdownList>
      </Styled.Wrapper>
    </Styled.OuterWrapper>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  withSelect: PropTypes.bool,
  variant: PropTypes.oneOf(['filled', 'outlined']).isRequired,
  optionList: PropTypes.arrayOf(PropTypes.string).isRequired,
  optionAlign: PropTypes.oneOf(['left', 'center', 'right']),
  optionGap: PropTypes.string,
  selectedOptionFontSize: PropTypes.string,
  selectedOptionAlign: PropTypes.oneOf(['left', 'center', 'right']),
  selectWidth: PropTypes.string,
  selectHeight: PropTypes.string,
  chevronOffset: PropTypes.string,
  asFieldGroup: PropTypes.bool,
  fieldGroupHandlers: PropTypes.object,
  inputTextAlign: PropTypes.oneOf(['left', 'center', 'right'])
};
