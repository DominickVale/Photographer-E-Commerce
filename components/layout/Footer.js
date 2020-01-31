import React from 'react'

import {FooterContainer, FooterMain, FooterHeading, FooterLogo, FooterLinksContainer, FooterLinksLeftContainer, FooterLinksRightContainer, FooterLink} from 'styles/layout/footer'
import {NavBrand} from 'styles/layout/header'
import ContactDetailsList from '../ContactDetailsList'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterMain>
        <FooterHeading>Want to talk?</FooterHeading>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringiLorem ipsum  ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
      </FooterMain>
    <ContactDetailsList />
    <FooterLinksContainer>
      <FooterLinksLeftContainer>
        <FooterLink>ABOUT</FooterLink>
        <FooterLink>CONTACTS</FooterLink>
        <FooterLink>BACK TO TOP</FooterLink>
      </FooterLinksLeftContainer>
      <FooterLinksRightContainer>
        <FooterLink>PRIVACY POLICY</FooterLink>
        <FooterLink>TERMS &amp; CONDITIONS</FooterLink>
        <FooterLink>SHIPPING INFO</FooterLink>
      </FooterLinksRightContainer>
    </FooterLinksContainer>
    <FooterLogo><NavBrand href="/" dark>Photo<br/>Commerce</NavBrand></FooterLogo>
   </FooterContainer>
  )
}
export default Footer
