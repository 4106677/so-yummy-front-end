import { Formik } from 'formik';
import { FormWrap, Input, BtnSearch} from './SearchForm.styled';

export const SearchForm = () => {
  return (
    <div>
      <Formik>
        <FormWrap>
          <label>
            <Input type="text" placeholder="Beef" name="searchDish"></Input>
          </label>
          <BtnSearch type="submit">Search</BtnSearch>
        </FormWrap>
      </Formik>
    </div>
  );
};
