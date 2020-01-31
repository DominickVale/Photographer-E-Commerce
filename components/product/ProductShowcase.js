import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

import ActionButton from '../ActionButton'
import ProductTitle from './ProductTitle'
import ProductDate from './ProductDate'
import ProductImage from './ProductImage'
import ProductDescription from './ProductDescription'
import {ProductWrapper} from 'styles/productShowcase'

const ProductShowcase = ({title, date, shortDescription, description}) => {
  const router = useRouter()
  const URL = `/product/[id]`
  const asURL = `/product/${title.split(' ').join('-')}`
  return (
    <ProductWrapper>
      <ProductTitle>{title}</ProductTitle>
      <ProductImage src="test2.jpg"></ProductImage>
      <ProductDate date={date} caption="lorem ipsum"/>
      <ProductDescription readMoreLink={{URL, asURL}}>{shortDescription}</ProductDescription>
      <ActionButton onClick={() => router.push(URL, asURL)}>Check out</ActionButton>
    </ProductWrapper>
  )
}

export default ProductShowcase