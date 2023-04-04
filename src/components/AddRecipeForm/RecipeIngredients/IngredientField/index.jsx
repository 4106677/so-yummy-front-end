import { Input } from 'components/AddRecipeForm/SharedFormFields/Input';
import { Select } from 'components/AddRecipeForm/SharedFormFields/Select';
import PropTypes from 'prop-types';

import * as Styled from './IngredientField.styled';

const selectConfg = {
  chevronOffset: '4px',
  selectWidth: '110px',
  selectHeight: '100%',
  optionAlign: 'center',
  selectedOptionAlign: 'center',
  selectedOptionFontSize: '18px',
  inputTextAlign: 'right',
  variant: 'filled'
};

export function IngredientField({
  onDelete,
  gap = '1.5rem',
  inputHandlers = {},
  selectHandlers = {},
  selectOptionList = [],
  inputOptionList = [],
  zIndex,
  error = {},
  isSubmit
}) {
  const selectFieldHandlers = {
    selectValue: selectHandlers?.selectValue,
    inputValue: selectHandlers?.inputValue,
    onSelectChange: selectHandlers?.onSelectChange,
    onInputChange: selectHandlers?.onInputChange
  };
  const inputFieldHandlers = {
    inputValue: inputHandlers?.inputValue,
    onInputChange: inputHandlers?.onInputChange
  };

  return (
    <Styled.FieldWrapper gap={gap}>
      <Styled.InputsWrapper>
        <Input
          asFieldGroup
          withDatalist
          dataListOptions={inputOptionList}
          fieldGroupHandlers={inputFieldHandlers}
          placeholder="Enter ingredient"
          variant="filled"
          errorMsg={error['ingredient']}
          isSubmit={isSubmit}
        />
        <Select
          asFieldGroup
          fieldGroupHandlers={selectFieldHandlers}
          optionList={selectOptionList}
          zIndex={zIndex}
          errorMsg={error['amount']}
          isSubmit={isSubmit}
          {...selectConfg}
        />
      </Styled.InputsWrapper>

      <Styled.XCloseButton type="button" onClick={onDelete}>
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
          <path
            d="M15.625 4.875L4.375 16.125"
            stroke="#333333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.625 16.125L4.375 4.875"
            stroke="#333333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Styled.XCloseButton>
    </Styled.FieldWrapper>
  );
}

IngredientField.propTypes = {
  onDelete: PropTypes.func.isRequired,
  gap: PropTypes.string,
  selectOptionList: PropTypes.array,
  inputHandlers: PropTypes.object,
  selectHandlers: PropTypes.object,
  inputOptionList: PropTypes.array,
  zIndex: PropTypes.number,
  error: PropTypes.object
};
