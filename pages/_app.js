import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import {AnimatePresence} from 'framer-motion'
import {CartProvider} from 'components/Store'

const MyApp = ({Component, pageProps, router}) => 
  (
    <>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,900&display=swap" rel="stylesheet" />
      <script src="https://js.stripe.com/v3/"></script>
    </Head>
    <CartProvider>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route}/>
      </AnimatePresence>
    </CartProvider>
    </>
  )

export default MyApp


