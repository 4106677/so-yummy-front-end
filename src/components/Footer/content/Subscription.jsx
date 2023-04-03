import {
  SubBtn,
  SubInputEmail,
  SubText,
  SubTitle,
  Sub,
} from './Subscription.styled';

export const Subscription = () => {
  return (
    <Sub>
      <SubTitle>Subscribe to our Newsletter</SubTitle>
      <SubText>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </SubText>
      <form action="">
        <SubInputEmail placeholder="Enter your email address" />
        <SubBtn>Subcribe</SubBtn>
      </form>
    </Sub>
  );
};
