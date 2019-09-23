import { inject as mobxInject, observer, Provider } from "mobx-react"
import { createContext, default as React, useContext } from "react"
import Main from './main'
import User from './user'

const store = {
  User,
  Main
}

const initialState = { Main, User }

const StoreContext = createContext(initialState)

export const StoreProvider1 = ({ children }) => {
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = store => {
  const { state, dispatch } = useContext(StoreContext)
  return state[store]
}


export const StoreProvider = ({ children }) => (
  <Provider {...store}>
    {children}
  </Provider>
)

export const inject = (target) => (component) => mobxInject(target)(observer(component))