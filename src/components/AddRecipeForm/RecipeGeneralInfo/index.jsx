import PropTypes from 'prop-types';

// components
import { FileUploadInput } from '../SharedFormFields/FileUploadInput';
import { Select } from '../SharedFormFields/Select';
import { Input } from '../SharedFormFields/Input';

import * as Styled from './RecipeGeneralInfo.styled';

const selectConfig = {
  optionAlign: 'left',
  chevronOffset: '0',
  variant: 'outlined',
  className: 'general-info'
};

export function RecipeGeneralInfo({
  names = [],
  selectOneOptionList = [],
  selectTwoOptionList = []
}) {
  const [image, title, description, category, cookingTime] = names;

  return (
    <Styled.BlockWrapper>
      <FileUploadInput name={image} className="mobile" />

      <Styled.InnerWrapper>
        <Input
          type="text"
          name={title}
          variant="outlined"
          placeholder="Enter item title"
          className="general-info"
        />
        <Input
          type="text"
          name={description}
          variant="outlined"
          placeholder="Enter about recipe"
          className="general-info"
        />

        <Select
          name={category}
          label="Category"
          optionList={selectOneOptionList}
          {...selectConfig}
        />
        <Select
          name={cookingTime}
          label="Cooking time"
          optionList={selectTwoOptionList}
          {...selectConfig}
        />
      </Styled.InnerWrapper>
    </Styled.BlockWrapper>
  );
}

RecipeGeneralInfo.propTypes = {
  names: PropTypes.array,
  selectOneOptionList: PropTypes.array,
  selectTwoOptionList: PropTypes.array
};