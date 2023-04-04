import * as Yup from 'yup';

const passwordRules = /^(?=.*[A-Z])/;

export const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Please enter your name').min(3).max(20),
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email'),
  password: Yup.string()
    .trim()
    .matches(passwordRules, 'Password must contain one uppercase character')
    .required('Please enter your password')
    .min(5)
    .max(15),
});

export const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email'),
  password: Yup.string()
    .trim()
    .matches(passwordRules, 'Password must contain one uppercase character')
    .required('Please enter your password')
    .min(5, 'Your password is little secure')
    .max(15),
});
