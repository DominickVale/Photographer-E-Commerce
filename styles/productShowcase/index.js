import styled, {css} from 'styled-components'

import variables from 'styles/variables'

export const ProductWrapper = styled.article`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
align-content: space-between;
position: relative;
margin: 20vh 0 40vh 0;
max-height: 80vh;
@media only screen and (min-width: 1140px){
  margin: 10vh 0 20vh auto;
  display: grid;
  align-content: flex-start;
  justify-content: start;
  align-items: flex-start;
  grid-column-gap: 0rem;
  grid-row-gap: 0;
  grid-template-columns: 8fr 1fr 3fr 3fr 5rem;
  grid-template-rows: 2fr 1fr 1fr 1fr;
  grid-template-areas:
  "image . title title date"
  "image . description description date"
  "image . action . date"
  "image . . . arrow";
}
`

export const StyledProductTitle = styled.h1`
grid-area: title;
line-height: 0.8;
font-size: ${variables.productTitleSize};
color: white;
position: absolute;
top: -9rem;
left: -1rem;
z-index: 10;
padding: 1rem;
max-width: 66vw;
background-color: ${variables.productTitleBGColor};
${props => props.styleProduct && css`
  position: relative;
  top: 0;
  left: -1rem;
  margin: 2rem 0 0 0;
  background-color: transparent;
  color: ${variables.productTitleColor};
`}
@media only screen and (min-width: 720px){
  font-size: ${variables.productTitleSizeMaxMobile};
  margin: 1rem 0 0 0;
}
@media only screen and (min-width: 1140px){
  background-color: transparent;
  color: ${variables.productTitleColor};
  position: relative;
  align-self: flex-end;
  font-size: ${variables.productTitleSizeDesktop};
  left: -1.2rem;
  top: -1.4rem;
  margin: 0;
  ${props => props.styleProduct && css`
  left: -0.4rem;
  top: 0;
  padding: 0;
  font-size: calc(${variables.productTitleSizeMaxMobile} - 1rem);
  `}
}
`

export const StyledImageContainer = styled.figure`
grid-area: image;
max-height: 70vh;
max-width: 100%;
margin: auto;
display: flex;
justify-content: center;
position: relative;
@media only screen and (min-width: 1140px) {
  max-width: 58vw;
  ${props => props.styleProduct && css`
  max-width: 60vw;
`}
}
`

export const StyledProductImage = styled.img`
height: auto;
max-width: 100%;
object-fit: contain;
margin: 0;
`

export const StyledDate = styled.span`
z-index: 10;
grid-area: date;
background-color: ${variables.bodyBGColor};
display: flex;
flex-direction: row;
justify-content: space-between;
min-width: 12rem;
transform: rotate(90deg);
position: absolute;
top: 36%;
right: -6.3rem;
@media only screen and (min-width: 1140px){
  align-self: center;
  position: relative;
  height: auto;
  top: -16%;
  left: -3vw;
}
${props => props.styleProduct && css`
  position: relative;
  align-self: center;
  margin: 0;
  margin: 1.5rem 0;
  transform: rotate(0);
  max-width: 10rem;
  right: 0;
  top: 0;
  left: 0;
  @media only screen and (min-width: 720px){
    align-self: flex-start;
    margin: 1.2rem 0 0 0;
    left: 0;
  }
  @media only screen and (min-width: 980px){
    margin-bottom: 0rem;
  }
`}
& strong{
  font-weight: 900;
}
`

export const StyledProductDescription = styled.span`
grid-area: description;
align-self: flex-start;
text-align: center;
max-width: 30rem;
margin: auto;
${props => props.styleProduct && css`
  text-align: left;
  margin-top: 1.4rem;
  margin-left: 0;
  font-size: 1rem;
  p{
    margin: 0;
  }
`}
@media only screen and (min-width: 1140px){
  text-align: left;
  margin: 0;
  max-width: 28rem;
  ${props => props.styleProduct && css`
    text-align: left;
    margin-top: 0rem;
    font-size: 1.25rem;
    p{
      margin: 0;
    }
  `}
}
`

export const StyledReadMore = styled.span`
display: inline;
text-decoration: none;
font-weight: 900;
color: ${variables.linkColor};
`