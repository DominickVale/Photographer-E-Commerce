import React from 'react'

import {ContactsContainer,ContactsLabelContainer, ContactsDetailsContainer, ContactsItem, ContactsLabel } from 'styles/layout/footer'

const ContactDetailsList = () => {
  return (
    <ContactsContainer>
      <ContactsLabelContainer>
        <ContactsLabel>Address</ContactsLabel>
        <ContactsLabel>Phone</ContactsLabel>
        <ContactsLabel>Details</ContactsLabel>
      </ContactsLabelContainer>
      <ContactsDetailsContainer>
        <ContactsItem>Lorem ipsum dolor sit amet</ContactsItem>
        <ContactsItem>555-555-555</ContactsItem>
        <ContactsItem>Lorem ipsum dolor sit aem ipsum dolor sit aem ipsum dolor sit amet</ContactsItem>
      </ContactsDetailsContainer>
    </ContactsContainer>
  )
}

export default ContactDetailsList
