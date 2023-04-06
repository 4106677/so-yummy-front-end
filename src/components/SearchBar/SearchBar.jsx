import { SearchForm } from "./SearchForm/SearchForm"
import { SearchTypeSelector } from "./SearchTypeSelector/SearchTypeSelector";
import { SearchedRecipesList } from "./SearchedRecipesList/SearchedRecipesList";



export const SearchBar = ({ onSubmit, value, onChange, items }) => {
  return (
    <div>
      <SearchForm onSubmit={onSubmit} />
      <SearchTypeSelector value={value} onChange={onChange} />
      
      <SearchedRecipesList items={items} />
    </div>
  );
};




