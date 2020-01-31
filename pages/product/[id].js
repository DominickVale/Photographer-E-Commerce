import React from 'react'
import fetch from 'isomorphic-unfetch'
import {useRouter} from 'next/router'

import Layout from 'components/layout'

import {ProductWrapper} from 'styles/product'
import ProductTitle from 'components/product/ProductTitle'
import ProductDate from 'components/product/ProductDate'
import ProductImage from 'components/product/ProductImage'
import ProductDescription from 'components/product/ProductDescription'
import ProductCheckout from 'components/product/ProductCheckout'

import products from '../api/products.json'

const Product = ({imageUrl, title, description, date, price}) => {
  console.log(title, ' : ', title.split('-').join(' '))
  return (
      <Layout>
        <ProductWrapper>
          <ProductTitle styleProduct>{title}</ProductTitle>
          <ProductImage styleProduct src={imageUrl}/>
          <ProductDate styleProduct date={date} caption="lorem ipsum"/>
          <ProductDescription styleProduct>{description}</ ProductDescription>
          <ProductCheckout price={price}/>
        </ProductWrapper>
      </Layout>
  )
}

Product.getInitialProps = async (context) => {
  
  const title = context.query.id.split('-').join(' ')
  const response = await fetch(`https://pixabay.com/api/?key=15050778-1cb9bb65272fa7b764bd21483&q=${title}`);
  const images = await response.json();
  
  console.log(images)
  const {description, date, price} = products[title]

  return {
    imageUrl: images.hits[0].largeImageURL,
    title,
    description,
    date,
    price,
  }
}

export default Product
