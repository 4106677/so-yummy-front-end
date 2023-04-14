import { Field } from 'formik';
import styled from 'styled-components';
import laterSVG from 'images/Footer/leter-form-svg.png'
export const SubscribeFormWrapp = styled.div`
  
@media(max-width: 767px){
  width: 204px;
  margin-left: auto;
  margin-right: auto;
}

  @media(min-width: 768px){
    display: flex;
    margin-top: 72px;
    justify-content: center;
  }
  @media (min-width: 1440px){
    display: block;
    width: 339px;
    margin: 0;
  }
`
export const SubscribeTitle = styled.h1`
display: none;
@media (min-width: 1440px){
  display: block;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #FAFAFA;
  margin-bottom: 14px;
}
`

export const SubscribeText = styled.p`
  display: none;
  @media(min-width: 1440px){
    display: block;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: #FAFAFA;
    margin-bottom: 28px;
}

`
export const FormWrap = styled.div`
  @media screen and (min-width: 768px){
     display: flex;
  }
  @media screen and (min-width: 1440px){
    display: block;
  }
`

export const SubInputEmail = styled(Field)`
  box-sizing: border-box;
  width: 204px;
  height: 38px;
  border: 1px solid #fafafa;
  border-radius: 6px;
  margin-bottom: 8px;
  margin-top: 20px;
  padding-left: 42px;
  background-color: #22252a;
  color: white;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  background-image: url("${laterSVG}");
  background-repeat: no-repeat;
  background-size: 16px 12px;
  background-position: top 12px left 14px;
  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
  }
  @media(min-width: 768px){
    margin: 0 12px 0 0;
    width: 259px;
    height: 50px;
    font-size: 14px;
    line-height: 21px;
    padding-left: 51px;
    background-size: 20px 16px;
    background-position: top 15px left 15px;
    &::placeholder{
      font-size: 14px;
      line-height: 21px;
    }
  }
  @media (min-width: 1440px){
    width: 339px;
    height: 60px;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 16px;
    background-position: top 21px left 15px;
    &::placeholder{
      font-size: 18px;
      line-height: 27px;
    }
  }
`;

export const SubBtn = styled.button`
  width: 204px;
  height: 38px;
  background: #8baa36;
  border-radius: 6px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  &:hover{
    color:black;
  }
  &:disabled{
    background: rgba(139, 170, 54, 0.5);
    cursor: auto;
      &:hover{
    color:white;
  }
  }
  @media(min-width: 768px){
    width: 171px;
    height: 50px;
    font-size: 16px;
    line-height: 18px;
  }
   @media (min-width: 1440px){
    width: 339px;
    height: 60px;
    font-size: 16px;
    line-height: 18px;
  }
`;

