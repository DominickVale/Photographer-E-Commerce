import React from 'react'
import Head from 'next/head'
import {Normalize} from 'styled-normalize'
import {createGlobalStyle} from 'styled-components'

import Header from './Header'
import Footer from './Footer'
import variables from 'styles/variables'

import {Container} from 'styles/layout'

const GlobalStyle = createGlobalStyle`
  html{
    scroll-behavior: smooth;
  }
  
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
    <>
      <Head>
        <title>{props.title || "Title"}</title>
        <meta name="description" content={props.description || "Description"} />
        <meta name="keywords" content={props.keywords || "Photographer, ecommerce"}/>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://js.stripe.com/v3/"></script>
      </Head>
      <Normalize />
      <GlobalStyle />
      <Header noLinks={props.noLinks}/>
      <Container>
        {props.children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout