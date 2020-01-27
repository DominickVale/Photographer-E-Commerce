import React from 'react'

import {NavBrand} from '../../styles/layout/header'
import ContactDetailsList from '../ContactDetailsList'

const Footer = () => {
  return (
    <>
    <h1>Want to talk?</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringiLorem ipsum  ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
    <ContactDetailsList />
    <ul>
      <li>ABOUT</li>
      <li>CONTACTS</li>
      <li>BACK TO TOP</li>
    </ul>
    <ul>
      <li>PRIVACY POLICY</li>
      <li>TERMS &amp; CONDITIONS</li>
      <li>SHIPPING INFO</li>
    </ul>
    <NavBrand href="/" dark>PhotoCommerce</NavBrand>
   </>
  )
}
export default Footer
