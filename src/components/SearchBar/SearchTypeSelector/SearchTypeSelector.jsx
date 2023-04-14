import React from 'react';
import Select from 'react-select';
import { Label, SelectWrapper } from "./SearchTypeSelector.styled";

export const SearchTypeSelector = ({ type, onChange }) => {
  const options = [
    { value: 'title', label: 'Title' },
    { value: 'ingredients', label: 'Ingredients' },
  ];

  const handleSelectChange = selectedOption => {
    onChange(selectedOption.value);
  };

  const selectedOption = options.find(o => o.value === type);

  const customStyles = {
    control: provided => ({
      ...provided,
      backgroundColor: '#ececec',
      outline: 'none',
      borderRadius: '6px 6px 6px 6px',
      paddingLeft: '0.875rem',
      paddingRight: '0.9375rem',
      fontFamily: 'Poppins',
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '1.5',
      width: '10.9375rem',
      height: '2.31rem',
    }),
    option: (provided, state) => ({
      ...provided,
      width: '10.9375rem',
      height: '2.31rem',
      backgroundColor: state.isSelected ? ' #8BAA36' : 'white',
      /* color: state.isSelected ? 'white' : 'black',
      ':hover': {
        backgroundColor: 'gray',
        color: 'white',*/
    }),
  };

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
        />
      </Label>
    </SelectWrapper>
  );
  };


  export default SearchTypeSelector;

