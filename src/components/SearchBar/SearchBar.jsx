import { SearchForm } from "./SearchForm/SearchForm"
import { SearchTypeSelector } from "./SearchTypeSelector/SearchTypeSelector";



export const SearchBar = ({ updateSearch }) => {
  return (
    <div>
      <SearchForm onSubmit={updateSearch} />
      <SearchTypeSelector />
    </div>
  );
}; 

