import React from "react";
import { themed } from "../../HOC/themed";
import Text from "../Text";

const Footer = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <Text>Home</Text>
        <Text>Home</Text>
        <Text>Home</Text>
        <Text>Home</Text>
      </div>
      <div className={classes.row}>
        <Text>Home</Text>
        <Text>Home</Text>
        <Text>Home</Text>
      </div>
      <div className={classes.row}>
        <Text>Home</Text>
        <Text>Home</Text>
      </div>
      <div className={classes.row}>
        <Text>Home</Text>
      </div>
    </div>
  );
};

export default themed("components.Footer", Footer);
