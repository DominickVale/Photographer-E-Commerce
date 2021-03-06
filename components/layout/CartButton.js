import React from 'react'

import {StyledCartButton} from 'styles/layout/cartButton'
import {useCart} from 'components/Store'
import variables from 'styles/variables';

const CartButton = (props) => {
  const cart = useCart()
  console.log(cart)
  return (
    <>
      <StyledCartButton aria-label="Open cart menu" data-items={cart.length || ''} onClick={props.onClick}>
        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.8">
            <path d="M17.8944 11.4333V6.21739C17.8944 5.95339 17.6592 5.73913 17.3681 5.73913H14.2102V3.82609C14.2102 1.71648 12.3213 0 9.99976 0C7.67821 0 5.78928 1.71648 5.78928 3.82609V5.73913H2.63142C2.34037 5.73913 2.10511 5.95339 2.10511 6.21739V11.4333L0.00934638 21.4323C-0.020127 21.572 0.0209251 21.7169 0.120924 21.8269C0.220923 21.9364 0.369342 22 0.526183 22H19.4733C19.6302 22 19.7786 21.9364 19.8791 21.8269C19.9786 21.7169 20.0202 21.5724 19.9907 21.4323L17.8944 11.4333ZM6.8419 3.82609C6.8419 2.24352 8.2582 0.956522 9.99976 0.956522C11.7413 0.956522 13.1576 2.24352 13.1576 3.82609V5.73913H6.8419V3.82609Z" fill={variables.linkColor}/>
          </g>
        </svg>
      </StyledCartButton>
    </>
  )
}

export default CartButton
