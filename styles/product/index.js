import styled from 'styled-components'

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
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
  "title title"
  "image image "
  "date ."
  "description checkout"
  "description checkout"
}
@media only screen and (min-width: 1140px){
  min-height: 100vh;
  max-width: 90vw;
  margin: 10vh 0 0 auto;
  align-content: flex-start;
  justify-content: start;
  align-items: flex-start;
  grid-row-gap: 1rem;
  grid-column-gap: 2rem;
  grid-template-columns: 2fr 1fr 2fr 2fr;
  grid-template-areas:
  "image image title title"
  "image image checkout date"
  "image image checkout description"
  "image image . description"
}
`

export const CheckoutWrapper = styled.section`
margin: 2rem auto;
grid-area: checkout;
display: grid;
grid-row-gap: 0.5rem;
width: 100%;
max-width: 18rem;
align-content: center;
justify-content: center;
align-items: center;
justify-items: center;
grid-template-areas:
"price quantity"
"linebreak linebreak"
". ."
". ."
". ."
"action action";
`

export const CheckoutBreak = styled.hr`
grid-area: linebreak;
height: 0;
border: none;
border-bottom: 1px solid ${variables.quantityBorderColor};
width: 100%;
`

export const ProductPrice = styled.h1`
grid-area: price;
font-size: 3rem;
font-weight: 600;
margin: 0 1rem;
`

export const QuantitySelectorWrapper = styled.div`
margin: auto 0;
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
color: ${variables.quantityOperatorColor}
`