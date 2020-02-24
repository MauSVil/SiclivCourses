import React from "react";
import { themed } from "../../HOC/themed";

const Text = props => {
  const { variant, children, classes, className: classNameProp } = props;

  const getText = () => {
    switch (variant) {
      case "h1":
        return <h1 className={`${classNameProp} ${classes.h1}`}>{children}</h1>;
      case "h2":
        return <h2 className={`${classNameProp} ${classes.h2}`}>{children}</h2>;
      case "h3":
        return <h3 className={`${classNameProp} ${classes.h3}`}>{children}</h3>;
      default:
        return <p className={`${classNameProp} ${classes.p}`}>{children}</p>;
    }
  };
  return getText();
};

export default themed("components.Text", Text);
