import React from 'react'

import {StyledProductImage, StyledImageContainer} from 'styles/productShowcase'

const ProductImage = (props) => {
  return (
    <StyledImageContainer styleProduct={props.styleProduct}>
      <StyledProductImage src={props.src} />
      {props.children}
    </StyledImageContainer>
  )
}

export default ProductImage
