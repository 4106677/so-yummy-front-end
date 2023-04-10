import {
    SubInputEmail,
    SubBtn,
    SubscribeFormWrapp,
    SubscribeTitle,
    SubscribeText,
    FormWrap
} from './SubscribeForm.styled';
import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { SubEmail } from 'validation/subscribeEmail';

export const SubscribeForm = () => {
    const [inputValue, setInputValue] = useState('');

    const isInputValid = inputValue.trim().length > 5;

    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    const handleInputChange = (event) => {
    setInputValue(event.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.elements.email.value);
        console.log(e);
        setInputValue('');
    };

    return (
        <SubscribeFormWrapp>
            <SubscribeTitle>Subscribe to our Newsletter</SubscribeTitle>
            <SubscribeText>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</SubscribeText>

            <Formik
                validationSchema={SubEmail}
                initialValues={{ email: '' }}
                onSubmit={handleSubmit}>
                
                <Form>    
                    <FormWrap>
                        <SubInputEmail
                            type='email'
                            name='email'
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Enter your email address" />
                        
                        <ErrorMessage name="email" />
                        <SubBtn
                            type='submit'
                            disabled={!isInputValid}>
                            Subcribe
                        </SubBtn>
                    </FormWrap>
                </Form>
            </Formik>
            
        </SubscribeFormWrapp>
    )   
}