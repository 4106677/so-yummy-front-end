import { ButtonSkew } from 'components/ButtonSkew/ButtonSkew';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SearchBlock, SearchIn, SearchInput } from './SearchFormMain.styled';
import { setSearch } from '../../redux/search/searchSlice';
import { useNavigate } from 'react-router-dom';
import { toastWarnEmptyField } from '../../services/toasts';



export const SearchForm = ({ styled}) => {
  const dispatch = useDispatch();
  const [newQuery, setNewQuery] = useState('');
  const navigate = useNavigate();


  const validateSearchQuery = value => {
    let error;
    if (!/^[a-zA-Z]+$/.test(value)) {
      error = 'Please enter only letters';
    }
    return error;
  };

  const handleSearchChange = event => {
    const newQuery = event.currentTarget.value;
    setNewQuery(newQuery);
  };

  useEffect(() => {
    dispatch(setSearch(newQuery));
    window.localStorage.setItem('search', newQuery);
  }, [dispatch, newQuery]);

   const handleSubmit = e => {
     e.preventDefault();
     if (newQuery) {
       const type = 'title';
       navigate(`/search?query=${newQuery}&type=${type}`);
     } else {
       toastWarnEmptyField(newQuery);
     }
  };
  

  return (
    <SearchBlock>
      <SearchIn onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          name="queryInput"
          onChange={handleSearchChange}
          validate={validateSearchQuery}
          autoFocus
        />
        <ButtonSkew type="submit" text="Search" styled={styled}></ButtonSkew>
      </SearchIn>
    </SearchBlock>
  );
};