import React from 'react'

import {NavContainer, NavBrand, NavHamContainer} from '../../styles/layout/header'
import {Filler} from '../../styles'
import HamButton from '../../public/HamButton.svg'

const Header = () => {
  return (
    <NavContainer>
      <NavHamContainer><HamButton/></NavHamContainer>
      <NavBrand href="/">PhotoCommerce</NavBrand>
      <Filler width="100%"/>
    </NavContainer>
  )
}

export default Header