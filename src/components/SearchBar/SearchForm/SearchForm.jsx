import { Formik } from 'formik';
import { FormWrap, Input, BtnSearch } from './SearchForm.styled';
import { useState } from "react";

export const SearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({ search: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState(prevState => { return { ...prevState, [name]: value } })
  };
  
 

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ search: '' });
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
