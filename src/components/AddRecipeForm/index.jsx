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
  function handleFormSubmit(values) {
    values.ingredients.forEach((ingredient) => delete ingredient.id);

    alert(JSON.stringify(values, null, 2));
    // TODO
    // send data to server
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={addRecipeValidationSchema}
      onSubmit={handleFormSubmit}
    >
      {({ errors, handleSubmit }) => {
        const hasErrors = Object.values(errors).some((error) => error);

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
