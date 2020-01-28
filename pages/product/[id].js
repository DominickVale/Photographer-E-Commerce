import React from 'react'
import fetch from 'isomorphic-unfetch'
import {useRouter} from 'next/router'

import Layout from '../../components/layout'

import ProductTitle from '../../components/product/ProductTitle'
import ProductDate from '../../components/product/ProductDate'
import ProductImage from '../../components/product/ProductImage'
import ProductDescription from '../../components/product/ProductDescription'
import ActionButton from '../../components/ActionButton'

import products from '../api/products.json'

const Product = ({imageUrl, title,description, date, price}) => {
  
  return (
    <>
      <Layout>
        <ProductTitle>{title.split('-').join(' ')}</ProductTitle>
        <ProductImage src={imageUrl}/>
        <ProductDate date={date} caption="lorem ipsum"/>
        <ProductDescription>{description}</ProductDescription>
        <ActionButton>Add to cart</ActionButton>
      </Layout>
    </>
  )
}

Product.getInitialProps = async (context) => {
  
  const response = await fetch(`https://pixabay.com/api/?key=15050778-1cb9bb65272fa7b764bd21483&q=${context.query.id}`);
  const images = await response.json();
  
  console.log(images.hits[0])
  const {title, description, date, price} = products[context.query.pid]

  return {
    imageUrl: images.hits[0].largeImageURL,
    title,
    description,
    date,
    price,
  }
}

export default Product
