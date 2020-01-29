import styled from 'styled-components'

import Link from 'components/Link'

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2vh 4vw;
  justify-content: space-between;
`

export const NavBrand = styled(Link)`
  font-size: 4vw;
  font-weight: bold;
  width: 100%;
`

export const NavHamContainer = styled.div`
  width: 100%
`