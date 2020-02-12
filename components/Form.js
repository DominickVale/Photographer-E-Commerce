import React,{useEffect, useState} from 'react'
import Router from 'next/router'
import fetch from 'isomorphic-unfetch'

import {injectStripe} from 'react-stripe-elements'
import {StyledCheckoutTextbox, StyledCardElement, CheckoutWrapper, StyledCheckoutForm, Purchased} from 'styles/checkout'
import {ActionButton} from 'components/ActionButton'
import { Filler } from 'styles'
import variables from 'styles/variables'

import {useCart} from 'components/Store'
import { getCartTotalAmount } from 'components/Cart'


const cardStyle = {
  base: {
    color: variables.textboxFontColor,
    fontFamily: 'Roboto, sans-serif',
    fontSize: "16px",
    "::placeholder": {
      color: 'grey'
    }
  },
  invalid: {
    color: "#fa755a",
    iconColor: "#fa755a"
  }
};


const Form = (props) => {
  const cart = useCart()

  const [purchased, setPurchased] = useState(false)
  const [state, setState] = useState({
    name: '',
    surname: '',
    email: '',
    address: '',
  })

  const onTextboxChange = (evt) => {
    const id = evt.target.id;
    const value = evt.target.value
    setState(state => ({...state, [id]: value}))
  }

  const onSubmit = async (evt) => {
    evt.preventDefault()
    try {
      let {token} = await props.stripe.createToken({name: `${state.name} ${state.surname}`})
      console.log(token)
      let response = await fetch('/checkout', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({token, amount: parseFloat(getCartTotalAmount(cart)).toFixed(2)})
      })

      console.log(' RESPONSE: ', response)
      if(response.ok) {
        setPurchased(true)
      setTimeout(() => {
        Router.push('/')
      }, 6000);
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <CheckoutWrapper>
      {purchased && (<Purchased>Thank you for purchasing!</Purchased>)}
      <StyledCheckoutForm>
        <StyledCheckoutTextbox value={state.name} id="name" onChange={onTextboxChange}type="text" area="name" placeholder="Name" width="40%"/>
        <StyledCheckoutTextbox value={state.surname} id="surname" onChange={onTextboxChange}type="text" area="surname" placeholder="Surname" width="40%" right/>
        <StyledCheckoutTextbox value={state.email} id="email" onChange={onTextboxChange}type="text" area="email" placeholder="E-mail"/>
        <StyledCheckoutTextbox value={state.address} id="address" onChange={onTextboxChange}type="text" area="address" placeholder="Address"/>
        <StyledCardElement style={cardStyle} />
      </StyledCheckoutForm>
      <Filler width="100%" height="8vh"/>
      <ActionButton maxWidth="12rem" onClick={onSubmit} styleProduct/>
    </CheckoutWrapper>
  )
}

export default injectStripe(Form)
