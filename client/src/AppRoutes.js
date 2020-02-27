import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Home } from "./views";
import { themed } from "./HOC/themed";

const AppRoutes = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <NavBar />
      <Router>
        <Switch>
          <Route path="/courses">
            <div>Hola</div>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default themed("app.app", AppRoutes);
