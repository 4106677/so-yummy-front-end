import { SearchBar } from "components/SearchBar/SearchBar";
import { SearchHeader } from "./SearchPage.styled";
import { SearchedRecipesList } from "components/SearchedRecipesList/SearchedRecipesList"
import data from "../../../src/TEST_BASE";
import { useState } from "react";

export const SearchPage = () => {
  const [filter, setFilter] = useState('');

    const onFilter = (e) => {
      setFilter(e.target.value);
  };


  
    return (
      <div>
        <SearchHeader>Search</SearchHeader>
        <SearchBar items={data} value={filter} onFilter={onFilter} />
        <SearchedRecipesList items={data} />
      </div>
    );
}
