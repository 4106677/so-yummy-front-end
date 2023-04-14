import {
  FooterSection,
  FooterWrap,
  ARRdiv,
  ARR,
  ToS
} from "./Footer.styled"
import { Navigation } from "./Navigation/Navigation"


export const Footer = () => {
  return (
    <>
      <FooterWrap>
      <FooterSection>
        <Navigation />
        </FooterSection>
     </FooterWrap>
      
        <ARRdiv>
        <ARR>© 2023 All Rights Reserved.</ARR>
        <ToS>Terms of Service</ToS>
      </ARRdiv>
    </>
  )
}