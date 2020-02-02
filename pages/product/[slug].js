import React from 'react'

import Layout from 'components/layout'

import {ProductWrapper} from 'styles/product'
import ProductTitle from 'components/product/ProductTitle'
import ProductDate from 'components/product/ProductDate'
import ProductImage from 'components/product/ProductImage'
import ProductDescription from 'components/product/ProductDescription'
import ProductCheckout from 'components/product/ProductCheckout'
import { parseDate } from 'utils'
import { fetchSingleProduct } from 'api'



const Product = ({title, image, date, description, price}) => {
  console.log(title, ' : ', title.split('-').join(' '))
  return (
      <Layout>
        <ProductWrapper>
          <ProductTitle styleProduct>{title}</ProductTitle>
          <ProductImage styleProduct src={image}/>
          <ProductDate styleProduct date={date} caption="lorem ipsum"/>
          <ProductDescription styleProduct>{description}</ ProductDescription>
          <ProductCheckout price={price}/>
        </ProductWrapper>
      </Layout>
  )
}

Product.getInitialProps = async (context) => {
  
  console.log(' CONTEXT: ', context)
  let {title, image, date, description, price} = await fetchSingleProduct(context.query.slug.split('-').join(' '))


  return {
    title,
    date: parseDate(date),
    image: image.fields.file.url,
    description: description.content[0].content[0].value,
    price,
  }
}

export default Product
