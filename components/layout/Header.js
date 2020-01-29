import React from 'react'

import {NavContainer, NavBrand, NavHamContainer} from 'styles/layout/header'
import {TextLogo} from 'styles/typography'
import {Filler} from 'styles'
import HamButton from 'public/HamButton.svg'

const Header = () => {
  return (
    <NavContainer>
      <NavHamContainer><HamButton/></NavHamContainer>
      <NavBrand href="/"><TextLogo>PhotoCommerce</TextLogo></NavBrand>
      <Filler width="100%"/>
    </NavContainer>
  )
}

export default Header