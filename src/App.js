import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
import Main from "./components/Main";
initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column ">
        <NavBar />
        {/* <Container className="flex-grow-1 mt-5"> */}
        <Switch>
          <Route path="/profile" component={Profile} />
        </Switch>
        {/* </Container> */}
        <Main />
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;