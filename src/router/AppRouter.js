import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../components/Main";
import SearchBar from "../components/SearchBar";
import TableMarvel from "../components/TableMarvel";
import history from "../utils/history";
import NavBar from "../components/NavBar";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Profile from "../components/Profile";
import TableMarvelSeries from "../components/TableMarvelSeries";

const AppRouter = () => {
  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column ">
        <NavBar />
        {/* <Container className="flex-grow-1 mt-5"> */}
        <Main />
        <Switch>
          <Route path="/profile" component={Profile} />

          <Route path="/table" component={TableMarvel} />
          <Route path="/series" component={TableMarvelSeries} />
          <Route path="/search" component={SearchBar} />
        </Switch>
        {/* </Container> */}
        {/* <AppRouter /> */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default AppRouter;
