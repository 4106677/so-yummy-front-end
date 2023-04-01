import { SearchBar } from "components/SearchBar/SearchBar";
import { SearchHeader } from "./SearchPage.styled";
import { SearchedRecipesList } from "components/SearchedRecipesList/SearchedRecipesList"
import data from "../../../src/TEST_BASE";

export const SearchPage = () => {
  
    return (
      <div>
        <SearchHeader>Search</SearchHeader>
        <SearchBar items={data} />
        <SearchedRecipesList items={data} />
      </div>
    );
}
