import React,{useState} from 'react'
import Link from 'components/Link'

import {NavContainer, NavBrand, NavHamContainer, NavLinks, NavRight, NavLink} from 'styles/layout/header'
import {TextLogo} from 'styles/typography'
import {Filler} from 'styles'
import HamButton from './HamButton'
import CartButton from './CartButton'
import Cart from '../Cart'
import Menu from '../Menu'

const Header = (props) => {
  const [cartMenuShown, setCartMenuShown] = useState(false)
  const [menuShown, setMenuShown] = useState(false)

  return (
    <>
    <NavContainer>
      <NavHamContainer align="left" onClick={() => setMenuShown(true)}><HamButton/></NavHamContainer>
        <Filler width="100%" hideDesktop/>
      <NavLinks>
        {props.noLinks || (
          <>
          <NavLink><Link href="/">about</Link></NavLink>
          <NavLink><Link href="/">contact</Link></NavLink>
        </>
        )}
      </NavLinks>
      <NavBrand href="/"><TextLogo>Photo<br/>Commerce</TextLogo></NavBrand>
        <Filler width="100%" hideDesktop/>
      <NavRight>
        {props.noLinks || (
          <>
            <NavLink href="#" style={{pointerEvents: 'none'}}><a>it</a><a> en</a></NavLink>
            <NavLink href="#"><CartButton onClick={() => setCartMenuShown(true)}/></NavLink>
          </>
        )}
      </NavRight>
      <NavHamContainer align="right">
        <CartButton onClick={() => setCartMenuShown(true)}/>
      </NavHamContainer>
    </NavContainer>

    {menuShown && (<Menu onCloseMenu={() => setMenuShown(false)}/>)}
    {cartMenuShown && (<Cart onCloseCart={() => setCartMenuShown(false)}/>)}
    </>
  )
}

export default Header