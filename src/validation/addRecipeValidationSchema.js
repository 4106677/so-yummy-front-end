import * as Yup from 'yup';

export const addRecipeValidationSchema = Yup.object().shape({
  image: Yup.string(),
  title: Yup.string().required('Required field'),
  description: Yup.string(),
  preparationSteps: Yup.string(),
  category: Yup.string().required('Required field'),
  cookingTime: Yup.string().required('Required field'),
  ingredients: Yup.array()
    .of(
      Yup.object().shape({
        id: Yup.string(),
        ingredient: Yup.string().required('Required field'),
        amount: Yup.string().required('Required field'),
        measurementUnit: Yup.string()
      })
    )
    .compact(({ ingredient, amount }) => ingredient || amount)
    .required('Required field')
});
