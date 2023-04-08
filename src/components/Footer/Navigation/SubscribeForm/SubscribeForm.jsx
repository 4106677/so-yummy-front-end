import {
    SubInputEmail,
    SubBtn,
    SubscribeFormWrapp,
    SubscribeTitle,
    SubscribeText,
    Form
} from './SubscribeForm.styled';
import React, { useState } from 'react';

export const SubscribeForm = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
    setInputValue(event.target.value);
    };
    
    const isInputValid = inputValue.trim().length > 5;

    const handleSubmit = (e) => {
    e.preventDefault();
    };

    return (
        <SubscribeFormWrapp>
            <SubscribeTitle>Subscribe to our Newsletter</SubscribeTitle>
            <SubscribeText>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</SubscribeText>
            <Form onSubmit={handleSubmit}>
                <SubInputEmail
                    type='email'
                    name='email'
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                />
            <SubBtn
                type='submit'
                disabled={!isInputValid}
            >
                Subcribe
            </SubBtn>
            </Form>
        </SubscribeFormWrapp>
    )
}