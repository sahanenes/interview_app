import React from "react";

import AppRouter from "./router/AppRouter";

import "./App.css";

import initFontAwesome from "./utils/initFontAwesome";

import { useState, createContext, useContext } from "react";

initFontAwesome();

export const UserContext = createContext();

const App = () => {
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [searching, setSearching] = useState("");
  const [searchingSeries, setSearchingSeries] = useState("");

  return (
    <UserContext.Provider
      value={{
        page,
        setPage,
        offset,
        setOffset,
        searching,
        setSearching,
        searchingSeries,
        setSearchingSeries,
      }}
    >
      <AppRouter />
    </UserContext.Provider>
  );
};

export default App;
