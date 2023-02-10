import { createContext, useReducer } from "react";
import { AvatarReducer, InitiState } from "./ProfileReducer";

export const ProfileConetxt = createContext();

const ProfilesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AvatarReducer, InitiState);

  return (
    <ProfileConetxt.Provider value={{ ...state, dispatch }}>
      {children}
    </ProfileConetxt.Provider>
  );
};

export default ProfilesContextProvider;
