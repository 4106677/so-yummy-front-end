import { SearchForm } from "./SearchForm/SearchForm"
import { SearchTypeSelector } from "./SearchTypeSelector/SearchTypeSelector";


export const SearchBar = ({ items, value}) => {
  console.log(items);
   

  return (
      <div>
        <SearchForm
          name="filter"
          type="text"
          value={value}
        />
        <SearchTypeSelector items={items} />
      </div>
    );
}