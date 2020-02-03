import React, {useEffect, useState} from 'react'
import {StripeProvider, Elements} from 'react-stripe-elements'
import Layout from 'components/layout'

import {ProductWrapper} from 'styles/product'
import ProductTitle from 'components/product/ProductTitle'
import ProductDate from 'components/product/ProductDate'
import ProductImage from 'components/product/ProductImage'
import ProductDescription from 'components/product/ProductDescription'
import ProductCheckout from 'components/product/ProductCheckout'
import { parseDate } from 'utils'
import { fetchSingleProduct } from 'api'



const Product = ({id, title, image, date, description, price}) => {
  
  const [stripeKey, setStripeKey] = useState(null)

  // FIX for SSR
  useEffect(() => {
    if(typeof window !== 'undefined') setStripeKey(window.Stripe('pk_test_wobHrjRAJL2hxcuVDradabeJ00ctLPoRrx'))
  }, [])
  
  return (
    <StripeProvider stripe={stripeKey}>
      <Elements>
        <Layout>
          <ProductWrapper>
            <ProductTitle styleProduct>{title}</ProductTitle>
            <ProductImage styleProduct src={image}/>
            <ProductDate styleProduct date={date} caption="lorem ipsum"/>
            <ProductDescription styleProduct>{description}</ ProductDescription>
            <ProductCheckout id={id} image={image} title={title} price={price}/>
          </ProductWrapper>
        </Layout>
      </Elements>
    </StripeProvider>
  )
}

Product.getInitialProps = async (context) => {
  let {id, title, image, date, description, price} = await fetchSingleProduct(context.query.slug.split('-').join(' '))

  return {
    id,
    title,
    date: parseDate(date),
    image: image.fields.file.url,
    description: description.content[0].content[0].value,
    price,
  }
}

export default Product
