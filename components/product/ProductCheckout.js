import React, {useState} from 'react'

import ActionButton from '../ActionButton'
import Notification from '../Notifications'

import {CheckoutWrapper, CheckoutBreak, ProductPrice, QuantitySelectorWrapper, QuantitySelectorValue, QuantityOperator} from 'styles/product'
import {useCart, useCartDispatch} from 'components/Store'

import { addCartItem, removeCartItem } from 'actions'
import variables from 'styles/variables'


const ProductCheckout = (props) => {

  const [notifShown, setNotifShown] = useState(false)

  const [cartItem, setCartItem] = useState({
    id: props.id,
    title: props.title,
    image: props.image,
    price: props.price,
    quantity: 1,
  })

  const cart = useCart()
  const dispatch = useCartDispatch()


  const addToCart = () => {
    console.log('ADD CART ITEM: ', cartItem)
    dispatch(addCartItem(cartItem))
    setNotifShown(true)
    setTimeout(() => {
      setNotifShown(false)
    }, variables.popInDuration);
  }

  const updateQuantity = (op) => {
    switch(op){
      case 'sub': 
        if(cartItem.quantity > 1) setCartItem((cartItem) => ({...cartItem, quantity: cartItem.quantity-1}))
        break; 
      case 'add':
        setCartItem((cartItem) => ({...cartItem, quantity: cartItem.quantity+1}))
        break;
    }
  }

  return (
    <CheckoutWrapper>
      <CheckoutBreak />
      <ProductPrice>{(cartItem.price*cartItem.quantity).toFixed(2)}</ProductPrice>
      <QuantitySelectorWrapper>
        <QuantityOperator onClick={() => updateQuantity('sub')}>−</QuantityOperator>
        <QuantitySelectorValue>{cartItem.quantity}</QuantitySelectorValue>
        <QuantityOperator onClick={() => updateQuantity('add')}>+</QuantityOperator>
      </QuantitySelectorWrapper>
      <ActionButton aria-label="Add to cart" styleProduct onClick={addToCart}>ADD TO CART</ActionButton>
      {notifShown && (<Notification>Added to cart!</Notification>)}
    </CheckoutWrapper>
  )
}

export default ProductCheckout
