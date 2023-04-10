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

export function AddRecipeForm({ categories, ingredients, onSubmit }) {
  const [isSubmit, setIsSubmit] = React.useState(false);

  function handleFormSubmit(values, resetForm) {
    let recipe = { ...values };

    for (const key in recipe) {
      if (!recipe[key]) delete recipe[key];
    }

    recipe.ingredients = recipe.ingredients.map((product) => {
      delete product.ingredient;
      const { amount, measurementUnit, ...restIngredient } = product;

      return { ...restIngredient, measure: `${amount} ${measurementUnit}` };
    });

    // console.log('recipe -->', recipe);

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
