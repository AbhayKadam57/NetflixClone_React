import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MovieProvider } from "./MovieContext";
import { UserContextProvider } from "./UserContext";
import ProfilesContextProvider from "./ProfileContext";
import LanguageContextProvider from "./LanguageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContextProvider>
    <LanguageContextProvider>
      <ProfilesContextProvider>
        <MovieProvider>
          <App />
        </MovieProvider>
      </ProfilesContextProvider>
    </LanguageContextProvider>
  </UserContextProvider>
);
