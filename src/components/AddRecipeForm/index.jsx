import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

// Components
import { RecipeGeneralInfo } from './RecipeGeneralInfo';
import { RecipeIngredients } from './RecipeIngredients';
import { RecipePreparation } from './RecipePreparation';

// validation schema
import { addRecipeValidationSchema } from 'validation/addRecipeValidationSchema';

// styles
import * as Styled from './AddRecipeForm.styled';

const initialValues = {
  preview: '', // not required
  title: '', // required
  description: '', // not required
  category: '', // required ---> /recipes/category-list
  time: '5min', // required string
  ingredients: [],
  instructions: '' // required
};

// {
//   id: '', // id of ingredient from backend REQUIRED ----> /ingredients/list
//   // measure: '', // required AMOUNT + MEASUREMENT_UNIT, e.g '1 tlbsp'
//   amount: '',
//   ingredient: '',
//   measurementUnit: ''
// }

export function AddRecipeForm({ categories, ingredients }) {
  const [isSubmit, setIsSubmit] = React.useState(false);

  function handleFormSubmit(values) {
    const newValues = values.ingredients.map((product) => {
      delete product.ingredient;
      const { amount, measurementUnit, ...restIngredient } = product;

      return { ...restIngredient, measure: `${amount} ${measurementUnit}` };
    });
    // temp
    alert(JSON.stringify(newValues, null, 2));
    // TODO
    // send data to server
  }

  return (
    <React.Fragment>
      <Formik
        initialValues={{ ...initialValues, category: categories[0] }}
        validationSchema={addRecipeValidationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ handleSubmit }) => {
          return (
            <Styled.FormikForm onSubmit={handleSubmit}>
              <RecipeGeneralInfo
                names={['preview', 'title', 'description', 'category', 'time']}
                selectOneOptionList={categories}
                selectTwoOptionList={[
                  '5min',
                  '10min',
                  '15min',
                  '20min',
                  '25min',
                  '30min',
                  '35min',
                  '40min',
                  '45min',
                  '50min',
                  '55min',
                  '1h'
                ]}
              />

              <RecipeIngredients
                name="ingredients"
                selectOptionList={['tbs', 'tsp', 'kg', 'g']}
                inputOptionList={ingredients}
                isSubmit={isSubmit}
                inputDatalistKeyExtractor={(option) => option.ingredient}
              />

              <RecipePreparation name="instructions" />

              <Styled.SubmitFormButton type="submit" onClick={() => setIsSubmit(true)}>
                Add
              </Styled.SubmitFormButton>
            </Styled.FormikForm>
          );
        }}
      </Formik>
    </React.Fragment>
  );
}

AddRecipeForm.propTypes = {
  categories: PropTypes.array,
  ingredients: PropTypes.arrayOf(PropTypes.shape)
};
