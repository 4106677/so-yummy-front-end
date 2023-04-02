import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  BackgroundImage,
  MainWrapper,
  InnerBox,
  Button,
  AuthFormBox,
  FormSvgBlack,
  FormSvgWhite,
  Container,
  FormBox,
  InputFormBox,
  InputBox,
  Title,
  Input,
  LinkStyled,
  GoogleAuth,
} from './RegisterForm.styled';

import useMediaQuery from '../Hooks/useMediaQuery';

export const RegisterForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const isDesktop = useMediaQuery('(min-width: 1440px)');

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is Required.')
      .min(1, 'Name is Too Short.'),
    email: Yup.string().email().required('Email is Required.'),
    password: Yup.string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/(?=.*[0-9])/, 'Password must contain a number.'),
  });

  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    form.reset();
  };

  return (
    <>
      <Container>
        <BackgroundImage />
        <MainWrapper>
          <AuthFormBox>
            <InnerBox>
              {isDesktop ? <FormSvgWhite /> : <FormSvgBlack />}
              <GoogleAuth />
              <Title>Registration</Title>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <FormBox>
                  <InputFormBox>
                    <InputBox>
                      <Input type="text" name="name" placeholder="Name" />
                    </InputBox>
                    <InputBox>
                      <Input name="email" type="email" placeholder="Email" />
                    </InputBox>
                    <InputBox>
                      <Input
                        name="password"
                        type="password"
                        placeholder="Password"
                      />
                    </InputBox>
                  </InputFormBox>
                  <Button type="submit">Sign up</Button>
                </FormBox>
              </Formik>
            </InnerBox>
          </AuthFormBox>
          <LinkStyled to="/signin">Sign In</LinkStyled>
        </MainWrapper>
      </Container>
    </>
  );
};
