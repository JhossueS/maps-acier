import { createContext, useReducer } from 'react'

// state initialization

const initalState = {
  circle: true
}

// context initialization
export const Store = createContext(initalState)

// handle state circle ratio map
const setCircle = (state) => {
  return { ...state, circle: !state.circle }
}

const redurcer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_CIRCLE':
      return setCircle(state)
    default:
      return state
  }
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(redurcer, initalState)

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}
