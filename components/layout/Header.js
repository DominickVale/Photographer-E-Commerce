import React from 'react'

import {NavContainer, NavBrand, NavHamContainer} from 'styles/layout/header'
import {TextLogo} from 'styles/typography'
import {Filler} from 'styles'
import HamButton from './HamButton'

const Header = () => {
  return (
    <NavContainer>
      <NavHamContainer onClick={() => console.info('Clicked ham')}><HamButton/></NavHamContainer>
      <NavBrand href="/"><TextLogo>Photo<br/>Commerce</TextLogo></NavBrand>
      <Filler width="100%"/>
    </NavContainer>
  )
}

export default Header