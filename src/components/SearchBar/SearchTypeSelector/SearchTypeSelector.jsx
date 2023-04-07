import { Label, SelectWrapper, Select, Option } from "./SearchTypeSelector.styled";

export const SearchTypeSelector = ({type, onChange}) => {
  const handleSelectChange = event => {
    let type = event.target.value
    onChange(type);
  };
  
    return (
      <SelectWrapper>
        <p>Search by:</p>
        <Label>
          <Select value={type.toString()} onChange={handleSelectChange}>
            <Option value="title">Title</Option>
            <Option value="ingredients">Ingredients</Option>
          </Select>
        </Label>
      </SelectWrapper>
    ); 
} 



