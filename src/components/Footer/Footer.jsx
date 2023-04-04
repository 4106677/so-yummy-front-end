import {
  FooterSection,
  ARRdiv,
  ARR,
  ToS
} from "./Footer.styled"
import { Navigation } from "./Navigation/Navigation"


export const Footer = () => {
  return (
    <>
      <FooterSection>
        <Navigation />
      </FooterSection>
      
      <ARRdiv>
        <ARR>© 2023 All Rights Reserved.</ARR>
        <ToS>Terms of Service</ToS>
      </ARRdiv>
    </>
  )
}