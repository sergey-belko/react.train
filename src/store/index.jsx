import React, { createContext, useReducer, useContext } from "react";

import { countInitialState, countActions } from "./count";
import { userInitialState, userActions } from "./user";

const initialState = {
  ...countInitialState,
  ...userInitialState
};

const StoreContext = createContext(initialState);

const Actions = {
  ...userActions,
  ...countActions
};

const reducer = (state, action) => {
  const act = Actions[action.type];
  const update = act(state);
  return { ...state, ...update };
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = store => {
  const { state, dispatch } = useContext(StoreContext);
  return { state, dispatch };
};
