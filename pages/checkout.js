import React,{useEffect, useState} from 'react'
import {StripeProvider, Elements} from 'react-stripe-elements'
import {motion} from 'framer-motion'

import Form from 'components/Form'
import Layout from 'components/layout'
const checkout = () => {

  const [stripeKey, setStripeKey] = useState(null)

  // FIX for SSR
  useEffect(() => {
    if(typeof window !== 'undefined') setStripeKey(window.Stripe('pk_test_wobHrjRAJL2hxcuVDradabeJ00ctLPoRrx'))
  }, [])

  return (
    <motion.div exit={{opacity: 0}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}>
      <Layout noLinks>
        <StripeProvider stripe={stripeKey}>
          <Elements>
            <Form />
          </Elements>
        </StripeProvider>
      </Layout>
    </motion.div>
  )
}

export default checkout