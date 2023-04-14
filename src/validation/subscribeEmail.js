import * as Yup from 'yup';

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const VerifiSubEmail = Yup.object().shape({
     email: Yup.string().email(regex, 'Invalid email')
});