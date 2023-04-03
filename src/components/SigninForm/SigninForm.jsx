import React from 'react';
import { Formik, Form } from 'formik';

import {
  BackgroundImage,
  MainWrapper,
  InnerBox,
  Button,
  AuthFormBox,
  GoogleAuth,
  FormSvgBlack,
  FormSvgWhite,
  Container,
  EmailIcon,
  PasswordIcon,
  ErrorIcon,
  // WarningIcon,
  SuccessIcon,
  InputFormBox,
  InputBox,
  Title,
  Input,
  LinkStyled,
} from './SigninForm.styled';

import useMediaQuery from '../Hooks/useMediaQuery';

import { SigninSchema } from '../../validation/inputsValidationAchema';

export const SigninForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const isDesktop = useMediaQuery('(min-width: 1440px)');

  const validationSchema = SigninSchema;

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
              <Title>Sign In</Title>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ errors, touched }) => (
                  <Form>
                    <InputFormBox>
                      <InputBox>
                        <EmailIcon
                          $error={errors.email && touched.email}
                          $success={!errors.email && touched.email}
                        />
                        <Input
                          // value={email}
                          // onSubmit={handleChange}
                          name="email"
                          type="email"
                          placeholder="Email"
                          autoComplete="off"
                          $error={errors.email && touched.email}
                          $success={!errors.email && touched.email}
                        />
                        {!errors.email && touched.email && <SuccessIcon />}
                        {errors.email && touched.email && <ErrorIcon />}
                      </InputBox>
                      <InputBox>
                        <PasswordIcon
                          $error={errors.password && touched.password}
                          // $warning={errors.password && touched.password}
                          $success={!errors.password && touched.password}
                        />
                        <Input
                          // value={password}
                          // onSubmit={handleChange}
                          name="password"
                          type="password"
                          placeholder="Password"
                          autoComplete="off"
                          $error={errors.password && touched.password}
                          // $warning={errors.password && !touched.password}
                          $success={!errors.password && touched.password}
                        />
                        {!errors.password && touched.password && (
                          <SuccessIcon />
                        )}
                        {/* {errors.password && touched.password && <WarningIcon />} */}
                        {errors.password && touched.password && <ErrorIcon />}
                      </InputBox>
                    </InputFormBox>
                    <Button type="submit">Sign up</Button>
                  </Form>
                )}
              </Formik>
            </InnerBox>
          </AuthFormBox>
          <LinkStyled to="/register">Registration</LinkStyled>
        </MainWrapper>
      </Container>
    </>
  );
};
