import React from 'react'
import App from 'next/app'

import {CartProvider} from 'components/Store'

const MyApp = ({Component, pageProps}) => 
  (
    <CartProvider>
      <Component {...pageProps}/>
    </CartProvider>
  )

export default MyApp


