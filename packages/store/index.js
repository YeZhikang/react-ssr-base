import { createStore } from 'redux'
import { ADD_COUNT, MINUS_COUNT } from "./action";

const DEFAULT_STATE = {
  count: 0
}

const reducer = ( state = DEFAULT_STATE, action ) => {
  switch ( action.type ) {
    case ADD_COUNT :
      state = { ...state, count: state.count + 1 }

      return state;
    case MINUS_COUNT:
      state = { ...state, count: state.count - 1 }

      return state;
    default:
      return state
  }
}

export const createServerStore = () => {
  return createStore(reducer, DEFAULT_STATE)
}

export const createClientStore = () => {
  const defaultState = window.__state || DEFAULT_STATE;

  return createStore(reducer, defaultState)
}
