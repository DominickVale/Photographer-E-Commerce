import React from 'react'
import Link from 'components/Link'

import {NavContainer, NavBrand, NavHamContainer, NavLinks, NavRight, NavLink} from 'styles/layout/header'
import {TextLogo} from 'styles/typography'
import {Filler} from 'styles'
import HamButton from './HamButton'
import CartButton from './CartButton'

const Header = () => {
  return (
    <NavContainer>
      <NavHamContainer onClick={() => console.info('Clicked ham')}><HamButton/></NavHamContainer>
      <NavLinks>
        <NavLink><Link href="/">about</Link></NavLink>
        <NavLink><Link href="/">contact</Link></NavLink>
      </NavLinks>
      <NavBrand href="/"><TextLogo>Photo<br/>Commerce</TextLogo></NavBrand>
      <Filler width="100%" hideDesktop/>
      <NavRight>
        <NavLink href="#">IT EN</NavLink>
        <NavLink href="#"><CartButton/></NavLink>
      </NavRight>
    </NavContainer>
  )
}

export default Header