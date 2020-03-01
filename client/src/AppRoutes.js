import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Home, Courses } from "./views";
import { themed } from "./HOC/themed";

const AppRoutes = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default themed("app.app", AppRoutes);
