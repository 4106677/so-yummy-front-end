import {
    SubInputEmail,
    SubBtn,
    SubscribeFormWrapp,
    SubscribeTitle,
    SubscribeText
} from './SubscribeForm.styled';

export const SubscribeForm = () => {
    return (
        <SubscribeFormWrapp>
            <SubscribeTitle>Subscribe to our Newsletter</SubscribeTitle>
            <SubscribeText>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</SubscribeText>
            <SubInputEmail placeholder="Enter your email address" />
            <SubBtn>Subcribe</SubBtn>
        </SubscribeFormWrapp>
    )
}