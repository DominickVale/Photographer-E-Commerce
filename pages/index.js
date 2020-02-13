import React, {useEffect, useState} from 'react'
import {motion} from 'framer-motion'

import Layout from 'components/layout'
import ProductShowcase from 'components/product/ProductShowcase'
import { fetchProducts } from 'api'
import {parseDate} from 'utils'


const Home = (props) => {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    (async () => {
      if(sessionStorage.getItem('products')){
        setProductList(JSON.parse(sessionStorage.getItem('products')))
      } else {
      const products = await fetchProducts();
      setProductList(products);
      sessionStorage.setItem('products', JSON.stringify(products))
      }
    })();
  }, [])


  return (
  <motion.div exit={{opacity: 0}}
    initial={{opacity: 0}}
    animate={{opacity: 1}}>
    <Layout title="Photographer E-commerce - Homepage"
      description="Fake photographer e-commerce website. Developed for learning."
      keywords="e-commerce, photographer, learning">
        
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
  </motion.div>
)}

export default Home