import React from 'react'
import Button from 'public/HamButton.svg'

import {StyledHamButton} from 'styles/layout/hamButton'

const HamButton = (props) => {
  return (
    <>
      <StyledHamButton onClick={props.onClick}>
        <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 9H20V10.5H0V9ZM0 0H20V1.5H0V0Z" fill="black"/>
        </svg>
      </StyledHamButton>
    </>
  )
}

export default HamButton
