import { Formik } from 'formik';

// Components
import { RecipeGeneralInfo } from './RecipeGeneralInfo';
import { RecipeIngredients } from './RecipeIngredients';
import { RecipePreparation } from './RecipePreparation';

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
          <Styled.FormikForm onSubmit={handleSubmit}>
            <RecipeGeneralInfo
              names={['iamge', 'title', 'description', 'category', 'cookingTime']}
              selectOneOptionList={['food', 'drink', 'else']}
              selectTwoOptionList={['40min', '20min', '1h']}
            />

            <RecipeIngredients
              name="ingredients"
              selectOptionList={['tbs', 'tsp', 'kg', 'g']}
              inputOptionList={['cola', 'tea', 'coffee', 'sprite']}
            />

            <RecipePreparation name="preparationSteps" />

            <Styled.SubmitFormButton disabled={hasErrors} type="submit">
              Add
            </Styled.SubmitFormButton>
          </Styled.FormikForm>
        );
      }}
    </Formik>
  );
}

export default AddRecipeForm;
