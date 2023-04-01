import { Formik } from 'formik';
import { FormWrap, Input, BtnSearch } from './SearchForm.styled';

export const SearchForm = ({ filter, onFilter }) => {

  return (
    <div>
      <Formik>
        <FormWrap>
          <label htmlFor="searchDish">
            <Input
              type="text"
              placeholder="Beef"
              name="searchDish"
              value={filter}
              onChange={onFilter}
            ></Input>
          </label>
          <BtnSearch type="submit">Search</BtnSearch>
        </FormWrap>
      </Formik>
    </div>
  );
};
