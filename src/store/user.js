export const userInitialState = {
  user: { loggedIn: false }
}

export const userActions = {
  deleteRule: (state) => ({ user: { loggedIn: true } }),
  logout: (state) => ({ user: { loggedIn: false } })
}
