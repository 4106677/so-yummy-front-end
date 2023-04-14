import React, { useState, useRef } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
  SubInputEmail,
  SubBtn,
  SubscribeFormWrapp,
  SubscribeTitle,
  SubscribeText,
  FormWrap,
} from './SubscribeForm.styled';

export const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async e => {
    try {
      const response = await fetch('/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          email: 'email',
        }),
      });
      if (response.ok) {
        Notify.success('You have successfully subscribed to our newsletter!');
      } else {
        Notify.failure('Something went wrong, please try again.');
      }
    } catch (error) {
      console.error(error);
    }
    setEmail('');
    formRef.current.reset();
  };

  const handleEmailChange = event => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
  };

  const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isSubmitDisabled = !isEmailValid || email === '';

  return (
    <SubscribeFormWrapp>
      <SubscribeTitle>Subscribe to our Newsletter</SubscribeTitle>
      <SubscribeText>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </SubscribeText>

      <Formik initialValues={{ email: '' }} onSubmit={handleSubmit}>
        <Form ref={formRef}>
          <FormWrap>
            <SubInputEmail
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              autoComplete="off"
              placeholder="Enter your email address"
            />
            <ErrorMessage name="email" />
            <SubBtn type="submit" disabled={isSubmitDisabled}>
              Subcribe
            </SubBtn>
          </FormWrap>
        </Form>
      </Formik>
    </SubscribeFormWrapp>
  );
};
