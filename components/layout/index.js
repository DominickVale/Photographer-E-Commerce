import React from 'react'
import {Normalize} from 'styled-normalize'

import Header from './Header'
import Footer from './Footer'

const Layout = (props) => {
  return (
    <div>
      <Normalize />
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout