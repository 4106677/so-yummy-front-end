import { useState } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';

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
  InputFormBox,
  InputBox,
  Title,
  Input,
  LinkStyled,
  GoogleAuth,
  GoogleLink,
  SuccessIcon,
  WarningIcon,
  ErrorIcon,
  SecureEntry,
  PasswordIconLock,
} from './RegisterForm.styled';

import useMediaQuery from '../Hooks/useMediaQuery';

import { ValigationStatus } from './validationStatus';
import { WarningText } from './validationStatus.styled';
import {
  SignupSchema,
  warningPasswordValidation,
} from '../../validation/inputsValidationSchema';

import { register } from '../../redux/auth/operations';

export const RegisterForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(register(data));
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

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
              <GoogleLink to="https://recipes-becend-49lg.onrender.com/auth/google">
                <GoogleAuth />
              </GoogleLink>
              <Title>Registration</Title>
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  password: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ values, errors, touched }) => {
                  const nameError = errors.name && touched.name;
                  const nameSuccess = !errors.name && touched.name;
                  const emailError = errors.email && touched.email;
                  const emailSuccess = !errors.email && touched.email;
                  const passwordWarning =
                    !errors.password &&
                    values.password &&
                    !warningPasswordValidation(values.password);
                  const passwordError = errors.password && touched.password;
                  const passwordSuccess = !errors.password && touched.password;
                  const inputGap =
                    errors.name ||
                    errors.email ||
                    errors.password ||
                    !errors.password ||
                    passwordWarning;
                  return (
                    <Form>
                      <InputFormBox $gap={inputGap}>
                        <InputBox $gap={nameError}>
                          <UserIcon $success={nameSuccess} $error={nameError} />
                          <Input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            autoComplete="off"
                            $success={nameSuccess}
                            $error={nameError}
                          />
                          {nameSuccess ? (
                            <SuccessIcon />
                          ) : nameError ? (
                            <ErrorIcon />
                          ) : null}
                          {nameError && (
                            <ValigationStatus name="name" error={errors.name} />
                          )}
                        </InputBox>
                        <InputBox $gap={emailError}>
                          <EmailIcon
                            $error={emailError}
                            $success={emailSuccess}
                          />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            autoComplete="off"
                            $error={emailError}
                            $success={emailSuccess}
                          />
                          {emailSuccess ? (
                            <SuccessIcon />
                          ) : emailError ? (
                            <ErrorIcon />
                          ) : null}
                          {emailError && (
                            <ValigationStatus
                              name="email"
                              error={errors.email}
                            />
                          )}
                        </InputBox>
                        <InputBox
                          style={{ marginBottom: 0 }}
                          $gap={
                            errors.password ||
                            !errors.password ||
                            passwordWarning
                          }
                        >
                          {passwordShown === true ? (
                            <PasswordIconLock
                              $warning={passwordWarning}
                              $error={passwordError}
                              $success={passwordSuccess}
                            />
                          ) : (
                            <PasswordIcon
                              $warning={passwordWarning}
                              $error={passwordError}
                              $success={passwordSuccess}
                            />
                          )}
                          <Input
                            id="password"
                            name="password"
                            type={passwordShown ? 'text' : 'password'}
                            value={values.password}
                            placeholder="Password"
                            autoComplete="off"
                            $error={passwordError}
                            $success={passwordSuccess}
                            $warning={passwordWarning}
                          />
                          <SecureEntry
                            $secure={
                              passwordWarning ||
                              passwordSuccess ||
                              passwordError
                            }
                            onClick={togglePassword}
                          >
                            {passwordShown ? 'Hide' : 'Show'}
                          </SecureEntry>
                          {passwordWarning ? (
                            <WarningIcon />
                          ) : passwordSuccess ? (
                            <SuccessIcon />
                          ) : passwordError ? (
                            <ErrorIcon />
                          ) : (
                            <></>
                          )}
                          {passwordWarning ? (
                            <WarningText>
                              Your password is little secure. Add a capital
                              letter.
                            </WarningText>
                          ) : passwordSuccess ? (
                            <ValigationStatus
                              name="password"
                              success="Password is secure"
                            />
                          ) : passwordError ? (
                            <ValigationStatus
                              name="password"
                              error={errors.password}
                            />
                          ) : null}
                        </InputBox>
                      </InputFormBox>
                      <Button type="submit">Sign up</Button>
                    </Form>
                  );
                }}
              </Formik>
            </InnerBox>
          </AuthFormBox>
          <LinkStyled to="/login">Sign In</LinkStyled>
        </MainWrapper>
      </Container>
    </>
  );
};
