import styled from 'styled-components'
import variables from 'styles/variables'

export const StyledCartWrapper = styled.div`
z-index: 100;
outline: 1px solid red;
background-color: rgba(0,0,0,0.4);
position: fixed;
height: 100%;
width: 100%;
top: 0;
bottom: 0;
`

export const StyledCart = styled.div`
background-color: white;
position: absolute;
top: 0;
right: 0;
bottom: 0;
display: grid;
max-width: 60%;
min-width: 50%;
justify-content: space-around;
padding: 2rem;
grid-row-gap: 2rem;
grid-template-rows: 10vh 3fr 0fr;
grid-template-areas:
"title title title"
"container container container"
"checkout checkout checkout";
`

export const CartItemsContainer = styled.div`
grid-area: container;
max-height: 100%;
width: 100%;
overflow-y: scroll;
&::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 0;
  background: transparent;
}
scrollbar-width: none;
scrollbar-color: transparent;
scroll-behavior: unset;
`

export const CartHeadingWrapper = styled.div`
grid-area: title;
width: 100%;
`

export const CartHeading = styled.h1`
width: 100%;
margin: auto;
font-size: 2rem;
color: ${variables.productTitleColor};
position: relative;
top: -2.6rem;
text-align: center;
`

export const CartItemWrapper = styled.div`
background-color: white;
border-bottom: 1px solid grey;
min-height: 3rem;
margin-bottom: 1rem;
padding-bottom: 1rem;
width: 100%;
display: grid;
justify-content: space-between;
align-items: center;
grid-column-gap: 1rem;
grid-template-columns: 2fr 2fr 1fr 1fr;
grid-template-rows: 1fr auto 1fr;
grid-template-areas:
"image title title delete"
"image quantity . delete"
"image price . delete";
`

export const CartItemImage = styled.img`
grid-area: image;
max-width: 100%;
max-height: 100%;
object-fit: contain;
`

export const CartItemTitle = styled.h2`
grid-area: title;
margin: 0;
font-weight: 900;
font-size: 1rem;
color: ${variables.baseFontColor};
`

export const CartItemPrice = styled.span`
grid-area: price;
font-size: 0.8rem;
color: ${variables.baseFontColor};
`

export const CartItemQuantity = styled.span`
font-size: 0.9rem;
font-weight: 400;
`

export const CartCheckoutWrapper = styled.div`
grid-area: checkout;
margin: auto;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
background-color: rgba(255,255,255,0.8);
`

export const CartCheckoutTotal = styled.span`
font-size: 2rem;
margin-bottom: 2vh;
text-align: center;
`