import { SearchBar } from "components/SearchBar/SearchBar";
import { SearchHeader } from "./SearchPage.styled";
import { SearchedRecipesList } from "components/SearchedRecipesList/SearchedRecipesList"


export const SearchPage = () => {
  
    return (
      <div>
        <SearchHeader>Search</SearchHeader>
        <SearchBar/>
        <SearchedRecipesList />
      </div>
    );
}
