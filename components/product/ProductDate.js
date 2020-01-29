import React from 'react'

import {StyledDate} from 'styles/productShowcase'

const ProductDate = (props) => {
  return (
    <StyledDate>
      <time><strong>{props.date || '10/01/2020'}</strong></time><span>{props.caption || 'lorem ipsum'}</span>
    </StyledDate>
  )
}

export default ProductDate
