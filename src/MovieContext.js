import { createContext, useReducer } from "react";
import { INITIAL_STATE, MovieReducer } from "./MovieReducer";

export const MovieOpenContext = createContext();

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE);

  return (
    <MovieOpenContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MovieOpenContext.Provider>
  );
};
