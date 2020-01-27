import React from 'react'
import Head from 'next/head'

import Layout from '../components/layout'
import ProductShowcase from '../components/product/ProductShowcase'
const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  <Layout>
    <ProductShowcase/>
  </Layout>
  </>
)

export default Home
