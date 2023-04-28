const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");

module.exports = merge.merge(baseConfig, {
  mode: "development",
});
