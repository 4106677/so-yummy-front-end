import { SearchForm } from "./SearchForm/SearchForm"
import { SearchTypeSelector } from "./SearchTypeSelector/SearchTypeSelector";
import { useState } from "react";
import { useEffect } from "react";
import { getAllRecipesSearch } from "services/searchAPI";
import { SearchedRecipesList } from "./SearchedRecipesList/SearchedRecipesList"
import { Loader } from "components/Loader/Loader";

export const SearchBar = () => {
       const [search, setSearch] = useState('');
       const [recipes, setRecipes] = useState([]);
       const [isLoading, setIsLoading] = useState(false);
       const [searchType, setSearchType] = useState("title");

  useEffect(() => {
    setIsLoading(true);
    const fetchIngridients = async () => {
      try {
        const { data } = await getAllRecipesSearch(search, searchType);
        console.log(data);
        setRecipes(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
        setIsLoading(false);
      }
    };
   if (search) {
      fetchIngridients();
    } 
  }, [search, searchType]); 
           
  const updateSearch = value => {
          console.log(value);
          setSearch(value.search);
  };
       
  const updateTypeSearch = value => {
           console.log(value);
         setSearchType(value.searchType);
  };


  
  return (
    <div>
      <SearchForm onSubmit={updateSearch} />
      <SearchTypeSelector onChange={updateTypeSearch} />
      {isLoading && <Loader />}
      <SearchedRecipesList items={recipes} />
    </div>
  );
}; 