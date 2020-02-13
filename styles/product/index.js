import styled, { css } from 'styled-components'

import variables from 'styles/variables'

export const ProductWrapper = styled.article`
margin-top: 5vh;
margin-bottom: 10vh;
display: grid;
grid-template-areas:
"title"
"image"
"date"
"description"
"checkout";
@media only screen and (min-width: 720px){
  align-content: flex-start;
  justify-content: start;
  align-items: flex-start;
  grid-column-gap: 2rem;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
  "title title"
  "image image "
  "date ."
  "description checkout"
  "description checkout"
}
@media only screen and (min-width: 1140px){
  max-height: 90vh;
  max-width: 90vw;
  margin: 10vh 0 20vh auto;
  align-content: flex-start;
  justify-content: start;
  align-items: flex-start;
  grid-row-gap: 1rem;
  grid-column-gap: 4vw;
  grid-template-columns: 3fr 2fr 4vw;
  grid-template-areas:
  "image title ."
  "image title ."
  "image date ."
  "image description ."
  "image checkout ."
}
`

export const CheckoutWrapper = styled.section`
margin: 2rem 0;
grid-area: checkout;
background-color: ${variables.bodyBGColor};
display: flex;
flex-direction: column;
width: 100%;
max-width: 70%;
`

export const CheckoutBreak = styled.hr`
grid-area: linebreak;
height: 0;
border: none;
border-bottom: 1px solid ${variables.quantityBorderColor};
width: 100%;
`

export const ProductPrice = styled.h1`
color: ${variables.productTitleColor};
user-select: none;
position: relative;
grid-area: price;
font-size: 2.4rem;
font-weight: 400;
margin: 1rem 0;
&::after{
  user-select: none;
  content: "$";
  width: 1rem;
  height: 1rem;
  font-size: 1.4rem;
  color: ${variables.dollarColor};
  position: absolute;
  top: 12%;
}
${props => props.styleCart && css`
  margin-left: 0;
  font-size: 3vw;
  font-weight: 300;
  &::after{
    font-size: 1.6vw;
  }
  @media only screen and (min-width: 1140px){
    font-size: 1.8rem;
    &::after{
      font-size: 1.2rem;
    }
  }
`}
`

export const QuantitySelectorWrapper = styled.div`
background-color: ${variables.bodyBGColor};
user-select: none;
margin: 0.5rem auto 2rem 0;
max-height: 2rem;
padding: 0 1rem;
width: 4rem;
display: flex;
justify-content: space-around;
outline: 1px solid ${variables.quantityBorderColor};
`

export const QuantitySelectorValue = styled.h5`
margin: auto 1rem;
font-size: 1.4rem;
font-weight: 300;
color: ${variables.quantityValueColor};
`

export const QuantityOperator = styled(QuantitySelectorValue)`
margin: 0;
font-size: 1.8rem;
cursor: pointer;
max-width: 16px;
color: ${variables.quantityOperatorColor};
`