import { Formik } from 'formik';
import { FormWrap, Input, BtnSearch } from './SearchForm.styled';
import { useState } from "react";

import { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

export const SearchForm = ({ onSubmit}) => {
  const [searchParams, setSearchParams] = useSearchParams('query');
  const query = searchParams.get('query');

  const [state, setState] = useState({ search: query });

  useEffect(() => {
    if (state.search !== '') {
      onSubmit({ search: query });
    }
  }, [onSubmit, state, query]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.elements[0].value === '') {
      return;
    }
    onSubmit({ ...state });
    setState({ search: '' });
    setSearchParams('');
    setSearchParams({ query: e.target.elements[0].value });
  };


    return (
      <div>
        <Formik>
          <FormWrap onSubmit={handleSubmit}>
            <label name="search">
              <Input
                type="text"
                placeholder="Enter your search"
                name="search"
                onChange={handleInputChange}
                value={state.search}
                autoComplete="on"
                autoFocus
              ></Input>
            </label>
            <BtnSearch type="submit">Search</BtnSearch>
          </FormWrap>
        </Formik>
      </div>
    );
  }; 
