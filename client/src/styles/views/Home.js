import mainArea from "../../img/mainArea.jpg";
import react from "../../img/react.png";
import ruby from "../../img/ruby.png";
import node from "../../img/node.png";
import responsive from "../../img/responsive.png";

export default {
  root: {
    width: "100%",
    minHeight: "100vh"
  },
  mainContainer: {
    height: 600,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${mainArea})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  text: {
    position: "absolute",
    top: 120
  },
  firstSection: {
    height: 400,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    background: "lightcyan",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  frameworks: {
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%"
  },
  img: {
    width: 100,
    height: 100,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  language1: {
    extend: "img",
    backgroundImage: `url(${react})`
  },
  language2: {
    extend: "img",
    width: 80,
    height: 80,
    backgroundImage: `url(${ruby})`
  },
  language3: {
    extend: "img",
    backgroundImage: `url(${node})`
  },
  responsiveContainer: {
    height: 400,
    display: "flex",
    background: "lightsteelblue"
  },
  responsiveImage: {
    extend: "img",
    width: "50%",
    height: "100%",
    backgroundImage: `url(${responsive})`
  },
  textContainer: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
    boxSizing: "border-box",
    textAlign: "center"
  }
};
