import React from "react";
import { themed } from "../HOC/themed";
import Text from "../components/Text";

const Home = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.mainContainer} />
      <div className={classes.firstSection}>
        <Text variant="h2">Top 3 Frameworks</Text>
        <div className={classes.frameworks}>
          <div className={classes.language1} />
          <div className={classes.language2} />
          <div className={classes.language3} />
        </div>
      </div>
      <div className={classes.responsiveContainer}>
        <div className={classes.responsiveImage} />
        <div className={classes.textContainer}>
          Esta es una pagina responsive, podras ver tus cursos en cualquier
          dispositivo de tu preferencia
        </div>
      </div>
    </div>
  );
};

export default themed("views.Home", Home);
