import React,{createContext, useContext, useReducer, useEffect, useRef} from 'react'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "actions"

const isClient = typeof window !== 'undefined'
// Initial value fetched from persisted state in local storage
const _initialCartState = isClient ? JSON.parse(localStorage.getItem('cart')) || [] : []

export const CartContext = createContext();
export const CartDispatchContext = createContext();


const reducer = (state, action) => {
  switch(action.type){
    case CART_ADD_ITEM: return [...state, action.payload]
    case CART_REMOVE_ITEM: return [...state.filter(el => el.id !== action.payload )]
    default:
      console.warn('Invalid action dispatched: ', action.type)
      return state
  }
}




export const CartProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, _initialCartState);
  const oldStateRef = useRef()

  useEffect(() => {
    console.info('Changed state to: ', { oldState: oldStateRef.current, newState: state })
    oldStateRef.current = state
    if(isClient) localStorage.setItem('cart', JSON.stringify(state)) // Persisting state in localstorage

  },
  [state]);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartContext.Provider value={state}>
        {props.children}
      </CartContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartContext)
export const useCartDispatch = () => useContext(CartDispatchContext)