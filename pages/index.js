import React from 'react'
import Head from 'next/head'

import Layout from '../components/layout'

const Home = () => (
  <Layout>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      Hero
    </div>
  </Layout>
)

export default Home
