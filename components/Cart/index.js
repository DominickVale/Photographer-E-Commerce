import React,{ useEffect} from 'react'
import Router from 'next/router'

import CloseButton from '../layout/CloseButton'
import {useCart, useCartDispatch} from 'components/Store'
import {StyledCartWrapper, StyledCart, CartHeading, CartHeadingWrapper, CartCheckoutWrapper, CartItemsContainer, CartCheckoutTotal} from 'styles/layout/cartMenu'
import {Filler} from 'styles'
import CartItem from 'components/Cart/CartItem'
import ActionButton from 'components/ActionButton'

export const getCartTotalAmount = (cart) => cart.reduce((acc, item) => acc+=item.price*item.quantity, 0) || ''

const Cart = (props) => {
  const cart = useCart()
  const dispatch = useCartDispatch()

  useEffect(() => {
    console.log('cart: ', cart)
  }, [])

  return (
    <StyledCartWrapper>
      <StyledCart>
        <CartHeadingWrapper>
          <CloseButton onClick={() => props.onCloseCart()} styleCartHeading/>
          <CartHeading>Your cart</CartHeading>
        </CartHeadingWrapper>
        <CartItemsContainer>
          {cart.length === 0 ? 'Empty! :(' : cart.map(({id, title, image, price, quantity}) => (
            <CartItem id={id} title={title} image={image} price={price} quantity={quantity} key={`${id}-${Date.now()}`}/>
          ))}
        </CartItemsContainer>
        <CartCheckoutWrapper>
          <CartCheckoutTotal>{getCartTotalAmount(cart) && ('$ ' + parseFloat(getCartTotalAmount(cart)).toFixed(2))}</CartCheckoutTotal>
          <ActionButton styleProduct styleCart onClick={() => Router.push('/checkout')}>CHECKOUT</ActionButton>
        </CartCheckoutWrapper>
      </StyledCart>
    </StyledCartWrapper>
  )
}

export default Cart