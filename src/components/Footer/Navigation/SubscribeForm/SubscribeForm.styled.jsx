import styled from 'styled-components';

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
}
`

export const SubscribeText = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
/* or 129% */

letter-spacing: -0.02em;

color: #FAFAFA;
`

export const SubInputEmail = styled.input`
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
    &::placeholder{
      font-size: 14px;
      line-height: 21px;
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
  @media(min-width: 768px){
    width: 171px;
    height: 50px;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
  }
`;

