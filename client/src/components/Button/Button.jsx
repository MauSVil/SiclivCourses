import React from "react";
import { themed } from "../../HOC/themed";

const Button = props => {
  const { children, classes } = props;
  return <button className={classes.root}>{children}</button>;
};

export default themed("components.Button", Button);
