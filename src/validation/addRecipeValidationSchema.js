import * as Yup from 'yup';

export const addRecipeValidationSchema = Yup.object().shape({
  preview: Yup.string(),
  title: Yup.string().required('Required field'),
  description: Yup.string(),
  category: Yup.string().required('Required field'),
  instructions: Yup.string().required('Required field'),
  time: Yup.string().required('Required field'),
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
