import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required('Please enter your name')
    // .matches(/^[a-zA-Z0-9]+$/, 'Special symbols are not allowed')
    .min(1)
    .max(20),
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email'),
  password: Yup.string()
    .trim()
    // .matches(/^(?=.*[A-Z])/, 'Must contain one uppercase character')
    .required('Please enter your password')
    .min(5, 'Your password is little secure')
    .max(15),
});

export const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email'),
  password: Yup.string()
    .trim()
    // .matches(/^(?=.*[A-Z])/, 'Must contain one uppercase character')
    .required('Please enter your password')
    .min(5, 'Your password is little secure')
    .max(15),
});
