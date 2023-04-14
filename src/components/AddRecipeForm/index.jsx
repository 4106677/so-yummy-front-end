import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import { RecipeGeneralInfo } from './RecipeGeneralInfo';
import { RecipeIngredients } from './RecipeIngredients';
import { RecipePreparation } from './RecipePreparation';

import { addRecipeValidationSchema } from 'validation/addRecipeValidationSchema';

import * as Styled from './AddRecipeForm.styled';

const initialValues = {
  preview: '',
  title: '',
  description: '',
  category: '',
  time: '5min',
  ingredients: [],
  instructions: ''
};

export function AddRecipeForm({ categories, ingredients, onSubmit }) {
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [datalistError, setDatalistError] = React.useState(false);

  function handleFormSubmit(values, resetForm) {
    let recipe = { ...values };

    if (datalistError) return;

    for (const key in recipe) {
      if (!recipe[key]) delete recipe[key];
    }

    recipe.ingredients = recipe.ingredients.map((product) => {
      delete product.ingredient;
      const { amount, measurementUnit, ...restIngredient } = product;

      return { ...restIngredient, measure: `${amount} ${measurementUnit}` };
    });

    onSubmit(recipe, resetForm);
  }

  return (
    <React.Fragment>
      <Formik
        initialValues={{ ...initialValues, category: categories[0] }}
        validationSchema={addRecipeValidationSchema}
        onSubmit={(values, { resetForm }) => {
          handleFormSubmit(values, resetForm);
        }}
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
                  '1h',
                  '1h 5min',
                  '1h 10min',
                  '1h 15min',
                  '1h 20min',
                  '1h 25min',
                  '1h 30min',
                  '1h 35min',
                  '1h 40min',
                  '1h 45min',
                  '1h 50min',
                  '1h 55min',
                  '2h',
                  '2h 5min',
                  '2h 10min',
                  '2h 15min',
                  '2h 20min',
                  '2h 25min',
                  '2h 30min',
                  '2h 35min',
                  '2h 40min',
                  '2h 45min',
                  '2h 50min',
                  '2h 55min',
                  '3h',
                  '3h 5min',
                  '3h 10min',
                  '3h 15min',
                  '3h 20min',
                  '3h 25min',
                  '3h 30min',
                  '3h 35min',
                  '3h 40min',
                  '3h 45min',
                  '3h 50min',
                  '3h 55min',
                  '4h'
                ]}
              />

              <RecipeIngredients
                name="ingredients"
                selectOptionList={['tbs', 'tsp', 'kg', 'g']}
                inputOptionList={ingredients}
                isSubmit={isSubmit}
                onDatalistError={(er) => setDatalistError(er)}
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
