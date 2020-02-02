import React from 'react'

import {StyledArrow} from 'styles/layout/arrow'

const Arrow = (props) => {
  return (
    <StyledArrow>
      <svg width="20" height="64" viewBox="0 0 20 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0V63" stroke="#BDBDBD" stroke-width="2" stroke-miterlimit="10"/>
        <path d="M19 54L10 63L1 54" stroke="#BDBDBD" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="bevel"/>
      </svg>
    </StyledArrow>
  )
}

export default Arrow
