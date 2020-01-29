import styled from 'styled-components'

import variables from 'styles/variables'

export const ProductWrapper = styled.article`
display: block;
position: relative;
`

export const StyledProductTitle = styled.h1`
font-size: ${variables.productTitleSize};
color: ${variables.logoFontColor};
position: absolute;
top: -6rem;
left: -1rem;
z-index: 10;
`

export const StyledImageContainer = styled.figure`
height: 80vw;
margin: 8vh 0 0 0;
max-width: 100vw;
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
background-color: white;
display: flex;
flex-direction: row;
justify-content: space-between;
min-width: 12rem;
transform: rotate(90deg);
position: absolute;
top: 50%;
right: -6.3rem;
`