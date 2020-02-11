import React from 'react'
import {Normalize} from 'styled-normalize'
import {createGlobalStyle} from 'styled-components'

import Header from './Header'
import Footer from './Footer'
import variables from 'styles/variables'

import {Container} from 'styles/layout'

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Roboto';
    font-weight: 400;
    background-color: ${variables.bodyBGColor};
    *::selection{
      color: black;
      background-color: white;
    }
  }

  a{
    text-decoration: none;
    color: ${variables.linkColor};
    &:visited{
      color: ${variables.linkColor};
    }
  }

  li{
    text-decoration: none;
    font-style: normal;
    list-style: none;
  }
`

const Layout = (props) => {
  return (
    <div>
      <GlobalStyle />
      <Normalize />
      <Header noLinks={props.noLinks}/>
      <Container>
        {props.children}
      </Container>
      <Footer />
    </div>
  )
}

export default Layout