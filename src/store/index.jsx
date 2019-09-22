import { inject as mobxInject, observer, Provider } from "mobx-react"
import React from "react"
import Main from './main'
import User from './user'

const store = {
  User,
  Main
}

export const StoreProvider = ({ children }) => (
  <Provider {...store}>
    {children}
  </Provider>
)

export const inject = (target) => (component) => mobxInject(target)(observer(component))