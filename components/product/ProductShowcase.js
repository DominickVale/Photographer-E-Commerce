import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

import ActionButton from '../ActionButton'
import ProductTitle from './ProductTitle'
import ProductDate from './ProductDate'
import ProductImage from './ProductImage'
import ProductDescription from './ProductDescription'
import {ProductWrapper} from 'styles/productShowcase'

const ProductShowcase = ({title, date, description}) => {
  const router = useRouter()

  return (
    <ProductWrapper>
      <ProductTitle>{title}</ProductTitle>
      <ProductImage src="test1.jpg"><ProductDate date={date} caption="lorem ipsum"/></ProductImage>
      <ProductDescription>{description}</ProductDescription>
      <ActionButton onClick={() => router.push(`/product/[id]`, `/product/${title.split(' ').join('-')}`)}>Check out</ActionButton>
    </ProductWrapper>
  )
}

export default ProductShowcase