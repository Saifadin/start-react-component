const appConf = require("rc")("src", {
  srcPath: "src",
  stylesType: "emotion",
  componentType: "functional",
  graphql: false
});

module.exports = appConf;
