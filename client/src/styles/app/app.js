import _ from "lodash";

const vars = {
  root: {
    padding_xlarge: "15px 320px"
  }
};

export default ({ screenSize }) => ({
  root: {
    padding: _.get(vars, `root.padding_${screenSize}`, "15px 50px")
  }
});
