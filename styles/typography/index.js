import styled from 'styled-components'
import variables from 'styles/variables'


export const TextLogo = styled.h3`
text-align: center;
line-height: 0.82;
font-size: ${variables.logoFontSize};
font-weight: 900;
color: ${variables.logoFontColor};
transition: all 0.3s ease;
&:active{
  transform: scale(0.9);
}
`