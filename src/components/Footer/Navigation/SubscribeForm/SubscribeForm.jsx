import React, { useState, useRef } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { SubEmail } from 'validation/subscribeEmail';
import {
    SubInputEmail,
    SubBtn,
    SubscribeFormWrapp,
    SubscribeTitle,
    SubscribeText,
    FormWrap
} from './SubscribeForm.styled';

export const SubscribeForm = () => {
    const [inputValue, setInputValue] = useState('');
    const formRef = useRef(null);

    const isInputValid = inputValue.trim().length > 5;

    const sendSubscriptionEmail = (subEmail) => {
        const options = {
            method: "POST",
            email: JSON.stringify(subEmail),
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
        };

        fetch('/subscribe', options)
            .then(response => response.json())            
            .catch(error => console.error(error));
    }
    
    const dispatch = useDispatch();

     const handleSubmit = e => {
        console.log(e.email);
        setInputValue(e.email);
        dispatch(SubEmail(e.email));
        sendSubscriptionEmail(e.email)
        formRef.current.reset()
    };

    return (
        <SubscribeFormWrapp>
            <SubscribeTitle>Subscribe to our Newsletter</SubscribeTitle>
            <SubscribeText>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</SubscribeText>

            <Formik
                validationSchema={SubEmail}
                initialValues={{ email: "" }}
                onSubmit={handleSubmit}>
                
                <Form ref={formRef}>    
                    <FormWrap>
                        <SubInputEmail
                            type='email'
                            name='email'
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