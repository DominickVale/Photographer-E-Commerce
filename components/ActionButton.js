import React from 'react'

import {ActionButtonWrapper, StyledActionButton, ActionButtonLabel} from 'styles'


export const ActionButton = (props) => {
  return (
    <ActionButtonWrapper {...props}>
      <StyledActionButton {...props}>
        <p>{props.children || 'Order Now'}</p>
      </StyledActionButton>
      {props.styleProduct && (<ActionButtonLabel>Fast delivery in 24 hours</ActionButtonLabel>)}
    </ActionButtonWrapper>
  )
}

export default ActionButton