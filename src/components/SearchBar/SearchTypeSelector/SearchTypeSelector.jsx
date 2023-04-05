import { useState } from "react";
import { Label, SelectWrapper, Select, Option } from "./SearchTypeSelector.styled";

export const SearchTypeSelector = () => {
     const [searchType, setSearchType] = useState('title');

     const handleSelectChange = event => {
       setSearchType(event.target.value);
  };
  
    return (
      <SelectWrapper>
        <p>Search by:</p>
        <Label>
          <Select value={searchType} onChange={handleSelectChange}>
            <Option value="title">Title</Option>
            <Option value="ingredients">Ingredients</Option>
          </Select>
        </Label>
      </SelectWrapper>
    ); 
} 

