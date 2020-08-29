import React, { useContext, createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

const AppContext = createContext();

const AppProvider = ({ children }) => (
  <AppContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AppContext.Provider>
);

const useAppContext = () => useContext(AppContext);

export { useAppContext, AppProvider };
