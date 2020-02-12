import styled, {keyframes} from 'styled-components'
import variables from 'styles/variables'


/**
 * Animations
 */

export const bgFadeIn = keyframes`
from{
  opacity: 0;
  }
to{
  opacity: 1;
}
`;

export const slideIn = keyframes`
from{
  transform: translateX(100vw);
  }
to{
  transform: translateX(0);
}
`;

export const StyledCartWrapper = styled.div`
z-index: 10000;
background-color: rgba(0,0,0,0.4);
position: fixed;
height: 100%;
width: 100%;
top: 0;
bottom: 0;
animation: ${bgFadeIn} 0.4s ease;
`

export const StyledCart = styled.div`
background-color: ${variables.bodyBGColor};
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
animation: ${slideIn} 0.4s ease;
@media only screen and (min-width: 1140px){
  max-width: 45%;
  min-width: 35%;
}
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
display: flex;
justify-content: space-between;
align-items: center;
justify-items: center;
`

export const CartHeading = styled.h1`
width: 100%;
margin: auto;
font-size: 2rem;
color: ${variables.productTitleColor};
text-align: center;
@media only screen and (min-width: 720px) {
  font-size: 4vw;
}
`

export const CartItemWrapper = styled.div`
background-color: ${variables.bodyBGColor};
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
grid-template-rows: 1fr auto auto;
grid-template-areas:
"image title title delete"
"image price price quantity"
"image . . .";
`

export const CartItemImage = styled.img`
grid-area: image;
max-width: 100%;
max-height: 100%;
object-fit: contain;
@media only screen and (min-width: 1140px){
  max-width: 80%;
}
`

export const CartItemTitle = styled.h2`
grid-area: title;
margin: 0;
font-weight: 900;
font-size: calc(1.4vw + 0.8vh);
color: ${variables.baseFontColor};
`

export const CartItemQuantity = styled.span`
font-size: calc(1vw + 1vh);
font-weight: 300;
color: ${variables.baseFontColor};
margin: 1rem 0 1rem 1rem;
`

export const CartCheckoutWrapper = styled.div`
grid-area: checkout;
margin: auto;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
`

export const CartCheckoutTotal = styled.span`
font-size: 2rem;
margin-bottom: 2vh;
text-align: center;
`