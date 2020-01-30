import React from 'react'

import {StyledActionButton} from 'styles'
export const ActionButton = (props) => {
  return (
    <>
    <StyledActionButton onClick={props.onClick}>{props.children || 'Order Now'}</StyledActionButton>
    </>
  )
}

export default ActionButton