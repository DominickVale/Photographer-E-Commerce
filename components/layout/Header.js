import React,{useState} from 'react'
import Link from 'components/Link'

import {NavContainer, NavBrand, NavHamContainer, NavLinks, NavRight, NavLink} from 'styles/layout/header'
import {TextLogo} from 'styles/typography'
import {Filler} from 'styles'
import HamButton from './HamButton'
import CartButton from './CartButton'
import Cart from '../Cart'

const Header = (props) => {
  const [cartMenuShown, setCartMenuShown] = useState(false)

  return (
    <>
    <NavContainer>
      <NavHamContainer onClick={() => setCartMenuShown(cartMenuShown => !cartMenuShown)}><HamButton/></NavHamContainer>
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
            <NavLink href="#">IT EN</NavLink>
            <NavLink href="#"><CartButton onClick={() => setCartMenuShown(true)}/></NavLink>
          </>
        )}
      </NavRight>
    </NavContainer>
    {cartMenuShown && (<Cart onCloseCart={() => setCartMenuShown(false)}/>)}
    </>
  )
}

export default Header