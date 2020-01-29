export const CART_ADD_ITEM = "CART_ADD_ITEM"
export const CART_REMOVE_ITEM = "CART_REMOVE_ITEM"

export const addCartItem = item => {
  return({
    type: CART_ADD_ITEM,
    payload: item
  })
}

export const removeCartItem = item => {
  return({
    type: CART_REMOVE_ITEM,
    payload: item
  })
}