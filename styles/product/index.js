import styled from 'styled-components'

import variables from 'styles/variables'

export const ProductWrapper = styled.article`
margin-bottom: 10vh;
display: grid;
grid-template-areas:
"title"
"image"
"date"
"description"
"checkout";
`

export const CheckoutWrapper = styled.section`
margin: 2rem auto;
grid-area: checkout;
display: grid;
grid-row-gap: 0.5rem;
width: 100%;
max-width: 18rem;
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
margin: 0;
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