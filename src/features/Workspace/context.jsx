import React, { useContext, createContext, useReducer } from "react";

const context = createContext();

export const initialState = { elements: [] };

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        elements: [...state.elements, action.payload],
      };
    }
    default:
      throw new Error("Action not match!");
  }
};
const WorkspaceProvider = ({ children }) => (
  <context.Provider value={useReducer(reducer, initialState)}>
    {children}
  </context.Provider>
);

const useWorkspace = () => useContext(context);

export { useWorkspace, WorkspaceProvider };
