import * as Yup from 'yup';

const passwordRule =
  /^[a-zA-Zа-яА-ЯА-ЩЬьЮюЯяЇїІіЄєҐґ0-9]+(([' -][a-zA-Zа-яА-Я0-9 ])?[a-zA-Zа-яА-Я0-9]*)*$/;

export const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Please enter your name').min(3).max(20),
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email'),
  password: Yup.string()
    .trim()
    .matches(passwordRule, 'Special symbols are not allowed')
    .required('Please enter your password')
    .min(5, 'Your password is too short')
    .max(15, 'Your password must be 15 characters max'),
});

export const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email'),
  password: Yup.string()
    .trim()
    .matches(passwordRule, 'Password must contain one uppercase character')
    .required('Please enter your password')
    .min(5, 'Your password is little secure')
    .max(15),
});

export function warningPasswordValidation(value) {
  const regex = /[A-Z-А-Я-ЩЬЮЯЇІЄҐ]/;
  return regex.test(value);
}
