import React from 'react'
import Link from 'components/Link'
import { MenuBackgroundWrapper, MenuWrapper, MenuHeading, MenuTitle, MenuLink, MenuLinksWrapper } from 'styles/menu'
import CloseButton from 'components/layout/CloseButton'


const Menu = (props) => {
  return (
    <>
      <MenuBackgroundWrapper>
        <MenuWrapper>
          <MenuHeading>
            <MenuTitle>Menù</MenuTitle>
            <CloseButton onClick={props.onCloseMenu} fillColor="#ffffff"/>
          </MenuHeading>
          <MenuLinksWrapper>
            <MenuLink><Link href="/">ABOUT</Link></MenuLink>
            <MenuLink><Link href="/">CONTACTS</Link></MenuLink>
            <MenuLink><Link href="/">PRODUCTS</Link></MenuLink>
            <MenuLink><Link href="/">LEGAL</Link></MenuLink>
          </MenuLinksWrapper>
        </MenuWrapper>
      </MenuBackgroundWrapper>
    </>
  )
}

export default Menu
