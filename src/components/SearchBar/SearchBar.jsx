import { SearchForm } from "./SearchForm/SearchForm"
import { SearchTypeSelector } from "./SearchTypeSelector/SearchTypeSelector";


export const SearchBar = ({ items}) => {
  console.log(items);
    return (
      <div>
        <SearchForm items={items} />
        <SearchTypeSelector items={items} />
      </div>
    );
}