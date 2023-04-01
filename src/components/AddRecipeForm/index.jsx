import { Formik, Form } from 'formik';

// Components
import { RecipeGeneralInfo } from './RecipeGeneralInfo';

// styles
import * as Styled from './AddRecipeForm.styled';
import { RecipeIngredients } from './RecipeIngredients';

const initialValues = {
  title: '',
  description: '',
  category: 'food',
  cookingTime: '40min',
  ingredients: []
};

function AddRecipeForm() {
  function handleFormSubmit(values) {
    values.ingredients.forEach((ingredient) => delete ingredient.id);

    // TODO
    // send data to server
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
      {({ errors, handleSubmit }) => {
        const hasErrors = Object.values(errors).some((error) => error);

        return (
          <Form onSubmit={handleSubmit}>
            <RecipeGeneralInfo />
            <RecipeIngredients name="ingredients" />

            {/* Preparation */}
            <Styled.BlockWrapper>
              <Styled.InnerWrapper></Styled.InnerWrapper>
            </Styled.BlockWrapper>

            <button disabled={hasErrors} type="submit">
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default AddRecipeForm;
