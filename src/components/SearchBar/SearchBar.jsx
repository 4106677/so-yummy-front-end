import { SearchForm } from "./SearchForm/SearchForm"
import { SearchTypeSelector } from "./SearchTypeSelector/SearchTypeSelector";


export const SearchBar = () => {
    return (
      <div>
            <SearchForm />
            <SearchTypeSelector/>
      </div>
    );
}