import React from 'react'

import {StyledDate} from 'styles/productShowcase'

const ProductDate = (props) => {
  return (
    <StyledDate styleProduct={props.styleProduct}>
      <time><strong>{props.date || '10/01/2020'}</strong></time>
    </StyledDate>
  )
}

export default ProductDate
