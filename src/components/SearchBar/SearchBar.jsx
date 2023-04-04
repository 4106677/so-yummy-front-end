import { SearchForm } from "./SearchForm/SearchForm"
import { SearchTypeSelector } from "./SearchTypeSelector/SearchTypeSelector";
import { useState, useEffect } from 'react';
import { getAllRecipesSearch } from '../../services/searchAPI';
import { SearchedRecipesList } from "./SearchedRecipesList/SearchedRecipesList"


export const SearchBar = () => {
       const [search, setSearch] = useState('');
       const [recipes, setRecipes] = useState([]);

       useEffect(() => {
         const fetchIngridients = async () => {
           try {
             const { data } = await getAllRecipesSearch(search);
             setRecipes(data);
           } catch (err) {
             console.log(err.message);
           }
         };
         if (search.length > 0) {
           fetchIngridients();
         }
       }, [search]);

       const updateSearch = (value) => {
         setSearch(value.search);
       };
  return (
    <div>
      <SearchForm onSubmit={updateSearch} />
      <SearchTypeSelector />
      <SearchedRecipesList items={recipes} />
    </div>
  );
}; 

