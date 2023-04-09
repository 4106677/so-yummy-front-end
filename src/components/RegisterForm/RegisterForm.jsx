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
} from './RegisterForm.styled';

import useMediaQuery from '../Hooks/useMediaQuery';

import { ValigationStatus, SwitchStatusIcon } from './validationStatus';
import { WarningText } from './validationStatus.styled';
import {
  SignupSchema,
  warningPasswordValidation,
} from '../../validation/inputsValidationSchema';

import { register } from '../../redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(register(data));
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
                {({ values, errors, touched }) => (
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
                          value={values.name}
                          $success={!errors.name && touched.name}
                          $error={errors.name && touched.name}
                        />
                        {
                          <SwitchStatusIcon
                            name="name"
                            error={errors.name}
                            touched={touched.name}
                            value={values.name}
                          />
                        }

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
                        {/* {switchStatusIcon()} */}
                        {errors.email && (
                          <ValigationStatus name="email" error={errors.email} />
                        )}
                      </InputBox>
                      <InputBox
                        style={{ marginBottom: 0 }}
                        $gap={errors.password}
                      >
                        {/* set icon color */}
                        <PasswordIcon
                          $error={errors.password && touched.password}
                          $success={!errors.password && touched.password}
                        />
                        <Input
                          id="password"
                          name="password"
                          type="password"
                          value={values.password}
                          placeholder="Password"
                          autoComplete="off"
                          // set input color
                          $warning={
                            touched.password &&
                            !warningPasswordValidation(values.password)
                          }
                          $error={errors.password && touched.password}
                          $success={!errors.password && touched.password}
                        />
                        {/* set icon validation status */}
                        {/* {switchStatusIcon()} */}
                        {/* set text*/}
                        {!errors.password &&
                        values.password &&
                        !warningPasswordValidation(values.password) ? (
                          <WarningText>
                            Your password is little secure. Add a capital
                            letter.
                          </WarningText>
                        ) : !errors.password && touched.password ? (
                          <ValigationStatus
                            name="password"
                            success="Password is secure"
                          />
                        ) : errors.password && touched.password ? (
                          <ValigationStatus
                            name="password"
                            error={errors.password}
                          />
                        ) : (
                          <></>
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
