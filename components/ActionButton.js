import React from 'react'

export const ActionButton = (props) => {
  return (
    <>
    <button>{props.children || 'Order Now'}</button>
    </>
  )
}

export default ActionButton