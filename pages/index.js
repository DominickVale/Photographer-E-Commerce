import React from 'react'
import Head from 'next/head'

import Layout from '../components/layout'
import ProductShowcase from '../components/product/ProductShowcase'

import products from './api/products.json'

const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      {Object.keys(products).map(id => (
        <ProductShowcase id={id} title={products[id].title} date={products[id].date} description={products[id].description} key={id}/>
      ))}
    </Layout>
  </>
)

export default Home
