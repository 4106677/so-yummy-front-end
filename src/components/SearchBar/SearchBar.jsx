import { SearchForm } from "./SearchForm/SearchForm"
import { SearchTypeSelector } from "./SearchTypeSelector/SearchTypeSelector";
import { SearchedRecipesList } from "./SearchedRecipesList/SearchedRecipesList";



export const SearchBar = ({ onSubmit, type, onChange, items }) => {
  return (
    <div>
      <SearchForm onSubmit={onSubmit} />
      <SearchTypeSelector type={type} onChange={onChange} />
      <SearchedRecipesList items={items} />
    </div>
  );
};




