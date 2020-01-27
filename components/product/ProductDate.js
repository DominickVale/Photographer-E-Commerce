import React from 'react'

const ProductDate = (props) => {
  return (
    <>
      <p><strong>{props.date || '10/01/2020'}</strong></p><p>{props.caption || 'lorem ipsum'}</p>
    </>
  )
}

export default ProductDate
