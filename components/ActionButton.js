import React from 'react'

export const ActionButton = (props) => {
  return (
    <>
    <button onClick={props.onClick}>{props.children || 'Order Now'}</button>
    </>
  )
}

export default ActionButton