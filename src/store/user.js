export const state = {
  user: {
    name: 'Fedor'
  }
}

export const action = {
  updateName: (state) => ({
    ...state,
    user: {
      ...state.user,
      name: name + 1
    }
  })
}
