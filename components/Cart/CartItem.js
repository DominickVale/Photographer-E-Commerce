import React from 'react'

import {useCart, useCartDispatch} from 'components/Store'
import {CartItemWrapper, CartItemTitle, CartItemPrice, CartItemImage, CartItemQuantity} from 'styles/layout/cartMenu'
import DeleteButton from '../layout/CloseButton'
import { removeCartItem } from 'actions'
import {ProductPrice} from 'styles/product'

const CartItem = ({id, title, image, price, quantity}) => {
  const cart = useCart()
  const dispatch = useCartDispatch()

  return (
    <CartItemWrapper>
      <CartItemImage src={image}/>
      <CartItemTitle>{title.toUpperCase()}</CartItemTitle>
      <ProductPrice styleCart>{price}</ProductPrice>
      <CartItemQuantity>{quantity}</CartItemQuantity>
      <DeleteButton styleCart fillColor="#111111" onClick={() => {console.log('removing: ',id); dispatch(removeCartItem(id))}}/>
    </CartItemWrapper>
  )
}

export default CartItem
