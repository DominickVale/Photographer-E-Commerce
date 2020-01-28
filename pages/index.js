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
      {Object.keys(products).map(title => (
        <ProductShowcase title={title} date={products[title].date} description={products[title].description} key={title}/>
      ))}
    </Layout>
  </>
)

export default Home
