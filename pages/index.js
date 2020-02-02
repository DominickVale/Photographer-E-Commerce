import React, {useEffect, useState} from 'react'
import Head from 'next/head'

import Layout from 'components/layout'
import ProductShowcase from 'components/product/ProductShowcase'
import { fetchProducts } from 'api'
import {parseDate} from 'utils'
//import {useCart, useCartDispatch} from '../components/Store'

//import { addCartItem, removeCartItem } from '../actions'

const Home = (props) => {
/*   const carts = useCart()
  const dispatch = useCartDispatch() */
  const [productList, setProductList] = useState([])

  useEffect(() => {
    (async () => {
      const products = await fetchProducts();
      setProductList(products);
      console.log('product list: ', productList)

    })();
  }, [])


  return (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      {productList.map((product)=> {
        let {title, date, image, shortDescription} = product.fields;
        
        image = image.fields.file.url
        return(
        <ProductShowcase
          title={title}
          image={image}
          date={parseDate(date)}
          shortDescription={shortDescription}
          key={title}
          />
      )})}
    </Layout>
  </>
)}

export default Home