import React from 'react'

import {StyledProductTitle} from 'styles/productShowcase'

const ProductTitle = (props) => {
  return (
    <>
    <StyledProductTitle styleProduct={props.styleProduct}>{props.children}</StyledProductTitle>
    </>
  )
}

export default ProductTitle
