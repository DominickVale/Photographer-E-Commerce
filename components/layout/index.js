import React from 'react'
import {Normalize} from 'styled-normalize'
import {createGlobalStyle} from 'styled-components'

import Header from './Header'
import Footer from './Footer'

const GlobalStyle = createGlobalStyle`
  a{
    text-decoration: none;
  }
`

const Layout = (props) => {
  return (
    <div>
      <GlobalStyle />
      <Normalize />
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout