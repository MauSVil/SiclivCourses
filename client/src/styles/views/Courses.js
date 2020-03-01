import _ from "lodash";

import react from "../../img/react.png";
import node from "../../img/node.png";
import ruby from "../../img/ruby.png";
import golang from "../../img/golang.png";
import JS from "../../img/JS.png";
import html from "../../img/html.png";
import css from "../../img/css.png";
import python from "../../img/python.png";

const vars = {
  coursesGrid: {
    gridTemplateColumns_xlarge: "1fr 1fr 1fr 1fr"
  }
};

export default ({ screenSize }) => ({
  root: {
    minHeight: "100vh"
  },
  frameworks: {
    height: 300
  },
  coursesGrid: {
    backgroundColor: "#e6e6e61c",
    display: "grid",
    gridTemplateColumns: _.get(
      vars,
      `coursesGrid.gridTemplateColumns_${screenSize}`,
      "1fr 1fr 1fr"
    ),
    padding: 70,
    boxSizing: "border-box",
    gridRowGap: 40,
    gridColumnGap: 50
  },
  course: {
    height: "100%",
    background: "red"
  },
  container: {
    display: "flex",
    overflow: "hidden",
    background: "linear-gradient(145deg, #ffffff, #e6e6e6)",
    boxShadow: "5px 5px 16px #e3e3e3, -5px -5px 16px #ffffff",
    boxSizing: "border-box",
    alignItems: "center",
    borderRadius: 20,
    height: 250
  },
  wrapper: {
    display: "flex"
  },
  slide: {
    height: 400,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  image: {
    cursor: "pointer",
    width: 100,
    height: 100,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  },
  reactCourse: {
    extend: "image",
    backgroundImage: `url(${react})`
  },
  rubyCourse: {
    extend: "image",
    backgroundImage: `url(${ruby})`
  },
  goCourse: {
    extend: "image",
    backgroundImage: `url(${golang})`
  },
  JSCourse: {
    extend: "image",
    backgroundImage: `url(${JS})`
  },
  htmlCourse: {
    extend: "image",
    backgroundImage: `url(${html})`
  },
  cssCourse: {
    extend: "image",
    backgroundImage: `url(${css})`
  },
  otherCourse: {
    extend: "image",
    backgroundImage: `url(${react})`
  },
  nodeCourse: {
    extend: "image",
    backgroundImage: `url(${node})`
  },
  pythonCourse: {
    extend: "image",
    backgroundImage: `url(${python})`
  }
});
