import { createContext, useReducer } from "react";

import { InitiState } from "./UserReducer";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [state] = useReducer(null, InitiState);

  return (
    <UserContext.Provider value={{ ...state }}>{children}</UserContext.Provider>
  );
};
