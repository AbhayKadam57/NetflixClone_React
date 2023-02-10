import { createContext, useReducer } from "react";
import { intiState, LanguageReducer } from "./LanguageReducer";

export const LanguageContext = createContext();

const LanguageContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LanguageReducer, intiState);

  return (
    <LanguageContext.Provider value={{ ...state, dispatch }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
