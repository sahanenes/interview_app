import { Router, Routes, Route } from "react-router-dom";
import Main from "../components/Main";
import SearchBar from "../components/SearchBar";
import TableMarvel from "../components/TableMarvel";
import history from "../utils/history";
import NavBar from "../components/NavBar";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Profile from "../components/Profile";
import TableMarvelSeries from "../components/TableMarvelSeries";
import SearchBarSeries from "../components/SearchBarSeries";
import Footer from "../components/Footer";
import Home from "../views/Home";
import ExternalApi from "../views/ExternalApi";
import Loading from "../components/Loading";
import { useAuth0 } from "@auth0/auth0-react";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  const { isLoading, error, user } = useAuth0();

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
        <Main />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/external-api" component={ExternalApi} />
          {/* <Route path='marvel' component={PrivateRouter}></Route> */}
          <PrivateRouter path="/table" component={TableMarvel} />
          <PrivateRouter path="/series" component={TableMarvelSeries} />
          <PrivateRouter path="/searchcharacters" component={SearchBar} />
          <PrivateRouter path="/searchseries" component={SearchBarSeries} />
        </Switch>
        {/* </Container> */}
        {/* <AppRouter /> */}
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
