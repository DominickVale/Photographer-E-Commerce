import styled from 'styled-components'
import variables from 'styles/variables'

export const StyledCartButton = styled.button`
position: relative;
cursor: pointer;
width: 40px;
height: 40px;
margin: auto;
border: none;
background: none;
transform: scale(0.8);
svg{
  g{
    transition: opacity 0.3s ease;
  }
}
&::after{
  content: attr(data-items);
  position: absolute;
  right: 0;
  font-size: 0.6;
  color: ${variables.productTitleBGColor};
}
&:hover{
  svg{
    g{
      opacity: 1;
    }
  }
}
`