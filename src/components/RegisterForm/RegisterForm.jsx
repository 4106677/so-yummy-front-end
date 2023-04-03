import React from 'react';
import { Formik, Form } from 'formik';

import {
  BackgroundImage,
  MainWrapper,
  InnerBox,
  Button,
  AuthFormBox,
  FormSvgBlack,
  FormSvgWhite,
  Container,
  UserIcon,
  EmailIcon,
  PasswordIcon,
  ErrorIcon,
  // WarningIcon,
  SuccessIcon,
  ErrorText,
  InputFormBox,
  InputBox,
  Title,
  Input,
  LinkStyled,
  GoogleAuth,
} from './RegisterForm.styled';

import useMediaQuery from '../Hooks/useMediaQuery';
import ValigationStatus from './validationStatus';
// import useForm from '../sHooks/useForm';

import { SignupSchema } from '../../validation/inputsValidationAchema';
// import initialState from './initialState';

export const RegisterForm = ({ onSubmit }) => {
  // const { state, handleChange, handleSubmit } = useForm({
  //   initialState,
  //   onSubmit,
  // });
  const initialState = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = () => {
    console.log('initialState');
  };

  // const { name, email, password } = value;

  const validationSchema = SignupSchema;

  const isDesktop = useMediaQuery('(min-width: 1440px)');

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
                initialValues={initialState}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <Form>
                    <InputFormBox>
                      <InputBox>
                        <UserIcon
                          $success={!errors.name && touched.name}
                          $error={errors.name && touched.name}
                        />
                        <Input
                          // value={name}
                          // onSubmit={handleChange}
                          type="text"
                          name="name"
                          placeholder="Name"
                          autoComplete="off"
                          $success={!errors.name && touched.name}
                          $error={errors.name && touched.name}
                        />
                        {!errors.name && touched.name && <SuccessIcon />}
                        {errors.name && touched.name && <ErrorIcon />}
                        {errors.name && (
                          <ValigationStatus name="name" error={errors.name} />
                        )}
                      </InputBox>
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
                        {errors.email && (
                          <ValigationStatus name="email" error={errors.email} />
                        )}
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
          <LinkStyled to="/signin">Sign In</LinkStyled>
        </MainWrapper>
      </Container>
    </>
  );
};
