import React from 'react'

import ActionButton from '../ActionButton'

const ProductCheckout = (props) => {
  return (
    <>
      <h4>{props.price}</h4>
      <div>Quantity</div>
      <hr />
      <ActionButton>Add to cart</ActionButton>
      <span>Fast delivery in 24 hours</span>
    </>
  )
}

export default ProductCheckout
