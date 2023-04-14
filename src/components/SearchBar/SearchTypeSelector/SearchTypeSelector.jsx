import React from 'react';
import Select from 'react-select';
import { Label, SelectWrapper } from './SearchTypeSelector.styled';
import { customStyles } from './CustomStyles';

export const SearchTypeSelector = ({ type, onChange }) => {
  const options = [
    { value: 'title', label: 'Title' },
    { value: 'ingredients', label: 'Ingredients' },
  ];

  const handleSelectChange = selectedOption => {
    onChange(selectedOption.value);
  };
  const defaultValue = { value: 'title', label: 'Title' };
  const selectedOption = options.find(o => o.value === type);

  return (
    <SelectWrapper>
      <p>Search by:</p>
      <Label>
        <Select
          classNamePrefix="custom-select"
          options={options}
          value={selectedOption}
          onChange={handleSelectChange}
          styles={customStyles}
          autoFocus={false}
          defaultValue={defaultValue}
        />
      </Label>
    </SelectWrapper>
  );
};

export default SearchTypeSelector;
