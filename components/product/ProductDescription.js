import React from 'react'

const ProductDescription = (props) => {
  return (
    <>
      <p>{props.children || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam...'} <strong>Read more</strong></p>
    </>
  )
}

export default ProductDescription
