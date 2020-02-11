import styled from 'styled-components'
import Link from 'components/Link'
import variables from 'styles/variables'


export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  margin: 1vh 4vw;
  justify-content: space-between;
  align-items: center;
  @media only screen and (min-width: 720px) {
    margin: 1vh 12vw;
  }
  @media only screen and (min-width: 1140px) {
    margin: 1vh 24vw;
  }
`

export const NavBrand = styled(Link)`
  font-size: 4vw;
  font-weight: bold;
  width: 100%;
`

export const NavHamContainer = styled.div`
  width: 100%;
  text-align: ${props=> props.align};
  @media only screen and (min-width: 720px) {
    display: none;
  }
`

export const NavLinks = styled.div`
  display: none;
  font-weight: 400;
  
@media only screen and (min-width: 720px) {
    display: inline-block;
  }
`

export const NavRight = styled(NavLinks)`
justify-content: space-around;
align-items: center;
align-content: center;
justify-items: center;

@media only screen and (min-width: 720px) {
    display: flex;
  }
`

export const NavLink = styled.span`
margin: auto 0;
margin-left: 4vw;
font-size: ${variables.linkFontSize};
`