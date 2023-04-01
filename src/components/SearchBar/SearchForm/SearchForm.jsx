import { Formik } from 'formik';
import { FormWrap, Input, BtnSearch } from './SearchForm.styled';
import { useState } from "react";

export const SearchForm = ({items}) => {
  const [query, setQuery] = useState('');

      const onSubmit = newQuery => {
        setQuery(newQuery);
      };

  const handleInputChange = (e) => {
    if (!e.currentTarget.value) return setQuery(items);
   console.log(items);
   const resultArray = items.filter(img => img.titles.includes(e.currentTarget.value));
   console.log(resultArray);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      return alert(
        'Field for searching is empty. Add information for request.'
      );
    }
    onSubmit(query);
    console.log(query);
    setQuery('');
  };

  


  return (
    <div>
      <Formik>
        <FormWrap onSubmit={handleSubmit}>
          <label name="searchDish">
            <Input
              type="text"
              placeholder="Beef"
              name="searchDish"
              onChange={handleInputChange}
              value={query}
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
