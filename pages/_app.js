import React from 'react'
import App from 'next/app'
import Head from 'next/head'

import {CartProvider} from 'components/Store'

const MyApp = ({Component, pageProps}) => 
  (
    <>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,900&display=swap" rel="stylesheet" />
      <script src="https://js.stripe.com/v3/"></script>
    </Head>
    <CartProvider>
      <Component {...pageProps}/>
    </CartProvider>
    </>
  )

export default MyApp


