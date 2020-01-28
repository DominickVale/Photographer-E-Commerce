import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

import ActionButton from '../ActionButton'
import ProductTitle from './ProductTitle'
import ProductDate from './ProductDate'
import ProductImage from './ProductImage'
import ProductDescription from './ProductDescription'

const ProductShowcase = ({id, title, date, description}) => {
  const router = useRouter()

  return (
    <>
      <ProductTitle>{title}</ProductTitle>
      <ProductImage/>
      <ProductDate date={date} caption="lorem ipsum"/>
      <ProductDescription>{description}</ProductDescription>
      <ActionButton onClick={() => router.push(`/product/[id]?pid=${id}`, `/product/${title.split(' ').join('-')}`)}>Check out</ActionButton>
    </>
  )
}

export default ProductShowcase