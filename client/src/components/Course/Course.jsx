import React from "react";
import Text from "../Text";
import { themed } from "../../HOC/themed";

const Course = props => {
  const { classes, title, price, description } = props;
  return (
    <div className={classes.root}>
      <Text variant="h3">{title}</Text>
      <Text>{description}</Text>
      <div className={classes.image} />
      <button>Learn more</button>
    </div>
  );
};

export default themed("components.Course", Course);
