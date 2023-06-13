import React from "react";
// import { Router, Route, Switch } from "react-router-dom";
// import { Container } from "reactstrap";

import Loading from "./components/Loading";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
// import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
// import history from "./utils/history";
import AppRouter from "./router/AppRouter";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
// import Main from "./components/Main";

// import TableMarvel from "./components/TableMarvel";
// import SearchBar from "./components/SearchBar";
initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return <AppRouter />;
};

export default App;
