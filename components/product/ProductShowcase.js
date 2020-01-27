import React from 'react'

import ActionButton from '../ActionButton'
import ProductTitle from './ProductTitle'
import ProductDate from './ProductDate'
import ProductImage from './ProductImage'
import ProductDescription from './ProductDescription'

const ProductShowcase = () => {
  return (
    <>
    <ProductTitle>Title of the group</ProductTitle>
    <ProductImage/>
    <ProductDate date="10/01/2020" caption="lorem ipsum"/>
    <ProductDescription></ProductDescription>
    <ActionButton></ActionButton>
    </>
  )
}

export default ProductShowcase