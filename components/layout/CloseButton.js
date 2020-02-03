import React from 'react'

import {StyledCloseButton} from 'styles/layout/closeButton'

const CloseButton = (props) => {
  return (
    <StyledCloseButton styleCart={props.styleCart} onClick={props.onClick}>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
        <title>close</title>
        <g className="nc-icon-wrapper" fill="#111111">
          <path d="M9.207 8.5l6.646 6.646-.707.707L8.5 9.207l-6.646 6.646-.707-.707L7.793 8.5 1.146 1.854l.707-.707L8.5 7.793l6.646-6.646.707.707L9.207 8.5z" fill="#111111"/>
        </g>
      </svg>
    </StyledCloseButton>
  )
}

export default CloseButton
