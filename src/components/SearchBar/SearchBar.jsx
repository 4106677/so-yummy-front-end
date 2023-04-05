import { SearchForm } from "./SearchForm/SearchForm"
import { SearchTypeSelector } from "./SearchTypeSelector/SearchTypeSelector";
import { useState } from "react";
import { useEffect } from "react";
import { getAllRecipesSearch } from "services/searchAPI";
import { SearchedRecipesList } from "./SearchedRecipesList/SearchedRecipesList"
import { Loader } from "components/Loader/Loader";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SearchBar = () => {
       const [search, setSearch] = useState('');
       const [recipes, setRecipes] = useState([]);
       const [isLoading, setIsLoading] = useState(false);
       const [searchType, setSearchType] = useState("title");
       const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    const fetchIngridients = async () => {
      try {
        const data = await getAllRecipesSearch(search, searchType, page);
        console.log(data);
        setRecipes(data);
        setIsLoading(false);
         if (data.length === 0) {
           return toast.warn("We couldn't find result on your request.", {
             position: 'top-right',
             autoClose: 3000,
             theme: 'colored',
           });
         }

         if (page === 1) {
           return toast.success(`Wow! We found what you need!`, {
             icon: '🚀',
             position: 'top-right',
             autoClose: 3000,
             theme: 'colored',
           });
         }

         if (data.length < 6)
           return toast.info(`That's all. We don't have more images.`, {
             position: 'top-right',
             autoClose: 3000,
             theme: 'colored',
           }); 
      } catch (err) {
        console.log(err.message);
        setIsLoading(false);
      }
    };
   if (search) {
      fetchIngridients();
    } 
  }, [search, searchType, page]); 
           
  const updateSearch = value => {
        if (value.search === '') {
          return toast.error(
            'Field for searching is empty. Add information for request.',
            {
              position: 'top-right',
              autoClose: 3000,
              theme: 'colored',
            }
          );
        }
          console.log(value);
          setPage(1)
          setSearch(value.search);
  };
       
  const updateTypeSearch = value => {
           console.log(value);
         setSearchType(value.searchType);
  };


  
  return (
    <div>
      <SearchForm onSubmit={updateSearch} />
      <SearchTypeSelector value={searchType} onChange={updateTypeSearch} />
      {isLoading && <Loader />}
      <SearchedRecipesList items={recipes} />
    </div>
  );
}; 