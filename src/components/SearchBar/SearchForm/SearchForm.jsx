import { Formik } from 'formik';
import { FormWrap, Input, BtnSearch } from './SearchForm.styled';
import { useState } from "react";

export const SearchForm = () => {
  const [query, setQuery] = useState('');

      const onSubmit = newQuery => {
        setQuery(newQuery);
      };

 const handleInputChange = (e) => {
   setQuery(e.currentTarget.value.toLowerCase());
   console.log("yes");
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
