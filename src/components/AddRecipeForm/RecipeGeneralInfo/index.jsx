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

export function RecipeGeneralInfo() {
  return (
    <Styled.BlockWrapper>
      <FileUploadInput name="image" className="mobile" />

      <Styled.InnerWrapper>
        <Input
          type="text"
          name="title"
          variant="outlined"
          placeholder="Enter item title"
          className="general-info"
        />
        <Input
          type="text"
          name="description"
          variant="outlined"
          placeholder="Enter about recipe"
          className="general-info"
        />

        <Select
          name="category"
          label="Category"
          optionList={['food', 'drink', 'else']}
          {...selectConfig}
        />
        <Select
          name="cookingTime"
          label="Cooking time"
          optionList={['40min', '20min', '1h', '420min', '220min', '2h', '430min', '24min', '5h']}
          {...selectConfig}
        />
      </Styled.InnerWrapper>
    </Styled.BlockWrapper>
  );
}
