import React from 'react'
import {Normalize} from 'styled-normalize'
import {createGlobalStyle} from 'styled-components'

import Header from './Header'
import Footer from './Footer'

import {Container} from 'styles/layout'

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Roboto'
  }

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
      <Container>
        {props.children}
      </Container>
      <Footer />
    </div>
  )
}

export default Layout