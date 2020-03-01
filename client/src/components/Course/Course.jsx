import React from "react";
import Text from "../Text";
import { themed } from "../../HOC/themed";
import Button from "../Button";

const Course = props => {
  const { classes, title, price, description } = props;
  return (
    <div className={classes.root}>
      <Text variant="h3">{title}</Text>
      <Text>{description}</Text>
      <div className={classes.image} />
      <Button>
        <Text>Learn More</Text>
      </Button>
    </div>
  );
};

export default themed("components.Course", Course);
