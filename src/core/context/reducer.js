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
