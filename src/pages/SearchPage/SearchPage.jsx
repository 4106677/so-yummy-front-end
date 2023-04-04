import { SearchBar } from "components/SearchBar/SearchBar";
import { SearchHeader } from "./SearchPage.styled";
import { MainConteiner } from "components/Container/Container.styled";



export const SearchPage = () => {
    return (
      <div>
        <MainConteiner>
          <SearchHeader>Search</SearchHeader>
          <SearchBar />
        </MainConteiner>
      </div>
    );
}
