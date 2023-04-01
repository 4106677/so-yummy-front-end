import { Label, SelectWrapper, Select, Option } from "./SearchTypeSelector.styled";

export const SearchTypeSelector = () => {
    return (
      <SelectWrapper>
        <p>Search by:</p>
        <Label>
          <Select>
            <Option value="Title">Title</Option>
            <Option value="Ingridients">Ingridients</Option>
          </Select>
        </Label>
      </SelectWrapper>
    );
}