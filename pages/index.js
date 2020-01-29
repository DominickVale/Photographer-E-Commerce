import React from 'react'
import Head from 'next/head'

import Layout from '../components/layout'
import ProductShowcase from '../components/product/ProductShowcase'
//import {useCart, useCartDispatch} from '../components/Store'

import products from './api/products.json'
//import { addCartItem, removeCartItem } from '../actions'


const Home = () => {
/*   const carts = useCart()
  const dispatch = useCartDispatch() */

  return (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      {Object.keys(products).map(title => (
        <ProductShowcase title={title} date={products[title].date} description={products[title].description} key={title}/>
      ))}
    </Layout>
  </>
)}

export default Home
