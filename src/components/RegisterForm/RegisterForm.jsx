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
  SuccessIcon,
  InputFormBox,
  InputBox,
  Title,
  Input,
  LinkStyled,
  GoogleAuth,
  GoogleLink,
  // WarningIcon,
} from './RegisterForm.styled';

import useMediaQuery from '../Hooks/useMediaQuery';
import { useDispatch } from 'react-redux';

import ValigationStatus from './validationStatus';
// import { SignupSchema } from '../../validation/inputsValidationSchema';

import { register } from '../../redux/auth/operations';
import { Link } from 'components/Socials/Socials.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = data => {
    dispatch(register(data));
    console.log(data);
  };
  const initialState = {
    name: '',
    email: '',
    password: '',
  };

  // const validationSchema = SignupSchema;

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
                initialValues={initialState}
                // validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <Form>
                    <InputFormBox
                      $gap={errors.name || errors.email || errors.password}
                    >
                      <InputBox $gap={errors.name}>
                        <UserIcon
                          $success={!errors.name && touched.name}
                          $error={errors.name && touched.name}
                        />
                        <Input
                          id="name"
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
                          autoComplete="off"
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
          <LinkStyled to="/login">Sign In</LinkStyled>
        </MainWrapper>
      </Container>
    </>
  );
};
