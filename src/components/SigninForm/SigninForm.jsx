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
  GoogleLink,
  LinkStyled,
} from './SigninForm.styled';

import useMediaQuery from '../Hooks/useMediaQuery';
import ValigationStatus from './validationStatus';

import { login } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';

// import { SigninSchema } from '../../validation/inputsValidationSchema';

export const SigninForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(login(data));
    console.log(data);
  };

  const isDesktop = useMediaQuery('(min-width: 1440px)');

  // const validationSchema = SigninSchema;

  return (
    <>
      <Container>
        <BackgroundImage />
        <MainWrapper>
          <AuthFormBox>
            <InnerBox>
              {isDesktop ? <FormSvgWhite /> : <FormSvgBlack />}
              <GoogleLink to="https://recipes-becend-49lg.onrender.com/auth/google">
                <GoogleAuth />
              </GoogleLink>
              <Title>Sign In</Title>
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                }}
                // validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <Form>
                    <InputFormBox
                      $gap={errors.name || errors.email || errors.password}
                    >
                      <InputBox $gap={errors.email}>
                        <EmailIcon
                          $error={errors.email && touched.email}
                          $success={!errors.email && touched.email}
                        />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Email"
                          $error={errors.email && touched.email}
                          $success={!errors.email && touched.email}
                        />
                        {!errors.email && touched.email && <SuccessIcon />}
                        {errors.email && touched.email && <ErrorIcon />}
                        {errors.email && (
                          <ValigationStatus name="email" error={errors.email} />
                        )}
                      </InputBox>
                      <InputBox
                        style={{ marginBottom: 0 }}
                        $gap={errors.password}
                      >
                        <PasswordIcon
                          $error={errors.password && touched.password}
                          $success={!errors.password && touched.password}
                        />
                        <Input
                          id="password"
                          name="password"
                          type="password"
                          placeholder="Password"
                          $error={errors.password && touched.password}
                          $success={!errors.password && touched.password}
                        />
                        {!errors.password && touched.password && (
                          <SuccessIcon />
                        )}
                        {errors.password && touched.password && <ErrorIcon />}
                        {errors.password && (
                          <ValigationStatus
                            name="password"
                            error={errors.password}
                          />
                        )}
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
