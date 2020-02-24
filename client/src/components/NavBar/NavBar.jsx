import React from "react";
import { themed } from "../../HOC/themed";
import Text from "../Text";

const NavBar = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div>
        <Text variant="h1">SiclivCourses</Text>
      </div>
      <div className={classes.linksContainer}>
        <Text>Home</Text>
        <Text>Courses</Text>
        <Text>Home</Text>
      </div>
    </div>
  );
};

export default themed("components.NavBar", NavBar);
