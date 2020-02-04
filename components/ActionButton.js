import React from 'react'

import {ActionButtonWrapper, StyledActionButton, ActionButtonLabel} from 'styles'


export const ActionButton = (props) => {
  return (
    <ActionButtonWrapper styleProduct = {props.styleProduct} maxWidth={props.maxWidth}>
      <StyledActionButton styleProduct={props.styleProduct} onClick={props.onClick}>{props.children || 'Order Now'}</StyledActionButton>
      {props.styleProduct && (<ActionButtonLabel>Fast delivery in 24 hours</ActionButtonLabel>)}
    </ActionButtonWrapper>
  )
}

export default ActionButton