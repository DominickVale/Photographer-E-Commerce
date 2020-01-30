import styled, {css} from 'styled-components'

import variables from 'styles/variables'

export const ProductWrapper = styled.article`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
align-content: space-between;
position: relative;
margin: 10vh 0 20vh 0;
max-height: 70vh;
`

export const StyledProductTitle = styled.h1`
grid-area: title;
font-size: ${variables.productTitleSize};
color: ${variables.productTitleColor};
position: absolute;
top: -6rem;
left: -1rem;
z-index: 10;
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: white;
${props => props.styleProduct && css`
  position: relative;
  top: 0;
  left: 0;
  margin: 2rem 0 0 0;
`}
`

export const StyledImageContainer = styled.figure`
max-height: 50vh;
max-width: 100%;
margin: auto;
display: flex;
justify-content: center;
position: relative;
`
export const StyledProductImage = styled.img`
height: auto;
max-width: 100%;
object-fit: contain;
margin: 0;
`

export const StyledDate = styled.span`
grid-area: date;
background-color: white;
display: flex;
flex-direction: row;
justify-content: space-between;
min-width: 12rem;
transform: rotate(90deg);
position: absolute;
top: 50%;
right: -6.3rem;
${props => props.styleProduct && css`
  position: relative;
  top: 0;
  left: 0;
  margin: 1rem 0 0 0;
  transform: rotate(0);
  max-width: 10rem;
`}
`

export const StyledProductDescription = styled.span`
grid-area: description;
text-align: center;
max-width: 30rem;
margin: auto;
${props => props.styleProduct && css`
  text-align: left;
  margin: 0;
`}
`

export const StyledReadMore = styled.span`
display: inline;
text-decoration: none;
color: ${variables.linkColor};
`