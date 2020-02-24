import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Home } from "./views";
import { themed } from "./HOC/themed";

const AppRoutes = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
};

export default themed("app.app", AppRoutes);
