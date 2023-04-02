import React from 'react';
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
  image: '',
  title: '',
  description: '',
  preparationSteps: '',
  category: 'food',
  cookingTime: '40min',
  ingredients: []
};

export function AddRecipeForm() {
  const [isSubmit, setIsSubmit] = React.useState(false);

  function handleFormSubmit(values) {
    values.ingredients.forEach((ingredient) => delete ingredient.id);
    // temp
    alert(JSON.stringify(values, null, 2));
    // TODO
    // send data to server
  }

  return (
    <React.Fragment>
      <Formik
        initialValues={initialValues}
        validationSchema={addRecipeValidationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ handleSubmit }) => {
          return (
            <Styled.FormikForm onSubmit={handleSubmit}>
              <RecipeGeneralInfo
                names={['image', 'title', 'description', 'category', 'cookingTime']}
                selectOneOptionList={['food', 'drink', 'else']}
                selectTwoOptionList={['40min', '20min', '1h']}
              />

              <RecipeIngredients
                name="ingredients"
                selectOptionList={['tbs', 'tsp', 'kg', 'g']}
                inputOptionList={['cola', 'tea', 'coffee', 'sprite']}
                isSubmit={isSubmit}
              />

              <RecipePreparation name="preparationSteps" />

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
