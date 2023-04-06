import { Label, SelectWrapper, Select, Option } from "./SearchTypeSelector.styled";

export const SearchTypeSelector = ({value, onChange}) => {
  const handleSelectChange = event => {
    onChange(event.target.value);
  };
  
    return (
      <SelectWrapper>
        <p>Search by:</p>
        <Label>
          <Select value={value} onChange={handleSelectChange}>
            <Option value="title">Title</Option>
            <Option value="ingredients">Ingredients</Option>
          </Select>
        </Label>
      </SelectWrapper>
    ); 
} 

