import _ from "lodash";

const vars = {
  root: {
    padding_xlarge: "15px 320px"
  }
};

export default ({ screenSize }) => ({
  root: {
    background: "#f1f1f1",
    padding: _.get(vars, `root.padding_${screenSize}`, "15px 50px")
  }
});
