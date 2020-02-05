import styled, { css } from 'styled-components'
import {CardElement,
  IbanElement,
  IdealBankElement} from 'react-stripe-elements'
import variables from 'styles/variables'


export const CheckoutWrapper = styled.main`
margin: 10vh auto;
max-width: 80vw;
overflow: hidden;
min-height: 70vh;
`

export const StyledCheckoutForm = styled.form`
display: grid;
grid-row-gap: 2rem;
margin: auto;
max-width: 20rem;
grid-template-areas: 
"name name"
"surname surname"
"email email"
"address address"
"card card";
@media only screen and (min-width: 720px){
max-width: 32rem;
grid-template-areas: 
"name . surname"
"email email email"
"address address address"
"card card card";
}
`

export const StyledCheckoutTextbox = styled.input`
grid-area: ${props => props.area};
border: none;
font-weight: 400;
border-bottom: 1px solid grey;
padding: 0.5rem;
font-size: 1rem;
color: ${variables.textboxFontColor};
`

export const StyledCardElement = styled(CardElement)`
grid-area: card;
margin-top: 1rem;
`