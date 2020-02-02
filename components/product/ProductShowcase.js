import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

import ActionButton from '../ActionButton'
import ProductTitle from './ProductTitle'
import ProductDate from './ProductDate'
import ProductImage from './ProductImage'
import ProductDescription from './ProductDescription'
import {ProductWrapper} from 'styles/productShowcase'

const ProductShowcase = ({title, image, date, shortDescription}) => {
  const router = useRouter()
  const URL = `/product/[slug]`
  const asURL = `/product/${title.split(' ').join('-')}`
  return (
    <ProductWrapper>
      <ProductTitle>{title}</ProductTitle>
      <ProductImage src={image}></ProductImage>
      <ProductDate date={date} caption="lorem ipsum"/>
      <ProductDescription readMoreLink={{URL, asURL}}>{shortDescription}</ProductDescription>
      <ActionButton onClick={() => router.push(URL, asURL).then(()=> window.scrollTo(0,0))}>Check out</ActionButton>
    </ProductWrapper>
  )
}

export default ProductShowcase