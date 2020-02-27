import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { themed } from "../../HOC/themed";
import Text from "../Text";

const NavBar = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Router>
        <div>
          <Text variant="h1">SiclivCourses</Text>
        </div>
        <div className={classes.linksContainer}>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link>Home</Link>
        </div>
      </Router>
    </div>
  );
};

export default themed("components.NavBar", NavBar);
