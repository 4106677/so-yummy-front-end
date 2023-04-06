import { SearchBar } from "components/SearchBar/SearchBar";
import { SearchHeader } from "./SearchPage.styled";
import { MainConteiner } from "components/Container/Container.styled";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useMediaQuery from 'components/Hooks/useMediaQuery';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllRecipesSearch } from 'services/searchAPI';
import {Loader} from 'components/Loader/Loader'



export const SearchPage = () => {
  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState(6);
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchType, setSearchType] = useState('title');
  const [page, setPage] = useState(1);

  const isDesktop = useMediaQuery('(min-width: 1440px)');

  useEffect(() => {
    if (isDesktop) {
      setLimit(12);
    } else {
      setLimit(6);
    }
  }, [isDesktop]);

  useEffect(() => {
    setIsLoading(true);
    const fetchIngridients = async () => {
      try {
        const data = await getAllRecipesSearch(search, searchType, page, limit);
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
  }, [search, searchType, page, limit]);

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
    setPage(1);
    setSearch(value.search);
  };

  const updateTypeSearch = value => {
    console.log(value);
    setSearchType(value.searchType);
  };
  
    return (
      <div>
        <MainConteiner>
          <SearchHeader>Search</SearchHeader>
          <SearchBar
            onSubmit={updateSearch}
            value={searchType}
            onChange={updateTypeSearch}
            items={recipes}
          />
          {isLoading && <Loader />}
        </MainConteiner>
      </div>
    );
}
