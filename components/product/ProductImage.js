import React from 'react'

import {StyledProductImage, StyledImageContainer} from 'styles/productShowcase'

const ProductImage = (props) => {
  return (
    <StyledImageContainer>
      <StyledProductImage src={props.src} />
      {props.children}
    </StyledImageContainer>
  )
}

export default ProductImage
