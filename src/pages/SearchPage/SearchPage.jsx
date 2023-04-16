import { SearchBar } from 'components/SearchBar/SearchBar';
import {
  SearchHeader,
  DecorativeSquare,
  Container,
  SearchPageWrapper,
} from './SearchPage.styled';
import 'react-toastify/dist/ReactToastify.css';
import useMediaQuery from 'components/Hooks/useMediaQuery';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllRecipesSearchTitle } from 'services/searchAPI';
import { getAllRecipesSearchIngredients } from 'services/searchAPI';

const SearchPage = () => {
  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState(6);
  const [recipes, setRecipes] = useState([]);
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
    const fetchIngridients = async () => {
      try {
        const data =
          type === 'title'
            ? await getAllRecipesSearchTitle(search, page, limit)
            : await getAllRecipesSearchIngredients(search, page, limit);

        setRecipes(data);

      } catch (err) {
        console.log(err.message);
      }
    };
    if (search) {
      fetchIngridients();
    }
  }, [search, page, limit, type]);

  const updateSearch = value => {
    setPage(1);
    setSearch(value.search);
  };

  const handleTypeChange = newType => {
    setType(newType);
  };

  return (
    <SearchPageWrapper>
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
          search={search}
          onChange={handleTypeChange}
          items={recipes}
        />
      </Container>
    </SearchPageWrapper>
  );
};

export default SearchPage;
