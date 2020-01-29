import React from 'react'

import {StyledProductTitle} from 'styles/productShowcase'

const ProductTitle = (props) => {
  return (
    <>
    <StyledProductTitle>{props.children}</StyledProductTitle>
    </>
  )
}

export default ProductTitle
