import { SearchBar } from "components/SearchBar/SearchBar";
import { SearchHeader } from "./SearchPage.styled";
import { SearchedRecipesList } from "components/SearchedRecipesList/SearchedRecipesList"
import { MainConteiner } from "components/Container/Container.styled";
import { getAllRecipesSearch } from '../../services/searchAPI';
import { useState, useEffect } from 'react';

export const SearchPage = () => {

    const [search, setSearch] = useState('');
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
      const fetchIngridients = async () => {
        try {
          const { data } = await getAllRecipesSearch(search);
          setRecipes(data); // когда будет ингридиент, проверить
          console.log(data);
        } catch (err) {
          console.log(err.message);
        }
      };
      if (search.length > 0) {
        fetchIngridients();
      }
    }, [search]);

    const updateSearch = newSearch => {
      setSearch(newSearch);
    };
  
    return (
      <div>
        <MainConteiner>
          <SearchHeader>Search</SearchHeader>
          <SearchBar onSubmit={updateSearch} />
          <SearchedRecipesList items={recipes} />
        </MainConteiner>
      </div>
    );
}
