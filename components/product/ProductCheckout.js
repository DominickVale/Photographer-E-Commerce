import React from 'react'

import ActionButton from '../ActionButton'
import {CheckoutWrapper, CheckoutBreak, ProductPrice, QuantitySelectorWrapper, QuantitySelectorValue, QuantityOperator} from 'styles/product'

const ProductCheckout = (props) => {
  return (
    <CheckoutWrapper>
      <ProductPrice>{props.price}</ProductPrice>
      <QuantitySelectorWrapper>
        <QuantityOperator>−</QuantityOperator>
        <QuantitySelectorValue>1</QuantitySelectorValue>
        <QuantityOperator>+</QuantityOperator>
      </QuantitySelectorWrapper>
      <CheckoutBreak />
      <ActionButton styleProduct>ADD TO CART</ActionButton>
    </CheckoutWrapper>
  )
}

export default ProductCheckout
