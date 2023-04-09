import { SearchBar } from "components/SearchBar/SearchBar";
import {
  SearchHeader,
  DecorativeSquare,
  Container,
} from './SearchPage.styled';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useMediaQuery from 'components/Hooks/useMediaQuery';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllRecipesSearchTitle } from 'services/searchAPI';
import { Loader } from 'components/Loader/Loader';
import { getAllRecipesSearchIngredients } from 'services/searchAPI';

export const SearchPage = () => {
  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState(6);
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
   const [type, setType] = useState('title');

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
               const data =
                 type === 'title'
                   ? await getAllRecipesSearchTitle(search, page, limit)
                   : await getAllRecipesSearchIngredients(search, page, limit);
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
  }, [search, page, limit, type]);

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

    const handleTypeChange = newType => {
      setType(newType);
    };
  
    return (
      <>
        <Container>
          <DecorativeSquare
            data-1
            color="#8BAA36"
            top="3.375rem"
            left="14.75rem"
          />
          <DecorativeSquare data-2 top="8.5rem" left="44.125rem" />
          <DecorativeSquare
            data-3
            color="#8BAA36"
            top="4.125rem"
            right="4.5rem"
          />
          <SearchHeader>Search</SearchHeader>
          <SearchBar
            onSubmit={updateSearch}
            type={type}
            onChange={handleTypeChange}
            items={recipes}
          />
          {isLoading && <Loader />}
        </Container>
      </>
    );
}
