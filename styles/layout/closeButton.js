import styled, {css} from 'styled-components'

export const StyledCloseButton = styled.button`
cursor: pointer;
z-index: 1000;
grid-area: delete;
width: 40px;
height: 40px;
border: none;
background: none;
transform: scale(1.2)
${props => props.styleCart && css`
  position: relative !important;
  width: 100%;
  height: 100%;
  max-height: 3rem;
  max-width: 3rem;
` }
`