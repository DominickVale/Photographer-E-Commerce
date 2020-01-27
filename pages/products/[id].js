import React from 'react'
import {useRouter} from 'next/router'

import ProductTitle from '../../components/product/ProductTitle'
import ProductDate from '../../components/product/ProductDate'
import ProductImage from '../../components/product/ProductImage'
import ProductDescription from '../../components/product/ProductDescription'
import ActionButton from '../../components/ActionButton'

const Product = () => {
  const router = useRouter()
  
  return (
    <>
      <ProductTitle></ProductTitle>
      <ProductImage/>
      <ProductDate/>
      <ProductDescription />
      <ActionButton></ActionButton>
    </>
  )
}

export default Product
